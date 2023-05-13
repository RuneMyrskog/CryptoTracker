import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

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
        const hr_24change = coin.market_data.price_change_percentage_24h;
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
                    <span>Symbol: <strong>btc</strong> </span>        
                    </div >        
                </div>

                <div class="description">
                    <p>
                        Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process. Bitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks. Bitcoin is designed to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the SHA-256 hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes. Being the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as Litecoin, Peercoin, Primecoin, and so on. The cryptocurrency then took off with the innovation of the turing-complete smart contract by Ethereum which led to the development of other amazing projects such as EOS, Tron, and even crypto-collectibles such as CryptoKitties.
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