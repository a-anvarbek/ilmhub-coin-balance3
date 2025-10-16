// Libraries
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Medal,
  ChevronDown,
  ChevronUp,
  Calendar,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  User,
  GraduationCap,
  UserCog,
} from "lucide-react";
import { useNavigate } from "react-router";

// Components
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ThemeToggle } from "../../components/ThemeToggle";
import { LanguageToggle } from "../../components/LanguageToggle";

// Context
import { useLanguage } from "../../contexts/LanguageContext";

// Mock Data
const studentsData = [
  {
    id: 1,
    name: "Sarah Ahmed",
    avatar: "👩‍🎓",
    currentBalance: 2450,
    allTimeBalance: 5800,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 150,
        description: "Completed Math Quiz",
        date: "2025-10-12",
      },
      {
        id: 2,
        type: "earned",
        amount: 100,
        description: "Perfect Attendance",
        date: "2025-10-10",
      },
      {
        id: 3,
        type: "spent",
        amount: 200,
        description: "Redeemed Certificate",
        date: "2025-10-09",
      },
      {
        id: 4,
        type: "earned",
        amount: 75,
        description: "Homework Submission",
        date: "2025-10-08",
      },
      {
        id: 5,
        type: "earned",
        amount: 200,
        description: "7-Day Streak Bonus",
        date: "2025-10-07",
      },
      {
        id: 6,
        type: "earned",
        amount: 50,
        description: "Class Participation",
        date: "2025-10-06",
      },
      {
        id: 7,
        type: "spent",
        amount: 150,
        description: "Premium Course Access",
        date: "2025-10-05",
      },
      {
        id: 8,
        type: "earned",
        amount: 120,
        description: "English Test",
        date: "2025-10-04",
      },
      {
        id: 9,
        type: "earned",
        amount: 80,
        description: "Lab Report",
        date: "2025-10-03",
      },
      {
        id: 10,
        type: "earned",
        amount: 100,
        description: "Group Project",
        date: "2025-10-02",
      },
      {
        id: 11,
        type: "spent",
        amount: 100,
        description: "Study Materials",
        date: "2025-10-01",
      },
      {
        id: 12,
        type: "earned",
        amount: 90,
        description: "Quiz Completion",
        date: "2025-09-30",
      },
    ],
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "👨‍🎓",
    currentBalance: 2280,
    allTimeBalance: 5200,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 140,
        description: "Science Project",
        date: "2025-10-12",
      },
      {
        id: 2,
        type: "earned",
        amount: 90,
        description: "Daily Challenge",
        date: "2025-10-11",
      },
      {
        id: 3,
        type: "spent",
        amount: 180,
        description: "Course Certificate",
        date: "2025-10-10",
      },
      {
        id: 4,
        type: "earned",
        amount: 110,
        description: "Coding Assignment",
        date: "2025-10-09",
      },
      {
        id: 5,
        type: "earned",
        amount: 85,
        description: "Forum Participation",
        date: "2025-10-08",
      },
    ],
  },
  {
    id: 3,
    name: "Aisha Khan",
    avatar: "👩‍🎓",
    currentBalance: 2150,
    allTimeBalance: 4900,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 130,
        description: "Literature Essay",
        date: "2025-10-12",
      },
      {
        id: 2,
        type: "earned",
        amount: 95,
        description: "Presentation",
        date: "2025-10-11",
      },
      {
        id: 3,
        type: "spent",
        amount: 150,
        description: "Workshop Access",
        date: "2025-10-10",
      },
    ],
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar: "👨‍🎓",
    currentBalance: 1980,
    allTimeBalance: 4500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 120,
        description: "History Test",
        date: "2025-10-12",
      },
      {
        id: 2,
        type: "spent",
        amount: 120,
        description: "eBook Purchase",
        date: "2025-10-11",
      },
    ],
  },
  {
    id: 5,
    name: "Emma Wilson",
    avatar: "👩‍🎓",
    currentBalance: 1850,
    allTimeBalance: 4200,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 110,
        description: "Art Project",
        date: "2025-10-12",
      },
    ],
  },
  {
    id: 6,
    name: "James Taylor",
    avatar: "👨‍🎓",
    currentBalance: 1720,
    allTimeBalance: 3900,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 100,
        description: "Physics Lab",
        date: "2025-10-12",
      },
    ],
  },
  {
    id: 7,
    name: "Olivia Brown",
    avatar: "👩‍🎓",
    currentBalance: 1650,
    allTimeBalance: 3700,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 95,
        description: "Chemistry Quiz",
        date: "2025-10-12",
      },
    ],
  },
  {
    id: 8,
    name: "Lucas Martinez",
    avatar: "👨‍🎓",
    currentBalance: 1580,
    allTimeBalance: 3500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 90,
        description: "Biology Test",
        date: "2025-10-12",
      },
    ],
  },
  {
    id: 9,
    name: "Sophia Anderson",
    avatar: "👩‍🎓",
    currentBalance: 1490,
    allTimeBalance: 3300,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 85,
        description: "Geography Assignment",
        date: "2025-10-12",
      },
    ],
  },
  {
    id: 10,
    name: "Noah Johnson",
    avatar: "👨‍🎓",
    currentBalance: 1420,
    allTimeBalance: 3100,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 80,
        description: "Music Theory",
        date: "2025-10-12",
      },
    ],
  },
];

const teachersData = [
  {
    id: 1,
    name: "Prof. Elizabeth Hart",
    avatar: "👩‍🏫",
    currentBalance: 5800,
    allTimeBalance: 12500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 300,
        description: "Course Completion Bonus",
        date: "2025-10-12",
      },
      {
        id: 2,
        type: "earned",
        amount: 250,
        description: "Student Feedback Score",
        date: "2025-10-10",
      },
      {
        id: 3,
        type: "earned",
        amount: 200,
        description: "Workshop Conducted",
        date: "2025-10-08",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. Robert Mitchell",
    avatar: "👨‍🏫",
    currentBalance: 5200,
    allTimeBalance: 11800,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 280,
        description: "Research Publication",
        date: "2025-10-12",
      },
      {
        id: 2,
        type: "earned",
        amount: 220,
        description: "Mentorship Program",
        date: "2025-10-09",
      },
    ],
  },
  {
    id: 3,
    name: "Prof. Maria Garcia",
    avatar: "👩‍🏫",
    currentBalance: 4900,
    allTimeBalance: 11200,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 260,
        description: "Guest Lecture",
        date: "2025-10-11",
      },
    ],
  },
  {
    id: 4,
    name: "Dr. Ahmed Hassan",
    avatar: "👨‍🏫",
    currentBalance: 4500,
    allTimeBalance: 10500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 240,
        description: "Curriculum Development",
        date: "2025-10-10",
      },
    ],
  },
  {
    id: 5,
    name: "Prof. Linda White",
    avatar: "👩‍🏫",
    currentBalance: 4200,
    allTimeBalance: 9800,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 220,
        description: "Online Course Launch",
        date: "2025-10-09",
      },
    ],
  },
  {
    id: 6,
    name: "Dr. Kevin Park",
    avatar: "👨‍🏫",
    currentBalance: 3900,
    allTimeBalance: 9200,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 200,
        description: "Lab Supervision",
        date: "2025-10-08",
      },
    ],
  },
  {
    id: 7,
    name: "Prof. Rachel Green",
    avatar: "👩‍🏫",
    currentBalance: 3700,
    allTimeBalance: 8900,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 190,
        description: "Thesis Guidance",
        date: "2025-10-07",
      },
    ],
  },
  {
    id: 8,
    name: "Dr. Thomas Lee",
    avatar: "👨‍🏫",
    currentBalance: 3500,
    allTimeBalance: 8500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 180,
        description: "Seminar Presentation",
        date: "2025-10-06",
      },
    ],
  },
  {
    id: 9,
    name: "Prof. Jennifer Kim",
    avatar: "👩‍🏫",
    currentBalance: 3300,
    allTimeBalance: 8100,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 170,
        description: "Student Counseling",
        date: "2025-10-05",
      },
    ],
  },
  {
    id: 10,
    name: "Dr. Christopher Davis",
    avatar: "👨‍🏫",
    currentBalance: 3100,
    allTimeBalance: 7800,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 160,
        description: "Conference Attendance",
        date: "2025-10-04",
      },
    ],
  },
];

const adminsData = [
  {
    id: 1,
    name: "Admin Sarah Johnson",
    avatar: "👩‍💼",
    currentBalance: 8500,
    allTimeBalance: 18000,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 500,
        description: "Platform Management",
        date: "2025-10-12",
      },
      {
        id: 2,
        type: "earned",
        amount: 400,
        description: "System Optimization",
        date: "2025-10-10",
      },
      {
        id: 3,
        type: "earned",
        amount: 350,
        description: "User Support Excellence",
        date: "2025-10-08",
      },
    ],
  },
  {
    id: 2,
    name: "Admin Michael Wong",
    avatar: "👨‍💼",
    currentBalance: 7800,
    allTimeBalance: 16500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 450,
        description: "Security Updates",
        date: "2025-10-11",
      },
      {
        id: 2,
        type: "earned",
        amount: 380,
        description: "Database Maintenance",
        date: "2025-10-09",
      },
    ],
  },
  {
    id: 3,
    name: "Admin Emily Zhang",
    avatar: "👩‍💼",
    currentBalance: 7200,
    allTimeBalance: 15200,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 420,
        description: "Feature Deployment",
        date: "2025-10-10",
      },
    ],
  },
  {
    id: 4,
    name: "Admin David Kumar",
    avatar: "👨‍💼",
    currentBalance: 6800,
    allTimeBalance: 14500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 400,
        description: "Performance Monitoring",
        date: "2025-10-09",
      },
    ],
  },
  {
    id: 5,
    name: "Admin Lisa Anderson",
    avatar: "👩‍💼",
    currentBalance: 6200,
    allTimeBalance: 13800,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 380,
        description: "Content Moderation",
        date: "2025-10-08",
      },
    ],
  },
  {
    id: 6,
    name: "Admin Robert Chen",
    avatar: "👨‍💼",
    currentBalance: 5900,
    allTimeBalance: 13200,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 360,
        description: "Analytics Report",
        date: "2025-10-07",
      },
    ],
  },
  {
    id: 7,
    name: "Admin Maria Lopez",
    avatar: "👩‍💼",
    currentBalance: 5500,
    allTimeBalance: 12500,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 340,
        description: "User Onboarding",
        date: "2025-10-06",
      },
    ],
  },
  {
    id: 8,
    name: "Admin James Park",
    avatar: "👨‍💼",
    currentBalance: 5200,
    allTimeBalance: 11900,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 320,
        description: "Bug Fixes",
        date: "2025-10-05",
      },
    ],
  },
  {
    id: 9,
    name: "Admin Sophie Taylor",
    avatar: "👩‍💼",
    currentBalance: 4800,
    allTimeBalance: 11200,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 300,
        description: "Policy Updates",
        date: "2025-10-04",
      },
    ],
  },
  {
    id: 10,
    name: "Admin Alex Martinez",
    avatar: "👨‍💼",
    currentBalance: 4500,
    allTimeBalance: 10800,
    transactions: [
      {
        id: 1,
        type: "earned",
        amount: 280,
        description: "Platform Maintenance",
        date: "2025-10-03",
      },
    ],
  },
];

export default function Leaderboard() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("student");
  const [expandedUserId, setExpandedUserId] = useState(null);
  const [currentPages, setCurrentPages] = useState({});

  const getCurrentData = () => {
    switch (selectedRole) {
      case "student":
        return studentsData;
      case "teacher":
        return teachersData;
      case "admin":
        return adminsData;
    }
  };

  const data = getCurrentData();

  const toggleTransactions = (userId) => {
    setExpandedUserId(expandedUserId === userId ? null : userId);
  };

  const getMedalIcon = (rank) => {
    switch (rank) {
      case 1:
        return <div className="text-xl sm:text-2xl md:text-3xl">🥇</div>;
      case 2:
        return <div className="text-xl sm:text-2xl md:text-3xl">🥈</div>;
      case 3:
        return <div className="text-xl sm:text-2xl md:text-3xl">🥉</div>;
      default:
        return (
          <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 theme-transition">
            {rank}
          </div>
        );
    }
  };

  const getRankBadgeColor = (rank) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500";
      case 3:
        return "bg-gradient-to-r from-orange-400 to-orange-600";
      default:
        return "bg-gradient-to-r from-blue-400 to-blue-600";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const ITEMS_PER_PAGE = 10;

  const getPaginatedTransactions = (transactions, userId) => {
    const currentPage = currentPages[userId] || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return {
      items: transactions.slice(startIndex, endIndex),
      totalPages: Math.ceil(transactions.length / ITEMS_PER_PAGE),
      currentPage,
    };
  };

  const setPage = (userId, page) => {
    setCurrentPages({ ...currentPages, [userId]: page });
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "student":
        return <User className="w-4 h-4" />;
      case "teacher":
        return <GraduationCap className="w-4 h-4" />;
      case "admin":
        return <UserCog className="w-4 h-4" />;
    }
  };
  

  return (
    <div className="min-h-screen pt-32 px-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-4 sm:mb-6 md:mb-8">

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6 md:mb-8"
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4">
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-yellow-500" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-white theme-transition">
              {t("leaderboard.title")}
            </h1>
            <Trophy className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-yellow-500" />
          </div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 theme-transition px-2 sm:px-4">
            {t("leaderboard.subtitle")}
          </p>
        </motion.div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8"
        >
          <Button
            onClick={() => setSelectedRole("student")}
            variant={selectedRole === "student" ? "default" : "outline"}
            className={`rounded-full px-4 sm:px-6 py-4 sm:py-5 md:py-6 transition-all text-xs sm:text-sm md:text-base ${
              selectedRole === "student"
                ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 theme-transition"
            }`}
          >
            {getRoleIcon("student")}
            <span className="ml-1.5 sm:ml-2">{t("leaderboard.students")}</span>
          </Button>
          <Button
            onClick={() => setSelectedRole("teacher")}
            variant={selectedRole === "teacher" ? "default" : "outline"}
            className={`rounded-full px-4 sm:px-6 py-4 sm:py-5 md:py-6 transition-all text-xs sm:text-sm md:text-base ${
              selectedRole === "teacher"
                ? "bg-gradient-to-r from-green-400 to-green-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 theme-transition"
            }`}
          >
            {getRoleIcon("teacher")}
            <span className="ml-1.5 sm:ml-2">{t("leaderboard.teachers")}</span>
          </Button>
          <Button
            onClick={() => setSelectedRole("admin")}
            variant={selectedRole === "admin" ? "default" : "outline"}
            className={`rounded-full px-4 sm:px-6 py-4 sm:py-5 md:py-6 transition-all text-xs sm:text-sm md:text-base ${
              selectedRole === "admin"
                ? "bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 theme-transition"
            }`}
          >
            {getRoleIcon("admin")}
            <span className="ml-1.5 sm:ml-2">{t("leaderboard.admins")}</span>
          </Button>
        </motion.div>

        {/* Leaderboard Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Desktop/Tablet Table View */}
          <div className="hidden md:block">
            <Card className="overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl theme-transition">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 theme-transition">
                <div className="col-span-1 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.rank")}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.name")}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.currentBalance")}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.allTimeBalance")}
                  </p>
                </div>
                <div className="col-span-2 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                    {t("leaderboard.actions")}
                  </p>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((user, index) => {
                  const rank = index + 1;
                  const isExpanded = expandedUserId === user.id;
                  const {
                    items: paginatedTransactions,
                    totalPages,
                    currentPage,
                  } = getPaginatedTransactions(user.transactions, user.id);

                  return (
                    <div key={user.id}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className={`grid grid-cols-12 gap-4 p-6 hover:bg-gray-50 dark:hover:bg-gray-900/30 transition-all cursor-pointer theme-transition ${
                          rank <= 3
                            ? getRankBadgeColor(rank) + " bg-opacity-5"
                            : ""
                        }`}
                        onClick={() => toggleTransactions(user.id)}
                      >
                        <div className="col-span-1 flex items-center justify-center">
                          {getMedalIcon(rank)}
                        </div>

                        <div className="col-span-3 flex items-center gap-3">
                          <div className="text-3xl">{user.avatar}</div>
                          <div>
                            <p className="text-gray-800 dark:text-white theme-transition">
                              {user.name}
                            </p>
                            {rank <= 3 && (
                              <Badge
                                className={`${getRankBadgeColor(
                                  rank
                                )} text-white border-0 text-xs mt-1`}
                              >
                                <Medal className="w-3 h-3 mr-1" />
                                {rank === 1
                                  ? t("leaderboard.topPerformer")
                                  : rank === 2
                                  ? t("leaderboard.excellent")
                                  : t("leaderboard.great")}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <div className="col-span-3 flex items-center">
                          <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl theme-transition">
                            <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <div>
                              <p className="text-xs text-blue-600 dark:text-blue-400 theme-transition">
                                {t("leaderboard.current")}
                              </p>
                              <p className="text-gray-800 dark:text-white theme-transition">
                                {user.currentBalance.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-3 flex items-center">
                          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-xl theme-transition">
                            <Trophy className="w-5 h-5 text-green-600 dark:text-green-400" />
                            <div>
                              <p className="text-xs text-green-600 dark:text-green-400 theme-transition">
                                {t("leaderboard.allTime")}
                              </p>
                              <p className="text-gray-800 dark:text-white theme-transition">
                                {user.allTimeBalance.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-span-2 flex items-center justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 theme-transition"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleTransactions(user.id);
                            }}
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-4 h-4 mr-1" />
                                {t("leaderboard.hide")}
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                {t("leaderboard.view")}
                              </>
                            )}
                          </Button>
                        </div>
                      </motion.div>

                      {/* Transaction History */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden bg-gray-50 dark:bg-gray-900/50 theme-transition"
                          >
                            <div className="p-6">
                              <h3 className="text-lg text-gray-800 dark:text-white mb-4 flex items-center gap-2 theme-transition">
                                <Calendar className="w-5 h-5" />
                                {t("leaderboard.transactionHistory")}
                              </h3>

                              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 theme-transition">
                                <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 theme-transition">
                                  <div className="col-span-1 text-center">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                                      #
                                    </p>
                                  </div>
                                  <div className="col-span-1">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                                      {t("leaderboard.type")}
                                    </p>
                                  </div>
                                  <div className="col-span-5">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                                      {t("leaderboard.description")}
                                    </p>
                                  </div>
                                  <div className="col-span-2">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                                      {t("leaderboard.amount")}
                                    </p>
                                  </div>
                                  <div className="col-span-3">
                                    <p className="text-xs text-gray-600 dark:text-gray-400 theme-transition">
                                      {t("leaderboard.date")}
                                    </p>
                                  </div>
                                </div>

                                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                  {paginatedTransactions.map(
                                    (transaction, idx) => (
                                      <motion.div
                                        key={transaction.id}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          duration: 0.2,
                                          delay: idx * 0.05,
                                        }}
                                        className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors theme-transition"
                                      >
                                        <div className="col-span-1 text-center">
                                          <p className="text-sm text-gray-500 dark:text-gray-400 theme-transition">
                                            {(currentPage - 1) *
                                              ITEMS_PER_PAGE +
                                              idx +
                                              1}
                                          </p>
                                        </div>
                                        <div className="col-span-1">
                                          {transaction.type === "earned" ? (
                                            <ArrowUpRight className="w-5 h-5 text-green-600 dark:text-green-400" />
                                          ) : (
                                            <ArrowDownRight className="w-5 h-5 text-red-600 dark:text-red-400" />
                                          )}
                                        </div>
                                        <div className="col-span-5">
                                          <p className="text-sm text-gray-800 dark:text-white theme-transition">
                                            {transaction.description}
                                          </p>
                                        </div>
                                        <div className="col-span-2">
                                          <Badge
                                            className={`${
                                              transaction.type === "earned"
                                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                                : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                                            } border-0 theme-transition`}
                                          >
                                            {transaction.type === "earned"
                                              ? "+"
                                              : "-"}
                                            {transaction.amount}
                                          </Badge>
                                        </div>
                                        <div className="col-span-3">
                                          <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                                            {formatDate(transaction.date)}
                                          </p>
                                        </div>
                                      </motion.div>
                                    )
                                  )}
                                </div>

                                {totalPages > 1 && (
                                  <div className="p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between theme-transition">
                                    <p className="text-sm text-gray-600 dark:text-gray-400 theme-transition">
                                      {t("leaderboard.page")} {currentPage}{" "}
                                      {t("leaderboard.of")} {totalPages}
                                    </p>
                                    <div className="flex gap-2">
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() =>
                                          setPage(
                                            user.id,
                                            Math.max(1, currentPage - 1)
                                          )
                                        }
                                        disabled={currentPage === 1}
                                        className="rounded-lg dark:bg-gray-800 dark:border-gray-700 theme-transition"
                                      >
                                        {t("leaderboard.previous")}
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() =>
                                          setPage(
                                            user.id,
                                            Math.min(
                                              totalPages,
                                              currentPage + 1
                                            )
                                          )
                                        }
                                        disabled={currentPage === totalPages}
                                        className="rounded-lg dark:bg-gray-800 dark:border-gray-700 theme-transition"
                                      >
                                        {t("leaderboard.next")}
                                      </Button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-3 sm:space-y-4">
            {data.map((user, index) => {
              const rank = index + 1;
              const isExpanded = expandedUserId === user.id;
              const {
                items: paginatedTransactions,
                totalPages,
                currentPage,
              } = getPaginatedTransactions(user.transactions, user.id);

              return (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card
                    className={`overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg rounded-xl sm:rounded-2xl theme-transition ${
                      rank <= 3
                        ? getRankBadgeColor(rank) + " bg-opacity-10"
                        : ""
                    }`}
                  >
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                      {/* Rank and Name */}
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex-shrink-0">
                          {getMedalIcon(rank)}
                        </div>
                        <div className="text-2xl sm:text-3xl">
                          {user.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base text-gray-800 dark:text-white truncate theme-transition">
                            {user.name}
                          </p>
                          {rank <= 3 && (
                            <Badge
                              className={`${getRankBadgeColor(
                                rank
                              )} text-white border-0 text-[10px] sm:text-xs mt-0.5 sm:mt-1 px-1.5 sm:px-2 py-0.5`}
                            >
                              <Medal className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                              {rank === 1
                                ? t("leaderboard.topPerformer")
                                : rank === 2
                                ? t("leaderboard.excellent")
                                : t("leaderboard.great")}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Balances */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg sm:rounded-xl theme-transition">
                          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-[10px] sm:text-xs text-blue-600 dark:text-blue-400 theme-transition">
                              {t("leaderboard.current")}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-white truncate theme-transition">
                              {user.currentBalance.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 sm:py-3 bg-green-50 dark:bg-green-900/20 rounded-lg sm:rounded-xl theme-transition">
                          <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                          <div className="min-w-0">
                            <p className="text-[10px] sm:text-xs text-green-600 dark:text-green-400 theme-transition">
                              {t("leaderboard.allTime")}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-800 dark:text-white truncate theme-transition">
                              {user.allTimeBalance.toLocaleString()}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* View Transactions Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full rounded-lg sm:rounded-xl border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 theme-transition text-xs sm:text-sm py-2 sm:py-2.5"
                        onClick={() => toggleTransactions(user.id)}
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            {t("leaderboard.hide")}
                          </>
                        ) : (
                          <>
                            <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            {t("leaderboard.view")}
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Mobile Transaction History */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 theme-transition"
                        >
                          <div className="p-3 sm:p-4">
                            <h3 className="text-xs sm:text-sm text-gray-800 dark:text-white mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2 theme-transition">
                              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              {t("leaderboard.transactionHistory")}
                            </h3>

                            <div className="space-y-2">
                              {paginatedTransactions.map((transaction, idx) => (
                                <motion.div
                                  key={transaction.id}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: idx * 0.05,
                                  }}
                                  className="bg-white dark:bg-gray-800 rounded-lg p-2.5 sm:p-3 border border-gray-200 dark:border-gray-700 theme-transition"
                                >
                                  <div className="flex items-start gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                                    {transaction.type === "earned" ? (
                                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                    ) : (
                                      <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                                    )}
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs sm:text-sm text-gray-800 dark:text-white theme-transition leading-tight">
                                        {transaction.description}
                                      </p>
                                    </div>
                                    <Badge
                                      className={`${
                                        transaction.type === "earned"
                                          ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                                          : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                                      } border-0 theme-transition flex-shrink-0 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5`}
                                    >
                                      {transaction.type === "earned"
                                        ? "+"
                                        : "-"}
                                      {transaction.amount}
                                    </Badge>
                                  </div>
                                  <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 theme-transition pl-5 sm:pl-7">
                                    {formatDate(transaction.date)}
                                  </p>
                                </motion.div>
                              ))}
                            </div>

                            {totalPages > 1 && (
                              <div className="mt-3 sm:mt-4 flex flex-col xs:flex-row items-center justify-between gap-2">
                                <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 theme-transition">
                                  {t("leaderboard.page")} {currentPage}/
                                  {totalPages}
                                </p>
                                <div className="flex gap-1.5 sm:gap-2 w-full xs:w-auto">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() =>
                                      setPage(
                                        user.id,
                                        Math.max(1, currentPage - 1)
                                      )
                                    }
                                    disabled={currentPage === 1}
                                    className="rounded-lg text-[10px] sm:text-xs dark:bg-gray-800 dark:border-gray-700 theme-transition flex-1 xs:flex-none px-2 sm:px-3 py-1.5 sm:py-2"
                                  >
                                    {t("leaderboard.previous")}
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() =>
                                      setPage(
                                        user.id,
                                        Math.min(totalPages, currentPage + 1)
                                      )
                                    }
                                    disabled={currentPage === totalPages}
                                    className="rounded-lg text-[10px] sm:text-xs dark:bg-gray-800 dark:border-gray-700 theme-transition flex-1 xs:flex-none px-2 sm:px-3 py-1.5 sm:py-2"
                                  >
                                    {t("leaderboard.next")}
                                  </Button>
                                </div>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
