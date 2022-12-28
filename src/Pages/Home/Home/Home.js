import React from 'react';
import PostImage from '../PostImage/PostImage';
import Uploading from '../Uploading/Uploading';

const Home = () => {
    return (
        <div className="max-w-[80%] mx-auto">
            <Uploading></Uploading>
            <PostImage></PostImage>
        </div>
    );
};

export default Home;