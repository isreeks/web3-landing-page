import footerLogo from '@/assets/footer-logo.png'

import Reddit from '@/assets/icons/reddit.svg'
import X from '@/assets/icons/x.svg'
import Telegram from '@/assets/icons/telegram.svg'
const Footer = () => {
  return (

    <div className=' bg-[#071624]'>
    <div className='px-8 py-12  flex mx-auto justify-between items-center container max-w-7xl'>
        <div>
            <img className='h-40' src={footerLogo} alt="" />
        </div>
        <div className='hidden lg:flex'>
                <ul className='flex gap-8'>
                    <li><a></a>About Us</li>
                    <li>Roadmap</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>

        <div>
            <h3 className='text-2xl font-semibold mt-8'>Contact Us</h3>
            <ul className='flex gap-4 mt-2 justify-between items-center'>
                    <li><img src={Telegram}/></li>
                    <li><img src={Reddit}/></li>
                    <li><img src={X}/></li>
                </ul>
        </div>
    </div>
    </div>

  )
}

export default Footer