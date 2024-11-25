import logo from '@/assets/logo.svg'
import uniswap from '@/assets/uniswap.png'

import { Check , X } from 'lucide-react'

const Comparison = () => {
    return (
        <div className='container max-w-7xl mx-auto px-3  '>


            <h3 className='text-2xl lg:text-4xl font-semibold'> Why <span className='text-yellow-400'>MoonEX</span>?</h3>

            <div className='p-2 lg:p-4 mt-16 rounded-xl mx-auto backdrop-blur-xl bg-slate-700/10'>


                <table className=' w-full table table-auto  text-center' >
                    <tr className='border-b border-gray-500/30'>
                        <th className=' px-3 border-r border-gray-500/30 py-2 text-yellow-400 lg:text-2xl '>Comparison</th>
                        <th className='px-3 border-r border-gray-500/30 py-2 text-yellow-400'><img className=' h-16 mx-auto' src={logo} alt="" /></th>
                        <th className='px-3 py-2 text-yellow-400 '><img className=' h-8 mx-auto' src={uniswap} alt="" /></th>
                    </tr>
                    <tr className='border-b border-gray-500/30'>
                        <td className='px-3 border-r text-sm lg:text-base border-gray-500/30 py-2'>2 . Point no two this</td>
                        <td className='px-3 border-r border-gray-500/30 py-2 '><Check className=' text-green-500 text-3xl mx-auto' size={30} /></td>
                        <td className='px-3 py-2 '><Check className=' text-green-500 text-3xl mx-auto' size={30} /></td>
        
                    </tr>
                    <tr className='border-b border-gray-500/30'>
                        <td className='px-3 border-r text-sm lg:text-base border-gray-500/30 py-2'>2 . Point no two this</td>
                        <td className='px-3 border-r border-gray-500/30 py-2 '><Check className=' text-green-500 text-3xl mx-auto' size={30} /></td>
                        <td className='px-3 py-2 '><X className=' text-red-500 text-3xl mx-auto' size={30} /></td>
        
                    </tr>
                    <tr className='border-b border-gray-500/30'>
                        <td className='px-3 border-r  text-sm lg:text-base border-gray-500/30 py-2'>2 . Point no two this</td>
                        <td className='px-3 border-r border-gray-500/30 py-2 '><Check className=' text-green-500 text-3xl mx-auto' size={30} /></td>
                        <td className='px-3 py-2 '><X className=' text-red-500 text-3xl mx-auto' size={30} /></td>
        
                    </tr>
                    <tr className='border-b border-gray-500/30'>
                        <td className='px-3 border-r text-sm lg:text-base border-gray-500/30 py-2'>2 . Point no two this</td>
                        <td className='px-3 border-r border-gray-500/30 py-2 '><Check className=' text-green-500 text-3xl mx-auto' size={30} /></td>
                        <td className='px-3 py-2 '><X className=' text-red-500 text-3xl mx-auto' size={30} /></td>
        
                    </tr>
                    <tr className='border-b border-gray-500/30'>
                        <td className='px-3 border-r text-sm lg:text-base border-gray-500/30 py-2'>2 . Point no two this</td>
                        <td className='px-3 border-r border-gray-500/30 py-2 '><Check className=' text-green-500 text-3xl mx-auto' size={30} /></td>
                        <td className='px-3 py-2 '><X className=' text-red-500 text-3xl mx-auto' size={30} /></td>
        
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default Comparison