import  { createContext, useContext, useState } from 'react'; 


const AuthContext = createContext({ 
        isAuthorized: null,
        setAuthStatus: null
});

export const AuthContextProvider = ({ children }) => {

    const [isAuthorized, setAuthStatus] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                isAuthorized,
                setAuthStatus,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
   
    const authContext =  useContext(AuthContext);

    const { isAuthorized, setAuthStatus } = authContext;

    return { isAuthorized, setAuthStatus };

}