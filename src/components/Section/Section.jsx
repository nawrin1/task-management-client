import './Section.css'
import { PiStudentFill } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
const Section = () => {
    useEffect(() => {
        Aos.init({
            duration:1500
        });
        Aos.refresh();
      }, []);
    return (
        <div className="sec text-center min-h-screen mt-20  ">
             <h2 className='mt-20 mb-6 text-center text-4xl font-sans font-semibold'>Who Can Use</h2>
            <div className='max-w-4xl  flex flex-col lg:flex-row md:flex-row gap-4 lg:gap-10 md:gap-7  justify-center mx-auto mt-14 mb-6 font-semibold text-2xl place-content-center place-items-center '>
           
            <div className='w-[150px] h-[100px]  lg:w-[300px] lg:h-[200px] md:w-[300px] md:h-[200px] p-4 bg-emerald-200 rounded-xl flex flex-col  justify-center place-items-center' data-aos="fade-up" data-aos-duration="4000"><div><RiComputerLine></RiComputerLine>
                </div><div><p >Developers</p></div></div>
            <div className='w-[150px] h-[100px]  lg:w-[300px] lg:h-[200px] md:w-[300px] md:h-[200px] p-4 bg-emerald-200 rounded-xl flex flex-col  justify-center place-items-center 'data-aos="fade-up" data-aos-duration="4000"><div><GrUserWorker></GrUserWorker></div><div><p>Bankers</p></div></div>
            <div className='  w-[150px] h-[100px]  lg:w-[300px] lg:h-[200px] md:w-[300px] md:h-[200px] p-4 bg-emerald-200 rounded-xl flex flex-col  justify-center place-items-center'data-aos="fade-up" data-aos-duration="4000"><div><PiStudentFill></PiStudentFill></div><div><p>Students</p></div></div>
            </div>
            
        </div>
    );
};

export default Section;