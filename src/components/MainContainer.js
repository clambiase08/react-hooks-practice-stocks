import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortStocks, setSortStocks] = useState("Alphabetically")
  const [type, setType] = useState("Tech")

  const stocksShowing = stocks.filter((stock) => {
    return stock.type === type 
  })

  const sortOptions = {
    "Alphabetically": { method: (a, b) => (a.ticker > b.ticker) ? 1 : -1 },
    "Price": { method: (a, b) => a.price - b.price }
  }

  const sortedStocks = [...stocksShowing].sort(sortOptions[sortStocks].method)

  
  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocks(data))
  },[])
  
  const addStockPortfolio = (stock) => {
    setPortfolio(portfolio => [...portfolio, stock])
  }

function removeStockPortfolio(deletedStock) {
  setPortfolio(portfolio.filter((stock) => stock.id !== deletedStock.id))
}


  return (
    <div>
      <SearchBar setSortStocks={setSortStocks} sortStocks={sortStocks} onChangeType={setType}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={sortedStocks} addStockPortfolio={addStockPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} removeStockPortfolio={removeStockPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
