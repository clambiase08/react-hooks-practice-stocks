import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  console.log(stocks)

  const stockDetail = stocks.map((stock) => {
    return <Stock key={stock.id} ticker={stock.ticker} name={stock.name} price={stock.price}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockDetail}
    </div>
  );
}

export default StockContainer;
