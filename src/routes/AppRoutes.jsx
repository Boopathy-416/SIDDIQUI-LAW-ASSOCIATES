import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import PracticeAreas from "../pages/PracticeAreas/PracticeAreas";
import Team from "../pages/Team/Team";
import Insights from "../pages/Insights/Insights";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/practice-areas"
          element={<PracticeAreas />}
        />

        <Route path="/team" element={<Team />} />

        <Route path="/insights" element={<Insights />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;