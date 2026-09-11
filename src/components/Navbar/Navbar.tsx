import { useState } from 'react'
import logo from '../../assets/logo-text.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <>
            <div className='border-b border-gray-100  sticky top-0 z-50 '>
                <div className='flex justify-between px-4 py-2 items-center bg-white' >
                    <div>
                        <a href="#" onClick={closeMenu}> <img src={logo} alt="Dev Stack" /> </a>

                    </div>
                    <button
                        type="button"
                        className="md:hidden p-2 text-gray-700 hover:text-pink-500 transition"
                        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                    >
                        <span className="block w-6 h-0.5 bg-current mb-1.5" />
                        <span className="block w-6 h-0.5 bg-current mb-1.5" />
                        <span className="block w-6 h-0.5 bg-current" />
                    </button>
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full md:w-auto flex-col md:flex-row gap-4 px-4 py-4 md:p-0 bg-white md:bg-transparent shadow-md md:shadow-none`}>
                        <a href="#" onClick={closeMenu} className='hover:text-pink-500 transition'>Home</a>
                        <a href="#" onClick={closeMenu} className='hover:text-pink-500 transition'>Technologies</a>
                        <a href="#" onClick={closeMenu} className='hover:text-pink-500 transition'>Projects</a>
                        <a href="#" onClick={closeMenu} className='hover:text-pink-500 transition'>About</a>
                        <a href="#" onClick={closeMenu} className='hover:text-pink-500 transition'>Contact</a>
                    </div>

                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-3`}>
                        <button className="px-4 py-2 text-gray-700 rounded-3xl cursor-pointer hover:text-pink-500 transition">
                            Sign In
                        </button>

                        <button className="px-5 py-2 bg-pink-500 text-white rounded-3xl cursor-pointer hover:bg-pink-600 transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;