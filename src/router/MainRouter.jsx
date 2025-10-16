// Libraries
import { Route, Routes, useNavigate } from "react-router";

// Router
import ROUTES from "./routes";

// ===== Import Pages =====

// Main Pages
import Home from "../pages/main/Home";
import About from "../pages/main/About";
import Features from "../pages/main/Features";
import Leaderboard from "../pages/main/Leaderboard";
import Contact from "../pages/main/Contact";
import Dashboard from "../components/Dashboard";

// Auth
import Login from "../pages/auth/Login";

const MainRouter = ({
  user,
  onLogin,
  onGoogleLogin,
  onDemoLogin,
  onLogout,
  onNavigate,
}) => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.FEATURES} element={<Features />} />
      <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />

      {/* Auth page */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <Login
            onLogin={onLogin}
            onGoogleLogin={onGoogleLogin}
            onDemoLogin={onDemoLogin}
          />
        }
      />

      {/* Users */}
      <Route
        path={ROUTES.DASHBOARD}
        element={<Dashboard user={user} onLogout={onLogout} onNavigate={onNavigate} />}
      />
    </Routes>
  );
};

export default MainRouter;
