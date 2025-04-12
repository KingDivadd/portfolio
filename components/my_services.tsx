import { service_data } from '@/constant'
import React from 'react'
import Image from 'next/image'

const MyServices = () => {
    return (
        <main id='services' className="w-full px-5 lg:px-8 xl:px-[8%] py-10 scroll-mt-20  flex flex-col items-center ">
            <p  className="text-lg text-[#242424] font-ovo h-[27px] ">What i offer</p>

            <p className="text-4xl md:text-5xl  mt-[12px] text-[#242424] h-[68px]  font-ovo ">My Services</p>

            <p className="text-[18px] mt-[25px] w-full sm:w-[764px] text-center text-[#565656]">I provide Full-Stack Development services, building scalable web applications with intuitive UIs, robust backends, and seamless integrations using modern technologies</p>


            <section className="mt-[54px] w-full  temp-1 ">
                {
                    service_data.map((data, ind)=>{
                        return(
                            <div key={ind} className="min-w-[255.41px] min-h-[260px] rounded-[8px] border border-[#D8D8D8] flex flex-col px-[25px] py-[35px] ">
                                <span className={`relative overflow-hidden h-[50px] w-[50px] `}>
                                    <Image src={data.icon} alt='' layout='fill' objectFit='contain' />
                                </span>
                                
                                <p className="mt-[24px] font-[500] font-outfit text-[#494949] text-[18px]">{data.title}</p>

                                <p className="mt-[5px] font-[400] font-outfit text-[#797979] text-[13px] ">{data.description}</p>

                            </div>
                        )
                    })
                }
            </section>
        </main>
    )
}

export default MyServices