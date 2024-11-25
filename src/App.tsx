
import Hero from './components/home/Hero'
import Navbar from './components/home/Navbar'
import HomeBackground from './components/home/HomeBackground'
import Comparison from './components/home/Comparison'
import Features from './components/home/Features'
import FAQ from './components/home/FAQ'
import Footer from './components/home/Footer'
// import './App.css'

function App() {

  return (
    <>
    <HomeBackground/>
    <div className='   font-ppneue  backdrop-blur-xl  bg-[#071624]/80'>
 

  
    <Navbar />
    <Hero />

    <Comparison />
    <Features />

    <FAQ />

    <Footer/>
    </div>
    {/* </HomeBackground> */}
    </>
  )
}

export default App
