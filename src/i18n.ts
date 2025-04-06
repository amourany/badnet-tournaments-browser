import * as i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import translationEN from '@assets/locales/en-US/translation.json';
import translationFR from '@assets/locales/fr-FR/translation.json';

export const supportedLanguages = [
	'en',
	'fr',
] as const;

const resources = {
	en: {
		translation: translationEN,
	},
	fr: {
		translation: translationFR,
	},
};

void i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: supportedLanguages,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		resources,
		supportedLngs: supportedLanguages,
	});

export default i18n;
