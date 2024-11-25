import EclipseBackground from './EclipseBackground'
import { Button } from '../ui/button'
import star from "@/assets/star-img.svg";

const Hero = () => {
  return (
    <div>

      <EclipseBackground />



      <div className='  z-20 mx-auto py-24  container grid  lg:grid-cols-4 gap-4 '>
        <div className=' col-span-2 py-36 relative px-4   lg:flex justify-center flex-col gap-6'>
          <img src={star} alt="star" className="absolute w-12 h-12 lg:w-14  top-0 lg:h-14 animate-pulse " />
          <h1 className='text-4xl lg:text-6xl  font-bold text-white'>Trusted Multi-Chain
            <span className='text-yellow-400 '> DEX</span> Platform</h1>
          <p className=' text-lg lg:text-2xl text-gray-400'>Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>


          <div className=' my-4 flex gap-4'>
            <Button className=' cursor-pointer rounded-full bg-gradient-to-tr from-orange-500  to-yellow-200 text-black px-6 py-2'>Connect Wallet</Button>
            <Button variant={"outline"} className=' cursor-pointer border-yellow-400  text-yellow-400 rounded-full  px-6 py-2'>Learn More</Button>
          </div>
        </div>

        <div className='col-span-2 relative flex justify-end flex-col gap-6'>
          <img src={star} alt="star" className="absolute w-10 top-0 right-0 h-10 animate-pulse " />

          <div className=' absolute bg-gradient-to-br w-48 h-48 lg:h-[300px] lg:w-[300px]  right-0 -z-10 rounded-full  from-yellow-50 to-yellow-400     '></div>


          <img src={star} alt="star" className="absolute w-6 h-6 lg:w-16 bottom-0  lg:h-16 animate-pulse " />


        </div>


      </div>



    </div>
  )
}

export default Hero