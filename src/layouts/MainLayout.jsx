import { Outlet } from "react-router-dom";

import Navbar from "../components/navigation/Navbar";
import Footer from "../components/layout/Footer";
import DisclaimerModal from "../components/common/DisclaimerModal";

function MainLayout() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white">
      <DisclaimerModal />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
