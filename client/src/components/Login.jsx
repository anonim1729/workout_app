import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../assets/eye.svg';
import eyeBlock from '../assets/eyeBlock.svg';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passvisi, setPassvisi] = useState('password');
	const { login, isLoading, error, setError } = useLogin();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(email, password);
		setEmail('');
		setPassword('');
		navigate('/');
	};

	return (
		<div className='flex justify-center items-center min-h-[80vh] bg-gray-800'>
			<div className='bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
				{error && !isLoading && <p className='mb-4 text-red-500'>{error}</p>}
				{!error && isLoading && (
					<p className='mb-4 text-green-500'>Signing in...</p>
				)}
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-sm font-medium mb-2'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className='w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500'
							required
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='password'
							className='block text-sm font-medium mb-2'
						>
							Password
						</label>
						<div className='relative w-full'>
							<input
								type={passvisi}
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 pr-10'
								required
							/>
							<img
								src={passvisi === 'text' ? eye : eyeBlock}
								alt='toggle password visibility'
								className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
								width={20}
								onClick={() => {
									setPassvisi((prev) =>
										prev === 'text' ? 'password' : 'text'
									);
								}}
							/>
						</div>
					</div>
					<button
						type='submit'
						className='w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold mt-5'
						disabled={isLoading}
					>
						Log In
					</button>
					<p className='text-center mt-3'>new? <Link to='/signup' className='text-blue-500'>signup</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Login;
