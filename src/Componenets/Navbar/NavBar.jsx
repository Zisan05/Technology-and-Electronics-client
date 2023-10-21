import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {

  const {LogoutUser,user} = useContext(AuthContext)


  const handleLogout = () =>{
    LogoutUser()
    .then(result => {
      console.log(result)
      Swal.fire(
           'success',
           'Successfully logout from your account',
           'success'
         )
  })
  .catch(error => {
    console.log(error)
  })
  
  }


    const navItem = <>
    <li><NavLink to = "/">Home</NavLink></li>
    <li><NavLink to = "/addproduct">Add Product</NavLink></li>
    <li><NavLink to = "/addcard">My Card</NavLink></li>
    <li><NavLink to = "/register">Register</NavLink></li>
    <li><NavLink to = "/login">Login</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-orange-100 h-[100px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItem}
            </ul>
          </div>
          <span><img className="w-[50px] h-[50px] rounded-[50%]" src="https://i.ibb.co/DzRS673/digital-tech-vector-business-logo-template-concept-illustration-gear-electronic-factory-sign-cog-whe.png" /></span>
          <a className="btn btn-ghost normal-case text-xl font-bold text-sky-400">DIGITALTECH</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
        {
      user ?<div className="md:flex lg:flex  gap-[10px]"><p className="my-auto font-bold text-[15px] ">{user.displayName}</p><img className="h-[50px] w-[50px] rounded-[50%]" src={user.photoURL}></img><button className="btn bg-orange-400" onClick={handleLogout}>Sign out</button></div>  :
      <button className="btn bg-orange-400"><Link to ={'/login'}>Log in </Link></button>
    }
        </div>
      </div>
    );
};

export default NavBar;