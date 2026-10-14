import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import TheFirm from "../pages/About/TheFirm";
import OurExpertise from "../pages/PracticeAreas/PracticeAreas";
import OurTeam from "../pages/Team/Team";
import Insights from "../pages/Insights/Insights";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import ArticleDetails from "../pages/Insights/ArticleDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/the-firm" element={<TheFirm />} />

        <Route
          path="/our-expertise"
          element={<OurExpertise />}
        />

        <Route path="/our-team" element={<OurTeam />} />

        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<ArticleDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;