import React from 'react';
import HeroPng from '../../assets/foodImg.png';

const Hero = () => {
  return <>
    <div className='min-h-[550px] sm:min-h-[600px] bg-lightBlue flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                {/*text content*/}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                    <h1 data-aos="zoom-out" data-aos-delay="200"

                     className='text-8xl lg:text-[12rem] font-bold bg-clip-text text-transparent
                    bg-gradient-to-b from-primary to-primary/90 font-cursive'>Food
                    <span className='text-3xl font-sans text-dark'> Bowls</span>
                    </h1>
                    <p data-aos="zoom-out" className='text-sm text-dark font-sans'>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum unde vel quibusdam doloribus esse hic explicabo fugit. Amet repellat eum impedit architecto consequuntur obcaecati vero, eaque repudiandae libero reiciendis.
                    </p>
                    <div>
                        <button className='primary-btn'>View Our Menu</button>
                    </div>
                </div>
                {/*hero image section*/}
                <div className='min-h-[450px] flex justify-center items-center relative order-1
                sm:order-2'>
                    <img src={HeroPng} className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1'/>
                    <div className='bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block
                    text-white'>
                        <h1 className=''>Fresh Food</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>;

  
};

export default Hero
