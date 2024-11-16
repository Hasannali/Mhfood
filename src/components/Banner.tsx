

const Banner = () => {
  return (
    <div className='container pt-16'>
      <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
        <div className='overflow-hidden rounded-lg'>
            <img src="https://img.freepik.com/free-photo/healthy-ingredients-bowl-surrounded-by-leaves-arranged-white-backdrop_23-2148026847.jpg?t=st=1731528043~exp=1731531643~hmac=eb6a15af3c441ae2486a52fb9608c772a6d7327a971138f4e59e27f1151e0ac5&w=740" alt="banner" 
            className='hover:scale-105 transition-transform'/>
        </div>
        <div className='overflow-hidden rounded-lg'>
            <img src="https://img.freepik.com/free-photo/slice-cheesecake-with-fruits_114579-17914.jpg?t=st=1731528096~exp=1731531696~hmac=dcb53633a818843c93f7fdb2bd2a100ad4dd4f27b96a5e9264d08f49665d1050&w=740" alt="banner" 
            className='hover:scale-105 transition-transform'/>
        </div>
      </div>
    </div>
  )
}

export default Banner
