'use client'
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const access_key = process.env.NEXT_PUBLIC_CONTACT_ACCESS_KEY

const Contact = () => {
    const [user_input, setUser_input] = useState({name: '', email: '', message: ''})
    const [result, setResult] = React.useState('')
    

    function handle_change(e:any) {
        const name = e.target.name
        const value = e.target.value
        setUser_input({...user_input, [name]:value})
    }
    
    const handle_submit = async (event:any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", access_key!);
    
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            setResult("Form Submitted Successfully");
            setTimeout(() => {
                setResult('')
                setUser_input({name: '', email: '', message: ''})
            }, 5000);
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id='contact' className="w-full px-5 lg:px-8 xl:px-[8%] py-10 scroll-mt-20  flex flex-col items-center ">
            <p className="text-4xl md:text-5xl mt-[12px] text-[#242424] h-[68px]  font-ovo ">Get in touch</p>

            <p className="text-[18px] mt-[25px] max-w-2xl text-center text-[#565656]">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <form onSubmit={handle_submit} className="w-full mt-[57px] flex flex-col items-center">

                <div className="w-full md:max-w-[727px] temp-350  ">
                    <input type="text" placeholder='Enter your name' name='name' value={user_input.name} onChange={handle_change} className="input h-[54px] md:h-[64px]" />

                    <input type="text" placeholder='Enter your email' name='email' value={user_input.email} onChange={handle_change} className="input h-[54px] md:h-[64px]" />
                </div>

                <textarea name="message" id="message" value={user_input.message} placeholder='Enter your message' onChange={handle_change} className="mt-[45px] w-full md:max-w-[727px] textarea h-[150px] sm:h-[215px]"></textarea>

                <button className=' mt-[74px] w-[204px] h-[54px] sm:h-[64px] bg-[#202020] rounded-full flex items-center justify-center text-[#ffffff] text-[16px] gap-2' type='submit' >
                Submit now
                <span className="h-full flex items-center justify-center pt-[1.5px]">
                    <span className={`relative overflow-hidden h-[10.72px] w-[16.36px] `}>
                        <Image src={'/icons/right-arrow-white.png'} alt='' layout='fill' objectFit='contain' />
                    </span>
                </span>
                </button>
            </form>

            <p className="text-[18px] mt-[35px] text-[#565656] w-full text-center flex justify-center ">{result}</p>



        </section>
    )
}

export default Contact