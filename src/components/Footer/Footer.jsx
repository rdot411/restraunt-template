import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
import { FaI } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#home",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
  return (
    <>
    <div>
        <div className="container grid md:grid-cols-3 bg-20 pt-5">
            {/**Company */}
            <div className='py-8 px-4'>
                <img src={Logo} alt='logo' className='w-36'/>
            <div className='space-y-5'>
                <p className='pt-4 opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div>
                    <button href="https://www.google.co.nz/maps/?entry=ttu" target="_blank" 
                    className='primary-btn'>Visit Us</button>
                </div>
            </div>
            </div>
            {/**Footer link */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left
                    mb-5'>Important Links</h1>
                    <ul className='space-y-5'>
                        {FooterLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={link.link}>{link.title}</a>
                                </li>
                            ))}
                    </ul>
                </div>
                {/**second col link */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left mb-5'>
                        Quick Links
                    </h1>
                    <ul className='space-y-5'>
                        {FooterLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
            </div>
            {/**company address */}
            <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-semibold sm:text-left mb-5'>Address</h1>
                <div className='flex items-center gap-3 mt-6'>
                    <a href='#'>
                        <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href='#'>
                        <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                    </a>
                </div>
            </div>  
            </div>
        </div>
        </div>
        {/*copyright*/}
        <div className='bg-gray-200'>
            <div className='text-xs md:text-sm container p-4 flex justify-between'>
                <p>Copyright Raghav Tiwari &copy; 2024</p>
                <div className='flex justify-center items-center gap-3'>
                    <a href='#'>Privacy</a>
                    <a href='#'>Accesibility</a>
                    <a href='#'>Terms</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
