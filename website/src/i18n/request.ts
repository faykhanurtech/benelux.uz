import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../i18n';

export default getRequestConfig(async ({locale}) => {

  const currentLocale = locale && locales.includes(locale as any)
    ? locale
    : defaultLocale;

  const messages = (await import(`../messages/${currentLocale}/common.json`)).default;

  return {
    locale: currentLocale,
    messages
  };

});