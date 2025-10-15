// Libraries
import { useEffect, useState } from "react";
import {
  Home as HomeIcon,
  LogOut,
  Coins,
  BookOpen,
  TrendingUp,
  Award,
  Target,
  Trophy,
  CheckCircle2,
  Star,
  Gift,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

// Components
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";

// Context
import { useLanguage } from "../contexts/LanguageContext";

export default function Dashboard({ user, onLogout }) {
  const { t } = useLanguage();
  const [filterType, setFilterType] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // 🚨 Agar foydalanuvchi yo‘q bo‘lsa, login sahifasiga qaytarish
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // user mavjud bo‘lmaguncha UI’ni ko‘rsatmaydi
  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-[#0f1729] dark:via-[#1a2332] dark:to-[#0f1729]">
      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3 }}
            className="fixed md:static md:translate-x-0 z-40 bg-white/90 dark:bg-[#1a2332]/80 backdrop-blur-lg shadow-lg p-4 w-64 h-full flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                {t("Dashboard")}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X />
              </Button>
            </div>

            <nav className="flex flex-col gap-3">
              <Button
                variant="ghost"
                className="justify-start gap-2"
                onClick={() => navigate("/")}
              >
                <HomeIcon size={18} /> {t("Home")}
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <BookOpen size={18} /> {t("Courses")}
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <Trophy size={18} /> {t("Leaderboard")}
              </Button>
              <Button variant="ghost" className="justify-start gap-2">
                <Award size={18} /> {t("Achievements")}
              </Button>
            </nav>

            <div className="mt-auto pt-4 border-t border-gray-300 dark:border-gray-700 flex flex-col gap-3">
              <div className="flex items-center justify-around gap-4">
                <ThemeToggle />
                <LanguageToggle />
              </div>

              <Button
                variant="outline"
                className="mt-4 flex items-center gap-2 justify-center text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                onClick={onLogout}
              >
                <LogOut size={18} /> {t("Logout")}
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64 transition-all">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </Button>

          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {t("Welcome")}, {user.name}!
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t("Filter")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("All")}</SelectItem>
              <SelectItem value="completed">{t("Completed")}</SelectItem>
              <SelectItem value="in-progress">{t("In Progress")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Cards Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-5 flex flex-col items-center text-center bg-white/70 dark:bg-[#1f2a3e]/60 backdrop-blur-md shadow-md">
            <Coins className="text-yellow-500 mb-3" size={32} />
            <h3 className="text-lg font-semibold">{t("Total Coins")}</h3>
            <p className="text-2xl font-bold text-yellow-500">1,250</p>
          </Card>

          <Card className="p-5 flex flex-col items-center text-center bg-white/70 dark:bg-[#1f2a3e]/60 backdrop-blur-md shadow-md">
            <Target className="text-green-500 mb-3" size={32} />
            <h3 className="text-lg font-semibold">{t("Goals Completed")}</h3>
            <p className="text-2xl font-bold text-green-500">8 / 10</p>
          </Card>

          <Card className="p-5 flex flex-col items-center text-center bg-white/70 dark:bg-[#1f2a3e]/60 backdrop-blur-md shadow-md">
            <TrendingUp className="text-blue-500 mb-3" size={32} />
            <h3 className="text-lg font-semibold">{t("Progress Level")}</h3>
            <p className="text-2xl font-bold text-blue-500">Level 5</p>
          </Card>
        </div>

        {/* Achievements Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            {t("Recent Achievements")}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-5 flex items-center gap-4 bg-white/70 dark:bg-[#1f2a3e]/60 backdrop-blur-md shadow-md">
              <CheckCircle2 className="text-green-500" size={28} />
              <div>
                <h3 className="font-semibold">{t("Completed First Lesson")}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  2 days ago
                </p>
              </div>
            </Card>
            <Card className="p-5 flex items-center gap-4 bg-white/70 dark:bg-[#1f2a3e]/60 backdrop-blur-md shadow-md">
              <Star className="text-yellow-500" size={28} />
              <div>
                <h3 className="font-semibold">{t("Earned 500 Coins")}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  5 days ago
                </p>
              </div>
            </Card>
            <Card className="p-5 flex items-center gap-4 bg-white/70 dark:bg-[#1f2a3e]/60 backdrop-blur-md shadow-md">
              <Gift className="text-pink-500" size={28} />
              <div>
                <h3 className="font-semibold">{t("Unlocked New Badge")}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  1 week ago
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
