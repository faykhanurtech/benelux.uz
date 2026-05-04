import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '../i18n';

export default getRequestConfig(async ({locale}) => {

  const l = locale && locales.includes(locale as any) ? locale : defaultLocale;

  const files = await Promise.all([
    import(`../messages/${l}/common.json`),
    import(`../messages/${l}/about.json`),
    import(`../messages/${l}/home.json`),
    import(`../messages/${l}/partners.json`),
    import(`../messages/${l}/events.json`),
    import(`../messages/${l}/contact.json`),
    import(`../messages/${l}/news.json`),
    import(`../messages/${l}/membership.json`),
    import(`../messages/${l}/insights.json`),
  ]);

  const messages = files.reduce(
    (acc, f) => ({ ...acc, ...f.default }),
    {} as Record<string, unknown>
  );

  return { locale: l, messages };

});
