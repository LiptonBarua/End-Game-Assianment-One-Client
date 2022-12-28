import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../Loading/Loading/Loading';
import PostImages from './PostImages';

const PostImage = () => {
    // const{data:uploads, refetch, isLoading=[]}= useQuery({
    //     queryKey: ['upload'],
    //     queryFn: async()=>{
    //      const res= await fetch('http://localhost:5000/upload')
    //      const data = await res.json();
    //      console.log(data)
    //      return(data)
        
    //     }
    // })

    // if(isLoading){
    //     return <Loading></Loading>
    // }
 
    const[uploads, setUploads] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/upload')
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