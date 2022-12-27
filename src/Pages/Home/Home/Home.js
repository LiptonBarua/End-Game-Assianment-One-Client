import React from 'react';
import PostImage from '../PostImage/PostImage';
import Uploading from '../Uploading/Uploading';

const Home = () => {
    return (
        <div>
            <Uploading></Uploading>
            <PostImage></PostImage>
        </div>
    );
};

export default Home;