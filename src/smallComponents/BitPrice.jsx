

import { useEffect, useState } from "react"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';


const BitPrice = () => {

    const [bitPricesHistorical, setBitPrices] = useState([{ name: "stavrios", last: " samaras" }, { name: "mixalis", last: "mixalisssss" }]);

    async function getData() {
        const url = "http://127.0.0.1:8000/data/prices?ticker=BTC-USD&start=2020-09-06&end=2025-07-30&interval=1d";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

            setBitPrices(result["BTC-USD"]);

        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {

        getData();
    }, [])

    return (
        <>
            <label for="pet-select">Choose a ticket:</label>

            <select name="ticket" onChange={(e) => console.log("bravoooo", e.target.value)}>
                <option selected value="BTC-USD">Bitcoin</option>
                <option value="AAPL">Apple</option>
                <option value="ETH">Etherium</option>

            </select>




            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    width={500}
                    height={400}
                    data={bitPricesHistorical}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />
                    {/* <ReferenceDot x="2023-02-06T00:00:00" y={60000} r={60} fill="red" stroke="red" /> */}

                </AreaChart>
            </ResponsiveContainer>

            {/* αμα θελω να δω τα δεδομενα */}
            {/* <ul> 
                {bitPricesHistorical.map((obj, index) => {
                    return (<li key={index}>{obj.Date}{obj.close}</li>);
                })}
            </ul> */}
        </>
    )
}

export default BitPrice