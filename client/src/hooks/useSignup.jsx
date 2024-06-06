import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const signup = async (email, password) => {
		setIsLoading(true);
		setError(null);
		console.log(email, password);
		const response = await fetch('http://localhost:3000/api/user/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}

		if (response.ok) {
			// save the user to localStorage
			localStorage.setItem('user', JSON.stringify(json));

			// updateAuthContext
			dispatch({ type: 'SIGNUP', payload: json });

			setIsLoading(false);
		}
	};

	return { signup, isLoading, error, setError };
};
