import './LoginPop.css'
import login_smart from '../../img/login_smart.png';


// Modal.js
import React from 'react';

const ContactPop = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

  
    return (

        <div className="modal">
            <div className="modal-content">

            <div class="label"><div class="text">Contact Us</div></div>

            </div>
        </div>
    )
}

export default ContactPop;