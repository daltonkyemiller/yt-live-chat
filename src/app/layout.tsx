import './globals.css';
import Providers from '@/components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
