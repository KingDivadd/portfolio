'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"


const Header = () => {
    return (
        <header className="w-full px-5 h-screen flex flex-col items-center justify-center ">
            <motion.span 
                initial={{scale:0}}
                whileInView={{scale:1}}
                transition={{duration: 0.6, type: 'spring', stiffness:'100'}}
                className={`relative overflow-hidden h-[158px] w-[158px] mt-5 sm:mt-20 rounded-full `}>
                
                <Image src={'/profile-img-2a.jpg'} alt='' layout='fill' objectFit='cover' />
            </motion.span>

            <motion.span 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.4, delay: 0.15 }}
                
                className="flex items-center justify-center gap-[11px] mt-[20px] ">
                <p className="text-[#242424]  font-ovo text-xl md:text-2xl ">{"Hi! I'm David Iroegbu"}</p>
                <span className={`relative overflow-hidden h-[40px] w-[28px] `}>
                    <Image src={'/icons/hand-icon.png'} alt='' layout='fill' objectFit='contain' />
                </span>
            </motion.span>

            <motion.p 
                initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.4, delay: 0.15 }}
                
                className="text-[#242424] mt-[30px] sm:mt-[20px] max-w-3xl font-ovo text-3xl sm:text-6xl lg:text-[66px] align-middle text-center  ">Full-stack web developer 
            based in Nigeria.</motion.p>

            <motion.p 
                initial={{opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.4, delay: 0.35 }}
                
                className="text-[#242424] mt-[15px] max-w-2xl font-ovo text-[20px] leading-[35px] align-middle text-center ">I am a full-stack developer from Osun, Nigeria with years of experience working on various projects for companies like OHealth Telemedicine, G2S Global Investment, Labspace FUTA, etc.</motion.p>

            <span className="mt-[25px] sm:mt-[35px]  flex flex-wrap items-center justify-center gap-[20px] sm:gap-[30px]   ">
                <motion.a 
                    initial={{y:30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.5 }}
                    
                    href={'#contact'} className="w-[226px] h-[54px] sm:h-[64px] bg-[#202020] flex items-center justify-center gap-[10px] text-[#FFFFFF] text-[18px] rounded-full ">
                    Connect with me 
                    <span className="h-full flex items-center justify-center pt-[0.5px]">
                        <span className={`relative overflow-hidden h-[10.72px] w-[16.36px] `}>
                            <Image src={'/icons/right-arrow-white.png'} alt='' layout='fill' objectFit='contain' />
                        </span>
                    </span>
                </motion.a>

                <motion.a 
                    initial={{y:30, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.6 }}
                
                    href={'/irogbu_david_resume.pdf'} download={'irogbu_david_resume.pdf'} className="w-[204px] h-[54px] sm:h-[64px] border border-[#A7A7A7] flex items-center justify-center gap-[10px] text-[#242424] text-[18px] rounded-full ">
                    My Resume
                    <span className="h-full flex items-center justify-center pt-[0.5px]">
                        <span className={`relative overflow-hidden h-[20px] w-[20px] `}>
                            <Image src={'/icons/download-icon.png'} alt='' layout='fill' objectFit='contain' />
                        </span>
                    </span>
                </motion.a>

            </span>


        </header>
    )
}

export default Header