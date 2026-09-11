import banner from '../../assets/banner-stack.png'
const Hero = () => {
    return (
        <>
            <div className='flex flex-col-reverse gap-8 py-8 items-center bg-white sm:py-10 lg:flex-row lg:justify-between lg:gap-10' >
                <div className='w-full lg:max-w-2xl'>

                    <h1 className="text-4xl font-bold mb-4 sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                            {" "}Development Stack
                        </span>
                    </h1>

                    <p className='text-gray-600 font-semibold my-4 max-w-xl leading-relaxed'>
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <button className="px-4 py-2.5 rounded-lg bg-linear-to-r from-orange-500 via-red-500 to-pink-500 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                            Explore Technologies
                        </button>

                        <button className=" cursor-pointer px-6 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 font-medium text-sm hover:bg-gray-50 hover:shadow-sm transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                </div>

                <div className='w-full max-w-sm sm:max-w-md lg:max-w-lg'>
                    <img className='h-auto w-full object-contain' src={banner} alt="#" />
                </div>

            </div>

        </>
    );
};

export default Hero;