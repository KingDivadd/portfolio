import React from 'react'
import Image from 'next/image'
import { info_list, tools_data } from '@/constant'
import Link from 'next/link'
import { motion } from "motion/react"

const AboutMe = () => {
    return (
        <section id='about' className="w-full px-5 lg:px-8 xl:px-[8%] py-10 scroll-mt-20  flex flex-col items-center ">
            
            <p className="text-lg text-[#242424] font-ovo h-[27px] ">Introductionn</p>

            <p className="text-4xl md:text-5xl mt-[12px] text-[#242424] h-[68px]  font-ovo ">About me</p>

            <article className="mt-[40px] mb-[30px] w-full px-5 flex lg:flex-row lg:justify-between items-center flex-col justify-start gap-10 lg:gap-20">
                <div className={`relative overflow-hidden h-[520px] w-[350px] `}>
                    <Image src={'/user-image.png'} alt='' layout='fill' objectFit='contain' />
                </div>

                <div className="flex-1 max-lg: ">
                    <p className="text-[18px] text-[#565656] max-w-2xl max-lg:align-middle max-lg:text-center ">I am an experienced Full-stack Developer with over a 4years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>

                    <div className="w-full  mt-[25px] gap-[30px] temp-195">
                        {
                            info_list.map((data, ind)=>{
                                return(
                                    <div key={ind} className="min-w-[195px] h-[195px] rounded-[8px] border border-[#D8D8D8] flex flex-col py-[25px] px-[20px] hover:-translate-y-1 duration-300 hover:shadow-md">
                                        <span className={`relative overflow-hidden h-[20.83px] w-[20px] `}>
                                            <Image src={data.icon} alt='' layout='fill' objectFit='contain' />
                                        </span>

                                        <p className="mt-[24px] font-[500] font-outfit text-[#494949] text-[18px]">{data.title}</p>

                                        <p className="mt-[5px] font-[400] font-outfit text-[#797979] text-[13px] ">{data.description}</p>

                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="w-full mt-[30px] flex flex-col justify-center lg:justify-start ">
                        <p className="text-[#868686] text-[17px] ">Tools i use</p>

                        <div className="w-full temp-65 mt-[10px]">
                            {tools_data.map((data, ind)=>{
                                return(
                                    <span key={ind} className="h-[65px] min-w-[65px] flex items-center justify-center border border-[#D8D8D8] rounded-[10px] hover:-translate-y-1 duration-300 ">
                                        <span className={`relative overflow-hidden h-[33.13px] w-[33.13px] `}>
                                            <Image src={data.icon} alt='' layout='fill' objectFit='contain' />
                                        </span>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </article>

        </section>
    )
}

export default AboutMe