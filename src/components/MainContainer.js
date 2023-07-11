import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

  
  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data))
  },[])
  
  const addStockPortfolio = (stock) => {
    setPortfolio(portfolio => [...portfolio, stock])
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStockPortfolio={addStockPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
