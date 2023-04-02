import React from 'react';
import HomeRight from '../HomeRight/HomeRight';
import PostImage from '../PostImage/PostImage';

const Home = () => {
    return (
      <div className='md:max-w-[65%] mx-auto'>
              <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
            <PostImage></PostImage>
            </div>
            <div className='hidden md:block md:ml-10'>
                <HomeRight></HomeRight>
            </div>
          
        </div>
      </div>
    );
};

export default Home;