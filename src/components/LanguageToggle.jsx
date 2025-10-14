import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      className="rounded-full px-4 h-10 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 theme-transition"
    >
      <motion.div
        key={language}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2"
      >
        <span className="text-lg">{language === 'en' ? '🇺🇸' : '🇺🇿'}</span>
        <span className="text-sm text-gray-700 dark:text-gray-300">{language === 'en' ? 'EN' : 'UZ'}</span>
      </motion.div>
    </Button>
  );
}
