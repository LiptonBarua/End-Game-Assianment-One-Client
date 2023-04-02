import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { IoIosHeart } from "react-icons/io";


const PostImages = ({ upload }) => {
  const { user } = useContext(AuthContext);
  const [likes, setLikes] = useState(0);
  // const [unLikes, setUnLikes] = useState(0);


  const { _id, name, image, profilePic, date, text, liked } = upload;


  const { data: comments = [], refetch } = useQuery({
    queryKey: ['comment'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/comment')
      const data = await res.json()
      return data;
    }
  })


  const commentFilter = comments.filter((comment) => comment.uploadId === _id)

  const handleComment = (event) => {
    event.preventDefault();
    const form = event.target;
    const comments = form.comment.value;

    const comment = {
      comments,
      profilePic: user?.photoURL,
      name: user?.displayName,
      uploadId: _id
    }

    fetch('http://localhost:5000/comment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("comment successfully");
        form.reset()
        refetch()
      })
  }




  const likeHandler = () => {

    let like = likes

    let likedUser = user?.displayName

    fetch(`http://localhost:5000/like/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify({ like, likedUser })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("like successfully")
      })

  }
  const unLikeHandler = () => {

    let like = likes

    let likedUser = user?.displayName

    fetch(`http://localhost:5000/unLike/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify({ like, likedUser })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast.success("unLike successfully")
      })

  }
  return (
    <div>
      <div className="rounded-md shadow-md border border-gray-300 dark:text-gray-100">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                <img src={profilePic} alt="" className="object-cover w-full w-12 h-12 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
              </div>
            </div>


            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">{name}</h2>

            </div>
          </div>
          <button title="Open options" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
              <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
              <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
              <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
            </svg>
          </button>
        </div>

        <figure><img src={image} className='w-full h-[530px]' alt="" /></figure>
        {/* <img src={image} alt="" className="object-cover object-center w-[500px]  dark:bg-gray-500" /> */}
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* <button onClick={likeHandler} type="button" title="Like post" className="flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
						<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
					</svg>
				</button> */}
              <button onClick={likeHandler}><IoIosHeart className='w-5 h-5 text-red-600'></IoIosHeart></button>


              <button onClick={unLikeHandler} type="button" title="Like post" className="flex items-center  justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
              </button>


              {/* <button onClick={likeHandler} type="button" title="Like post" className="flex items-center  justify-center">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/hand-gestures/like-icon.png" className='w-5 h-5' alt="" />
              </button> */}


              <Link to={`/comment/${_id}`}><button type="button" title="Add a comment" className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                  <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                </svg>
              </button></Link>

              <button type="button" title="Share post" className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                  <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                </svg>
              </button>
            </div>
            <button type="button" title="Bookmark post" className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800" src="https://source.unsplash.com/40x40/?portrait?3" />
              </div>
              <span className="text-sm">Liked by
                <span className="font-semibold ml-1">{liked}</span>
              </span>
            </div>
          </div>

          <p className=" mb-2">
            <span className="text-base font-semibold mr-1">{name}</span>{text}
          </p>
          <div className="space-y-3">


            <Link to={`/comment/${_id}`}><p className="text-sm font-semibold text-slate-500">View all {commentFilter?.length} comments </p></Link>
            <span className="inline-block text-xs leading-none text-slate-500"> <p>{moment(date).fromNow()}</p></span>

            <form onSubmit={handleComment}>
              <div className="flex border w-full h-10">
                <span className="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
                </span>
                <input type="text" name="comment" placeholder="Add a comment..." className="flex flex-1 sm:text-sm rounded-r-md border-none focus:ring-inset" />
                <button className='text-info text-sm pr-2 font-semibold'>Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostImages;