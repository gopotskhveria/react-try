
import React, { useContext } from "react";
import { BrowserRouter, Route, Link, Routes} from "react-router-dom";
import { AuthContext } from "../context";
import MyButton from "./UI/button/MyButton";

const Navbar = () => {

    const {isAuth,setIsAuth} = useContext(AuthContext)
    const logout = () => {
        setIsAuth(false)
    }

    return (
        <div className="navbar"> 
            <Link to="/about" className="navbar__items">About</Link>
            <Link to="/posts" className="navbar__items">Posts</Link>
            <MyButton onClick={logout} className="navbar__items"> 
             {isAuth
              ? "Log out"
              : "Log in"
             } 
             </MyButton>
       </div> 
    )
}

export default Navbar