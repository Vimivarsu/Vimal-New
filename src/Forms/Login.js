import { LineAxisOutlined } from '@mui/icons-material';
import React, { useState } from 'react'

function Login() {
    const [Username, setUserName]= useState('');
    const [Password, setPassword]= useState('');
    const [error,setError]=useState(false);
    const formHandler=(event)=>
    {
      event.preventDefault();
      if(Username.length==0 && Password.length==0)
      {
        setError(true);
      }
      if(Username && Password)
      {
      const loginObj=
      {
        name:Username,
        pwd:Password
      }
      console.log(loginObj);
      alert(JSON.stringify(loginObj));
      //axios.post(url/obj)
    }
    }
  return (
    <div>
    <h2>Login</h2>
    <forms>
        Username :<input type="text" placeholder='User Name'/><br/>
        Password :<input type="password" placeholder='Password'/><br/>
    <button type="Submit">Login</button>
    </forms>
    </div>
  )
}

export default Login