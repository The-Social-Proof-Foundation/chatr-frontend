import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import GoogleAnalytics from '@/lib/googleAnalytics'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from '@/components/theme-provider';
import { ApolloWrapper } from '@/lib/apollo-provider';
import { CookieConsent } from '@/components/cookie-consent';
import ThemeFavicon from '@/components/theme-favicon';

// Configure Google Fonts with proper loading optimization
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'Chatr - Coming Soon',
  description: 'A new free speech platform, all on-chain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
        {/* <ApolloWrapper> */}
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange={false}
            >
              {children}
              <Toaster />
              <CookieConsent/>
              <ThemeFavicon/>
            </ThemeProvider>
          <GoogleAnalytics />
        {/* </ApolloWrapper> */}
      </body>
    </html>
  );
}