import React from 'react'
import BannerImg from '../../assets/foodImg2.png';

const hello = 1;
console.log(hello);
const Banner = () => {
  return (
    <>
        <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/*img section*/}
                    <div className='flex justify-center items-center'>
                        <img src={BannerImg} alt='food image' className='max-w-[450px] w-full mx-auto
                        shadow-1'/>
                    </div>
                    {/*Text content section*/}
                    <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                        <p className='uppercase text-3xl font-semibold text-dark'>About</p>
                        <h1 className='text-5xl text-primary font-bold font-cursive2'>Our Restraunt</h1>
                        <p className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio optio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
                    </div>
                    <div>
                    <button className='primary-btn'>View Our Menu</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
