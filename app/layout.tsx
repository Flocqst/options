import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { ThemeProvider } from "@/components/theme-provider";
import { SynthetixQueryProvider } from '@/components/synthetix-provider';
import { mainConfig } from "@/config/site";
import { MainNav } from '@/components/main-nav';

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <SynthetixQueryProvider>
              <MainNav items={mainConfig.mainNav} />
              {children}
            </SynthetixQueryProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
