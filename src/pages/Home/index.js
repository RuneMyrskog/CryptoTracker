
import Market from "../../components/Market";

function Home() {
    return (
        <>
        <section id="home">
            <div id="hero-section">
            {/* <div className="top-container"> */}
                <div className="hero-container">
                    <h1>Track and Trade <span className="text-purple">Crypto</span></h1>

                </div>
            {/* </div> */}
            </div>
        </section>
        <Market/>
        </>
    );
}

export default Home;
