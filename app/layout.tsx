import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { ThemeProvider } from "@/components/theme-provider"

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
