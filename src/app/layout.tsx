import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Italian Brainrot Clicker',
  description: 'Tap your way through the viral Italian Brainrot universe! Collect all the brainrot characters and upgrades as you progress.',
  keywords: 'clicker, incremental, game, brainrot, italian, meme, viral',
  authors: [{ name: 'Italian Brainrot Clicker' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#667eea',
  openGraph: {
    title: 'Italian Brainrot Clicker',
    description: 'Tap your way through the viral Italian Brainrot universe!',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italian Brainrot Clicker',
    description: 'Tap your way through the viral Italian Brainrot universe!',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
