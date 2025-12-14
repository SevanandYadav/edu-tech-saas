'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations, loadSchoolTranslations, languageNames } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: Translations;
  loading: boolean;
  setSchool: (schoolSlug: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [schoolSlug, setSchoolSlug] = useState<string>('');
  const [translations, setTranslations] = useState<Translations>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['en', 'hi', 'mr'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    if (schoolSlug && language) {
      setLoading(true);
      loadSchoolTranslations(schoolSlug, language).then(schoolTranslations => {
        if (schoolTranslations) {
          setTranslations(schoolTranslations);
        }
        setLoading(false);
      });
    }
  }, [schoolSlug, language]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const setSchool = (slug: string) => {
    setSchoolSlug(slug);
  };

  const t = translations;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, loading, setSchool }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}