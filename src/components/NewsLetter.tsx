
import { LuMail } from "react-icons/lu";

const NewsLetter = () => {
  return (
    <div className='bg-green-800 mt-16max-auto'>
      <div className='container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white'>
        <div className='flex flex-shrink-0 items-center gap-4'>
            <LuMail className='text-[60px]'/>
            <div>
                <h2 className='text-xl sm:text-2xl font-semibold'>
                    SignUp to our Newsletter
                </h2>
                <p>.... and received $20 coupon for first shopping</p>
            </div>
        </div>

        <div className='w-full max-w-[500px] relative'>
            <input type="text" 
            className='py-4 px-6 w-full rounded-full'
            placeholder='YOur Email Address...'
            />
            <button className='bg-green-800 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-green-600'>
                Subcribe!
            </button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
