import { NavLink } from 'react-router-dom';
// import './NavDrawer.css'
import { SlArrowRight } from "react-icons/sl";
import logo from '../../../public/logo.png'
const DrawerLinks = () => {
    return (
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className='w-[60vw]  md:w-[25vw] lg:w-[13vw]'>
                <NavLink to='/' className='text-gray-900 md:text-[12px] dark:text-white hover:underline' >
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src={logo} alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-gray-900 md:text-[12px] dark:text-white hover:underline">
                                Parts
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <SlArrowRight />
                        </div>
                    </div>
                </NavLink>
            </li>
            <li className='w-[60vw]  md:w-[25vw] lg:w-[13vw]'>
                <NavLink to='/' className='text-gray-900 md:text-[12px] dark:text-white hover:underline' >
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src={logo} alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-gray-900 md:text-[12px] dark:text-white hover:underline">
                                Wheels & Tires
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <SlArrowRight />
                        </div>
                    </div>
                </NavLink>
            </li>
            <li className='w-[60vw]  md:w-[25vw] lg:w-[13vw]'>
                <NavLink to='/' className='text-gray-900 md:text-[12px] dark:text-white hover:underline' >
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src={logo} alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-gray-900 md:text-[12px] dark:text-white hover:underline">
                                Exterior
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <SlArrowRight />
                        </div>
                    </div>
                </NavLink>
            </li>
            <li className='w-[60vw]  md:w-[25vw] lg:w-[13vw]'>
                <NavLink to='/' className='text-gray-900 md:text-[12px] dark:text-white hover:underline' >
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src={logo} alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-gray-900 md:text-[12px] dark:text-white hover:underline">
                                Lighting
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <SlArrowRight />
                        </div>
                    </div>
                </NavLink>
            </li>
            <li className='w-[60vw]  md:w-[25vw] lg:w-[13vw]'>
                <NavLink to='/' className='text-gray-900 md:text-[12px] dark:text-white hover:underline' >
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src={logo} alt="Neil image" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-gray-900 md:text-[12px] dark:text-white hover:underline">
                                Body Parts
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <SlArrowRight />
                        </div>
                    </div>
                </NavLink>
            </li>
            </ul>
    );
};

export default DrawerLinks;