import './AppSelectH.css';
import ofcalog from '../../img/ofcalogo.png';
import menu from '../../img/public.appselect.menu.svg';


const AppSelectH = () => {

return (
<body>
<div class="header-public">
    <div class="frame">
        <div class="left-group">
            <div class="logo-ofca-logo-name">
                <div class="logo-ofca-logo"><img class="image" src={ofcalog} /></div>
                <div class="div">
                    <div class="div-wrapper"><p class="text">Office of the Communications Authority</p></div>
                    <div class="div-wrapper"><div class="text-wrapper">Online Application Platform</div></div>
                </div>
            </div>
        </div>
        <div class="frame-2">
            <div class="right-group">
                <div class="div-wrapper"><div class="text-2">Useful Links</div></div>
                <img class="divider-separator" src="img/divider-separator.svg" />
                <div class="div-wrapper"><div class="text-2">Text Size</div></div>
                <img class="divider-separator" src="img/divider-separator.svg" />
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
                            <div class="union-wrapper"><img class="union" src="img/public.appselect.menu.svg" /></div>
                        </div>
                        <div class="text-4">Menu</div>
                    </div>
                </div>
                <div class="div-wrapper">
                    <div class="wrapper">
                        <div class="icon-wrapper">
                            <div class="union-wrapper"><img class="img" src="img/union-2.svg" /></div>
                        </div>
                        <div class="text-4">Search</div>
                    </div>
                </div>
                <div class="div-wrapper">
                    <div class="wrapper">
                        <div class="icon-wrapper">
                            <div class="union-wrapper"><img class="union-2" src="img/image.svg" /></div>
                        </div>
                        <div class="text-4">Contact</div>
                    </div>
                </div>
                <div class="frame-4">
                    <div class="div-wrapper">
                        <div class="wrapper">
                            <div class="icon-wrapper">
                                <div class="union-wrapper"><img class="union-3" src="img/union.svg" /></div>
                            </div>
                            <div class="text-4">Login</div>
                        </div>
                    </div>
                    <img class="divider-separator" src="img/divider-separator-2.svg" />
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
</body>
)}

export default AppSelectH;