import React from "react";

interface propsType  {
    img: string;
    name: string;
    count:string;
}

const CategoryCard: React.FC<propsType> = ({ img, name, count}) => {
  return (
    <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
      <div className="flex justify-between items-center p-6">
        <div className="space-y-4">
            <h2 className="font-medium text-xl">{name}</h2>
            <p className="text-gray-500">{count}</p>
        </div>
        <img className="w-[100px]" src={img} alt={name} />
      </div>
    </div>
  )
}

export default CategoryCard
