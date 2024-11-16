
import back from '/src/assets/back.jpg'
import hat from '/src/assets/hat.jpg'
import fruit from '/src/assets/fruit.jpg'
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
    return (
        <div className='container '>
            <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-8'>
                <div className='xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative'>
                    <img src={back} alt="hero image"
                        className='w-full h-full object-cover rounded-lg' />

                    <div className="absolute max-w-[470px]  sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 text-white ">
                        <p className='text-2xl hidden sm:block'>100% original Dry Fruits</p>
                        <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold text-white '>
                            Dried Fruits Best Healthy
                        </h2>
                        <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8 ">
                            $19.36
                        </div>
                        <div className='bg-green-800  hover:bg-green-500 text-white rounded-full w-fit flex items-center
                        gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer'>
                            Shop Now <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={hat}
                        className='h-full w-full object-cover rounded-lg '
                        alt="hero image" />
                        <div className="absolute max-w-[470px]  sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                        <p className='text-xl  pt-4 text-white '>100% original Dry Fruits</p>
                        <h2 className='text-2xl sm:text-3xl font-bold text-white '>
                            Dried Fruits Best Healthy
                        </h2>
                        <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8 ">
                            $19.36
                        </div>
                        <div className='bg-green-800  hover:bg-green-500 text-white rounded-full w-fit flex items-center
                        gap-4 px-4 py-2 text-[14px]  cursor-pointer'>
                            Shop Now <BsArrowRight />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src={fruit}
                        className='h-full w-full object-cover rounded-lg '
                        alt="hero image" />
                        <div className="absolute max-w-[470px]  sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-2">
                        <p className='text-xl text-white  pt-4'>100% original Dry Fruits</p>
                        <h2 className='text-2xl sm:text-3xl font-bold text-white '>
                            Dried Fruits Best Healthy
                        </h2>
                        <div className="font-medium text-red-600 text-2xl sm:text-4xl pb-8 ">
                            $19.36
                        </div>
                        <div className='bg-green-800  hover:bg-green-500 text-white rounded-full w-fit flex items-center
                        gap-4 px-4 py-2 text-[14px]  cursor-pointer'>
                            Shop Now <BsArrowRight />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero 
