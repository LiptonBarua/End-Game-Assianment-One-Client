import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Uploading = () => {
    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const{user} = useContext(AuthContext)
    const imgHostKey = process.env.REACT_APP_imgbb_key;
    const date = new Date();

    const handleAddPost= data => {

        const image = data.image[0]
        console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const uri = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {

                    const file = {
                        text: data?.text,
                        image: imageData.data.url,
                        name: user?.displayName,
                        profilePic:user?.photoURL,
                        date 
                    
                    }
                    fetch('https://end-game-assianment-server-1.vercel.app/upload', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                           
                        },
                        body: JSON.stringify(file)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success('Post in Successfully');
                            reset()
                        })
                        .catch(error => {
                            console.log(error.message)
                        })
                }
            })
    }
    return (
        <div>

                <div className=' p-7'>
                    <form onSubmit={handleSubmit(handleAddPost)}>


                    <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Text</span></label>
                            <input placeholder='Add to your post' required type="text" {...register("text", { required: 'Name is Required' })} className="input input-bordered w-full " />
                            {errors.name && <p role="alert" className='text-red-500'>{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full ">
                            <label className="label"><span className="label-text">Photo</span></label>
                            <input type="file" required {...register("image", { required: 'Name is Required' })} className="input input-bordered w-full " />
                            {errors.image && <p role="alert" className='text-red-500'>{errors.image?.message}</p>}
                        </div>
                        <input className='w-full btn bg-black text-white mt-5' value='Post' type="submit" />
                    </form>

                </div>
            </div>

    );
};

export default Uploading;