import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";
import "../App.css";
import Footer from "./components/common/Footer";

const AppLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <div className=" text-white min-h-screen w-full  gradient">
        <Navbar />
        <div className="container-stars">
          <div id="stars"></div>
        </div>

      

        <main className="w-full overflow-auto">
          <Outlet></Outlet>
          <Footer />
        </main>
        
      </div>
    </div>
  );
};

export default AppLayout;
