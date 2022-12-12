import React, { Component } from 'react'
import './ForgetPassword.css'

export default class ForgetPassword extends Component {
  render() {
    return (
      <div>
      <img className='img1' src='https://www.businessload.com/wp-content/uploads/2018/02/How-to-Start-Your-Own-Real-Estate-Company.jpg' alt="house" ></img>
      <img className='img2' src='https://us.123rf.com/450wm/praewpailin/praewpailin1809/praewpailin180900146/praewpailin180900146.jpg?ver=6' alt="backimage" ></img>
      <img className='img3' src='https://icon2.cleanpng.com/20191119/caq/transparent-alert-icon-essential-compilation-icon-warning-icon-5dd3d2faa90077.6605000315741631946922.jpg' alt='exclamation'></img>
      <div className='form'>
      <form id='F1'>
      <h4>Forget Password?</h4>
        Phone Number : <input type="text" placeholder="Phone Number"/><br/>
      </form>
      <button type='Submit' form='F1' value={"Submit"} id={"otp"}>Send OTP</button>
      <form id='F2'>
        Enter OTP : <input type="text" placeholder='OTP' /><br/>
        New Password : <input type="password" placeholder='New Password'/><br/>
        Confirm Password : <input type="password" placeholder='Confirm Password'/><br/>
        </form>
        </div>
        <button type='Submit' form='F2' value={"Submit"} id="Button"><strong>Submit</strong></button>
      </div>
    )
  }
}
