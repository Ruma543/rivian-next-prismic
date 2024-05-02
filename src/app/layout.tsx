import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { createClient } from '@/prismicio';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toper from '@/components/Toper';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  // read route params
  const client = createClient();
  const settings = await client.getSingle('settings');

  console.log(settings.data.side_title);
  return {
    title: settings.data.side_title || 'Rivian fallback',
    description:
      settings.data.meta_description || 'Rivian description fallback',
    openGraph: {
      images: [settings.data.og_image.url || 'Rivian image fallback'],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toper></Toper>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
