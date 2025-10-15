// Libraries
import { motion } from "motion/react";
import {
  Target,
  Users,
  Heart,
  TrendingUp,
  Shield,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router";

// Components
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const whyChoose = [
  {
    icon: Target,
    title: "Clear Learning Goals",
    description:
      "Set and track your educational objectives with our structured curriculum and personalized learning paths.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description:
      "Monitor your improvement with detailed analytics and insights into your learning journey.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Your data is protected with industry-standard security measures and privacy protocols.",
  },
  {
    icon: Heart,
    title: "Student-Centered",
    description:
      "Every feature is designed with students in mind, ensuring an engaging and supportive experience.",
  },
];

const team = [
  {
    name: "Sarah Ahmed",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAyNDA1NTR8MA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Aisha Khan",
    role: "Head of Education",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  },
  {
    name: "David Rodriguez",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
];

export default function About() {
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
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                IlmCoin
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming education through innovation, engagement, and
              rewards.
            </p>
          </motion.div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjAyNDA5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-700">Our Mission</span>
              </div>
              <h2 className="text-4xl text-gray-800 mb-6">
                Empowering Learners Worldwide
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At IlmCoin, we believe that education should be accessible,
                engaging, and rewarding for everyone. Our platform was born from
                the vision of making learning a joyful experience rather than a
                burden.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We combine cutting-edge technology with proven educational
                methodologies to create an environment where students are
                motivated to learn, grow, and achieve their full potential.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl text-gray-800 mb-1">50K+</p>
                    <p className="text-sm text-gray-600">Active Students</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl text-gray-800 mb-1">500+</p>
                    <p className="text-sm text-gray-600">Courses</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose IlmCoin */}
      <section className="py-20 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-gray-800 mb-4">Why Choose IlmCoin?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our platform the perfect choice for your
              learning journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate educators and technologists working together to
              revolutionize learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-400 to-green-400">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who are already learning, growing, and
              earning rewards with IlmCoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/login")}
                className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                Get Started Now
              </Button>
              <Button
                onClick={() => navigate("/features")}
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 transition-all"
              >
                Explore Features
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
