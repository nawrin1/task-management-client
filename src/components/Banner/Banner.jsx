
import img1 from '../../assets/ban.png'
import './Banner.css'


const Banner = () => {
    
    return (
        <div className="ban ">
             <h2 className='text-xl ml-28 lg:text-4xl md:text-4xl  font-sans font-bold text-center relative top-[30%] lg:top-[40%] md:top-[30%]  lg:ml-[400px] md:ml-[300px]'>"Turning Dreams into Deadlines <br></br>One Task at a Time."</h2>
            <button className='btn btn-sm bg-green-600 relative top-[35%] ml-[210px] lg:top-[50%] md:top-[40%]  lg:ml-[760px] md:ml-[480px] text-white '>Let's Explore</button> 
           
            {/* <img src={img1} alt="" /> */}
            
            
        </div>
    );
};

export default Banner;