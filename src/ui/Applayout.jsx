import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";

function Applayout() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Applayout;
