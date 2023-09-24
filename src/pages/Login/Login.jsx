import React, { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
 
 const [disabled,setDisabled] = useState(true)

 const {signIn} = useContext(AuthContext)
 const location = useLocation()
 const navigate = useNavigate()

 const from = location?.state?.from?.pathname || '/'


    useEffect(() =>{
        loadCaptchaEnginge(6); 
    },[])



  const handleLogin = (event) =>{
    event.preventDefault()
    const form = event.target 
    const email = form.email.value 
    const password = form.password.value
    console.log(email,password)
    signIn(email,password)
    .then(result =>{
        const user = result.user
        console.log(user)
        Swal.fire({
          title: 'User Login Success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from,{replace:true})
    })
    .catch(error =>{
        console.log(error.message)

    })
  }

  const handleValidateCaptcha = (e) =>{
       const user_captcha_value = e.target.value
       console.log(user_captcha_value)
       if(validateCaptcha(user_captcha_value)){
          setDisabled(false)
       }
       else{
           setDisabled(true)
       }
  }


  return (
   <>
   <Helmet>
    <title>Bistro boss | Login In</title>
   </Helmet>
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2  max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input
                onBlur={handleValidateCaptcha}
                  type="text"
                
                  name="captcha"   
                  placeholder="type the text above"
                  className="input input-bordered"
                />
               {/* <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">validate</button> */}
              </div>
              {/* make button disbale whilr enable  */}
              <div className="form-control mt-6">
               
                <input disabled={false} type="submit" value="login" className="btn btn-primary" />
              </div>
            </form>
            <p className="text-center"><small>new Here ? <Link className="link btn-link" to='/signup'>create a account</Link></small></p>
           
        
          <SocialLogin></SocialLogin>
          
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
