import { useEffect, useState } from "react";

//component가 가장먼저 render됫을떄 이함수를 즉시실행

function CoinTracker() {
    const [loading, setLoding] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
            setCoins(json)
            setLoding(false)
            console.log(json)
        })

    },[])  //[]일떄 한번만 작동
        
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <strong>Loading...</strong> : <select>
                {coins.map((coin) =>(
                    <option>
                        {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}USD
                    </option>

                ))}
            </select>}
           

        </div>
    )
    
}


export default CoinTracker;