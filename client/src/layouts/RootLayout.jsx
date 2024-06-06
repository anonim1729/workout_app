import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuthContext } from '../hooks/useAuthContext';

const RootLayout = () => {
	return (
		<div className='bg-gray-800 flex flex-col min-h-screen w-full overflow-x-hidden'>
			<Navbar />
			<Outlet className='flex-grow' />
			<Footer />
		</div>
	);
};
export default RootLayout;
