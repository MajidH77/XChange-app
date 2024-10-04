import HomePage from "./components/HomePage";
import Layout from "./layout/Layout";

function App() {

  return (
    <Layout>  
      <HomePage /> 
    </Layout>
)}

export default App;



// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=CG-vyZPHLXMs8Npcq3PgmQEzD5m