import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Content from './components/Content';
import Login from './components/Login';
import Signup from './components/Signup';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Content />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <Signup />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
