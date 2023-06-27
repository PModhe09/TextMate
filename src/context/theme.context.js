import { createContext,useState } from "react";

export const ScreenContext=createContext();

export const ScreenProvider=({children})=>{
    const [isDarkMode,setDarkMode]=useState(false);

     return(
        <ScreenContext.Provider value={[isDarkMode,setDarkMode]}>
            {children}
        </ScreenContext.Provider>
     );
}
