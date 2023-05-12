import { useState } from 'react';

function Navbar() {
    const [fixed, setFixed] = useState(false);
    const [mobile, setMobile] = useState(false);

    const onScroll = () => {
        if(window.scrollY > 150) {
            console.log("dfs")
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
        <nav class={fixed ? "fixed-nav" : ""}>
            <div id="navbar">
                <a href=""><span className="navTitle">CRYPTO</span><span className="navTitle">TRACK</span></a>
                <ul>
                    <a href="#home">Home</a>
                    <a href="#home">Market</a>
                    <a href="#home">Choose Us</a>
                    <a href="#home">Join</a>
                </ul>
                <div className="flex-row" id="navExternalsContainer">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-discord"></i>
                </div>
                <i onClick={openCloseMobile} className="fa-solid fa-bars-staggered hamburger-menu"></i>
            </div>

            
        </nav >

        <div id="mobile-navbar" className={mobile ? "mobile-showing": "mobile-hidden"}>
                <i id="closeMobileNav" onClick={openCloseMobile} className="fa-solid fa-xmark close-mobile"></i>
                <ul>
                    <li onClick={openCloseMobile}><a href="#home">Home</a></li>
                    <li onClick={openCloseMobile}><a href="#home">Market</a></li>
                    <li onClick={openCloseMobile}><a href="#home">Choose Us</a></li>
                    <li onClick={openCloseMobile}><a href="#home">Join</a></li>
                </ul>
        </div>
        </>
    );
}

export default Navbar;