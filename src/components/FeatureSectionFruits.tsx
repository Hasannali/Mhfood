


 
import ProductCard from './ProductCard';
import chip from '/src/assets/chips.jpg'

const data = [
    {
        id: 0,
        img: "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?t=st=1731580613~exp=1731584213~hmac=d1d45f6264416a4d8e3176532e22a2fed2a8be3924cb9fa627f7c31a6b174618&w=740",
        name:"Dried Mango",
        price:"500$", 
    },
    {
        id: 0,
        img: "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?t=st=1731580613~exp=1731584213~hmac=d1d45f6264416a4d8e3176532e22a2fed2a8be3924cb9fa627f7c31a6b174618&w=740",
        name:"Dried Mango",
        price:"500$", 
    },
    {
        id: 0,
        img: "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?t=st=1731580613~exp=1731584213~hmac=d1d45f6264416a4d8e3176532e22a2fed2a8be3924cb9fa627f7c31a6b174618&w=740",
        name:"Dried Mango",
        price:"500$", 
    },
    {
        id: 0,
        img: "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?t=st=1731580613~exp=1731584213~hmac=d1d45f6264416a4d8e3176532e22a2fed2a8be3924cb9fa627f7c31a6b174618&w=740",
        name:"Dried Mango",
        price:"500$", 
    },
];
const FeatureSectionFruits = () => {
  return (
    <div className='container pt-16'>
      <div className='lg:flex justify-between items-center'>
        <div>
        <h3 className='font-medium text-2xl'>Fruits & Vegetables</h3>
        <p className='text-gray mt-2'>
            Buy farm fresh fruits and vegetables online at the best prices
        </p>
        </div>

        <div className='space-x-4 mt-8 lg:mt-0'>
        <button className='feature_btn'>Fruits</button>
        <button className='text-gray-600 hover:text-green-800'>
            Vegetables
        </button>
        <button className='text-gray-600 hover:text-green-800'>
            Bread & Bakery
        </button>
      </div>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
        <div>
            <img 
            src={chip}
            alt="banner"
            className='w-full h-full object-cover' />
        </div>
        {data.map((el) => (
            <ProductCard 
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            />
        ))}
      </div>




    </div>
  )
}

export default FeatureSectionFruits
