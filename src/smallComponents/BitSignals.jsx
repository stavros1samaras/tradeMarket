

import { useEffect, useState } from "react"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';


const BitPrice = () => {

    const [bitPricesHistorical, setBitPrices] = useState([{ name: "stavrios", last: " samaras" }, { name: "mixalis", last: "mixalisssss" }]);
    const [indicatorsPairSignals, setIndicatorsPairSignals] = useState([]);

    async function getData(ticker, startDate) {
        const url1 = `http://127.0.0.1:8000/ta/data/prices?ticker=${ticker}&start=${startDate}&end=2025-07-30&interval=1d`;
        try {
            const response = await fetch(url1);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

            // setBitPrices(result["BTC-USD"]);
            setBitPrices(result[ticker]);

        } catch (error) {
            console.error(error.message);
        }


        const url2 = `http://127.0.0.1:8000/ta/strategies/indicators-pair-signals?underlying_stock=${ticker}&start=2024-02-06&end=2025-09-12&tmfrm=1d&plot=true`;
        try {
            const response = await fetch(url2);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

            // setBitPrices(result["BTC-USD"]);
            setIndicatorsPairSignals(result[ticker]);

        } catch (error) {
            console.error(error.message);
        }


    }

    useEffect(() => {

        getData("BTC-USD", "2022-12-06");
    }, [])

    const findTwoYearsPeriod = () => {

        const currentFullDate = new Date();
        let currentDate = currentFullDate.getDate();

        if (currentDate < 10) {
            const currentDateCorrected = "0" + currentDate.toString();
            currentDate = currentDateCorrected;
        }

        let currentMonth = currentFullDate.getMonth() + 1;

        if (currentMonth < 10) {
            const currentMonthCorrected = "0" + currentMonth.toString();
            currentMonth = currentMonthCorrected;
        }

        const newYear = currentFullDate.getFullYear() - 2;

        const FirstDate = newYear.toString() + "-" + currentMonth.toString() + "-" + currentDate.toString();
        console.log(FirstDate);

        getData("BTC-USD", FirstDate);
    }

    return (
        <>
            <label for="pet-select">Choose a ticket:</label>

            <select name="ticket" onChange={(e) => { getData(e.target.value) }}>
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

                    {indicatorsPairSignals.map((indicator, index) => {
                        return (
                            <ReferenceDot key={index} x={indicator.Date} y={indicator.close} r={3} fill="yellow" stroke="red"></ReferenceDot>
                        )
                    })}
                </AreaChart>
            </ResponsiveContainer>

            {/* {indicatorsPairSignals.map((indicator, index) => {
                return (
                    <p key={index}>{indicator.Date}</p>
                )
            })} */}

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