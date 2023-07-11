import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, removeStockPortfolio}) {

  const portfolioStocks = portfolio.map((stock) => {
    return <Stock key={stock.id} stock={stock} handleStockChange={removeStockPortfolio}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {
       portfolioStocks 
      }
    </div>
  );
}

export default PortfolioContainer;
