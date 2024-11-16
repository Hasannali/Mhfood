import CategoryCard from "./CategoryCard";

const data = [
    {
        id: 0,
        name: "Fresh Fruits",
        count: "10 product",
        img: "https://img.freepik.com/free-photo/grape-isolated-white-background_144627-10543.jpg?t=st=1731482197~exp=1731485797~hmac=35e8a6ccbc14307e07576f845df4a44e5ea89593c9e35ddefd0f219817f63e8a&w=740",
    },
    {
        id: 1,
        name: "Fresh Fruits",
        count: "9 product",
        img: "https://img.freepik.com/free-photo/bunch-grapes-white-background_1203-1851.jpg?t=st=1731482222~exp=1731485822~hmac=2569f1d7999f8ae32d96d8bff6a41b92463bad6809650fbf7c42c4d50130e3ae&w=740",
    },
    {
        id: 2,
        name: "Fresh Fruits",
        count: "8 product",
        img: "https://img.freepik.com/free-vector/realistic-orange-splash-fruit_52683-65283.jpg?t=st=1731482261~exp=1731485861~hmac=10d7934e0e728f0ef7c8172b808b50d9a5ff189baeb8e9da431fde33ed7f56be&w=740",
    },
    {
        id: 3,
        name: "Fresh Fruits",
        count: "7 product",
        img: "https://img.freepik.com/free-vector/realistic-orange-splash-fruit_52683-65283.jpg?t=st=1731482261~exp=1731485861~hmac=10d7934e0e728f0ef7c8172b808b50d9a5ff189baeb8e9da431fde33ed7f56be&w=740",
    },
    {
        id: 4,
        name: "Fresh Fruits",
        count: "6 product",
        img: "https://img.freepik.com/free-photo/orange-juicy-ripe-circle-citrus_1172-203.jpg?t=st=1731482285~exp=1731485885~hmac=57108124046607cbf562026d7b8bbe66651939a38cf04613ee03dd2c0b44c38c&w=740",
    },
    {
        id: 5,
        name: "Fresh Fruits",
        count: "5 product",
        img: "https://img.freepik.com/free-photo/orange-juicy-ripe-circle-citrus_1172-203.jpg?t=st=1731482285~exp=1731485885~hmac=57108124046607cbf562026d7b8bbe66651939a38cf04613ee03dd2c0b44c38c&w=740",
    },
    {
        id: 6,
        name: "Fresh Fruits",
        count: "4 product",
        img: "https://img.freepik.com/free-photo/tasty-red-apples-isolated-white_114579-73119.jpg?t=st=1731481173~exp=1731484773~hmac=664d4529ea3d6e7c0ec994bffc420498d6aba7ec86394ff00c7650a0775e9818&w=740",
    },
    {
        id: 7,
        name: "Fresh Fruits",
        count: "3 product",
        img: "https://img.freepik.com/free-photo/fresh-delicious-green-red-apples-wooden-box_114579-67373.jpg?t=st=1731481206~exp=1731484806~hmac=57447e9d2547d36e0665eef450c3160cc67136e47393c2f9d6a3b405ca3c4b8e&w=740",
    },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((el) => (
            <CategoryCard 
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}

            />
        ))}
      </div>
    </div>
  )
}

export default Category
