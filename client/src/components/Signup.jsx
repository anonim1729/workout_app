import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';
import eye from '../assets/eye.svg';
import eyeBlock from '../assets/eyeBlock.svg';
import { Link } from 'react-router-dom';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [passvisi, setPassvisi] = useState('password');
	const [confirmPassvisi, setConfirmPassvisi] = useState('password');
	const { signup, error, isLoading, setError } = useSignup();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password, passwordConfirm);
		if (password !== passwordConfirm) {
			return setError('Passwords do not match');
		}
		await signup(email, password);
		setEmail('');
		setPassword('');
		setPasswordConfirm('');
		navigate('/');
	};

	return (
		<div className='flex justify-center items-center min-h-[80vh] bg-gray-800'>
			<div className='bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md'>
				<h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
				{error && !isLoading && <p className='mb-4 text-red-500'>{error}</p>}
				{!error && isLoading && (
					<p className='mb-4 text-green-500'>Signing up...</p>
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
					<div className='relative mb-4'>
						<label
							htmlFor='passwordConfirm'
							className='block text-sm font-medium mb-2'
						>
							Confirm Password
						</label>
						<div className='relative w-full'>
							<input
								type={confirmPassvisi}
								id='passwordConfirm'
								value={passwordConfirm}
								onChange={(e) => setPasswordConfirm(e.target.value)}
								className='w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 pr-10'
								required
							/>
							<img
								src={confirmPassvisi === 'text' ? eye : eyeBlock}
								alt='toggle password visibility'
								className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
								width={20}
								onClick={() => {
									setConfirmPassvisi((prev) =>
										prev === 'text' ? 'password' : 'text'
									);
								}}
							/>
						</div>
					</div>
					<button
						type='submit'
						className='w-full py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold mt-5'
					>
						Register
					</button>
					<p className='text-center mt-3'>already registered? <Link to='/login' className='text-blue-500'>login</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Signup;
