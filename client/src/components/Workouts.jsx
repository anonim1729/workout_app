import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutsContext';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Workouts = () => {
	const context = useWorkoutsContext();
	const { state, deleteWorkout } = context;
	const workouts = state.workouts;
	if (!workouts || workouts.length === 0) {
		return (
			<div className='text-center text-white mt-4'>No workouts available</div>
		);
	}

	return (
		<div className='container mx-auto p-4'>
			<h2 className='text-2xl font-bold text-white mb-4'>Workout List</h2>
			{[...workouts].reverse().map((workout) => (
				<div
					key={workout._id}
					className='bg-gray-900 text-white p-4 mb-4 rounded shadow-lg relative'
				>
					<h3 className='text-xl font-bold text-green-600'>{workout.title}</h3>
					<p>Load: {workout.load} Kg</p>
					<p>Reps: {workout.reps}</p>
					<p>Created at: {new Date(workout.createdAt).toLocaleDateString()}</p>
					<p>Last updated: {new Date(workout.updatedAt).toLocaleString()}</p>

					<button
						onClick={() => deleteWorkout(workout._id)}
						className='absolute top-4 right-4 text-white hover:text-red-700 '
					>
						<FontAwesomeIcon
							icon={faTrash}
							className='w-6 h-6'
						/>
					</button>
				</div>
			))}
		</div>
	);
};

export default Workouts;
