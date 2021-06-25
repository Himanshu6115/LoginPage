import '../CSS/Login.css';
import React from 'react';
import { useHistory }  from 'react-router-dom';


function Login () 
    {

      let history = useHistory();

      function Redirecting (){
        history.push("/login/registration")

      }
    return (
    <div className="Login">
    <form>
    <div className="sign-in">
    <h2>Login</h2>
     </div>
    <div className="seperate">
    <div className="form-group">
    <label>Username</label>  
    <input type ="Text" placeholder="email" id="username" ></input> 
    </div>
    <div className="form-group">
    <label>Password</label>
    <input type ="password" placeholder="password" id="password"></input>   
    </div>
    <div className="forget">
    <a href={'#'}>
    <p>forget password?</p>
    </a>
    </div>
    <button id ="btn1" onClick= {() => {Redirecting();}}>Submit</button>
    </div>   
    </form>
    </div>
    
  );

}

export default Login;