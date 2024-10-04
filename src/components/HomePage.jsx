import { useEffect , useState} from "react";

import { getCoinList } from "../services/cryptoApi";
import TableCoin from "./templates/modules/TableCoin";
import Pagination from "./templates/modules/Pagination";
import Search from "./templates/modules/Search";
import Chart from "./templates/modules/Chart";

function HomePage() {

    const [coins , setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [page , setPage] = useState(1);
    const [currency , setCurrency] = useState("usd");
    const [chart , setChart] = useState(null);


    useEffect( () => {
        window.scrollTo(0, 0);
        setIsLoading(true)
            const getData = async () => {
                try{
                    const res = await fetch(getCoinList(page , currency));
                    const json = await res.json();
                    setCoins(json);
                    setIsLoading(false)
                } catch (error){ 
                    console.log(error)
                };
                           
            };

            getData()
    }, [page , currency])
    return(
         <div>
            <Search currency={currency} setCurrency={setCurrency} setChart={setChart} />
            <TableCoin coins={coins} isLoading={isLoading}  currency={currency} setChart={setChart} />
            <Pagination  page={page} setPage={setPage}  />
            { !!chart && <Chart  chart={chart} setChart={setChart} /> } 
          </div>
  )}
  
  export default HomePage;