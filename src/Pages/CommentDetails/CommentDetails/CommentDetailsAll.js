import React from 'react';

const CommentDetailsAll = ({ comment }) => {
    return (
        <div className=''>
            
            <div className="chat chat-start">
                
                <div className="chat-image avatar">
                    
                    <div className="w-10 rounded-full">
                        
                        <img src={comment.profilePic} />
                    </div>
                </div>
               
                <div className="">{comment.comments}</div>
            </div>

        </div>
    );
};

export default CommentDetailsAll;