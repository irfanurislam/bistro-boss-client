import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {

   const  {googleSignIn} = useContext(AuthContext)
   const location = useLocation()
   const navigate = useNavigate()
  
   const from = location?.state?.from?.pathname || '/'

const handleGoogleSignIn =() =>{
    googleSignIn()
    .then(result =>{
        const loggedInUser = result.user
        console.log(loggedInUser)
      
        const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
                fetch('http://localhost:5000/users',{
                  method: 'POST',
                   headers: {
                    'content-type': 'application/json'
                   },
                   body: JSON.stringify(saveUser)
                })
                .then( res => res.json() )
                .then(data =>{
                  console.log(data)
                  if(data.insertedId){
                    
                   navigate(from,{replace:true})
                  }
                })




       
    })
    .catch(error =>{
        console.log(error.message)
    })
}


  return (
    <div>
      <div className="divider">OR</div>
     <div className="w-full text-center my-8">
     <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
       <FaGoogle />
      </button>
     </div>
    </div>
  );
};

export default SocialLogin;
