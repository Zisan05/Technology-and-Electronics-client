import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navItem = <>
    <li><NavLink to = "/">Home</NavLink></li>
    <li><NavLink to = "/">Add Product</NavLink></li>
    <li><NavLink to = "/">My Card</NavLink></li>
    <li><NavLink to = "/register">Register</NavLink></li>
    <li><NavLink to = "/">Login</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-orange-100">
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
          <a className="btn btn-ghost normal-case text-xl font-bold">DIGIYALTECH</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItem}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default NavBar;