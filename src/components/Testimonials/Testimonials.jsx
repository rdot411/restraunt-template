import React from 'react'
import Slider from 'react-slick';

const TestimonialData = [
    {
        id: 1,
        name: "Person 1",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium velit hic assumenda totam fuga, praesentium eveniet commodi vero",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Person 2",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium velit hic assumenda totam fuga, praesentium eveniet commodi vero",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Person 3",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium velit hic assumenda totam fuga, praesentium eveniet commodi vero",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 4,
        name: "Person 4",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium velit hic assumenda totam fuga, praesentium eveniet commodi vero",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 5,
        name: "Person 5",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium velit hic assumenda totam fuga, praesentium eveniet commodi vero",
        img: "https://picsum.photos/101/101",
    },
]

const Testimonials = () => {
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
    <div className='py-10 mb-10'>
      <div className="container">
        {/**Header */}
        <div className='mb-10'>
            <h1 className='text-center text-4xl font-bold font-cursive2'>Testimonials</h1>
        </div>
        {/**slider */}
        <Slider {...settings}>
            {
                TestimonialData.map((item) =>(
                    <div className='my-6'>
                        <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                         bg-primary/10 relative'>
                            <div className='mb-4'>
                                <img src={item.img} alt='profile picture' className='rounded-full
                                w-20 h-20'/>
                            </div>
                            {/**content */}
                            <div className='flex flex-col items-center gap-4'>
                                <div className='space-y-3'>
                                    <p className='text-xs text-gray-500'>{item.text}</p>
                                    <h1 className='text-xl font-bold text-black/80 font-cursive2'>
                                        {item.name}
                                    </h1>
                                </div>
                            </div>
                            <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                        </div>
                    </div>
                ))
            }
        </Slider>

      </div>
    </div>
  )
}

export default Testimonials
