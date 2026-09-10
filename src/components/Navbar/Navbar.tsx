import logo from '../../assets/logo-text.png'
const Navbar = () => {
    
    return (
        <>
            <div className='border-b border-gray-100'>
                <div className='flex justify-between container mx-auto py-2 items-center sticky top-0 z-50 bg-white ' >
                    <div>
                        <a href=""> <img src={logo} alt="#" /> </a>

                    </div>
                    <div className='flex gap-4'>
                        <ul className=' hover:text-pink-500 transition'><a href="">Home</a></ul>
                        <ul className=' hover:text-pink-500 transition'><a href="">Technologies</a></ul>
                        <ul className=' hover:text-pink-500 transition'><a href="">Projects</a></ul>
                        <ul className=' hover:text-pink-500 transition'><a href="">About</a></ul>
                        <ul className=' hover:text-pink-500 transition'><a href="">Contact</a></ul>
                    </div>

                    <div className="flex items-center gap-3">
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