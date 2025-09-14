
import PriceChart from "../smallComponents/PriceChart.jsx";

import IndicatorsScore from "../smallComponents/IndicatorsScore.jsx";

const MainTemp = () => {


    return (
        <main>

            <PriceChart />
            <div className="flex">
                <IndicatorsScore />
                <IndicatorsScore />
            </div>


        </main>
    );
};

export default MainTemp;
