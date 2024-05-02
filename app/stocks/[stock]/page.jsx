import queryString from "query-string";

function format(date) {
  if (!(date instanceof Date)) {
    throw new Error('Invalid "date" argument. You must pass a date instance');
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

async function getStock(stock, searchParams) {
  const stringified = queryString.stringify(searchParams);
  console.log(stringified);
  const res = await fetch(
    `http://localhost:4000/stocks/${stock}?${stringified}`,
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return res.json();
}

async function Stock({ params, searchParams }) {
  const stock = await getStock(params.stock, searchParams);
  return (
    <main>
      <div className="recent-orders">
        <h2>{params.stock}</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Action</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((s) => (
              <tr key={s.transaction_id}>
                <td>{format(new Date(s.date))}</td>
                <td>{s.description}</td>
                <td>{s.action}</td>
                <td>{s.price}</td>
                <td>{s.amount}</td>
                <td>{s.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </main>
  );
}

export default Stock;
