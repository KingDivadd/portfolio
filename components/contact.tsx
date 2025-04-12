'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'

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
        <motion.section 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
        
            id='contact' className="relative w-full px-5 lg:px-8 xl:px-[8%] py-10 scroll-mt-20  flex flex-col items-center ">
            <div className="absolute mx-auto overflow-hidden bottom-[50px] right-0 h-[80vh] w-full -z-10">
                <Image src={'/footer-bg-color.png'} alt='header bg color' fill={true} objectFit='contain'  className='w-full' />
            </div>

            <motion.p  
                initial={{y: -20,  opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{delay: .15, duration: 0.25}}
                
                className="text-lg text-[#242424] font-ovo h-[27px] ">Connect with me</motion.p>

            <motion.p 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: .35, duration: 0.25}}

                className="text-4xl md:text-5xl mt-[12px] text-[#242424] h-[68px]  font-ovo ">Get in touch</motion.p>

            <p className="text-[18px] mt-[25px] max-w-2xl text-center text-[#565656]">I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.</p>

            <motion.form 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: .45, duration: 0.3}}

                onSubmit={handle_submit} className="w-full mt-[57px] flex flex-col items-center">

                <div className="w-full md:max-w-[727px] temp-350  ">
                    <motion.input 
                        initial={{x:-50,  opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: .55, duration: 0.4}}

                        type="text" placeholder='Enter your name' name='name' value={user_input.name} onChange={handle_change} className="input h-[54px] md:h-[64px]" />

                    <motion.input 
                        initial={{x:50,  opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        transition={{delay: .55, duration: 0.4}}

                        type="text" placeholder='Enter your email' name='email' value={user_input.email} onChange={handle_change} className="input h-[54px] md:h-[64px]" />
                </div>

                <motion.textarea 
                    initial={{y:100,  opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{delay: .65, duration: 0.4}}

                    name="message" id="message" value={user_input.message} placeholder='Enter your message' onChange={handle_change} className="mt-[45px] w-full md:max-w-[727px] textarea h-[150px] sm:h-[215px]"></motion.textarea>

                <motion.button 
                    initial={{y:50,  opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{delay: .65, duration: 0.4}}

                className=' mt-[74px] w-[204px] h-[54px] sm:h-[64px] bg-[#202020] rounded-full flex items-center justify-center text-[#ffffff] text-[16px] gap-2' type='submit' >
                Submit now
                <span className="h-full flex items-center justify-center pt-[1.5px]">
                    <span className={`relative overflow-hidden h-[10.72px] w-[16.36px] `}>
                        <Image src={'/icons/right-arrow-white.png'} alt='' layout='fill' objectFit='contain' />
                    </span>
                </span>
                </motion.button>
            </motion.form>

            <p className="text-[18px] mt-[35px] text-[#565656] w-full text-center flex justify-center ">{result}</p>



        </motion.section>
    )
}

export default Contact