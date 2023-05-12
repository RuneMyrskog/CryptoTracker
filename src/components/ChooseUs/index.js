import cryptotax from "../../images/cryptotax-hero.png"


function ChooseUs() {

    return (
        <section id="choose-us">
            <h2>WHY <span className="text-purple">CHOOSE US</span></h2>
            <div className="container">

                <div className="column">

                    <div className="choose-box">
                        <i className="fa-solid fa-wallet"></i>
                        <div className="choose-box-text">
                            <h4>CONNECT YOUR WALLET</h4>
                            <p>Use Trust Wallet, Metamask or to connect to the app.</p>
                        </div>
                    </div>

                    <div className="choose-box">
                        <i className="fa-solid fa-pen-ruler"></i>
                        <div className="choose-box-text">
                            <h4>SELECT YOUR QUANTITY</h4>
                            <p>Upload your crypto and set a title, description and price.</p>
                        </div>
                    </div>

                    <div className="choose-box">
                        <i className="fa-solid fa-bolt"></i>
                        <div className="choose-box-text">
                            <h4>CONFIRM TRANSACTION</h4>
                            <p>Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>

                </div>

                <div className="column">
                    <img id="choose-us-img" src={cryptotax}></img>
                </div>

                <div className="column">

                    <div className="choose-box">
                        <i className="fa-solid fa-satellite-dish"></i>
                        <div className="choose-box-text">
                            <h4>RECEIVE YOUR OWN NFTS</h4>
                            <p>Invest all your crypto at one place on one platform.</p>
                        </div>
                    </div>

                    <div className="choose-box">
                        <i className="fa-solid fa-chess-knight"></i>
                        <div className="choose-box-text">
                            <h4>TAKE A MARKET TO SELL</h4>
                            <p>Discover, collect the right crypto collections to buy or sell.</p>
                        </div>
                    </div>

                    <div className="choose-box">
                        <i className="fa-solid fa-boxes-stacked"></i>
                        <div className="choose-box-text">
                            <h4>DRIVE YOUR COLLECTION</h4>
                            <p>We make it easy to Discover, Invest and manage.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ChooseUs;