import React from 'react';
import Input from 'uielements/input';
import Button from 'uielements/button';
import { LOGIN_BUTTON, GITHUB_BUTTON } from './login.styles';
import { githubAuth } from './login.api';

function Login() {

    function authenticateGithub() {
        window.open('http://localhost:3000/auth/github', '_blank');
    }

    return (
        <div className="w-screen h-screen bg-gray-700 flex justify-center items-center p-16">
            <div 
                className="w-full sm:w-full lg:w-1/4 h-auto sm:h-full md:h-auto bg-white shadow-md rounded-sm p-2 flex flex-col items-center"
            >
                <img 
                    className="w-10 h-10 mt-10"
                    src="https://image.flaticon.com/icons/png/512/25/25231.png" 
                />
               <p className="font-bold text-2xl mb-10 mt-5">Sign In to DevChat</p>
               <Input 
                    placeholder="Enter Username"
                    type="text"
                    customClass="mb-5"
               />
               <Input 
                    placeholder="Enter Password"
                    type="password"
                    customClass="mb-5"
               />
               <Button 
                    className={LOGIN_BUTTON}
                    buttonText="Login"
                    primary={false}
               />
               <Button 
                    className={GITHUB_BUTTON}
                    buttonText="SignIn with GitHub"
                    primary={false}
                    onClick={authenticateGithub}
               />
               <p className="mt-5 mb-10 font-sans">New to DevChat? <span className="text-blue-500 cursor-pointer">Sign Up Here.</span></p>
            </div>
        </div>
    );
}

export default Login;
