// NOTE: This Dashboard component includes its own sidebar/navigation and does NOT require the global Navbar.
// When navigating to the Dashboard route, the global Navbar should not be displayed.
// Libraries
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home as HomeIcon,
  LogOut,
  Coins,
  BookOpen,
  User,
  Filter,
  Calendar,
  TrendingUp,
  Award,
  Target,
  Trophy,
  CheckCircle2,
  Star,
  Zap,
  Gift,
  Menu,
  X,
} from "lucide-react";

// Components (No Navbar import here; Dashboard is self-contained)
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
import Leaderboard from "../pages/main/Leaderboard";

// Contexts
import { useLanguage } from "../contexts/LanguageContext";

const getActivityIcon = (type) => {
  switch (type) {
    case "homework":
      return BookOpen;
    case "quiz":
      return Trophy;
    case "participation":
      return Target;
    case "achievement":
      return Award;
    case "bonus":
      return Zap;
    case "referral":
      return Gift;
  }
};

const getActivityColor = (type) => {
  switch (type) {
    case "homework":
      return {
        bg: "from-blue-400 to-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        light: "bg-blue-50 dark:bg-blue-900/20",
      };
    case "quiz":
      return {
        bg: "from-purple-400 to-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        light: "bg-purple-50 dark:bg-purple-900/20",
      };
    case "participation":
      return {
        bg: "from-green-400 to-green-500",
        text: "text-green-600 dark:text-green-400",
        light: "bg-green-50 dark:bg-green-900/20",
      };
    case "achievement":
      return {
        bg: "from-yellow-400 to-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        light: "bg-orange-50 dark:bg-orange-900/20",
      };
    case "bonus":
      return {
        bg: "from-pink-400 to-pink-500",
        text: "text-pink-600 dark:text-pink-400",
        light: "bg-pink-50 dark:bg-pink-900/20",
      };
    case "referral":
      return {
        bg: "from-indigo-400 to-indigo-500",
        text: "text-indigo-600 dark:text-indigo-400",
        light: "bg-indigo-50 dark:bg-indigo-900/20",
      };
  }
};

export default function Dashboard({
  user,
  onLogout,
  onNavigate = () => {},
}) {
  const { t } = useLanguage();
  const [filterType, setFilterType] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    // Responsive sidebar open/close on resize
    if (window.innerWidth >= 768) {
      setSidebarOpen(false);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mockActivities = [
    {
      id: 1,
      type: "quiz",
      titleKey: "activity.completedMathQuiz",
      coins: 150,
      date: "2025-10-12",
      categoryKey: "category.math",
    },
    {
      id: 2,
      type: "homework",
      titleKey: "activity.submittedPhysics",
      coins: 75,
      date: "2025-10-11",
      categoryKey: "category.science",
    },
    {
      id: 3,
      type: "achievement",
      titleKey: "activity.learningStreak",
      coins: 200,
      date: "2025-10-11",
      categoryKey: "category.milestone",
    },
    {
      id: 4,
      type: "participation",
      titleKey: "activity.activeDiscussion",
      coins: 50,
      date: "2025-10-10",
      categoryKey: "category.community",
    },
    {
      id: 5,
      type: "quiz",
      titleKey: "activity.acedEnglish",
      coins: 120,
      date: "2025-10-09",
      categoryKey: "category.english",
    },
    {
      id: 6,
      type: "bonus",
      titleKey: "activity.earlySubmission",
      coins: 30,
      date: "2025-10-09",
      categoryKey: "category.bonus",
    },
    {
      id: 7,
      type: "homework",
      titleKey: "activity.chemistryLab",
      coins: 100,
      date: "2025-10-08",
      categoryKey: "category.science",
    },
    {
      id: 8,
      type: "referral",
      titleKey: "activity.referredFriend",
      coins: 250,
      date: "2025-10-07",
      categoryKey: "category.referral",
    },
    {
      id: 9,
      type: "achievement",
      titleKey: "activity.completedCourse",
      coins: 500,
      date: "2025-10-06",
      categoryKey: "category.achievement",
    },
    {
      id: 10,
      type: "quiz",
      titleKey: "activity.historyQuiz",
      coins: 100,
      date: "2025-10-05",
      categoryKey: "category.history",
    },
  ];

  // New stat variables for 4 cards
  const currentBalance = 2500; // example value
  const allTimeBalance = 4800; // example value
  const centerRank = 5; // example value
  const globalRank = 23; // example value

  const totalCoins = mockActivities.reduce(
    (sum, activity) => sum + activity.coins,
    0,
  );

  const filteredActivities =
    filterType === "all"
      ? mockActivities
      : mockActivities.filter(
          (activity) => activity.type === filterType,
        );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <AnimatePresence>
        {(sidebarOpen || windowWidth >= 768) && (
          <>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
              />
            )}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed md:sticky top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 z-50 overflow-y-auto theme-transition"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl text-gray-800 dark:text-white theme-transition">
                    IlmCoin
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(false)}
                  className="md:hidden rounded-lg"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-xl theme-transition">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center text-white">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 dark:text-white truncate theme-transition">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate theme-transition">
                      {user?.email}
                    </p>
                  </div>
                </div>
              </div>

              <nav className="space-y-2 mb-8">
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all theme-transition ${
                    activeSection === "dashboard"
                      ? "bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveSection("dashboard")}
                >
                  <Coins className="w-5 h-5" />
                  <span>{t("dashboard.dashboard")}</span>
                </button>
                <button
                  onClick={() => setActiveSection("leaderboard")}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all theme-transition ${
                    activeSection === "leaderboard"
                      ? "bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Trophy className="w-5 h-5" />
                  <span>{t("leaderboard.title")}</span>
                </button>
              </nav>

              <div className="space-y-3 mb-6">
                <ThemeToggle />
                <LanguageToggle />
              </div>

              <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700 theme-transition">
                <Button
                  onClick={onLogout}
                  variant="outline"
                  className="w-full justify-start gap-3 rounded-xl border-gray-200 dark:border-gray-700 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-700 transition-all theme-transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span>{t("nav.logout")}</span>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden">
        <div className="md:hidden mb-6 flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl dark:bg-gray-800 dark:border-gray-700"
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
              <Coins className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg text-gray-800 dark:text-white theme-transition">
              IlmCoin
            </span>
          </div>
        </div>

        {activeSection === "dashboard" && (
          <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 dark:text-white mb-2 theme-transition">
                {t("dashboard.welcome")} {user?.name}! 👋
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 theme-transition">
                {t("dashboard.subtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Card 1: Current Balance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="w-full p-6 md:p-8 bg-gradient-to-br from-blue-400 to-green-400 border-0 shadow-xl rounded-2xl text-white relative overflow-hidden h-48">
                  <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full -mr-12 -mt-12 md:-mr-16 md:-mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 md:w-48 md:h-48 bg-white/10 rounded-full -ml-20 -mb-20 md:-ml-24 md:-mb-24"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <Coins className="w-5 h-5 md:w-6 md:h-6" />
                      </motion.div>
                      <div>
                        <p className="text-white/80 text-xs sm:text-sm">
                          {t("dashboard.currentBalance") || "Current Balance"}
                        </p>
                        <motion.p
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.3,
                            type: "spring",
                          }}
                          className="text-2xl sm:text-3xl"
                        >
                          {currentBalance.toLocaleString()}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>+250 {t("dashboard.thisWeek")}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Card 2: All Time Balance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="w-full p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl transition-all theme-transition space-y-2 h-48">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center theme-transition">
                      <Coins className="w-5 h-5 md:w-6 md:h-6 text-purple-600 dark:text-purple-400 theme-transition" />
                    </div>
                    <div className="pl-1">
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm theme-transition">
                        {t("dashboard.allTimeBalance") || "All Time Balance"}
                      </p>
                      <p className="text-2xl sm:text-3xl text-gray-800 dark:text-white theme-transition">
                        {allTimeBalance.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 theme-transition">
                    {t("dashboard.lifetimeCoins") || "Lifetime IlmCoins earned"}
                  </p>
                </Card>
              </motion.div>

              {/* Card 3: Center Rank */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="w-full p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl transition-all theme-transition space-y-2 h-48">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center theme-transition">
                      <Trophy className="w-5 h-5 md:w-6 md:h-6 text-orange-600 dark:text-orange-400 theme-transition" />
                    </div>
                    <div className="pl-1">
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm theme-transition">
                        {t("dashboard.centerRank") || "Center Rank"}
                      </p>
                      <p className="text-2xl sm:text-3xl text-gray-800 dark:text-white theme-transition">
                        #{centerRank}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 theme-transition">
                    {t("dashboard.centerRankDesc") || "Your rank in your center"}
                  </p>
                </Card>
              </motion.div>

              {/* Card 4: Global Rank */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="w-full p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl hover:shadow-xl transition-all theme-transition space-y-2 h-48">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center theme-transition">
                      <Target className="w-5 h-5 md:w-6 md:h-6 text-green-600 dark:text-green-400 theme-transition" />
                    </div>
                    <div className="pl-1">
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm theme-transition">
                        {t("dashboard.globalRank") || "Global Rank"}
                      </p>
                      <p className="text-2xl sm:text-3xl text-gray-800 dark:text-white theme-transition">
                        #{globalRank}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 theme-transition">
                    {t("dashboard.globalRankDesc") || "Your global rank"}
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-4 sm:p-6 md:p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-2xl theme-transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl text-gray-800 dark:text-white mb-1 theme-transition">
                      {t("dashboard.rewardHistory")}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 theme-transition">
                      {t("dashboard.trackAll")}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <Select
                      value={filterType}
                      onValueChange={setFilterType}
                    >
                      <SelectTrigger className="w-full sm:w-40 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900 theme-transition">
                        <SelectValue
                          placeholder={t("dashboard.filterType")}
                        />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
                        <SelectItem value="all">
                          {t("dashboard.allActivities")}
                        </SelectItem>
                        <SelectItem value="homework">
                          {t("dashboard.homework")}
                        </SelectItem>
                        <SelectItem value="quiz">
                          {t("dashboard.quizzes")}
                        </SelectItem>
                        <SelectItem value="achievement">
                          {t("dashboard.achievements")}
                        </SelectItem>
                        <SelectItem value="participation">
                          {t("dashboard.participation")}
                        </SelectItem>
                        <SelectItem value="bonus">
                          {t("dashboard.bonus")}
                        </SelectItem>
                        <SelectItem value="referral">
                          {t("dashboard.referrals")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  {filteredActivities.map((activity, index) => {
                    const Icon = getActivityIcon(activity.type);
                    const colors = getActivityColor(
                      activity.type,
                    );

                    return (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                        }}
                      >
                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-all theme-transition">
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center text-white flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className="text-sm sm:text-base text-gray-800 dark:text-white mb-1 theme-transition">
                              {t(activity.titleKey)}
                            </p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 dark:text-gray-400 theme-transition">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(activity.date)}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 sm:gap-2 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-md flex-shrink-0">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-sm sm:text-base">
                              +{activity.coins}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {filteredActivities.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mx-auto mb-4 theme-transition">
                      <Coins className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 theme-transition">
                      {t("dashboard.noActivities")}
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        )}
        {activeSection === "leaderboard" && (
          <Leaderboard />
        )}
      </div>
    </div>
  );
}