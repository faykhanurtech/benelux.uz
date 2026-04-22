import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../i18n';

const messageFiles = ['common', 'about', 'home', 'partners', 'events', 'contact', 'news'];

export default getRequestConfig(async ({locale}) => {

  const currentLocale = locale && locales.includes(locale as any)
    ? locale
    : defaultLocale;

  let messages = {};
  for (const file of messageFiles) {
    try {
      const mod = (await import(`../messages/${currentLocale}/${file}.json`)).default;
      messages = { ...messages, ...mod };
    } catch {}
  }

  return {
    locale: currentLocale,
    messages
  };

});
