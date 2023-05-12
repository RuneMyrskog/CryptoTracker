
import Market from "../../components/Market";
import ChooseUs from "../../components/ChooseUs";
import blockchainBackground from "../../images/blockchain-home-background.png"

function Home() {
    return (
        <>
        <section id="home">
            <div id="hero-section">
                <img id="hero-background-img" src={blockchainBackground}></img>
            {/* <div className="top-container"> */}
                <div className="hero-container">
                    <h1>Track and Trade <span className="text-purple">Crypto</span></h1>

                </div>
            {/* </div> */}
            </div>
        </section>
        <Market/>
        <ChooseUs/>

        </>
    );
}

export default Home;
