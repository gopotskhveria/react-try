import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import { publicRouter, privateRoutes } from "../router";

const AppRoute = () => { 
    const {isAuth, setIsAuth} = useContext(AuthContext)
 
    return ( 
        isAuth 
        ? 
        <Routes>  
          {privateRoutes.map( r => 
              <Route  path={r.path} element={<r.page/>}/> 
          )
          }  
        </Routes>
         :
        <Routes>  
        {publicRouter.map( r => 
            <Route  path={r.path} element={<r.page/>}/> 
        )
        } 
        </Routes>
    )

}

export default AppRoute;