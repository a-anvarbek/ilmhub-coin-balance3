import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { 
  Sparkles, 
  BookOpen, 
  Users, 
  Award, 
  MessageSquare,
  Coins,
  GraduationCap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
export function Home({ onNavigate, onDemoLogin }) {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t('home.features.interactive'),
      description: t('home.features.interactiveDesc')
    },
    {
      icon: Users,
      title: t('home.features.mentor'),
      description: t('home.features.mentorDesc')
    },
    {
      icon: Award,
      title: t('home.features.certificates'),
      description: t('home.features.certificatesDesc')
    },
    {
      icon: MessageSquare,
      title: t('home.features.community'),
      description: t('home.features.communityDesc')
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 theme-transition"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-gray-800 dark:text-white theme-transition">IlmCoin</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                {t('nav.home')}
              </button>
              <button onClick={() => onNavigate('about')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                {t('nav.features')}
              </button>
              <button onClick={() => onNavigate('leaderboard')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                {t('leaderboard.title')}
              </button>
              <button onClick={() => onNavigate('contact')} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                {t('nav.contact')}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle />
              <Button
                onClick={() => onNavigate('login')}
                className="bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white rounded-full px-6 shadow-md"
              >
                {t('nav.login')}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 mb-6 theme-transition"
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-blue-700 dark:text-blue-300 theme-transition">{t('home.badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl text-gray-800 dark:text-white mb-6 theme-transition"
              >
                {t('home.hero.title')}
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                  {t('home.hero.titleHighlight')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg theme-transition"
              >
                {t('home.hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={() => onNavigate('login')}
                  className="bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                >
                  {t('home.hero.getStarted')}
                </Button>
                
                <Button
                  onClick={() => onNavigate('login')}
                  variant="outline"
                  className="rounded-full px-8 py-6 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 transition-all shadow-md theme-transition"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  {t('home.hero.continueGoogle')}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6"
              >
                <Button
                  onClick={onDemoLogin}
                  variant="ghost"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-full theme-transition"
                >
                  <GraduationCap className="w-4 h-4 mr-2" />
                  {t('home.hero.tryDemo')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758874573116-2bc02232eef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwbGVhcm5pbmclMjBvbmxpbmV8ZW58MXx8fHwxNzYwMjA0ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student learning online"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-green-500/10"></div>
              </div>

              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl theme-transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{t('dashboard.totalCoins')}</p>
                    <p className="text-gray-800 dark:text-white theme-transition">+150</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section id="features" className="py-20 px-6 bg-white/50 dark:bg-gray-900/50 theme-transition">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-gray-800 dark:text-white mb-4 theme-transition">{t('home.features.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto theme-transition">
              {t('home.features.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full theme-transition">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl text-gray-800 dark:text-white mb-3 theme-transition">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 theme-transition">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => onNavigate('features')}
              variant="outline"
              className="rounded-full px-8 py-6 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-md theme-transition"
            >
              {t('home.features.exploreAll')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About IlmCoin */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1555660656-fa2fd5c2da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb218ZW58MXx8fHwxNzYwMTY0OTYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Education classroom"
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
              <h2 className="text-4xl text-gray-800 dark:text-white mb-6 theme-transition">{t('home.about.title')}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 theme-transition">
                {t('home.about.description1')}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 theme-transition">
                {t('home.about.description2')}
              </p>
              <Button
                onClick={() => onNavigate('about')}
                className="bg-gradient-to-r from-blue-400 to-green-400 hover:from-blue-500 hover:to-green-500 text-white rounded-full px-8 py-6 shadow-lg"
              >
                {t('home.about.learnMore')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6 theme-transition">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl">IlmCoin</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('home.footer.tagline')}
              </p>
            </div>

            <div>
              <h4 className="mb-4">{t('home.footer.quickLinks')}</h4>
              <div className="space-y-2">
                <button onClick={() => onNavigate('home')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {t('nav.home')}
                </button>
                <button onClick={() => onNavigate('about')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {t('nav.about')}
                </button>
                <button onClick={() => onNavigate('features')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {t('nav.features')}
                </button>
                <button onClick={() => onNavigate('contact')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {t('nav.contact')}
                </button>
              </div>
            </div>

            <div>
              <h4 className="mb-4">{t('home.footer.resources')}</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {t('home.footer.helpCenter')}
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {t('home.footer.privacy')}
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm">
                  {t('home.footer.terms')}
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4">{t('home.footer.connect')}</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-700 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>{t('home.footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
