


import Banner from './components/Banner'
import BlogSection from './components/BlogSection'
import Category from './components/Category'
import Feature from './components/Feature'
import Footer from './components/Footer'
import FeatureSectionFruits from './components/FeatureSectionFruits'
import Hero from './components/Hero'
import MobileNavbar from './components/MobileNavbar'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

function App() {


  return (
    <>
      <main className='container mx-auto'>
        <Navbar/>
        <MobileNavbar />
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <Banner />
        <BlogSection />
        <Feature />
        <NewsLetter />
        <Footer />
      </main>
    </>
  )
}

export default App
