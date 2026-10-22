/* =======================================
 *センターリバー Layout
 * URL:src/app/layout.tsx
 * Created: 2025-07-14
 * Last updated: 2025-07-14
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { Noto_Sans_JP } from 'next/font/google';
import Footer from '@/components/common/Footer';
import { isRealProduction, metadataBase } from '@/lib/env';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

const siteTitle = 'センターリバー';
const siteDescription =
  '熊本をはじめ九州のハンバーグ専門店として愛されてきたセンターリバー。手ごねハンバーグやステーキ、オンラインショップ、お弁当、店舗情報をご案内します。';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  ...(isRealProduction && {
    metadataBase,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: '/',
      siteName: siteTitle,
      locale: 'ja_JP',
      type: 'website',
      images: [
        {
          url: '/ogp.png',
          width: 1200,
          height: 630,
          alt: 'センターリバーのOGP画像',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: ['/ogp.png'],
    },
  }),
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: {
    icon: [{ url: '/favicon/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSans.className}`}>
      <head>
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
