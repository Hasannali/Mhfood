
import BlogCard from './BlogCard'

const data = [
    {
        img: "https://img.freepik.com/free-photo/plate-with-keto-diet-food-cherry-tomatoes-chicken-breast-eggs-carrot-salad-with-arugula-spinach-keto-lunch-top-view_2829-16938.jpg?t=st=1731527612~exp=1731531212~hmac=988879296c08fc43f270711c25628a2045663f5b4d99c520992d7c0e3000f154&w=740",
        title: "Healthy Food healthy life",
        date: "Nov 13 24",
        comment: " /8",
    },
    {
        img: "https://img.freepik.com/free-photo/diet-menu-healthy-vegetarian-salad-fresh-vegetables-tomatoes-cucumber-sweet-peppers-porridge-bowl-vegan-food-flat-lay-top-view_2829-19941.jpg?t=st=1731527642~exp=1731531242~hmac=bb3364a99f443bb5585ede3532051fd7cd7b144510dcd457f96b23989bcfa24a&w=740",
        title: "Healthy Food healthy life",
        date: "Nov 11 24",
        comment: " /5",
    },
    {
        img: "https://img.freepik.com/free-photo/delicious-healthy-lettuce-salad_23-2148173979.jpg?t=st=1731527678~exp=1731531278~hmac=1750d30eab6f4f57e55d15e13e4016d804d6e6aa96d9015d5859afc158137a97&w=740",
        title: "Healthy Food healthy life",
        date: "Nov 12 24",
        comment: " /2",
    },
];

const BlogSection = () => {
  return (
    <div className='container pt-16'>
        <h2 className='font-bold text-2xl'>Latest News</h2>
        <p className='text-gray-500 pb-5'>Present post in best way to highlights interesting moments of your life.</p>
      <div className='grid sm:grid-cols-3 gap-4 sm:gap-8'>
        {data.map((el) => (
            <BlogCard 
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
            />
        ))}
      </div>
    </div>
  )
}

export default BlogSection
