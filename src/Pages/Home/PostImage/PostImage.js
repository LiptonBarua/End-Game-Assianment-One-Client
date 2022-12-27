import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import PostImages from './PostImages';

const PostImage = () => {
    const{data:uploads=[]}= useQuery({
        queryKey: ['upload'],
        queryFn: async()=>{
         const res= await fetch('http://localhost:5000/upload')
         const data = await res.json();
         return(data)
        }
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