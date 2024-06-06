import { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutsContext';

export const useWorkoutsContext = () => {
	const context = useContext(WorkoutContext);

	if (!context) {
		throw Error('useAuthContext must be used inside an AuthContext');
	}

	return context;
};
