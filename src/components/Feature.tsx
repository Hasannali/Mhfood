
import FeatureCard from './FeatureCard'
import { LiaShippingFastSolid } from "react-icons/lia";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { LiaGiftSolid } from "react-icons/lia";
const data = [
    {
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />,
    },
    {
        title: "Best Price Gurrantee",
        icon: <FaMoneyBillWave />,
    },
    {
        title: "Free Curbside Pickup",
        icon: <LiaGiftSolid />,
    },
    {
        title: "Support 24/7",
        icon: <FiPhoneCall />,
    },
];

const Feature = () => {
  return (
    <div className='container pt-16 pb-10'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        {data.map((el) => (
            <FeatureCard key={el.title} title={el.title} icon={el.icon}/>
        ))}
      </div>
    </div>
  )
}

export default Feature
