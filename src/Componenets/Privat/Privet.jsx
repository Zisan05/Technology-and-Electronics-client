import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const Privet = ({children}) => {
    const {user , Loading} = useContext(AuthContext)

    if(Loading){
       return <span className="loading loading-spinner loading-lg"></span>
    }
  

   if(user){
       return children;
   }
   return (
       <Navigate to = {'/login'}></Navigate>
   );
};

export default Privet;