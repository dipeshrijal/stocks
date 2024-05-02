import queryString from "query-string";
import Stock from "./Stock";

async function getStocks(searchParams) {
  const stringified = queryString.stringify(searchParams);
  const res = await fetch(`http://localhost:4000/stocks?${stringified}`, {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

async function Pages({ searchParams }) {
  const stocks = await getStocks(searchParams);

  return (
    <main>
      <div className="filter">
        <h1>Filters</h1>
        <div className="filter-list">
          <span>recent</span>
        </div>
      </div>
      {/* <!-- Analyses --> */}
      <div className="pc">
        <h1>Stocks</h1>
        <div className="stocks">
          {stocks.map((stock) => (
            <Stock
              key={stock._id}
              cssClass={stock.sum > 0 ? "success" : "danger"}
              name={stock._id}
              total={stock.sum.toFixed(2)}
            ></Stock>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Pages;
