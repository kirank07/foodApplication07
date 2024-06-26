<<<<<<< HEAD
const Footer = () => {
    return(
      <footer className="bg-gray-800 text-gray-200 py-4 fixed bottom-0 w-full">
        <div className="container mx-auto flex justify-center">
          <p className="text-sm">
            Made with 🧡 
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
    </footer>
    );
};

export default Footer;
=======
import { useContext } from 'react';
import UserContext from '../utils/UserContext';
const Footer = () => {
	const { user } = useContext(UserContext);
	return (
		<footer className='bg-gray-800 text-gray-200 py-4 fixed bottom-0 w-full'>
			<div className='container mx-auto flex justify-center'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} Your Company. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
