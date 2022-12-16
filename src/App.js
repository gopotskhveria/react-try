import React, { useEffect, useMemo, useState } from "react";
import "./styles/app.css"
import AppRoute from "./components/AppRoute";
import { routes } from "./router";


import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthContext } from "./context";

 function App()  {

    const [isAuth, setIsAuth] = useState(false)

    return  (
       <AuthContext.Provider  value={{
          isAuth,
          setIsAuth
       }}> 

       <BrowserRouter> 
       <Navbar/>  
       <AppRoute/>
      </BrowserRouter>
      </AuthContext.Provider>

    )
}

export default App; 


