import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CommentDetailsAll from './CommentDetailsAll';

const CommentDetails = () => {
    const commentDetails = useLoaderData()
    return (
        <div className='md:max-w-[70%] mx-auto my-16 shadow-lg bg-slate-200'>
            <div className="card lg:card-side  shadow-xl">
                <img src={commentDetails.image} alt="" className="object-cover object-center w-[500px] h-[500px] dark:bg-gray-500" />
                <div className="card-body">
                    <div className="flex space-x-4">
                        <img alt="" src={commentDetails.profilePic} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                        <div className="flex flex-col space-y-1 mb-10">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{commentDetails.name}</a>
                            <span className="text-xs dark:text-gray-400">{commentDetails.date}</span>
                        </div>
                        <h1 className='divider'></h1>
                    </div>
                    <p>
                        {
                            commentDetails.comment?.map(comment => <CommentDetailsAll key={comment._id} comment={comment}></CommentDetailsAll>)
                        }
                    </p>

                </div>
            </div>
        </div>
    );
};

export default CommentDetails;