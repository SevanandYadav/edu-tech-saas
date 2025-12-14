export type Language = 'en' | 'hi' | 'mr';

export interface Translations {
  [key: string]: string;
}

export interface I18nConfig {
  supportedLanguages: Language[];
  defaultLanguage: Language;
  languageNames: Record<Language, string>;
  fallbackLanguage: Language;
}

const DATA_BRANCH_URL = process.env.NEXT_PUBLIC_DATA_BRANCH_URL || 'https://raw.githubusercontent.com/SevanandYadav/edu-tech-saas/data';

let translationsCache: Record<string, Record<Language, Translations>> = {};
let configCache: Record<string, I18nConfig> = {};

export async function loadSchoolI18nConfig(schoolSlug: string): Promise<I18nConfig | null> {
  if (configCache[schoolSlug]) {
    return configCache[schoolSlug];
  }

  try {
    const response = await fetch(`${DATA_BRANCH_URL}/data/schools/${schoolSlug}/i18n/config.json`);
    if (response.ok) {
      const config = await response.json();
      configCache[schoolSlug] = config;
      return config;
    }
  } catch (error) {
    console.warn(`Failed to load i18n config for ${schoolSlug}:`, error);
  }
  return null;
}

export async function loadSchoolTranslations(schoolSlug: string, language: Language): Promise<Translations | null> {
  const cacheKey = `${schoolSlug}-${language}`;
  if (translationsCache[cacheKey]) {
    return translationsCache[cacheKey][language];
  }

  try {
    const response = await fetch(`${DATA_BRANCH_URL}/data/schools/${schoolSlug}/i18n/translations/${language}.json`);
    if (response.ok) {
      const translations = await response.json();
      if (!translationsCache[schoolSlug]) {
        translationsCache[schoolSlug] = {} as Record<Language, Translations>;
      }
      translationsCache[schoolSlug][language] = translations;
      return translations;
    }
  } catch (error) {
    console.warn(`Failed to load translations for ${schoolSlug} (${language}):`, error);
  }
  return null;
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी'
};