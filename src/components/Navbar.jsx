import { Menu, X } from 'lucide-react'; 
import { useState } from 'react'; // to make the icons dynamic
import logo from '../assets/logo.png';
import { navItems } from '../constants';
import DarkMode from './DarkMode';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavBar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>
                    <ul className='hidden lg:flex ml-14 space-x-12'>
                        {navItems.map((item, index) => (
                            <li key={{ index }}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className='py-2 px-3 border rounded-md hover:bg-neutral-800'>
                            Sign In
                        </a>
                        <a href="#" className='bg-gradient-to-r from-yellow-500 to-yellow-800 py-2 px-3 rounded-md hover:from-yellow-400 hover:to-yellow-700'>
                            Create an account
                        </a>
                        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavBar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed-right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={ index } className='py-4'>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className='py-2 px-3 border rounded-md hover:bg-neutral-800'>
                                Sign In
                            </a>
                            <a href="#" className='py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:from-orange-400 hover:to-orange-700'>
                                Create an account
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;