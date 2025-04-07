import Link from 'next/link';
import SocailX from '@/app/assets/social-x.svg';
import SocialInsta from '@/app/assets/social-insta.svg';
import SocailLinkedin from '@/app/assets/social-linkedin.svg';

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="px-5">
              <img 
                src={"https://res.cloudinary.com/dfz0wkqij/image/upload/v1743994509/Group_17_hwtopf.png"} 
                alt='Staar AI Logo' 
                className='w-32 h-8 mx-auto' 
              />
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <Link href="/" >Home</Link>
          <Link href="#features" >Pricing</Link>
          <Link href="#download" >Resources</Link>
          <Link href="https://tally.so/r/3EBzql" target='_blank' >Contact</Link>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocailX />
          <SocailLinkedin />
          <SocialInsta />
        </div>
        <p className='mt-6'>© 2025 talentid.app. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;