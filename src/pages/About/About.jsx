import React, { useEffect } from 'react';
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({
            duration:1500
        });
        Aos.refresh();
      }, []);
    return (
        

        <div className='abo pt-5 pb-20 '>
            <div className='flex flex-col-reverse lg:flex-row justify-between mx-auto max-w-5xl gap-10 lg:gap-20 md:gap-10 items-center lg:pt-[15%]  '>
                <div className='w-[70%]  font-sans font-medium lg:text-xl md:text-xl text-[16px] text-justify' data-aos="zoom-out" data-aos-duration="3000"><p>We provide an intuitive platform designed for individuals and teams to streamline tasks, collaborate seamlessly, and boost productivity. With user-centric design, robust security measures, and continuous innovation, we prioritize simplicity, security, and staying ahead of your productivity needs. Join us today and transform the way you manage tasks.</p></div>
                <div className='w-[30%] font-sans font-extrabold text-2xl md:text-4xl lg:text-4xl' data-aos="zoom-out" data-aos-duration="3000">ABOUT US</div>
            </div>
            
        </div>
        
    );
};

export default About;