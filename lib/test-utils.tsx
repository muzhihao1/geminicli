import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

/**
 * Custom render method that includes any necessary providers
 * This is useful for wrapping components with context providers, theme providers, etc.
 */
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  // Add any providers here as the app grows
  // For example: <ThemeProvider>, <AuthProvider>, etc.
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render };