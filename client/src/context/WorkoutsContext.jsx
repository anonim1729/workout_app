import React, { createContext, useEffect, useReducer } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

export const WorkoutContext = createContext();

export const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_WORKOUTS':
			return { workouts: action.payload };
		case 'CREATE_WORKOUT':
			return { workouts: [action.payload, ...state.workouts] };
		default:
			return state;
	}
};

export const WorkoutProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, { workouts: [] });
	const { user } = useAuthContext();
	// console.log(user);

	const fetchWorkouts = async () => {
		// console.log(user.token);
		if (!user || !user.token) {
			console.error('User is not authenticated');
			return;
		}
		// console.log('hehehe');
		try {
			const response = await fetch('http://localhost:3000/api/workouts', {
				headers: {
					'authorization': `Bearer ${user.token}`,
				},
			});
			const data = await response.json();
			dispatch({ type: 'SET_WORKOUTS', payload: data.data });
		} catch (err) {
			console.error('Error fetching workouts:', err);
		}
	};

	useEffect(() => {
		if (user) {
			fetchWorkouts();
		}
	}, [user]);

	const addWorkout = async (formData) => {
		if (!user || !user.token) {
			console.error('User is not authenticated');
			return;
		}

		try {
			const response = await fetch('http://localhost:3000/api/workouts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'authorization': `Bearer ${user.token}`,
				},
				body: JSON.stringify(formData),
			});
			const result = await response.json();
			fetchWorkouts();
			console.log(result);
		} catch (err) {
			console.error('Error adding workout:', err);
		}
	};

	const deleteWorkout = async (id) => {
		if (!user || !user.token) {
			console.error('User is not authenticated');
			return;
		}

		try {
			await fetch(`http://localhost:3000/api/workouts/${id}`, {
				method: 'DELETE',
				headers: {
					'authorization': `Bearer ${user.token}`,
				},
			});
			fetchWorkouts();
		} catch (err) {
			console.error('Error deleting workout:', err);
		}
	};

	return (
		<WorkoutContext.Provider
			value={{ state, dispatch, deleteWorkout, addWorkout }}
		>
			{children}
		</WorkoutContext.Provider>
	);
};
