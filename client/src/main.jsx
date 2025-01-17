import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { WorkoutProvider } from './context/WorkoutsContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<WorkoutProvider>
				<App />
			</WorkoutProvider>
		</AuthProvider>
	</React.StrictMode>
);
