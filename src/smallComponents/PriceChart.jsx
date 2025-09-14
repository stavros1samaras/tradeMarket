

import { useEffect, useState } from "react"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceDot } from 'recharts';


const priceChart = () => {

    const [bitPricesHistorical, setBitPrices] = useState([{ name: "stavrios", last: " samaras" }, { name: "mixalis", last: "mixalisssss" }]);

    async function getData(ticker, startDate) {
        const url1 = `http://127.0.0.1:8000/ta/data/prices?ticker=${ticker}&start=${startDate}&end=2025-09-12&interval=1d`;
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

    }

    useEffect(() => {

        getData("BTC-USD", "2020-07-05");
    }, [])

    const findOneYearPeriod = () => {

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

        const newYear = currentFullDate.getFullYear() - 1;

        const FirstDate = newYear.toString() + "-" + currentMonth.toString() + "-" + currentDate.toString();
        console.log(FirstDate);

        getData("BTC-USD", FirstDate);
    }

    const findOneMonthPeriod = () => {

        const currentFullDate = new Date();
        let currentDate = currentFullDate.getDate();

        if (currentDate < 10) {
            if (currentDate == 0) {
                currentDate = "00";
            }
            else {
                const currentDateCorrected = "0" + currentDate.toString();
                currentDate = currentDateCorrected;
            }
        }

        let currentMonth = currentFullDate.getMonth();

        if (currentMonth < 10) {
            if (currentMonth == 0) {
                currentMonth = "00";
            }
            else {
                const currentMonthCorrected = "0" + currentMonth.toString();
                currentMonth = currentMonthCorrected;
            }
        }

        const newYear = currentFullDate.getFullYear();

        const FirstDate = newYear.toString() + "-" + currentMonth.toString() + "-" + currentDate.toString();
        console.log(FirstDate);

        getData("BTC-USD", FirstDate);
    }

    const findMaxPeriod = () => {
        getData("BTC-USD", "2020-07-05");
    }

    return (
        <>

            <div>
                <button onClick={findOneMonthPeriod}>1 month</button>
                <button onClick={findOneYearPeriod}>1 year</button>
                <button onClick={findMaxPeriod}>max</button>
            </div>
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
                    <YAxis domain={['dataMin-1000', 'dataMax+1000']}/>
                    <Tooltip />
                    <Area type="monotone" dataKey="close" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>

            
        </>
    )
}

export default priceChart