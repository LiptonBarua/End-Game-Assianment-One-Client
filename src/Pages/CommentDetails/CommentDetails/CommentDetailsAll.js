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
                <p className="text-sm">
                    <span className="text-base font-semibold mr-1">{comment.name}</span>{comment.comments}
                  </p>
               
            </div>

        </div>
    );
};

export default CommentDetailsAll;