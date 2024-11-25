import { X, Sidebar as SidebarIcon } from 'lucide-react'
import React from 'react'


import reactLogo from '@/assets/logo.svg'
import { Button } from '../ui/button'

const Sidebar = () => {

    const [isOpen, setIsOpen] = React.useState(false)









    return (

        <div className=' lg:hidden' >
            <Button size={"icon"} className=" lg:hidden py-2 px-3  rounded-lg bg-gradient-to-tr from-orange-500  to-yellow-200 text-black" onClick={() => setIsOpen(!isOpen)} ><SidebarIcon /></Button>


            <div className={`ease-out delay-150 duration-300 top-0 fixed z-20  ${isOpen ? "left-0" : "-left-[650px]"} `}>
                <div onClick={() => setIsOpen(!isOpen)} className='   h-screen w-screen absolute top-0  -z-20  bg-[#071624] bg-opacity-60 ' />
                <div className='   h-screen w2/3  z-20  p-4 bg-background'>
                    <div className='flex justify-between '>
                        <img className='h-12 mr-8' src={reactLogo} alt="" />
                        <button onClick={() => setIsOpen(!isOpen)} className='p-2'><X /></button>
                    </div>
                    <ul className='flex flex-col mt-4 gap-4'>
                        <li>About Us</li>
                        <li>Roadmap</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>

                <Button size={"sm"} className=' mt-8 rounded-full bg-gradient-to-tr from-orange-500  to-yellow-200 text-black'>Connect Wallet</Button>

                </div>
            </div>
        </div>
    )
}

export default Sidebar