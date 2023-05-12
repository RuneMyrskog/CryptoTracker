import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Market () {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState([]);
    const [apiLoad, setApiLoad] = useState(true)
    
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`;

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        };
        fetchData();
    }, [url]);

    return (
            <section id="market">
                <div className="container">
                    <h2>Current Market</h2>

                    <div id="market-grid">
                        <div id="market-grid-top-row">

                        </div>
                        <div id="market-grid-coin-rows-container">
                            { }
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Market;