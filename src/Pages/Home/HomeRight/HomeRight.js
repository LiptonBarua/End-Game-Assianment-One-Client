import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const HomeRight = () => {
	const{user} = useContext(AuthContext)
    return (
        <div>
          <div className="container flex flex-col w-96 max-w-lg p-6 mx-auto rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={user?.photoURL} alt="" className="object-cover w-14 h-14 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="text-sm">{user?.displayName}</h4>
				<span className="text-xs text-gray-500">2 days ago</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
		
			<span className="text-info text-sm font-semibold">Switch</span>
		</div>
	</div>
	<div className="flex justify-between px-4">
		<div className="flex space-x-0">
			<div>
				{/* <img src={user?.photoURL} alt="" className="object-cover w-10 h-10 rounded-full dark:bg-gray-500" /> */}
			</div>
			<div>
				<h4 className="text-bold text-gray-500">Suggestions For You</h4>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
		
			<span className="text-bolder text-sm text-gray-600">See All</span>
		</div>
	</div>
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={user?.photoURL} alt="" className="object-cover w-10 h-10 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="text-sm">{user?.displayName}</h4>
				<span className="text-xs dark:text-gray-400">Followed</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
		
			<span className="text-info text-sm font-semibold">Follow</span>
		</div>
	</div>
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={user?.photoURL} alt="" className="object-cover w-10 h-10 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="text-sm">{user?.displayName}</h4>
				<span className="text-xs dark:text-gray-400">Followed</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-500">
		
			<span className="text-info text-sm font-semibold">Follow</span>
		</div>
	</div>

</div>
        </div>
    );
};

export default HomeRight;