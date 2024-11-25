import {  DollarSign, ShieldCheck , PhoneOff ,SlidersHorizontal } from 'lucide-react'

const Features = () => {
    return (
        <div className='container max-w-7xl mx-auto mt-8 py-8   '>


            <h3 className=' text-2xl lg:text-4xl font-semibold text-center'> Our  <span className='text-yellow-400'>Features</span></h3>

            <div className=' grid  md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 px-3 py-5 mt-8'>


                <div className=' bg-white/5 border border-gray-400/20 p-4 rounded-lg col-span-1 flex flex-col gap-3'>
                    <div className=' bg-neutral-600/30 flex justify-center items-center rounded-full w-16 h-16'>
                        <DollarSign className=' text-white text-6xl mx-auto' size={30} />


                    </div>
                    <h4 className=' text-lg'>Cheapest TXs</h4>

                    <p className=' text-gray-400'>
                        Exchange popular digital currencies at the cheapest possible transaction price
                    </p>
                </div>
                <div className=' bg-white/5 border border-gray-400/20 p-4 rounded-lg col-span-1 flex flex-col gap-3'>
                    <div className=' bg-neutral-600/30 flex justify-center items-center rounded-full w-16 h-16'>
                        <ShieldCheck className=' text-white text-6xl mx-auto' size={30} />


                    </div>
                    <h4 className=' text-lg'>CerTIK</h4>

                    <p className=' text-gray-400'>
                    We are Audited by Certik. CertiK is the leading security-focused ranking platform to                     </p>
                </div>
                <div className=' bg-white/5 border border-gray-400/20 p-4 rounded-lg col-span-1 flex flex-col gap-3'>
                    <div className=' bg-neutral-600/30 flex justify-center items-center rounded-full w-16 h-16'>
                        <PhoneOff className=' text-white text-6xl mx-auto' size={30} />


                    </div>
                    <h4 className=' text-lg'>No Contract Sells</h4>

                    <p className=' text-gray-400'>
                    No contract sells to fund the marketing wallets                    </p>
                </div>
                <div className=' bg-white/5 border border-gray-400/20 p-4 rounded-lg col-span-1 flex flex-col gap-3'>
                    <div className=' bg-neutral-600/30 flex justify-center items-center rounded-full w-16 h-16'>
                        <SlidersHorizontal className=' text-white text-6xl mx-auto' size={30} />


                    </div>
                    <h4 className=' text-lg'>CrossDex Support</h4>

                    <p className=' text-gray-400'>
                    Exchange popular digital currencies at the cheapest possible transaction price                   </p>
                </div>
            </div>

        </div>
    )
}

export default Features