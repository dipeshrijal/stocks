import Widget from "./components/Widget";

export default function Home() {
  return (
    <main>
      <h1>Analytics</h1>
      {/* <!-- Analyses --> */}
      <div className="analyse">
        <div className="sales">
          <Widget
            title="Total Sales"
            description="$65,024"
            percentage="+81"
          ></Widget>
        </div>
        <div className="visits">
          <Widget
            title="Site Visit"
            description="14,147"
            percentage="+21"
          ></Widget>
        </div>
        <div className="searches">
          <Widget
            title="Searches"
            description="24,981"
            percentage="-48"
          ></Widget>
        </div>
      </div>
      {/* <!-- End of Analyses --> */}

      {/* <!-- New Users Section --> */}
      <div className="new-users">
        <h2>New Users</h2>
        <div className="user-list">
          <div className="user">
            <img src="https://placehold.co/400" />
            <h2>Jack</h2>
            <p>54 Min Ago</p>
          </div>
          <div className="user">
            <img src="https://placehold.co/400" />
            <h2>Amir</h2>
            <p>3 Hours Ago</p>
          </div>
          <div className="user">
            <img src="https://placehold.co/400" />
            <h2>Ember</h2>
            <p>6 Hours Ago</p>
          </div>
          <div className="user">
            <img src="https://placehold.co/400" />
            <h2>More</h2>
            <p>New User</p>
          </div>
        </div>
      </div>
      {/* <!-- End of New Users Section --> */}

      {/* <!-- Recent Orders Table --> */}
      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <a href="#">Show All</a>
      </div>
      {/* <!-- End of Recent Orders --> */}
    </main>
  );
}
