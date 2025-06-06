import React, { createContext, useState, useEffect, ReactNode } from 'react';
import i18n from '../i18n';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import 'dayjs/locale/en';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
});

interface Props {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    i18n.changeLanguage(language);
    dayjs.locale(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
