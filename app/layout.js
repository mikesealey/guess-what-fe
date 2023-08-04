import './globals.css';
import { Inter } from 'next/font/google';
import UserProvider from '@/contexts/User';
import OpponentProvider from '@/contexts/OpponentObject';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Guess What?!',
  description: 'A game built in one week by team Git Kermit',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OpponentProvider>
          <UserProvider>{children}</UserProvider>
        </OpponentProvider>
      </body>
    </html>
  );
}
