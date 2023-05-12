import { useState } from 'react';

function Navbar() {
    const [fixed, setFixed] = useState(false);
    const [mobile, setMobile] = useState(false);

    const onScroll = () => {
        if(window.scrollY > 150) {
            setFixed(true);
        } else {
            setFixed(false);
        }
        
    }
    window.addEventListener("scroll", onScroll);

    const openCloseMobile = () => {
        setMobile(!mobile);
    }

    return (
        <>
        <nav className={fixed ? "fixed-nav" : ""}>
            <div id="navbar">
                <a href="/"><span className="navTitle">CRYPTO</span><span className="navTitle">TRACK</span></a>
                <ul>
                    <a href="/#home">Home</a>
                    <a href="/#market">Market</a>
                    <a href="/#choose-us">Choose Us</a>
                    <a href="/#join">Join</a>
                </ul>
                <div className="flex-row" id="navExternalsContainer">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
                <i onClick={openCloseMobile} className="fa-solid fa-bars-staggered hamburger-menu"></i>
            </div>

            
        </nav >

        <div id="mobile-navbar" className={mobile ? "mobile-showing": "mobile-hidden"}>
                <i id="closeMobileNav" onClick={openCloseMobile} className="fa-solid fa-xmark close-mobile"></i>
                <ul>
                    <li onClick={openCloseMobile}><a href="/#home">Home</a></li>
                    <li onClick={openCloseMobile}><a href="/#market">Market</a></li>
                    <li onClick={openCloseMobile}><a href="/#choose-us">Choose Us</a></li>
                    <li onClick={openCloseMobile}><a href="/#join">Join</a></li>
                </ul>
        </div>
        </>
    );
}

export default Navbar;