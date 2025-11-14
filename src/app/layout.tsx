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
import { isRealProduction } from '@/lib/env';
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE ||
        'https://centerriver1980.com'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
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
  }),
  title: 'センターリバー',
  description: isRealProduction ? 'センターリバー' : undefined,
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: {
    icon: [
      // { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    // other: [
    //   {
    //     rel: 'icon',
    //     url: '/favicon/android-chrome-192x192.png',
    //     sizes: '192x192',
    //     type: 'image/png',
    //   },
    // ],
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
