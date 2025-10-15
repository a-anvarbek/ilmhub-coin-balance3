// Libraries
import { motion } from "motion/react";
import {
  Coins,
  BookOpen,
  Award,
  Users,
  TrendingUp,
  Video,
  MessageCircle,
  Shield,
  Zap,
  Target,
  Bell,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router";

// Components
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

const mainFeatures = [
  {
    icon: Coins,
    title: "Reward Coins System",
    description:
      "Earn IlmCoins for every lesson completed, quiz passed, and milestone achieved. Redeem your coins for certificates, premium courses, and exclusive content.",
    gradient: "from-yellow-400 to-orange-400",
    features: [
      "Earn coins for completing lessons",
      "Bonus rewards for streaks",
      "Redeem for premium content",
      "Track your earning history",
    ],
  },
  {
    icon: BookOpen,
    title: "Interactive Courses",
    description:
      "Access a vast library of courses across multiple subjects, all designed with interactive elements to keep you engaged and motivated throughout your learning journey.",
    gradient: "from-blue-400 to-indigo-400",
    features: [
      "Video lessons with quizzes",
      "Hands-on projects",
      "Downloadable resources",
      "Self-paced learning",
    ],
  },
  {
    icon: Award,
    title: "Achievements & Certificates",
    description:
      "Showcase your accomplishments with digital badges and certificates. Build your portfolio and demonstrate your skills to potential employers or educational institutions.",
    gradient: "from-purple-400 to-pink-400",
    features: [
      "Digital certificates",
      "Skill badges",
      "Shareable achievements",
      "Portfolio building",
    ],
  },
  {
    icon: TrendingUp,
    title: "Student Dashboard",
    description:
      "Monitor your progress with comprehensive analytics. Track your learning patterns, identify strengths, and discover areas for improvement with detailed insights.",
    gradient: "from-green-400 to-emerald-400",
    features: [
      "Progress tracking",
      "Performance analytics",
      "Learning insights",
      "Goal setting tools",
    ],
  },
  {
    icon: Users,
    title: "Mentorship & Support",
    description:
      "Connect with experienced mentors who provide personalized guidance, answer questions, and help you navigate your educational journey with expert advice.",
    gradient: "from-red-400 to-pink-400",
    features: [
      "One-on-one mentoring",
      "24/7 support chat",
      "Community forums",
      "Expert guidance",
    ],
  },
  {
    icon: Video,
    title: "Live Sessions",
    description:
      "Participate in live interactive sessions with instructors and fellow students. Engage in real-time discussions and get immediate answers to your questions.",
    gradient: "from-cyan-400 to-blue-400",
    features: [
      "Live webinars",
      "Q&A sessions",
      "Interactive workshops",
      "Recording access",
    ],
  },
];

const additionalFeatures = [
  {
    icon: MessageCircle,
    title: "Discussion Forums",
    description: "Engage with community",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Your data is protected",
  },
  { icon: Zap, title: "Quick Learning", description: "Learn at your pace" },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and achieve goals",
  },
  { icon: Bell, title: "Smart Reminders", description: "Stay on track" },
  {
    icon: CheckCircle2,
    title: "Progress Reports",
    description: "Detailed insights",
  },
];

export default function Features({ onNavigate }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl text-gray-800 mb-6">
              Platform{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Features
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the powerful tools and features designed to make your
              learning experience exceptional.
            </p>
          </motion.div>

          {/* Main Features */}
          <div className="space-y-8 mb-20">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white border-gray-200 rounded-3xl hover:shadow-2xl transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl text-gray-800 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-sm text-gray-500 mb-4">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {feature.features.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl text-gray-800 text-center mb-12">
              And Much More...
            </h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {additionalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="p-6 bg-white border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center h-full">
                    <feature.icon className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                    <h4 className="text-sm text-gray-800 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-12 bg-gradient-to-br from-blue-400 to-green-400 border-0 rounded-3xl text-white">
              <h2 className="text-3xl mb-4">
                Ready to Experience All These Features?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Join IlmCoin today and unlock a world of interactive learning,
                rewards, and achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/login")}
                  className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  Start Learning Now
                </Button>
                <Button
                  onClick={() => navigate("/contact")}
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 transition-all"
                >
                  Contact Us
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
