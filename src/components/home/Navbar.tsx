import reactLogo from '@/assets/logo.svg'
import { Button } from '../ui/button'
import { X } from 'lucide-react'
import Sidebar from './Sidebar'

const Navbar = () => {




    return (
        <div className=' w-screen flex justify-between items-center px-4 lg:px-16 py-4 '>
            <div>
                <img className='h-16' src={reactLogo} alt="" />

            </div>


            <div className='hidden lg:flex'>
                <ul className='flex gap-4'>
                    <li>About Us</li>
                    <li>Roadmap</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>

       


            <div className=' hidden lg:block '>
                <Button size={"sm"} className=' rounded-full bg-gradient-to-tr from-orange-500  to-yellow-200 text-black'>Connect Wallet</Button>
            </div>

            <Sidebar />
     
        </div>
    )
}

export default Navbar