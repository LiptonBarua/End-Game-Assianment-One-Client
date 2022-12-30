
import React, { useEffect, useState } from 'react';
import PostImages from './PostImages';

const PostImage = () => {

 
    const[uploads, setUploads] =useState([])
    useEffect(()=>{
        fetch('https://end-game-assianment-server-1.vercel.app/upload')
        .then(res=>res.json())
        .then(data=>setUploads(data))
    })

    
    return (
        <div className='my-10'>
            <div className='grid gap-8 justify-center'>
                {
                    uploads?.map(upload=><PostImages key={upload._id} upload={upload}></PostImages>)
                }
            </div>
        </div>
    );
};

export default PostImage;