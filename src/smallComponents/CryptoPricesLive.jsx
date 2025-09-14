import { useEffect, useState } from "react";

import BitcoinLivePrice from "../smallComponents/BitcoinLivePrice.jsx";
import EthLivePrice from "./EthLivePrice.jsx";

const CryptoPricesLive = () => {

    const [prices, setPrices] = useState({});

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                {/* https://api.coingecko.com/api/v3/coins/list DOCS */ }
                const response = await fetch(
                    //   "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tao&vs_currencies=usd" αυτο αν θελω απευθειας απο το coingecko
                    "http://127.0.0.1:8000/ta/data/crypto-prices?ids=bitcoin&ids=ethereum&vs_currency=usd"
                );
                const data = await response.json();
                setPrices(data);
            } catch (error) {
                console.error("Error fetching prices:", error);
            }
        };

        fetchPrices();
        const interval = setInterval(fetchPrices, 50000); //50sec
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden md:flex">
            <BitcoinLivePrice price={prices.bitcoin ? `$${prices.bitcoin.usd}` : "$------"} />
            <EthLivePrice price={prices.ethereum ? `$${prices.ethereum.usd}` : "$------"} />
        </div>
    )
}

export default CryptoPricesLive