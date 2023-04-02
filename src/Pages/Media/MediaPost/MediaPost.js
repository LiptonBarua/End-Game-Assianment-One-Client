import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import MediaPoster from './MediaPoster';

const MediaPost = () => {
  const [uploads, setUploads] = useState([])
 
  useEffect(() => {
    fetch('http://localhost:5000/upload')
      .then(res => res.json())
      .then(data => setUploads(data))
  })





  return (
    <div className='my-10'>
      <Link> <div  className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        {
          uploads?.map(upload => <MediaPoster key={upload._id} upload={upload}></MediaPoster>)
        }
        </div></Link>
        </div>
  );
};

export default MediaPost;