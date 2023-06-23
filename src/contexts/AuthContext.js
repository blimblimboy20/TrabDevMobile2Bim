import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

 export function AuthProvider({ children }){

    const [logado, setlogado] = useState(false);

    const [loading ,setloading] =useState(false);

    function signIN(){
        return new Promise(resolve =>{
            setloading(true);
            setTimeout(function(){
                    setlogado(true);
                    setloading(false)
            }, 2000)
        })
    }

    return(
        <AuthContext.Provider value ={{logado , signIN,loading}} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
