'use client'
import React from 'react'
import Link from 'next/link'
import {navbar_data} from '@/constant/index'


const MobileSidebar = ({setShow_side_nav}:{setShow_side_nav: React.Dispatch<React.SetStateAction<boolean>>;}) => {
    
    return (
        <div className="md:hidden w-full h-screen flex flex-col py-[20px] px-[15px] absolute right-0 top-0 z-50 bg-white gap-7">
            <header className="w-full h-[30px] flex items-center justify-end cursor-pointer" >

            </header>
            <main className="w-full flex flex-col gap-3">
                {
                    navbar_data.map((data:{title:string, icon: string, id: string}, ind:number)=>{
                        const {title, id} = data
                        return(
                            <Link key={ind} href={id} className="text-[#2F2F2F] text-[18px]" onClick={()=> setShow_side_nav(false)}>{title}</Link>
                        )
                    })
                }
            </main>
        </div>
    )
}

export default MobileSidebar