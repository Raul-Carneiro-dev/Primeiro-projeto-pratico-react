import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserStore = ({children}) => {

    const [button, setButton] = useState(true);


    return(
        <UserContext.Provider value={{button, setButton}}>
           {children}
        </UserContext.Provider>
    )
}