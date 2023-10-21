import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import {  useState } from "react";

const Root = () => {
    const [theme,setTheme] = useState(true);


     const handleTheme = () => {
        if(theme){
            setTheme(false);
        }
        else{
            setTheme(true);
        }
         
     } 
     
    return (
        <div>
            <NavBar></NavBar>
           {
            theme ? ( <div className="bg-white relative">
            <button onClick={handleTheme} className="px-[8px] py-[5px] bg-black text-white rounded-[4px] absolute -top-[24px] md:-top-[24px] lg:-top-[70px] left-[210px] md:left-[660px] lg:left-[1050px]">Dark Mood</button>
        <Outlet></Outlet>
        </div>) : ( <div className="bg-black relative">
                <button onClick={handleTheme} className="px-[8px] py-[5px] bg-white text-black rounded-[4px] absolute -top-[24px] md:-top-[24px] lg:-top-[70px] left-[210px] md:left-[660px] lg:left-[1050px]">Light Mood</button>
            <Outlet></Outlet>
            </div>)
           }
        </div>
    );
};

export default Root;