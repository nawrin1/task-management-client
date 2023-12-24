
import { Link } from 'react-router-dom';
import img1 from '../../assets/ban.png'
import './Banner.css'
import { useContext, useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { AuthContext } from '../../provider/AuthProvider';

const Banner = () => {
    const {user}=useContext(AuthContext)
    useEffect(() => {
        Aos.init({
            duration:1500
        });
        Aos.refresh();
      }, []);
    
    return (
        <div className="ban ">
             <h2 className='text-xl ml-28 lg:text-4xl md:text-4xl  font-sans font-bold text-center relative top-[30%] lg:top-[40%] md:top-[30%]  lg:ml-[400px] md:ml-[300px]' data-aos="zoom-in" data-aos-duration="3000">"Turning Dreams into Deadlines <br></br>One Task at a Time."</h2>
             {user?<><button className='btn btn-sm bg-green-600 relative top-[35%] ml-[210px] lg:top-[50%] md:top-[40%]  lg:ml-[760px] md:ml-[480px] text-white ' data-aos="zoom-out" data-aos-duration="4000">Let's Explore</button></>:<Link to='/login'><button className='btn btn-sm bg-green-600 relative top-[35%] ml-[210px] lg:top-[50%] md:top-[40%]  lg:ml-[760px] md:ml-[480px] text-white ' data-aos="zoom-out" data-aos-duration="4000">Let's Explore</button> </Link>}
            
           
            {/* <img src={img1} alt="" /> */}
            
            
        </div>
    );
};

export default Banner;