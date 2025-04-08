import {useTranslation as useTranslationI18n, UseTranslationOptions} from 'react-i18next';

export const useTranslation = (options?: UseTranslationOptions<string>) => useTranslationI18n('', options);
