
import Market from "../../components/Market";

function Home() {
    return (
        <div id="home">
            <section id="hero-section">
            {/* <div className="top-container"> */}
                <div className="hero-container">
                    <h1>Track and Trade <span className="text-purple">Crypto</span></h1>

                </div>
            {/* </div> */}
            </section>

            <Market/>
        </div>
    );
}

export default Home;
