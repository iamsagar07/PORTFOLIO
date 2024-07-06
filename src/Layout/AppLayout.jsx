import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import "../App.css";

const AppLayout = () => {
  return (
    <div className="">
      <div className=" text-white min-h-screen w-full  gradient">
        <Navbar />
        <div className="container-stars">
          <div id="stars"></div>
        </div>

      

        <main className="w-full overflow-auto">
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
