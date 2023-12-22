import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import './Profile.css'
import { Watch } from "react-loader-spinner";

const Profile = () => {
    const {user}=useContext(AuthContext)
    console.log(user,"from profile")
    if (!user){
        return    <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
        
    }
    return (
        <div className=" bg-slate-600">
            
            <div className="back min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="text-center mb-6">
          <img
            src={user.photoURL}
            alt="Profile Picture"
            className="rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold font-sans">{user.displayName}</h2>
         
        </div>

        

        <div className="mb-6">
          <h3 className="text-xl font-semibold font-sans mb-2">User Information:</h3>
          <p className="text-gray-600 font-medium font-sans text-lg">
            Email: {user.email}
            
          </p>
        </div>

       
      </div>
    </div>
            
        </div>
    );
};

export default Profile;