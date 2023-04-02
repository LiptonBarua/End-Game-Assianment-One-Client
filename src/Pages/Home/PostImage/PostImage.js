
import React, { useEffect, useState } from 'react';
import PostImages from './PostImages';

const PostImage = () => {

    const[uploads, setUploads] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/upload')
        .then(res=>res.json())
        .then(data=>setUploads(data))
    })

    
    return (
        <div className='my-10'>
            <div className='grid gap-8 mx-4 md:mx-0 w-[110%]'>
                {
                    uploads?.map(upload=><PostImages key={upload._id} upload={upload}></PostImages>)
                }
            </div>
        </div>
    );
};

export default PostImage;