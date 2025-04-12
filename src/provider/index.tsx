import { ThemeProvider } from "./theme-provider";

interface ProviderStackProps {
  children: React.ReactNode;
}

export function ProviderStack({ children }: ProviderStackProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      storageKey='theme'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
