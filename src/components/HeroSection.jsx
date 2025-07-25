import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-gray-900 dark:text-white">
                Virtual build events 
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                {" "}for developers
                </span>
            </h1>
            <p className="text-center text-lg text-gray-700 dark:text-neutral-500 mt-10 max-w-4xl">
                Empower your creativity and bring your VR app ideas to life with our intuitive development platform. Get started today and turn your vision into immersive reality.
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-white hover:brightness-110'>
                    Start for FREE
                </a>
                <a href="#" className='py-3 px-4 mx-3 rounded-md border border-gray-300 text-gray-900 dark:text-white dark:border-gray-700 bg-white dark:bg-transparent hover:bg-gray-100 dark:hover:bg-neutral-800'>
                    Documentation
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video1} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'>
                    <source src={video2} type='video/mp4'/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default HeroSection