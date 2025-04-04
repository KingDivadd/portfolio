import {  work_data } from '@/constant'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'motion/react'

const MyWork = () => {
    return (
        <section
            // initial={{opacity: 0}}
            // whileInView={{opacity: 1}}
            // transition={{duration: 1}}

        id='work' className="w-full px-5 lg:px-8 xl:px-[8%] py-10 scroll-mt-20  flex flex-col items-center ">
            <p  className="text-lg text-[#242424] font-ovo h-[27px] ">My portfolio</p>

            <p className="text-4xl md:text-5xl mt-[12px] text-[#242424] h-[68px]  font-ovo ">My Latest Work</p>

            <p className="text-[18px] mt-[25px] max-w-2xl text-center text-[#565656]">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

            <section className="mt-[54px] w-full  temp gap-[25px]  ">

                {
                    work_data.map((data, ind)=>{
                        return(
                            <div key={ind} className="relative overflow-hidden min-w-[300px] h-[300px]  flex flex-col py-[35px] duration-300 hover:-translate-y-1 cursor-pointer rounded-[8px]">

                                <Image src={data.bg_img} alt='' layout='fill' objectFit='cover' className='rounded-[8px]' />

                                <div className="absolute bottom-[20px] left-[6%] w-[88%] right-[6%] h-[83px] flex items-center justify-between bg-white rounded-[8px] p-[15px]">
                                    <span className="flex flex-col items-start justify-center gap-2">

                                        <p className=" font-[500] font-outfit text-[#494949] text-[18px] leading-[100%]">{data.title}</p>

                                        <p className=" font-[400] font-outfit text-[#797979] text-[13px] leading-[100%]">{data.description}</p>
                                    </span>

                                    <span className="h-[43px] w-[42px] flex items-center justify-center rounded-full border border-[#000000]">
                                        <span className={`relative overflow-hidden h-[17px] w-[18px] `}>
                                            <Image src={data.icon} alt='' layout='fill' objectFit='contain' />
                                        </span>
                                    </span>
                                    
                                </div>

                            </div>
                        )
                    })
                }
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