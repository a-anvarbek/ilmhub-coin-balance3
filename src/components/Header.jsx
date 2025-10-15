// Libraries
import { useState } from "react";
import { motion } from "motion/react";
import { Coins, Menu, X } from "lucide-react";
import { useNavigate } from "react-router";

// Components
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

// Context
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 theme-transition"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-gray-800 dark:text-white theme-transition">
              IlmCoin
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate("/about")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              {t("nav.about")}
            </button>
            <button
              onClick={() => navigate("/features")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              {t("nav.features")}
            </button>
            <button
              onClick={() => navigate("/leaderboard")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              {t("leaderboard.title")}
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
            >
              {t("nav.contact")}
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme & Language Toggles */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            {/* Login button (desktop only) */}
            <Button
              onClick={() => navigate("/login")}
              className="hidden md:block bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white rounded-full px-6 shadow-md"
            >
              {t("nav.login")}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200/20 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => {
                  navigate("/about");
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => {
                  navigate("/features");
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                {t("nav.features")}
              </button>
              <button
                onClick={() => {
                  navigate("/leaderboard");
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                {t("leaderboard.title")}
              </button>
              <button
                onClick={() => {
                  navigate("/contact");
                  setIsMenuOpen(false);
                }}
                className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
              >
                {t("nav.contact")}
              </button>

              <div className="border-t border-gray-300 dark:border-gray-700 mt-3 pt-3 flex flex-col gap-3">
                <div className="w-full flex md:flex-col items-center justify-center gap-6 mt-3 self-start">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>

                <Button
                  onClick={() => {
                    navigate("/login");
                    setIsMenuOpen(false);
                  }}
                  className="bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-full px-4 py-2 shadow-md"
                >
                  {t("nav.login")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
