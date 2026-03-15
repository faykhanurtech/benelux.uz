import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {locales} from '../../i18n';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ScrollToTop from "../../components/ui/ScrollToTop"
import '../globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {

  const {locale} = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const common = (await import(`../../messages/${locale}/common.json`)).default;
  const home = (await import(`../../messages/${locale}/home.json`)).default;
  const about = (await import(`../../messages/${locale}/about.json`)).default;
  const partners = (await import(`../../messages/${locale}/partners.json`)).default;
  const events = (await import(`../../messages/${locale}/events.json`)).default;
  const news = (await import(`../../messages/${locale}/news.json`)).default;
  const contact = (await import(`../../messages/${locale}/contact.json`)).default

  const messages = {
    ...common,
    ...home,
    ...about,
    ...partners,
    ...events,
    ...news,
    ...contact,
  };

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <ScrollToTop />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}