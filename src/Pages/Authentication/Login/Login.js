import React from 'react';

import './login.module.css'
import './Login.css'


const Login = () => {
    function toggleSignup(){
        document.getElementById("login-toggle").style.backgroundColor="#fff";
         document.getElementById("login-toggle").style.color="#222";
         document.getElementById("signup-toggle").style.backgroundColor="#57b846";
         document.getElementById("signup-toggle").style.color="#fff";
         document.getElementById("login-form").style.display="none";
         document.getElementById("signup-form").style.display="block";
     }
     
     function toggleLogin(){
         document.getElementById("login-toggle").style.backgroundColor="#57B846";
         document.getElementById("login-toggle").style.color="#fff";
         document.getElementById("signup-toggle").style.backgroundColor="#fff";
         document.getElementById("signup-toggle").style.color="#222";
         document.getElementById("signup-form").style.display="none";
         document.getElementById("login-form").style.display="block";
     }
     
    return (
        <>
        <div class="form-modal">
    
    <div class="form-toggle">
        <button id="login-toggle"  onClick={toggleLogin}>log in</button>
        <button id="signup-toggle" onClick={toggleSignup}>sign up</button>
    </div>

    <div id="login-form">
        <form>
            <input type="text" placeholder="Enter email or username"/>
            <input type="password" placeholder="Enter password"/>
            <button type="button" class="btn login">login</button>
            <p>Forgotten account</p>
            <hr/>
            <button type="button" class="btn -box-sd-effect"> <i class="fa fa-google fa-lg" aria-hidden="true"></i> sign in with google</button>
            {/* <button type="button" class="btn -box-sd-effect"> <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i> sign in with linkedin</button>
            <button type="button" class="btn -box-sd-effect"> <i class="fa fa-windows fa-lg" aria-hidden="true"></i> sign in with microsoft</button> */}
        </form>
    </div>

    <div id="signup-form">
        <form>
            <input type="email" placeholder="Enter your email"/>
            <input type="text" placeholder="Choose username"/>
            <input type="password" placeholder="Create password"/>
            <button type="button" class="btn signup">create account</button>
            <p>Clicking <strong>create account</strong> means that you are agree to our terms of services.</p>
            <hr/>
            <button type="button" class="btn -box-sd-effect"> <i class="fa fa-google fa-lg" aria-hidden="true"></i> sign up with google</button>
            {/* <button type="button" class="btn -box-sd-effect"> <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i> sign up with linkedin</button>
            <button type="button" class="btn -box-sd-effect"> <i class="fa fa-windows fa-lg" aria-hidden="true"></i> sign up with microsoft</button> */}
        </form>
    </div>

</div>

        </>
    );
};

export default Login;