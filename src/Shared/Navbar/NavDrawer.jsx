import './NavDrawer.css'
import DrawerLinks from './DrawerLinks';

// eslint-disable-next-line react/prop-types
const NavDrawer = ({ isOpen, toggleDrawer }) => {

    return (
        <div>
            <div className={`drawer ${isOpen ? 'open' : ''} z-50 w-full max-w-md  pl-8 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700`}>
                <button className="btn btn-square close-btn" onClick={toggleDrawer} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Departments</h5>
                    </div>
                    <div className="flow-root">
                        
                            <DrawerLinks />
                     
                    </div>
                </div>



            </div>

        </div>
    );
};

export default NavDrawer;