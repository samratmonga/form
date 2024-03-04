import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <div className="login">
    <div className="container">
        <div className="row login-box">
       <div className="col-lg-6 col-md-12 bg-img">
        <div className="info">
            <div className="info-text">
                <div className="waivy">
                    <span>W</span>
                    <span >e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                    <span style={{color:'#ff0000'}}>t</span>
                    <span style={{color:'#ff0000'}}>o</span>
                    <span>l</span>
                    <span>o</span>
                    <span>g</span>
                    <span>y</span>
                </div>
                <p className='waivy-info'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                </p>
                <div className="social-button">
                    <a href="/" className='social-btn social-btn-facebook'>
                        <i className="fa-brands fa-facebook"/>
                    </a>
                    <a href="/" className='social-btn social-btn-twitter'>
                    <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="/" className='social-btn social-btn-google'>
                    <i className="fa-brands fa-google"></i>
                    </a>
                    <a href="/" className='social-btn social-btn-linkedin'>
                  
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                   
                </div>
            </div>
        </div>
       </div>
       <div className="col-lg-6 col-md-12 form-info">
        <div className="form-section">
            <div className="logo">
                <a href="/">
                <img src=".\form-images\logo-2.png" alt="" />
                </a>

            </div>
            <h3> Sign in into Account</h3>
            <div className="login-inner-form">
                <form action="#">
                   
                    <div className="form-group form-box">
                    <div className="form-group form-box">
                        <input type="email" placeholder='Email Address '  className='form-control' required/>
                        <i class="fa-regular fa-envelope icon-input"></i>
                    </div>
                    </div>
                    <div className="form-group form-box">
                    <div className="form-group form-box">
                        <input type="password" placeholder='Password'  className='form-control' required/>
                        <i class="fa-solid fa-lock icon-input"></i>
                    </div>
                    <div className="for-remember-me d-flex " style={{
                        justifyContent:'space-between',
                    }}>
                    <div className=" check-box form-group form-box " style={{
                        margin:'0',
                        width:'auto',
                    }}>
                        <input type="checkbox" id='remeber-me ' required/>
                        <lebal className="form-check-lebal" for='remeber-me ' > Remeber me   </lebal>
                    </div>
                
                        <NavLink to="/forget" className='forget-pass'>forget password</NavLink>

                    </div>
                   
                
                    <div className="form-group form-box">
                        <button type='sumbit' className='btn btn-register' > <a href="C:\Users\Friendz\Desktop\Form-react\form\src\components\Signup.js"> Login </a></button>
                      
                    </div>
                    <p id='text'>
                        Don't have an account 
                        <NavLink to="/"> Register here </NavLink>
                    </p>
                    </div>
                </form>
            </div>
        </div>
       </div>
        </div>
    </div>
   </div>
    </>
  )
}
