
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/error.jpg'
const Error = () => {
    const navigate = useNavigate();
    const handleGoBack=()=>{
        navigate('/')

    }
    return (
        <div className='flex flex-col justify-center items-center '>
            <img src={img1} className="h-[300px] lg:h-[450px] md:h-[300px]"alt="" />
            <button onClick={handleGoBack}className='btn btn-outline text-2xl '>Home</button>
            
        </div>
    );
};

export default Error;