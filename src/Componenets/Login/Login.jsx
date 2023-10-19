import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const [ErrorMsg , setErrorMsg] = useState('')
   
const location = useLocation();
     const navigate = useNavigate();

    const {loginUser,GoogleUser} = useContext(AuthContext);

    const handleGoogle = () =>{

        GoogleUser()
        .then(result => {
          navigate(location?.state ? location.state : "/");
             console.log(result.user)
             Swal.fire(
                  'success',
                  'Successfully added your account',
                  'success'
                )
        })
        .catch(error => {
             console.log(error.message)
             
        })
   }


    const handleLogin = e =>{

         

        e.preventDefault()


   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(email,password);
      
       loginUser(email,password)
       .then(result => {
          navigate(location?.state ? location.state : "/");
        console.log(result.user)
        Swal.fire(
             'success',
             'Successfully added your account',
             'success'
           )
   })
   .catch(error => {
        console.log(error.message)
        setErrorMsg("Your Email or Password is invalid please check your Email or Password")
   })


    }


    return (
        <div>
             <form onSubmit={handleLogin} className="w-[250px] md:w-[500px] lg:w-[500px] mx-auto">
                   
                    
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Email</span>
                         </label>
                         <input
                              type="email"
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
                              name="password"
                              placeholder="Password"
                              className="input input-bordered"
                              
                         />
                    </div>
                        
                     
                    <p>first time in this website please go to <Link className="text-blue-600" to ={'/register'}>Register</Link> </p>
                              {
                                   ErrorMsg && <p className=" text-red-600">
                                        {ErrorMsg}
                                   </p>
                              }
                    
                    <div className="form-control mt-6">
                         <button className="btn bg-orange-400 font-bold text-black">Login</button>
                         
                    </div>
               </form>

               <div className="flex justify-center">
               <button onClick={handleGoogle} className="btn bg-blue-500 font-bold text-white px-[75px] md:px-[200px] lg:px-[200px]">Google login</button>
               </div>
        </div>
    );
};

export default Login;
