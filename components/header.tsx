'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <main className="w-full px-5 h-screen flex flex-col items-center justify-center ">
            <span className={`relative overflow-hidden h-[158px] w-[158px] `}>
                <Image src={'/profile-img.png'} alt='' layout='fill' objectFit='contain' />
            </span>

            <span className="flex items-center justify-center gap-[11px] mt-[30px]">
                <p className="text-[#242424]  font-ovo text-xl md:text-2xl ">Hi! I'm David Iroegbu</p>
                <span className={`relative overflow-hidden h-[40px] w-[28px] `}>
                    <Image src={'/icons/hand-icon.png'} alt='' layout='fill' objectFit='contain' />
                </span>
            </span>

            <p className="text-[#242424] mt-[30px] max-w-3xl font-ovo text-3xl sm:text-6xl lg:text-[66px] align-middle text-center ">fullstack web developer 
            based in Nigeria.</p>

            <p className="text-[#242424] mt-[15px] max-w-2xl font-ovo text-[20px] leading-[35px] align-middle text-center ">I am a frontend developer from California, USA with 10 years of experience in multiple 
            companies like Microsoft, Tesla and Apple.</p>

            <span className="mt-[35px]  flex flex-wrap items-center justify-center gap-[30px]  ">
                <Link href={'#contact'} className="w-[226px] h-[54px] sm:h-[64px] bg-[#202020] flex items-center justify-center gap-[10px] text-[#FFFFFF] text-[18px] rounded-full ">
                    Connect with me 
                    <span className="h-full flex items-center justify-center pt-[0.5px]">
                        <span className={`relative overflow-hidden h-[10.72px] w-[16.36px] `}>
                            <Image src={'/icons/right-arrow-white.png'} alt='' layout='fill' objectFit='contain' />
                        </span>
                    </span>
                </Link>

                <Link href={''} className="w-[204px] h-[54px] sm:h-[64px] border border-[#A7A7A7] flex items-center justify-center gap-[10px] text-[#242424] text-[18px] rounded-full ">
                    my resume
                    <span className="h-full flex items-center justify-center pt-[0.5px]">
                        <span className={`relative overflow-hidden h-[20px] w-[20px] `}>
                            <Image src={'/icons/download-icon.png'} alt='' layout='fill' objectFit='contain' />
                        </span>
                    </span>
                </Link>
            </span>


        </main>
    )
}

export default Header