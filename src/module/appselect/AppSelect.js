import './AppSelect.css';
// Header 
import ofcalogo from '../../img/ofcalogo.png';
import line_divider from '../../img/line_divider.svg';
import header from '../../img/header.png';

import spotmenu from '../../img/spotmenu.svg';
import search from '../../img/search.svg';
import contact from '../../img/contact.svg';
import login from '../../img/login.svg';

import chevron_down from '../../img/chevron_down.svg';
import chevron_down_thin from '../../img/chevron_down_thin.svg';
import divider_separator from '../../img/divider_separator.png';

import w3c from '../../img/w3c.png';
import dargon from '../../img/dargon.png';
import arrow_up_short from '../../img/arrow_up_short.svg';
import arrow_right from '../../img/arrow_right.svg';
import React, { useState } from 'react';
import AppChoice from './AppChoice';
import LoginPop from './LoginPop';
import ContactPop from './Contact';



const AppSelect = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [isOpenChoice, setIsOpenChoice] = useState(false);
    const [isOpenContact, setIsOpenContact] = useState(false);

    const handleOpen = () => { setIsOpen(true); };
    const handleOpenChoice = () => { setIsOpenChoice(true); };
    const handleOpenContact = () => { setIsOpenContact(true); };

    const handleClose = () => { setIsOpen(false); };
    const handleCloseChoice = () => { setIsOpenChoice(false); };
    const handleCloseContact = () => { setIsOpenContact(false); };


    return (

        <div class="page-wrapper">
            <div class="header-public">
                <div class="frame">
                    <div class="left-group">
                        <div class="logo-ofca-logo-name">
                            <div class="logo-ofca-logo"><img class="image" src={ofcalogo} /></div>
                            <div class="div">
                                <div class="div-wrapper"><p class="text">Office of the Communications Authority</p></div>
                                <div class="div-wrapper"><div class="text-wrapper">Online Application Platform</div></div>
                            </div>
                        </div>
                    </div>
                    <div class="frame-2">
                        <div class="right-group">
                            <div class="div-wrapper"><div class="text-2">Useful Links</div></div>
                            <img class="divider-separator" src={line_divider} />
                            <div class="div-wrapper"><div class="text-2">Text Size</div></div>
                            <img class="divider-separator" src={line_divider} />
                            <div class="frame-3">
                                <div class="div-wrapper"><div class="text-3">ENG</div></div>
                                <div class="div-wrapper"><div class="text-2">繁</div></div>
                                <div class="div-wrapper"><div class="text-2">简</div></div>
                            </div>
                        </div>
                        <div class="right-group-2">
                            <div class="div-wrapper">
                                <div class="wrapper">
                                    <div class="icon-wrapper">
                                        {/* <div class="icon-chevron-down"><img class="union" src={spotmenu} /></div> */}
                                        <div class="icon-chevron-down" onClick={handleOpenChoice}><img class="union" src={spotmenu} /></div>
                                        <AppChoice isOpen={isOpenChoice} onClose={handleCloseChoice} />
                                    </div>
                                    <div class="text-4">Menu</div>
                                </div>
                            </div>
                            <div class="div-wrapper">
                                <div class="wrapper">
                                    <div class="icon-wrapper">
                                        <div class="icon-chevron-down"><img class="img" src={search} /></div>
                                    </div>
                                    <div class="text-4">Search</div>
                                </div>
                            </div>                            
                            <div class="div-wrapper">
                                <div class="wrapper">
                                    <div class="icon-wrapper">
                                        {/* <div class="icon-chevron-down"><img class="union-2" src={contact} /></div> */}
                                        <div class="icon-chevron-down" onClick={handleOpenContact}><img class="union" src={contact} /></div>
                                        <ContactPop isOpen={isOpenContact} onClose={handleCloseContact} />
                                    </div>
                                    <div class="text-4">Contact</div>
                                </div>
                            </div>
                            <div class="frame-4">
                                <div class="div-wrapper">
                                    <div class="wrapper">
                                        <div class="icon-wrapper">
                                            {/* <div class="icon-chevron-down"><img class="union-3" src={login} /></div> */}
                                            <div class="icon-chevron-down" onClick={handleOpen}><img class="union" src={login} /></div>
                                            <LoginPop isOpen={isOpen} onClose={handleClose} />
                                        </div>
                                        <div class="text-4">Login</div>
                                    </div>
                                </div>
                                <img class="divider-separator" src={line_divider} />
                                <div class="div-wrapper"><div class="text-5">Sign Up</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="frame-5">
                    <div class="rectangle"></div>
                    <div class="rectangle-2"></div>
                    <div class="rectangle-3"></div>
                    <div class="rectangle-4"></div>
                    <div class="rectangle-5"></div>
                    <div class="rectangle-6"></div>
                    <div class="rectangle-7"></div>
                </div>
            </div>
            <header class="header">
                <div class="div-wrapper">
                    <div class="wrapper-2">
                        {/* <div class="text-6">OFCA Home</div> */}
                        <div class="icon-wrapper">
                            <div class="union-wrapper"><img class="union-4" src="img/union.svg" /></div>
                        </div>
                    </div>
                </div>
                {/* <div class="text-title"><div class="text-7">Online Licences Application</div></div> */}
            </header>
            <div class="body-wrapper">
                <div class="frame-6">
                    <div class="content-warpper">
                        <div class="frame-7">
                            <div class="text-8"><div class="text-9">All Available Applications</div></div>
                            <div class="div-wrapper">
                                <div class="wrapper-2">
                                    <div class="text-10">Expand All</div>
                                    <img class="icon-chevron-down-2" src={chevron_down} />
                                </div>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Aeronautical VHF Fixed Station Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Aircraft Station Licence</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Amateur Station Licence</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Broadcast Radio Relay Station Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Experimental Station Licence</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Hotel Television (Transmission) Licence</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11">
                                    <p class="text-12">Industrial, Scientific and Medical Electronic Machine Licence</p>
                                </div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Maritime Radio (Local Vessel) Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Mobile Radio System Fixed Station Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Mobile Radio System Mobile Station Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Private Mobile Radio System Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Private Radio Paging System Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Radio Dealers Licence (Unrestricted)</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Radiocommunications School Licence</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11">
                                    <p class="text-12">Radiodetermination and Conveyance of Commands, Status and Data Licence</p>
                                </div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Satellite Master Antenna Television Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11">
                                    <p class="text-12">Self-Provided External Telecommunications System Licence</p>
                                </div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Ship Station Licence</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><div class="text-12">Taxi Radiocommunications Service Licence</div></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="module-collapse">
                            <div class="frame-8">
                                <img class="icon-chevron-down" src={chevron_down_thin} />
                                <div class="text-11"><p class="text-12">Wide Band Link and Relay Station Licence</p></div>
                                <button class="button">
                                    <div class="div-wrapper"><div class="text-13">Apply Online</div></div>
                                    <img class="icon" src="img/icon.svg" />
                                </button>
                            </div>
                        </div>
                        <div class="div-wrapper">
                            <div class="wrapper-2">
                                <div class="text-10">Expand All</div>
                                <img class="icon-chevron-down-2" src={chevron_down} />
                            </div>
                        </div>
                    </div>
                    <div class="side-column">
                        <div class="text-title"><div class="text-14">Filters by Tags</div></div>
                        <div class="frame-9">
                            <div class="tag"><div class="title">All</div></div>
                            <div class="title-wrapper"><div class="title-2">Aircraft</div></div>
                            <div class="title-wrapper"><div class="title-2">Amateur</div></div>
                            <div class="title-wrapper"><div class="title-2">Experimental</div></div>
                            <div class="title-wrapper"><div class="title-2">Hotel</div></div>
                            <div class="title-wrapper"><div class="title-2">Medical</div></div>
                            <div class="title-wrapper"><div class="title-2">Mobile</div></div>
                            <div class="title-wrapper"><div class="title-2">Private</div></div>
                            <div class="title-wrapper"><div class="title-2">Radio</div></div>
                            <div class="title-wrapper"><div class="title-2">Radiocommunication</div></div>
                            <div class="title-wrapper"><div class="title-2">Satellite</div></div>
                            <div class="title-wrapper"><div class="title-2">Ship</div></div>
                            <div class="title-wrapper"><div class="title-2">Taxi</div></div>
                            <div class="title-wrapper"><div class="title-2">Telecommunication</div></div>
                            <div class="title-wrapper"><div class="title-2">Wide Band</div></div>
                        </div>
                        <img class="divider-separator-2" src={divider_separator} />
                        <div class="frame-10">
                            <div class="text-title"><div class="text-14">Search by keywords</div></div>
                            <div class="input-customized-m">
                                <div class="input">
                                    <div class="input-base">
                                        <div class="placeholder">
                                            <div class="input-prefix">
                                                <div class="wrapper-wrapper">
                                                    <div class="img-wrapper"><img class="union-5" src={search} /></div>
                                                </div>
                                            </div>
                                            <div class="placeholder-2">Enter Keywords, e.g. Radio</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-public">
                <div class="right-group-3">
                    <div class="frame-11">
                        <div class="frame-12">
                            <div class="div-wrapper"><div class="text-15">OFCA website</div></div>
                            <img class="divider-separator-3" src={line_divider} />
                            <div class="div-wrapper"><div class="text-15">Important Notice</div></div>
                            <img class="divider-separator-3" src={line_divider} />
                            <div class="div-wrapper"><div class="text-15">Privacy Policy</div></div>
                            <img class="divider-separator-3" src={line_divider} />
                            <div class="div-wrapper"><div class="text-15">Sitemap</div></div>
                        </div>
                        <div class="frame-13">
                            <div class="div-wrapper">
                                <p class="text-15">Copyright © 2024 Office of the Communications Authority.</p>
                            </div>
                            <img class="divider-separator-3" src={line_divider} />
                            <div class="div-wrapper"><div class="text-15">Last revision date: 2024/04/24</div></div>
                        </div>
                    </div>
                    <img class="image-2" src={w3c} />
                    <img class="image-3" src={dargon} />
                    <div class="btn-backtotop">
                        <div class="menu-items-wrapper">
                            <img class="icon-arrow-up-short" src={arrow_up_short} />
                            <div class="text">Back to Top</div>
                        </div>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default AppSelect;