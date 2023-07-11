import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, addStockPortfolio}) {

  const stockDetail = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} handleStockChange={addStockPortfolio} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockDetail}
    </div>
  );
}

export default StockContainer;
