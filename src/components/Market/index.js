import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { coinData } from "./coinData";

function Market () {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [apiLoad, setApiLoad] = useState(true)
    
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         setData(json);
    //     };

    //     fetchData();s

    // }, [url]);

    // setTimeout(() => {setData(coinData)}, 1000)

    const PageButton = (props) => {
        const pageNumber = props.pageNumber;
        return (
            <span key={pageNumber} onClick={() => setCurrentPage(pageNumber)}
                className={pageNumber === currentPage ? "button-span active-page" : "button-span"}>
                {pageNumber}
            </span>
        )
    }
    
    const PageButtons = () => {
        const pageNumbers = [1, 2, 3, 4, 5]
        return (
            <div id="pageButtonsContainer">
                {pageNumbers.map((i) => (<PageButton pageNumber={i} />))}
                
            </div>);
    }

    const Loader = () => {
        return (
        <div className="loader-container">
            <span className="loader"></span>
        </div>)
    }

    setTimeout(()=>{setData(coinData)}, 1000)
    const coinRows = () => {
        return (
            <div id="market-grid-coin-rows-container">
                {data.map((coin) => (<CoinRow key={coin.id} coin={coin} />))}
            </div>)
            
    }

    
    return (
            <section id="market">
                <div className="container">
                    <h2>Current Market</h2>
                    
                    <div id="market-grid-container">
                        <div id="market-grid">
                            <div id="market-grid-top-row">
                                <span>Coin</span>
                                <span>Price</span>
                                <span>24hr Change</span>
                                <span>Market Cap</span>
                            </div>

                            {data.length == 0 ? <Loader /> : coinRows()}
                            
                        </div>

                     </div>
                     
                    <PageButtons />
                    
                </div>
            </section>
    );
}


function CoinRow(props) {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const coin = props.coin;
    const price = coin.current_price;
    const image = coin.image;
    const id = coin.id;
    const hr24_change = coin.price_change_percentage_24h;
    const market_cap = coin.market_cap;

    return (
        <a key={id} className="coin-row" href={"/crypto/" + id}>
            <div className="coin-row-container">
                
                <span> <img src={image} className="coin-icon"/> {id} </span>
                <p>{"$ " + price.toFixed(2)}</p>
                <p className={hr24_change < 0 ? "red" : "green"}> {hr24_change + " %"}</p>
                <p>{"$ " + numberWithCommas(market_cap)}</p>
                
            </div>
        </a>);
}

export default Market;