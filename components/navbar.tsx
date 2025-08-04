'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {navbar_data} from '@/constant/index'
import MobileSidebar from '@/components/mobile_sidebar'
import { FaAngleRight } from "react-icons/fa6";


const Navbar = () => {
    const [is_scroll, setIs_scroll] = useState(false)
    const [show_side_nav, setShow_side_nav] = useState(false)
    
    useEffect(() => {

        const handleScroll = () => {
            setIs_scroll(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div className='w-full '>
            {/* <section className={show_side_nav ? ` show-side-bar`: 'hide-side-bar'}>
                <MobileSidebar setShow_side_nav={setShow_side_nav} />
            </section> */}

            {/* <div className="fixed mx-auto overflow-hidden top-0 right-0 h-[100vh] w-[90%] -z-10 translate-y-[-80%] ">
                <Image src={'/header-bg-color.png'} alt='header bg color' fill={true} objectFit='contain'  className='w-full' />
            </div> */}
            
            <nav className={`navbar px-[0.75rem] py-[1rem] md:px-[2rem] bg-green-500 ${is_scroll ? 'scrolled ' : 'default '}`}>
                <Link href={'#top'} className="xl:w-[250px] flex justify-start items-end ">
                    <p className="text-2xl md:text-3xl font-outfit font-[500] ">David</p>
                    <span className="relative overflow-hidden h-[10px] w-[10px] mb-[5px]">
                        <Image src={'/icons/red-dot.png'} alt='red-dot' layout='fill' objectFit='cotain' />
                    </span>
                </Link>

                <span className={`nav-links hidden md:flex max-md:hidden ${is_scroll ? 'scrolled' : 'default'}`}>

                    {
                        navbar_data.map((data:{title:string, id:string}, ind:number)=>{
                            const {title, id} = data
                            return(
                                <Link key={ind} href={id} className="text-[#2F2F2F] font-medium text-[13px] font-mont">{title}</Link>
                            )
                        })
                    }
                </span>

                <span className=" xl:w-[250px] sm:flex items-center justify-end gap-5 sm:gap-3 ">
                    {/* <span className="relative overflow-hidden h-[20px] w-[20px] md:h-[22px] md:w-[24px]  hover:cursor-pointer">
                        <Image src={'/icons/moon.png'} alt='moon' layout='fill' objectFit='contain' />
                    </span> */}

                    <Link href={'#contact'} className="hidden lg:flex items-center gap-2 px-10 py-2 border border-gray-500 rounded-full ml-4 font-mont">Contact 
                        <FaAngleRight className={'size-[15px] text-gray-600 '} />
                    </Link>

                    <button className="md:hidden relative overflow-hidden flex h-[20px] w-[20px] md:h-[22px] md:w-[24px] " onClick={()=> setShow_side_nav(!show_side_nav)}>
                        <Image src={!show_side_nav ? '/icons/menu-black.png' : '/icons/close-black.png'} alt='menu' objectFit='contain' layout='fill' />
                    </button>
                </span>
            </nav>
            
        </div>
    )
}

export default Navbar