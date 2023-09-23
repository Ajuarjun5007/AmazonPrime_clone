
import React, { useState } from 'react'
import "./SignIn.css";
import {SiPrimevideo} from 'react-icons/si'
import logo from '../../assets/loginassets/primevideoLogo.png'

const Signup = () => {
  
  
 


  
  return (
    <>
      <div className='primevideoIcon'>
      {/* <SiPrimevideo size={200}/> */}
      <img src="https://m.media-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png" alt="signupimg" />
      </div>
      <section>
            <div className="sign_container">
                <div className="sign_header">
                    {/* <img src="./blacklogoamazon.png" alt="signupimg" /> */}
                </div>
                <div  className="sign_form">
                    <form >
                        <h1>Create account</h1>
                        <div className="form_data">
                          <div className="form_data_label">
                         <label htmlFor="name">Your name</label>
                          </div>
                            <input type="text" name="name"
                                // value={}
                                id="name" />
                        </div>
                        <div className="form_data">
                        <div className="form_data_label">
                            <label htmlFor="email">Email</label>
                          </div>
                            <input type="email" name="email"
                                // value={udata.email}
                                id="email" />
                        </div>
                       
                        <div className="form_data">
                        <div className="form_data_label">
                            <label htmlFor="password">Password</label>
                          </div>
                            <input type="password" name="password"                                
                  id="password" placeholder="At least 6 characters"
                />
                        </div>
                        <div className="form_data">
                        <div className="form_data_label">
                            <label htmlFor="passwordg">Re-enter password</label>
                          </div>
                            <input type="password" name="repassword"                                
                  id="passwordg"
                />
                        </div>
                        <button type="submit" className="signin_btn"
               
                         >Create your Amazon account</button>

            

                        <div className="signin_info">
                            <p>Already have an account?</p>
                        </div>
                    </form>
                </div>
    
            </div>
      </section>
      </>
    )
}

export default Signup;
