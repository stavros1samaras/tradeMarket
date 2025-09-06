import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer , AreaChart} from 'recharts';


const MainTemp = () => {

    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    {
        name: 'Page B',
        uv: 300,
        pv: 4567,
        amt: 2400
    },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
    { name: 'Page G', uv: 239, pv: 3800, amt: 2400 },
    { name: 'Page H', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page I', uv: 345, pv: 4300, amt: 2400 },
    { name: 'Page J', uv: 54, pv: 4300, amt: 2400 },
    { name: 'Page K', uv: 344, pv: 4300, amt: 2400 },
    { name: 'Page L', uv: 555, pv: 4300, amt: 2400 },
    { name: 'Page M', uv: 334, pv: 4300, amt: 2400 },
    { name: 'Page N', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page O', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page P', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page Q', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page R', uv: 543, pv: 4300, amt: 2400 },
    { name: 'Page S', uv: 234, pv: 4300, amt: 2400 },
    { name: 'Page T', uv: 782, pv: 4300, amt: 2400 },
    { name: 'Page U', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page V', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page W', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page X', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page Y', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page Z', uv: 349, pv: 4300, amt: 2400 },
    { name: 'Page AA', uv: 412, pv: 4300, amt: 2400 },
    { name: 'Page AB', uv: 267, pv: 4300, amt: 2400 },
    { name: 'Page AC', uv: 598, pv: 4300, amt: 2400 },
    { name: 'Page AD', uv: 321, pv: 4300, amt: 2400 },
    { name: 'Page AE', uv: 455, pv: 4300, amt: 2400 },
    { name: 'Page AF', uv: 699, pv: 4300, amt: 2400 },
    { name: 'Page AG', uv: 233, pv: 4300, amt: 2400 },
    { name: 'Page AH', uv: 578, pv: 4300, amt: 2400 },
    { name: 'Page AI', uv: 342, pv: 4300, amt: 2400 },
    { name: 'Page AJ', uv: 611, pv: 4300, amt: 2400 },
    { name: 'Page AK', uv: 287, pv: 4300, amt: 2400 },
    { name: 'Page AL', uv: 735, pv: 4300, amt: 2400 },
    { name: 'Page AM', uv: 194, pv: 4300, amt: 2400 },
    { name: 'Page AN', uv: 467, pv: 4300, amt: 2400 },
    { name: 'Page AO', uv: 382, pv: 4300, amt: 2400 },
    { name: 'Page AP', uv: 509, pv: 4300, amt: 2400 },
    { name: 'Page AQ', uv: 644, pv: 4300, amt: 2400 },
    { name: 'Page AR', uv: 256, pv: 4300, amt: 2400 },
    { name: 'Page AS', uv: 721, pv: 4300, amt: 2400 },
    { name: 'Page AT', uv: 399, pv: 4300, amt: 2400 }
    ];

    return (
        <main>
            <div className="w-full h-96 bg-blue-300"></div>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{
                    "top": 5,
                    "right": 30,
                    "left": 0,
                    "bottom": 5
                }}>
                    <CartesianGrid stroke="#ffffffff" />
                    <Line type="monotone" dataKey="uv" stroke="purple" strokeWidth={2} name="My data series name" />
                    <XAxis dataKey="name" padding={{ left: 0, right: 0 }} />
                    <YAxis width={35} />
                    <Legend align="right" />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>
        </main>
    );
};

export default MainTemp;
