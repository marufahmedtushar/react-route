import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../../components/User/User';
const Users = () => {
	const users = useLoaderData();
	return (
		<div>
			<h3>This is from User </h3>
			{
				users.map(user => <User 
					key={user.id}
					user={user}

				></User>)
			}
		</div>
	)
}

export default Users