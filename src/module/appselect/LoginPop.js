import './LoginPop.css'
import login_smart from '../../img/login_smart.png';
import login_email from '../../img/login_email.svg';
import login_google from '../../img/login_google.svg';
import login_apple from '../../img/login_apple.svg';
import arrow_right from '../../img/arrow_right.svg';

import ofcalogo from '../../img/ofcalogo.png';
import cross_quit from '../../img/cross_quit.svg';


// Modal.js
import React from 'react';

const LoginPop = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div class="modal-login">
            <div class="heading-content">
                <div class="heading-container">
                    <div class="logo-ofca-logo-name">
                        <div class="logo-ofca-logo"><img class="image" src={ofcalogo} /></div>
                        <div class="close" onClick={onClose}>&times;</div>
                    </div>
                    
                    {/* <div class="right-container">
                                
                    </div> */}
                </div>
                <div class="div">
                    <div class="div-wrapper"><div class="text-2">Login</div></div>

                    <div class="frame-2">
                        <div class="box">
                            <div class="img"><img class="image-2" src={login_smart} /></div>
                            <div class="div-wrapper"><div class="text-3">Continue with iAM Smart</div></div>
                        </div>
                        <div class="div-2">
                            <img class="img" src={login_email} />
                            <div class="div-wrapper"><div class="text-3">Continue with Email</div></div>
                        </div>
                        <div class="div-2">
                            <img class="img" src={login_google} />
                            <div class="div-wrapper"><div class="text-3">Continue with Google</div></div>
                        </div>
                        <div class="box-2">
                            <img class="img" src={login_apple} />
                            <div class="div-wrapper"><div class="text-3">Continue with Apple</div></div>
                        </div>
                    </div>
                    <div class="div-wrapper">
                        <div class="wrapper">
                            <p class="p">
                                <span class="span">Don’t you have an account?</span>
                                <span class="text-wrapper-2">&nbsp;</span>
                                <span class="text-wrapper-3">Sign Up</span>
                                <img class="icon-arrow-right" src={arrow_right} />
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPop;