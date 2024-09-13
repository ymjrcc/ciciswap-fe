import '../styles/global.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-gray-100 to-gray-300 min-h-[100vh]'>
        <Providers>
          <Header />
          <div className='pt-24'>
            {children}
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}

export default RootLayout;
