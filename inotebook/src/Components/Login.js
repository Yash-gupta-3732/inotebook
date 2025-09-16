import React from 'react'
import {useNavigate} from 'react-router-dom';
const Login = () => {
    let navigate = useNavigate();
    const handleSubmit= async (e)=>{
        const host = "http://localhost:5000";
        e.preventDefault();
         // API CALLS
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
             body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value }),

        });
    
        const json = await response.json();
        console.log('LOGIN' ,json) // get auth-token in response
        if(json.success){
            //save the auth-token and redirect
            localStorage.setItem('token',json.authtoken);
           navigate("/") //to redirect to home page
        }
        else{   
            alert("Invalid credential");
        }

    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlfor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlfor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" />
                </div>
    
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
