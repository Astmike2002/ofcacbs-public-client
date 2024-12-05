import './SignOn.css'
import cert_file from '../../img/cert_file.svg';
import arrow_left from '../../img/arrow_left.svg';
import vertical_line from '../../img/vertical_line.png';

import login_smart from '../../img/login_smart.png';
import login_email from '../../img/login_email.svg';
import login_google from '../../img/login_google.svg';
import login_apple from '../../img/login_apple.svg';
import arrow_right from '../../img/arrow_right.svg';
import right_separator from '../../img/right_separator.png';
import left_separator from '../../img/left_separator.png';
import info_circle from '../../img/info_circle.svg';


import ofcalogo from '../../img/ofcalogo.png';
import cross_quit from '../../img/cross_quit.svg';



// Modal of ApChoice
import React from 'react';

const SignOn = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (

        <div class="modal-apply-online">
            <div class="heading-content">
                <div class="heading-container">
                    <div class="logo-ofca-logo-name">
                        <div class="logo-ofca-logo"><img class="image" src={ofcalogo} /></div>
                        <div class="close" onClick={onClose}>&times;</div>
                        {/* <div class="frame">
                            <div class="div-wrapper"><p class="text">Office of the Communications Authority</p></div>
                            <div class="div-wrapper"><div class="text-wrapper">Online Application Portal</div></div>
                        </div> */}
                         {/* <div class="right-container">
                             
                        </div> */}
                    </div>
                </div>
                <div class="div">
                    <div class="frame-2">
                        <div class="div-wrapper"><div class="text-2">Sign Up for Account</div></div>
                        <div class="div-wrapper">
                            <p class="text-3">You can manage your applications and licences with an account</p>
                        </div>
                    </div>
                    <div class="frame-3">
                        <div class="box">
                            <div class="img"><img class="image-2" src={login_smart} /></div>
                            <div class="div-wrapper"><div class="text-4">Continue with iAM Smart</div></div>
                        </div>
                        <div class="div-2">
                            <img class="img" src={login_email} />
                            <div class="div-wrapper"><div class="text-4">Continue with Email</div></div>
                        </div>
                        <div class="div-2">
                            <img class="img" src={login_google} />
                            <div class="div-wrapper"><div class="text-4">Continue with Google</div></div>
                        </div>
                        <div class="box-2">
                            <img class="img" src={login_apple} />
                            <div class="div-wrapper"><div class="text-4">Continue with Apple</div></div>
                        </div>
                    </div>
                    <div class="div-wrapper">
                        <div class="wrapper">
                            <p class="p">
                                <span class="span">Already have an account? </span> <span class="text-wrapper-2">Login</span>
                            </p>
                            <img class="icon-arrow-right" src="img/arrow-right.svg" />
                        </div>
                    </div>
                    <div class="text-5">
                        <img class="divider-separator" src={left_separator} />
                        <div class="text-text"><div class="text-3">OR</div></div>
                        <img class="divider-separator" src={right_separator} />
                    </div>
                    <div class="frame-4">
                        <div class="div-wrapper">
                            <div class="wrapper">
                                <div class="text-6">Continue without an account</div>
                                <img class="icon-arrow-right" src={arrow_right} />
                            </div>
                        </div>
                        <div class="frame-5">
                            <img class="icon-info-circle" src={info_circle} />
                            <div class="div-wrapper">
                                <p class="text-7">You cannot manage your applications and licences without an account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignOn;