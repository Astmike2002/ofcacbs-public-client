import './LoginPop.css'
import login_smart from '../../img/login_smart.png';
import login_email from '../../img/login_email.svg';
import login_google from '../../img/login_google.svg';
import login_apple from '../../img/login_apple.svg';
import arrow_right from '../../img/arrow_right.svg';


// Modal.js
import React from 'react';

const LoginPop = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  
    return (
        <div className="modal">
            <div className="modal-content">

                <div class="heading-container">
                    <div class="text"><div class="text-wrapper">Login</div></div>
                    <div class="close" onClick={onClose}>&times;</div>                                            
                </div>
        
                <div class="newline" >
                    <img class="doc-photo" src={login_smart} />
                    <p class="text-21">Continue with iAM Smart</p>
                </div>
                <div class="newline">
                    <img class="doc-photo" src={login_email} />
                    <p class="text-22">Continue with Email</p>
                </div>
                <div class="newline">
                    <img class="doc-photo" src={login_google} />
                    <p class="text-23">Continue with Google</p>
                </div>
                <div class="newline">
                    <img class="doc-photo" src={login_apple} />
                    <p class="text-24">Continue with  Apple (Transmission) Licence</p>
                </div>
                <div class="newline">
                    <div class="grid-container">
                    <div class="grid-item">
                        <span class="text-wrapper">Don’t you have an account?</span>
                    </div>
                    <div class="grid-item">
                        <span class="text-wrapper-2">Sign Up</span>
                    </div>
                    <div class="grid-item">
                        <img class="icon-arrow-right" src={arrow_right} />
                        {/* <span class="span">&nbsp;</span> */}
                    </div>
                    </div>
                </div>
            </div>
        </div>    
        
    )
}

export default LoginPop;