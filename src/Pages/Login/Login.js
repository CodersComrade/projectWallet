import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Site<span>Random</span></div>
		</div>
		<br/>
		<div className="login">
				<input type="text" placeholder="username" name="user"/><br/>
				<input type="password" placeholder="password" name="password"/><br/>
				<input type="button" value="Login"/>
		</div>
        </>
    );
};

export default Login;
