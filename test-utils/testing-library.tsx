/**
 * Custom render method and utilities for React Testing Library
 * Provides proper handling of async state updates and effects
 */

import React from 'react';
import { render as rtlRender, RenderOptions, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';

/**
 * Custom render function that ensures all effects are flushed
 */
export function render(ui: React.ReactElement, options?: RenderOptions) {
  const result = rtlRender(ui, options);
  
  // Ensure all effects are flushed
  act(() => {
    // This ensures any immediate effects are processed
  });
  
  return result;
}

/**
 * Wait for all pending updates to complete
 * Use this after user interactions that trigger state updates
 */
export async function waitForUpdates() {
  await act(async () => {
    // Wait a tick to allow React to process updates
    await new Promise(resolve => setTimeout(resolve, 0));
  });
}

/**
 * Type text and wait for all updates to complete
 * Ensures effects triggered by typing are processed
 */
export async function typeAndWait(
  user: ReturnType<typeof userEvent.setup>,
  element: Element,
  text: string
) {
  await user.type(element, text);
  await waitForUpdates();
}

/**
 * Clear input and wait for all updates to complete
 */
export async function clearAndWait(
  user: ReturnType<typeof userEvent.setup>,
  element: Element
) {
  await user.clear(element);
  await waitForUpdates();
}

/**
 * Click element and wait for all updates to complete
 */
export async function clickAndWait(
  user: ReturnType<typeof userEvent.setup>,
  element: Element
) {
  await user.click(element);
  await waitForUpdates();
}

/**
 * Wait for element with automatic act wrapping
 */
export async function waitForElement(callback: () => any, options?: Parameters<typeof waitFor>[1]) {
  return waitFor(callback, {
    ...options,
    // Increase default timeout for slower systems
    timeout: options?.timeout || 3000,
  });
}

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { userEvent };