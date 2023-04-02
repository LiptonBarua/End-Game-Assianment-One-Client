import React, { useState } from 'react';
import moment from 'moment';
import { IoIosHeart, IoIosText} from "react-icons/io";
import { Link } from 'react-router-dom';

const MediaPoster = ({upload}) => {
  const [like, setLike] = useState(false);
    const {_id, name, image, profilePic, date, text } = upload;


    const likeHandler = () => {

      setLike(true)
      // setLike(isLike ? like-1 : like+1);
    }

    return (
        <div>
           
          <section className="">
	<div className='card'>
		<Link to={`/comment/${_id}`}><figure><img src={image}alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" /></figure></Link>
    <div className="card-body flex items-center text-white ">
    <div className="flex items-center space-x-3 -mt-48">
				<button type="button" title="Like post" className="flex items-center justify-center">
       <IoIosHeart className="w-6 h-6 fill-current"></IoIosHeart>
				</button>
				<button type="button" title="Add a comment" className="flex items-center justify-center">
          <IoIosText className="text-white w-6 h-6 fill-current"></IoIosText>
				</button>
        </div>
  </div>
	</div>
</section>
      </div>

    );
};

export default MediaPoster;