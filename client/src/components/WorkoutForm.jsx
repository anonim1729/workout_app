import React, { useContext, useReducer } from 'react';
import { WorkoutContext } from '../context/WorkoutsContext';

const reducer = (state, action) => {
	switch (action.type) {
		case 'TITLE_CHANGE':
			return { ...state, title: action.payload };
		case 'LOAD_CHANGE':
			return { ...state, load: action.payload };
		case 'REPS_CHANGE':
			return { ...state, reps: action.payload };
		case 'RESET_FORM':
			return { title: '', load: '', reps: '' };
		default:
			return state;
	}
};

const WorkoutForm = () => {
	const { addWorkout } = useContext(WorkoutContext);
	const [state, dispatch] = useReducer(reducer, {
		title: '',
		load: '',
		reps: '',
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				addWorkout(state);
				dispatch({ type: 'RESET_FORM' });
			}}
			className='bg-gray-900 text-white p-8 rounded shadow-lg w-full max-w-md mx-auto my-4'
		>
			<h2 className='text-2xl font-bold mb-4'>Add a New Workout</h2>
			<div className='mb-4'>
				<label
					htmlFor='title'
					className='block text-sm font-medium text-gray-400'
				>
					Exercise Title
				</label>
				<input
					type='text'
					id='title'
					name='title'
					value={state.title}
					title='title is required'
					onChange={(e) => {
						dispatch({ type: 'TITLE_CHANGE', payload: e.target.value });
					}}
					className='mt-1 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='load'
					className='block text-sm font-medium text-gray-400'
				>
					Load (in Kg)
				</label>
				<input
					type='number'
					id='load'
					name='load'
					value={state.load}
					title='load is required'
					onChange={(e) => {
						dispatch({ type: 'LOAD_CHANGE', payload: e.target.value });
					}}
					className='mt-1 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded'
					required
				/>
			</div>
			<div className='mb-4'>
				<label
					htmlFor='reps'
					className='block text-sm font-medium text-gray-400'
				>
					Number of Reps
				</label>
				<input
					type='number'
					id='reps'
					name='reps'
					value={state.reps}
					title='reps is required'
					onChange={(e) => {
						dispatch({ type: 'REPS_CHANGE', payload: e.target.value });
					}}
					className='mt-1 p-2 w-full bg-gray-800 text-white border border-gray-700 rounded'
					required
				/>
			</div>
			<button
				type='submit'
				className='bg-blue-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded'
			>
				Add Workout
			</button>
		</form>
	);
};

export default WorkoutForm;
