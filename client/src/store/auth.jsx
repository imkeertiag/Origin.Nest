import { createContext, useContext , useEffect, useState} from "react";
import { BACKENDURL } from "../../important";


export const AuthContext = createContext() ;

export const AuthProvider = ({children}) => {

    const [token , setToken] = useState(localStorage.getItem("token"));
    const [user  , setUser] = useState(null);
    const [services , setServices] = useState([]) ;

    const storetokeninLS = (serverToken) => {
        setToken(serverToken); //--> new line
         return localStorage.setItem("token" , serverToken);
        
    };

    let isLoggedIn = !!token ;
    console.log("isLoggedIn" , isLoggedIn);
    
    // tackling the logged out functionality
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token") ;
        setUser(null);
    };

    // jwt authentication - to get currently logged in user data....
    const userAuthentication = async () =>{
        try {
            const response = await fetch(`${BACKENDURL}/api/auth/user`,{
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}` ,
                },
            });

            if(response.ok){
                const data = await response.json();
                console.log("userData" , data.userData);
                setUser(data.userData); // -> updateed
            }else {  // ->added else wala pard
                console.error("Failed to fetch user data", response.statusText);
            }

        } catch (error) {
            console.error("Error fetching user data");
        }
    };

// to fetch the services data from the database
    const getServices = async () => {
        try {
            const response = await fetch(`${BACKENDURL}/api/data/service` , {
                method: "GET" ,
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error: ${error}`);
        }
    };

    useEffect(()  => { 
        getServices();
        if(token){
        userAuthentication();
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ isLoggedIn ,storetokeninLS , LogoutUser ,user , services }}>
       {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
     if(!authContextValue){
        throw new Error("useAuth used outside of the provider");
     }
     return authContextValue ;
};