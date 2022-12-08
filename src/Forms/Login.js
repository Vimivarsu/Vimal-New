import React, { useState } from 'react'

function Login() {
    const [Username, setUserName]= useState('');
    const [Password, setPassword]= useState('');
  return (
    <div>
    <h2>Login</h2>
    <forms>
    Username :<input type="text" placeholder='User Name'/><br/>
    Password :<input type="password" placeholder='Password'/><br/>
    <button>Login</button>
    </forms>
    </div>
  )
}

export default Login