
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "../../FireBase.config";



export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {

    // register
    const CreateUser = (email,password) =>{
    
      return createUserWithEmailAndPassword(auth,email,password);
}

    const authInfo = {CreateUser}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;