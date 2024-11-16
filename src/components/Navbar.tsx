
import { IoSearchOutline } from "react-icons/io5";
import { RiUser3Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from './CartCountBadge';

const Navbar = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className='container hidden lg:block'> 
        <div className='flex justify-between items-center p-8'>

            <h2 className='text-4xl font-medium'>MH Food</h2>
            <div className='relative w-full max-w-[500px]'>
              <input 
              className='bg-[#f2f3f5] outline-none px-6 py-3 rounded-[30px] w-full border-none'
              type="text"
              placeholder='Search Product...' name="" id="" />
              <IoSearchOutline className='absolute top-0 right-0 mt-4 mr-5 text-gray-500' size={20}/>
            </div>
            <div className="flex gap-4">
              <div className="icon__wrapper">
              <RiUser3Fill />
              </div>
              <div className="icon__wrapper">
              <AiOutlineShoppingCart />
              <CartCountBadge size="h-[20px] w-[20px]"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
