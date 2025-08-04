'use client'
import {  work_data } from '@/constant'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules' // Import Autoplay module
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"



const MyWork = () => {
    return (
        <section
            // initial={{opacity: 0}}
            // whileInView={{opacity: 1}}
            // transition={{duration: 1}}

        id='work' className="w-[100vw] overflow-x-hidden px-5 lg:px-8 xl:px-[8%] py-10 scroll-mt-20  flex flex-col items-center ">
            <p  className="text-lg text-[#242424] font-ovo h-[27px] ">My portfolio</p>

            <p className="text-4xl md:text-5xl mt-[12px] text-[#242424] h-[68px]  font-ovo ">My Latest Work</p>

            <p className="text-[18px] mt-[25px] max-w-2xl text-center text-[#565656]">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

            <section className=" w-full mt-[54px] gap-5  ">
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        // Default (mobile < 768px)
                        0: {
                            slidesPerView: 1,
                        },
                        // Medium screens (≥ 768px)
                        640: {
                        slidesPerView: 2,
                        },
                        // Large screens (≥ 1024px)
                        1024: {
                        slidesPerView: 3,
                        },
                    }}
                    //   pagination={{ clickable: true }}
                    navigation={false}
                    loop={true}
                    autoplay={{
                        delay: 10000, // Set to 10 seconds (10000 milliseconds)
                        disableOnInteraction: false, // Continue autoplay after user interaction
                    }}
                    modules={[Pagination, Navigation, Autoplay]} // Include Autoplay module
                    className="w-full h-full" >

                        {
                        work_data.map((slide, index)=>{
                            const {description, bg_img, title, icon, route, project} = slide

                            return (

                                <SwiperSlide key={index} className=" rounded-md flex items-center justify-start font-mont group">

                                    <Dialog>
                                        <DialogTrigger className='w-full h-full'>
                                            <div className="flex flex-col h-[300px] items-center justify-start gap-3">

                                                <Image src={bg_img} alt='' layout='fill' objectFit='cover' className='rounded-sm' />

                                                <div className="absolute bottom-7.5 left-[6%] w-[88%] right-[6%] h-[83px] flex items-center justify-between bg-white rounded-[8px] p-[15px]">
                                                    <span className="flex flex-col items-start justify-center gap-2">

                                                        <p className=" font-[500] font-mont text-[#494949] text-md leading-[100%]">{title}</p>

                                                        <p className=" font-[400] font-outfit text-[#797979] text-[13px] leading-[100%]">{project}</p>
                                                    </span>

                                                    <Link href={route}  target="_blank"  rel="noopener noreferrer" className="h-[43px] w-[42px] flex items-center justify-center rounded-full border border-[#000000]">
                                                        <span className={`relative overflow-hidden h-[17px] w-[18px] `}>
                                                            <Image src={icon} alt='' layout='fill' objectFit='contain' />
                                                        </span>
                                                    </Link>
                                                    
                                                </div>
                                            </div> 
                                        </DialogTrigger>
                                        <DialogContent className='w-full sm:w-[90vw] md:w-[80vw] lg:w-[65vw] xl:w-[55vw] 2xl:w-[57.5vw] '>
                                            <DialogHeader>
                                                <DialogTitle className='font-mont'>ePulse Telemedicine</DialogTitle>
                                                <DialogDescription>
                                                    {description}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <div className="w-full flex flex-col gap-5 h-[30vh] sm:h-[43vh] md:h-[45.5vh] lg:h-[50vh] xl:h-[52vh] 2xl:h-[65vh] ">
                                                <span className=" h-full  overflow-hidden relative bg-gray-200 rounded-md">
                                                    <Image src={bg_img} alt='' fill objectFit='contain' className='' />
                                                </span>

                                                <Link href={route}  target="_blank"  rel="noopener noreferrer" className=' w-auto hover:underline'>
                                                    Visit app
                                                </Link>
                                            </div>


                                        </DialogContent>
                                    </Dialog>

                                </SwiperSlide>

                                
                            )
                        })
                    }

                </Swiper>
            </section>

            


            <Link href={'#work'} className=' mt-[74px] w-[204px] h-[54px] sm:h-[64px] border border-[#A7A7A7] rounded-full flex items-center justify-center text-[#6F6F6F] text-[16px] gap-2' >
                Show more
                <span className="h-full flex items-center justify-center pt-[1.5px]">
                    <span className={`relative overflow-hidden h-[10.72px] w-[16.36px] `}>
                        <Image src={'/icons/right-arrow-bold.png'} alt='' layout='fill' objectFit='contain' />
                    </span>
                </span>
            </Link>
        </section>
    )
}

export default MyWork