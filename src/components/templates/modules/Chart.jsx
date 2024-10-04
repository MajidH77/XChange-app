import React, { useState } from "react";
import { CartesianGrid, LineChart, ResponsiveContainer, Line, YAxis, XAxis, Legend, Tooltip} from "recharts";

import Styles from "./Chart.module.css";
import { convertData } from "../../../helpers/convertData";

function Chart({chart , setChart}) {
    const [type , setType] = useState("prices");

 
const typeHandler = (event) => {
        if (event.target.tagName === "BUTTON") {
            const type = event.target.innerText.toLowerCase().replace(" ", "_");
            setType(type);
        }
}

    return(
        <div className={Styles.container} >

            <div className={Styles.chart}>
                <div className={Styles.XContainer}>
                    <span className={Styles.cross} onClick={() => setChart(null)}>X</span>
                </div>
                <div className={Styles.name}>
                    <img src={ chart.coin.image ? chart.coin.image : chart.coin.thumb}  />
                    <p>{chart.coin.name}</p>
                </div>
                <div className={Styles.graph}>
                    <ChartComponent data={convertData(chart,type)} type={type} />
                </div>
                <div className={Styles.types} onClick={typeHandler}>
                    <button className={type === "prices" ? Styles.selected : null} >Prices</button>
                    <button className={type === "market_caps" ? Styles.selected : null} >Market Caps</button>
                    <button className={type === "total_volumes" ? Styles.selected : null} >Total Volumes</button>
                </div>
                <div className={Styles.details}>
                <div>
                        <p>Prices:</p>
                        <span>${chart.coin.current_price}</span>
                    </div>
                    <div>
                        <p>ATH:</p>
                        <span>${chart.coin.ath}</span>
                    </div>
                    <div>
                        <p>Market Cap:</p>
                        <span>{chart.coin.market_cap}</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Chart ;

const ChartComponent = ({data , type}) => {
return(
    <ResponsiveContainer width="100%" height="100%">
    <LineChart width={400} height={400} data={data} >
        <Line  type="monotone" dataKey={type} stroke="#3874ff"  strokeWidth="2px"/>
        <CartesianGrid stroke="#404042" />
        <YAxis dataKey={type} domain={["auto" ,"auto"]} />
        <XAxis dataKey="date"  />
        <Legend />
        <Tooltip />
    </LineChart>
</ResponsiveContainer>
)
}