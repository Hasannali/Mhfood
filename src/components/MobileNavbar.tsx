
import { FiMenu } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RiUser3Fill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartCountBadge from './CartCountBadge';

const MobileNavbar = () => {
  return (
    <div className='sticky top-0 bg-white z-10'>
      <div className='container lg:hidden p-8'>
        <div className='flex justify-between items-center'>
            <div className="flex items-center gap-6">
            <FiMenu size={30}/>
            <IoIosSearch size={30}/>
            </div>

            <h2 className='text-4xl'>Logo</h2>
            
            <div className="flex gap-4 text-[30px]">
              
              <RiUser3Fill />
             
              <div className="relative cursor-pointer">
              <AiOutlineShoppingCart />
              <CartCountBadge size="h-[20px] w-[20px]"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
