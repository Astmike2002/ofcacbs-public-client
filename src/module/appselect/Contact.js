import './Contact.css'
import login_smart from '../../img/login_smart.png';


// Modal.js
import React from 'react';

const ContactPop = ({ isOpen, onClose }) => {
    if (!isOpen) return null;


    return (
        <div class="pane-contact">
            <div class="heading-content">
                <div class="right-pane-wrapper">
                    <div class="heading-container">
                        <div class="div-wrapper">
                            <div class="wrapper">
                                <div class="icon-wrapper">
                                    <div class="union-wrapper"><img class="union" src="img/union.svg" /></div>
                                </div>
                                <div class="text">Contact Us</div>
                            </div>
                        </div>
                        <div class="right-container">
                            <div class="button-other"><img class="img" src="img/icon.svg" /></div>
                        </div>
                    </div>
                    <div class="content-container">
                        <div class="frame">
                            <div class="text-wrapper"><div class="div">Working Hours</div></div>
                            <div class="text-wrapper"><p class="text-2">8:30am to 5:45pm Monday to Friday</p></div>
                            <div class="text-wrapper"><p class="text-2">Closed on Saturday, Sunday and Public Holiday</p></div>
                        </div>
                        <div class="table">
                            <div class="table-rows">
                                <div class="table-col">
                                    <div class="table-cell">
                                        <div class="div-wrapper"><div class="text-3">Title</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-4">General Matters</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="text-text"><p class="p">Private Mobile Radio System Licence Matters</p></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="text-text">
                                            <p class="p">Radio Dealer Licence (Unrestricted) &amp; Import / Export Permit Matters</p>
                                        </div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="text-text"><p class="p">Maritime Radio Operator&#39;s Certificate Matters</p></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-4">Network Facilities inside Buildings</div></div>
                                    </div>
                                </div>
                                <div class="table-col-2">
                                    <div class="table-cell">
                                        <div class="div-wrapper"><div class="text-3">Phone No.</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 2961 6333</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 2961 6672</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 2961 6724</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 8100 3031</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 8102 4100</div></div>
                                    </div>
                                </div>
                                <div class="table-col-2">
                                    <div class="table-cell">
                                        <div class="div-wrapper"><div class="text-3">Fax No.</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 2803 5110</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 3155 0987</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 3155 0936</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 3155 0914</div></div>
                                    </div>
                                    <div class="text-text-wrapper">
                                        <div class="div-wrapper"><div class="text-2">(852) 2116 0136</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img class="divider-separator" src="img/divider-separator.svg" />
                        <div class="frame-2">
                            <div class="text-wrapper"><div class="div">For Broadcasting matters</div></div>
                            <div class="frame-3">
                                <img class="img" src="img/image.svg" />
                                <div class="text-text-2">
                                    <p class="text-2">20/F, Wu Chung House, 213 Queen&#39;s Road East, Wan Chai, Hong Kong</p>
                                </div>
                            </div>
                            <div class="frame-4">
                                <img class="img" src="img/phone-call.svg" />
                                <div class="div-wrapper"><div class="text-5">(852) 2507 2219</div></div>
                            </div>
                            <div class="frame-4">
                                <img class="img" src="img/email-letter.svg" />
                                <div class="div-wrapper"><div class="text-5">webmaster@ofca.gov.hk</div></div>
                            </div>
                        </div>
                        <img class="divider-separator-2" src="img/divider-separator.svg" />
                        <div class="frame-5">
                            <div class="text-wrapper">
                                <p class="text-6">For Telecommunications and Unsolicited Electronic Messages matters</p>
                            </div>
                            <div class="frame-3">
                                <img class="img" src="img/location-pin-active.svg" />
                                <div class="text-text-2">
                                    <p class="text-2">29/F, Wu Chung House, 213 Queen&#39;s Road East, Wan Chai, Hong Kong</p>
                                </div>
                            </div>
                            <div class="frame-4">
                                <img class="img" src="img/phone-call.svg" />
                                <div class="div-wrapper"><div class="text-5">(852) 2803 5110</div></div>
                            </div>
                            <div class="frame-4">
                                <img class="img" src="img/email-letter.svg" />
                                <div class="div-wrapper"><div class="text-5">webmaster@ofca.gov.hk</div></div>
                            </div>
                        </div>
                        <img class="divider-separator-3" src="img/divider-separator.svg" />
                        <div class="frame-6">
                            <div class="text-wrapper"><p class="text-7">Or contact us by other means,</p></div>
                            <a
                                href="https://www.ofca.gov.hk/en/contact_us/enquiry/enquiries/index.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            ><div class="div-wrapper">
                                    <div class="wrapper-2">
                                        <p class="text-5">Full Contact Information in OFCA website</p>
                                        <img class="icon-launch-expand" src="img/launch-expand.svg" />
                                    </div></div
                                ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPop;