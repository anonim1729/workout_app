import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	return (
		<nav className='bg-gray-900 text-white p-4 shadow-lg w-full flex items-center justify-between h-[10vh] top-0'>
			<div className='container mx-auto flex items-center'>
				<Link
					to='/'
					className='text-2xl font-bold text-amber-500'
				>
					Workout Buddy
				</Link>
			</div>
			{user ? (
				<>
					<p className='text-white text-lg hover:text-white p-2 hover:bg-gray-800 hover:rounded transition duration-300 ease-in-out mx-2 cursor-pointer'>
						{user.email.slice(0, user.email.indexOf('@'))}
					</p>
					<button
						onClick={logout}
						className='text-white text-lg hover:text-white p-2 hover:bg-gray-800 hover:rounded transition duration-300 ease-in-out'
					>
						Logout
					</button>
				</>
			) : (
				<div className='flex space-x-4'>
					<Link
						to='/login'
						className='text-white text-lg hover:text-white p-2 hover:bg-gray-800 hover:rounded transition duration-300 ease-in-out'
					>
						Login
					</Link>
					<Link
						to='/signup'
						className='text-white text-lg hover:text-white p-2 hover:bg-gray-800 hover:rounded transition duration-300 ease-in-out'
					>
						Signup
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
