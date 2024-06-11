import React from 'react';
import Slider from "react-slick";
import Img1 from '../../assets/foodImg2.png';
import Img2 from '../../assets/foodImg.png';

const MenuData = [
    {
        id: 1,
        name: "Veg Salad",
        price: "$3.99",
        img: Img1,
    },
    {
        id: 2,
        name: "Chicken Salad",
        price: "$5.30",
        img: Img1,
    },
    {
        id: 3,
        name: "Vegan Salad",
        price: "$5.99",
        img: Img1,
    },
    {
        id: 4,
        name: "Rice Bowl",
        price: "$4.99",
        img: Img2,
    }
]

const OurMenu = () => {
  const settings = {
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
        {
            breakpoint: 10000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  }

  return (
    <div className='py-16 bg-primary text-white'>
        <div className="container">
            {/**Header */}
            <div className='mb-10 space-y-5'>
                <h1 className='text-center text-4xl font-bold'>Our Menu</h1>
                <div className='text-center sm:max-w-sm mx-auto text-xsopaxity-75'>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium velit hic assumenda totam fuga, praesentium eveniet commodi vero

                </div>
            </div>
            {/**Slider */}
            <div>
                <Slider {...settings}>
                    {MenuData.map((menu) => (
                            <div className='my-16'>
                                <div className='flex flexcol gap-4 py-8 px-6 mx-4 rounded-xl'>
                                    {/**Img */}
                                    <div className='mb-3 flex justify-center'>
                                        <img src={menu.img} alt='menu food images' className='
                                        rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1'/>
                                    </div>
                                    {/**Text*/}
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3 text-center'>
                                            <h1 className='text-xl'>{menu.name}</h1>
                                            <p className='text-3xl font-semibold'>
                                                <span className='text-2xl font-cursive2'>
                                                    Only
                                                </span>{" "}{menu.price}
                                            </p>
                                            <a href='#' className='underline'>Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default OurMenu
