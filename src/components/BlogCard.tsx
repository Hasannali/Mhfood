interface propsType {
    img: string;
    title: string;
    comment: string;
    date: string;
}

const BlogCard:React.FC<propsType> = ({ img, title, comment, date}) => {
  return (
    <div className='space-y-4 '>
      <img  src={img} alt="post" 
      className=" rounded-lg hover:scale-105 transition-transform"/>
      <div className="text-green-800 font-medium">
        <span>{date}</span>
        <span>{comment} Comments</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  )
}

export default BlogCard
