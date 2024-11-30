import './AppChoice.css'
import cert_file from '../../img/cert_file.svg';
import arrow_left from '../../img/arrow_left.svg';


// Modal of ApChoice
import React from 'react';

const AppChoice = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">

                <div class="heading-container">
                    <img class="float-image" src={arrow_left} />
                    <div class="text"><div class="text-wrapper">Online Licences Application</div></div>
                    <div class="close" onClick={onClose}>&times;</div>                                            
                </div>
        
                <div class="newline" >
                    <img class="doc-photo" src={cert_file} />
                    <p class="text-2">Amateur Station Licence</p>
                </div>
                <div class="newline">
                    <img class="doc-photo" src={cert_file} />
                    <p class="text-2">Broadcast Radio Relay Station Licence</p>
                </div>
                <div class="newline">
                    <img class="doc-photo" src={cert_file} />
                    <p class="text-2">Experimental Station Licence</p>
                </div>
                <div class="newline">
                    <img class="doc-photo" src={cert_file} />
                    <p class="text-2">Hotel Television (Transmission) Licence</p>
                </div>
                <div class="newline">
                    <img class="doc-photo" src={cert_file} />
                    <p class="text-2">Industrial, Scientific and Medical Electronic Machine Licence</p>
                </div>
            </div>    
        </div>                        
    )
}

export default AppChoice;