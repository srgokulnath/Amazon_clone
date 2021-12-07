import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate} from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {provider} from "./firebase"

function Loginpage() {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const login = e =>{
        e.preventDefault(); // this prevents refresh
        // will do the login logic
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) =>{
                //logged in, redirect to homepage...
                navigate("/");
            })
            .catch((e) => alert(e.message)); 

    }

    const register = (event) => {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) =>{
                //user created and logged in...
                navigate("/");

            })
            .catch((e) =>{
                alert(e.message);
            })
    }
    return (
        <div className = "Login">
            <Link to = "/">
                <img
                    className = "Login__logo"
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt = ""
                />  

            </Link>  
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value = {email} onChange ={event => setEmail(event.target.value)} type = "email"/>
                    <h5>Password</h5>
                    <input value ={password} onChange = {event => setPassword(event.target.value)} type = "password"/>
                    <button onClick = {login} type = "submit" className = "login__signInButton">Sign in</button>
                </form>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus nulla dolore porro eum, tempore dicta blanditiis sit id maiores quos doloremque laboriosam ea debitis deserunt voluptates cupiditate placeat labore?</p>
                <button onClick = {register}className = "login__registerButton">create new account</button>
            </div>      
        </div>
    )
}

export default Loginpage
