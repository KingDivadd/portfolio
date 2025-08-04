'use client'
import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Header from '@/components/header'
import AboutMe from '@/components/about_me'
import MyServices from '@/components/my_services'
import MyWork from '@/components/my_work'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { navbar_data } from "@/constant";
import Link from "next/link";
import Image from "next/image"


export default function Home() {
  const [show_mobile_nav, setShow_mobile_nav] = useState(false)

  function handleMenuHide() {
    if (show_mobile_nav) {
      setShow_mobile_nav(false)
    }
  }

  // Handler to prevent clicks inside mobile sidebar from closing it
    const handleMobileMenuClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

  return (
    <div className="w-screen h-screen relative " onClick={handleMenuHide}>
      <Navbar show_mobile_nav={show_mobile_nav} setShow_mobile_nav={setShow_mobile_nav} />
      <Header />
      <AboutMe />
      <MyServices />
      <MyWork />
      <Contact />
      <Footer /> 

      <span className={`md:hidden flex flex-col items-center justify-center gap-2 w-full min-h-[300px] bg-[#202020] ease-in-out duration-700 fixed rounded-b-lg left-0 ${show_mobile_nav ? "top-0":"top-[-500px]"} z-50`} onClick={handleMobileMenuClick}>
        <span className="w-full px-5 flex items-end justify-start">
          <p className="text-md font-medium text-white font-mont">David Iroegbu</p>
          <span className="relative overflow-hidden h-2 w-2 mb-2 ">
              <Image src={'/icons/red-dot.png'} alt='red-dot' layout='fill' objectFit='cotain' />
          </span>

        </span>
        {
          navbar_data.map((data,ind)=>{
            return(
              <Link href={data.id} key={ind} className=" py-2 px-10 text-white text-sm  text-center " onClick={()=> {
                setTimeout(() => {
                  setShow_mobile_nav(!show_mobile_nav)
                }, 250);
              }}>{data.title}</Link>
            )
          })
        }
      </span>
    </div>
  );
}
