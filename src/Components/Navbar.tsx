import {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        // Navbar
        <nav className="sticky top-0 left-0 right-0 z-10 flex justify-between items-center gap-6 px-6 h-16 bg-back1">
            <a href="#" id='brand'>
                <img className="object-cover max-w-12 max-h-12" src="/logo2.svg" alt="Logo" />
            </a>
            <div className="hidden md:flex items-center group gap-8">
                <Link to="/" className="text-txt1 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Home
                </Link>
                <Link to="/services" className="text-txt1 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Projects
                </Link>
                <Link to="/RiskRuler" className="text-txt1 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Achievements
                </Link>
                <Link to="/contacts" className="text-txt1 group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Contacts
                </Link>
            </div>
            <Link
                to="/Goldenway"
                className="relative hidden md:inline-block px-4 py-1 rounded-lg text-txt1 text-lg cursor-pointer bg-gradient-to-r from-blue-600 via-purple-800 to-blue-400 group"
            >
                <span className="relative z-10">Golden Way</span>
                <div className="absolute inset-[1px] bg-gray-900 rounded-lg transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-800 to-blue-400 rounded-lg opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
            <button className="p-4 md:hidden">
                <img className="filter invert" src="/assets/menu.png" alt="menu" onClick={toggleNav}/>
            </button>



            {/* Side character  */}
            <div id='nav-dialog' className={`fixed md:hidden bg-back1 inset-0 ${isNavOpen ? 'block' : 'hidden'}`}>
                <div className="flex justify-between items-center px-6 h-16" id='nav-bar'>
                    <a href="#" id='brand'>
                        <img className="object-cover max-w-12 max-h-12" src="/logo2.svg" alt="Logo" />
                    </a>
                    <button className="p-4 md:hidden">
                        <img className="filter invert max-w-6 max-h-6" src="/assets/cross.png" alt="menu" onClick={toggleNav} />
                    </button>
                </div>
                <div className='mt-6'>
                    <Link to="/" className="text-txt1 m-3 p-3 hover:bg-gray-500 block">
                        Home
                    </Link>
                    <Link to="/" className="text-txt1 m-3 p-3 hover:bg-gray-500 block">
                        Projects
                    </Link>
                    <Link to="/" className="text-txt1 m-3 p-3 hover:bg-gray-500 block">
                        Achievements
                    </Link>
                    <Link to="/" className="text-txt1 m-3 p-3 hover:bg-gray-500 block">
                        Contacts
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;