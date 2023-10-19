import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

const {CreateUser} = useContext(AuthContext);

const [ErrorMsg , setErrorMsg] = useState('') 

const navigate = useNavigate()


const handleRegister = e => {
    e.preventDefault()
   const form = e.target;
   const name = form.name.value;
   const email = form.email.value;
   const photo = form.photo.value;
   const password = form.password.value;
   
   console.log(name,password,photo,email)

   if (password.length < 6) {
    Swal.fire(
        'Error',
        'Please enter atleast 6 length password',
        'error'
        
      )
    return;
}

  else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password))
  {
    Swal.fire(
        'Error',
        'Please enter atleast one special and upper case character in password',
        'error'
        
      )
      return;
    }
     
   CreateUser(email,password)
   .then(result => {
    navigate(location?.state ? location.state : "/");
    console.log(result.user)
    Swal.fire(
        'success',
        'Successfully added your account',
        'success'
        
      )

   })
   .catch( error => {
    console.log(error.message)
    setErrorMsg(error.message)
   } )

     
}

    return (
        <div>

            <form onSubmit={handleRegister}
               
                className="w-4/5 md:w-1/2 mx-auto"
            >
                <div className="form-control">
                    <h1 className="text-[30px] text-center text-orange-400 font-bold">Register Page</h1>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered"
                        required
                    />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-bordered"
                        required
                    />
                   
                </div>
                <div className="form-control">
                    <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" name="terms" id="" required />
                        <p>
                            Please accept our
                            <a
                                className="hover:underline hover:text-red-500"
                                href="#"
                            >
                                terms and conditions
                            </a>
                        </p>
                    </div>
                </div>
                <h3>
                </h3>

                <p className="mt-[10px]">Already Have an account please<Link className="text-blue-500" to = {'/login'}> Login</Link></p>
                 {
                                   ErrorMsg && <p className=" text-red-600">
                                        {ErrorMsg}
                                   </p>
                              }              

                <div className="form-control mt-6">
                    <button className="btn text-white bg-[#ff6900]">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;