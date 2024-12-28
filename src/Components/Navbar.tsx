import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleScroll = useCallback(() => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY.current) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            lastScrollY.current = window.scrollY;
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        // Navbar
        <nav className={`fixed top-0 bg-shadow1 left-0 right-0 z-10 flex justify-between items-center gap-6 px-6 h-16 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <a href="#" id='brand'>
                <img className="object-cover max-w-12 max-h-12" src="/logo2.svg" alt="Logo" />
            </a>
            <div className="hidden md:flex items-center group gap-8">
                <Link to="/" className="text-black group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Home
                </Link>
                <Link to="/services" className="text-black group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Projects
                </Link>
                <Link to="/RiskRuler" className="text-black group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Achievements
                </Link>
                <Link to="/contacts" className="text-black group-hover:opacity-50 hover:!opacity-100 transition-opacity duration-200">
                    Contacts
                </Link>
            </div>
            <button className="p-4 md:hidden">
                <img className="filter invert" src="/assets/menu.png" alt="menu" onClick={toggleNav} />
            </button>

            {/* Side character  */}
            <div id='nav-dialog' className={`fixed md:hidden bg-background1 inset-0 ${isNavOpen ? 'block' : 'hidden'}`}>
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