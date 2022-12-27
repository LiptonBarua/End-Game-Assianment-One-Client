import React from 'react';
import moment from 'moment';

const PostImages = ({upload}) => {
    const{photoURL, name, image, profilePic, date, text} = upload;
    return (
        <div>
            <div className="card w-96 shadow-2xl">
  <div className="card-body">
  <div className="flex">
  <div className="w-10 rounded-full mr-5">
    <img src={profilePic} alt="" />
    </div>
     <div>
     <h1 className='text-primary text-bold'>{name}</h1>
      <p>{moment(date).startOf('day').fromNow()}</p>
     </div>
    </div>
    <p>{text}</p>
  </div>
  <figure><img src={image} alt="Shoes" /></figure>
</div>
        </div>
    );
};

export default PostImages;