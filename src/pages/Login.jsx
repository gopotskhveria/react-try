import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

     const loginFunc = (event) => {
          event.preventDefault()
          setIsAuth(true)
     }

     return (
        <div> 
            <div>Login Page</div>
            <form onSubmit={ (e) => loginFunc(e)}>
                <input type='text' placeholder='Login' /> 
                <input type='text' placeholder='Password' /> 
                <MyButton> Log In </MyButton>
            </form>
        </div>
     )}
 
export default Login;