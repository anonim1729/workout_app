import { useEffect, useState } from 'react';
import WorkoutForm from './WorkoutForm';
import Workouts from './Workouts';
import { useAuthContext } from '../hooks/useAuthContext';

const Content = () => {
	const [workouts, setWorkouts] = useState([]);
	const { user } = useAuthContext();
	return (

		<div>
			{user ?
				<div className='flex flex-wrap min-h-[80vh]'>
					<div className='w-full md:w-1/2 p-4'>
						<Workouts workouts={workouts} />
					</div>
					<div className='w-full md:w-1/2 p-4'>
						<WorkoutForm />
					</div>
				</div> :
				<p className='text-3xl text-red-500 min-h-[80vh] flex justify-center items-center'>Please Login to continue</p>
			}
		</div>
	);
};

export default Content;
