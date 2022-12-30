import React, { useEffect, useState } from 'react';

import MediaPoster from './MediaPoster';

const MediaPost = () => {
  const [uploads, setUploads] = useState([])
 
  useEffect(() => {
    fetch('https://end-game-assianment-server-1.vercel.app/upload')
      .then(res => res.json())
      .then(data => setUploads(data))
  })

  // const likePost = (id) => {
  //   fetch(`https://end-game-assianment-server-1.vercel.app/upload/${id}`, {
  //     method: "PATCH",

  //     body: JSON.stringify(like)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       toast.success('like successfully')
  //     })
  // }



  return (
    <div className='my-10'>
      <div className='grid gap-8 justify-center'>
        {
          uploads?.map(upload => <MediaPoster key={upload._id} upload={upload}></MediaPoster>)
        }
        </div>
        </div>
  );
};

export default MediaPost;