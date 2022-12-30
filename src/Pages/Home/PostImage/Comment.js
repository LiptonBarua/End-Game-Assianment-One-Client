import React from 'react';

const Comment = ({comment}) => {
    const{profilePic, comments} =comment;
    return (
        <div>
            <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src={profilePic} />
    </div>
  </div>
  <div className="">{comments}</div>
</div>


        </div>
    );
};

export default Comment;