import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import DOMPurify from "dompurify";

function Crypto() {
    const { coinId } = useParams();
    const [coin, setCoin] = useState(null);

    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error!");
                }
                const json = await response.json();
                setCoin(json);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [url]);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // setTimeout(()=>{setCoin(coinData)}, 1000)
    const LeftCoinSection = () => {

        return (
            <>
                <img className="coin-icon-large" src={coin.image.large}></img>
            <span className="coin-title text-capitalize">{coin.id}</span>
                <span>Rank:<p>{coin.coingecko_rank}</p></span>
            </>
        )
    }

    const RightCoinSection = () => {
        let hr_24change = coin.market_data.price_change_percentage_24h;
        let description = DOMPurify.sanitize(coin.description.en);
        console.log(description)
        if (description === "\r\n"){
            description = "No description available";
        }
        return (
            <>
                
                <div class="coin-content-top">
                    <div>
                        <span>24h Change: 
                            <p className={hr_24change < 0 ? "text-red" : "text-green"}>
                                {hr_24change.toFixed(2) + " %"}
                            </p> 
                        </span>
                    </div>
                    <div>
                        <span>Price: 
                            <p class="text-green">
                                {"$ " + numberWithCommas(coin.market_data.current_price.usd.toFixed(2))}
                            </p> 
                        </span>
                    </div>
                    <div>
                    <span>Symbol: <strong>{coin.symbol}</strong> </span>        
                    </div >        
                </div>

                <div class="description">
                    <p dangerouslySetInnerHTML={
                        {
                        __html: description,
                        }}>
                        
                    </p>
                </div>
                
            </>
        )
    }
    return (
        <section id="crypto">
            <div className="container">
                <div className="left-coin-container">
                    {coin ? <LeftCoinSection/> : <Loader/>}

                </div>
                <div className="right-coin-container"> 
                    {coin ? <RightCoinSection /> : <Loader />}
                </div>
            </div>
        </section>
    );
}

export default Crypto;