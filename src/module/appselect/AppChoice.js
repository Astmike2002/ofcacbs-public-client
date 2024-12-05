import './AppChoice.css'
import cert_file from '../../img/cert_file.svg';
import arrow_left from '../../img/arrow_left.svg';
import vertical_line from '../../img/vertical_line.png';

// Modal of ApChoice
import React from 'react';

const AppChoice = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div class="global-menu">
            <div class="heading-content">
                <div class="heading-container">
                    <img class="icon-arrow-left" src={arrow_left} />
                    <div class="text"><div class="text-wrapper">Online Licences Application</div></div>
                    {/* <div class="right-container"> */}
                                <div class="close" onClick={onClose}>&times;</div>
                    {/* </div> */}
                    {/* <div class="right-container">
                        <div class="button-other"><img class="icon" src="img/icon.svg" /></div>
                    </div> */}
                </div>
                
                <div class="frame">
                    <div class="div">
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Aeronautical VHF Fixed Station Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Aircraft Station Licence</div>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Amateur Station Licence</div>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Broadcast Radio Relay Station Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Experimental Station Licence</div>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Hotel Television (Transmission) Licence</div>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper-2">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Industrial, Scientific and Medical Electronic Machine Licence</p>
                            </div>
                        </div>
                    </div>
                    <img class="divider-separator" src={vertical_line} />
                    <div class="div">
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Maritime Radio (Local Vessel) Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Mobile Radio System Fixed Station Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Mobile Radio System Mobile Station Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Private Mobile Radio System Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Private Radio Paging System Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Radio Dealers Licence (Unrestricted)</div>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Radiocommunications School Licence</div>
                            </div>
                        </div>
                    </div>
                    <img class="divider-separator" src={vertical_line} />
                    <div class="div">
                        <div class="wrapper-wrapper">
                            <div class="wrapper-2">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Radiodetermination and Conveyance of Commands Status and Data Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Satellite Master Antenna Television Licence</p>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Ship Station Licence</div>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Experimental Station Licence</div>
                            </div>
                        </div>
                        <div class="wrapper-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <div class="text-2">Taxi Radiocommunications Service Licence</div>
                            </div>
                        </div>
                        <div class="div-wrapper">
                            <div class="wrapper">
                                <img class="icon-document-cert" src={cert_file} />
                                <p class="text-2">Wide Band Link and Relay Station Licence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}

            export default AppChoice;