"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside>
      <div className="toggle">
        <div className="logo">
          <img src="https://placehold.co/4000" />
          <h2>
            Asmr<span className="danger">Prog</span>
          </h2>
        </div>
        <div className="close" id="close-btn">
          <span className="material-symbols-sharp"> close </span>
        </div>
      </div>

      <div className="sidebar">
        <Link href="/" className={pathname == "/" ? "active" : ""}>
          <span className="material-symbols-sharp"> dashboard </span>
          <h3>Dashboard</h3>
        </Link>
        <Link href="/stocks" className={pathname == "/stocks" ? "active" : ""}>
          <span className="material-symbols-sharp">finance</span>
          <h3>Stocks</h3>
        </Link>
        <a href="#">
          <span className="material-symbols-sharp"> receipt_long </span>
          <h3>History</h3>
        </a>
        <a href="#">
          <span className="material-symbols-sharp"> insights </span>
          <h3>Analytics</h3>
        </a>
        <a href="#">
          <span className="material-symbols-sharp"> mail_outline </span>
          <h3>Tickets</h3>
          <span className="message-count">27</span>
        </a>
        <a href="#">
          <span className="material-symbols-sharp"> inventory </span>
          <h3>Sale List</h3>
        </a>
        <a href="#">
          <span className="material-symbols-sharp"> report_gmailerrorred </span>
          <h3>Reports</h3>
        </a>
        <a href="#">
          <span className="material-symbols-sharp"> settings </span>
          <h3>Settings</h3>
        </a>
        <a href="#">
          <span className="material-symbols-sharp"> add </span>
          <h3>New Login</h3>
        </a>
        <a href="#">
          <span className="material-symbols-sharp"> logout </span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
