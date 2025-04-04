'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {footer_data} from '@/constant'

const Footer = () => {
    return (
        <footer className="w-full px-5 lg:px-8 xl:px-[8%] py-10 scroll-mt-20  flex flex-col items-center ">
            

            <span className="w-[] h-[57px] flex items-end ">
                <p className="text-2xl md:text-3xl font-outfit font-[500] ">David</p>
                <span className="relative overflow-hidden h-[10px] w-[10px] mb-[5px]">
                    <Image src={'/icons/red-dot.png'} alt='red-dot' layout='fill' objectFit='cotain' />
                </span>
            </span>

            <Link href={'mailto:iroegbu.dg@gmail.com'} className="mt-[10px] flex items-center justify-center gap-2 ">
                <span className="relative overflow-hidden h-[23.39px] w-[31.7px] mb-[5px]">
                    <Image src={'/icons/mail_icon.png'} alt='mail icon' layout='fill' objectFit='cotain' />
                </span>
                <p className="text-[#797979] text-[16px] mb-[7.3px] ">iroegbu.dg@gmail.com</p>

            </Link>

            <div className="w-full flex flex-wrap justify-between max-md:gap-5 gap-15  border-t border-[#626262] mt-[47px] pt-[26px]">
                <p className="text-[16px] text-[#626262] max-md:w-full flex justify-center">© 2025 David Iroegbu. All rights reserved.</p>

                <div className="max-md:w-full flex flex-wrap justify-center gap-5">
                    {
                        footer_data.map((data, ind)=>{
                            return(
                                <Link href={data.link} key={ind} className="text-[#626262] text-[16px] ">{data.title}</Link>
                            )
                        })
                    }
                </div>
            </div>

        </footer>
    )
}

export default Footer