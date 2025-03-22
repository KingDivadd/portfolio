import React from "react";
import Navbar from "@/components/navbar";
import Header from '@/components/header'
import AboutMe from '@/components/about_me'
import MyServices from '@/components/my_services'
import MyWork from '@/components/my_work'
import Contact from '@/components/contact'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <div className="w-screen h-screen ">
      <Navbar />
      <Header />
      <AboutMe />
      <MyServices />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}
