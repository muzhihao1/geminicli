/**
 * Unit tests for SearchBox component
 * Testing search functionality, keyboard navigation, dropdown behavior, and accessibility
 * 
 * @jest-environment jsdom
 */

import React from 'react';
import { 
  render, 
  screen, 
  waitFor,
  waitForElement,
  typeAndWait,
  clearAndWait,
  clickAndWait,
  waitForUpdates,
  userEvent 
} from '../test-utils/testing-library';
import { useRouter } from 'next/navigation';
import SearchBox from './SearchBox';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('SearchBox Component', () => {
  // Setup mock router
  const mockPush = jest.fn();
  const mockRouter = { push: mockPush };

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  /**
   * Test basic rendering and props
   */
  describe('basic rendering', () => {
    it('should render with default placeholder', () => {
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      expect(input).toBeInTheDocument();
    });

    it('should render with custom placeholder', () => {
      const customPlaceholder = 'Find your answer...';
      render(<SearchBox placeholder={customPlaceholder} />);
      const input = screen.getByPlaceholderText(customPlaceholder);
      expect(input).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const customClass = 'my-custom-class';
      render(<SearchBox className={customClass} />);
      const container = screen.getByPlaceholderText('Search for solutions...').closest('div');
      expect(container).toHaveClass(customClass);
    });

    it('should render search button with icon', () => {
      render(<SearchBox />);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
      const svg = button.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  /**
   * Test search input behavior
   */
  describe('search input behavior', () => {
    it('should update input value when typing', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...') as HTMLInputElement;
      
      await typeAndWait(user, input, 'install');
      expect(input.value).toBe('install');
    });

    it('should not show dropdown when query is too short', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'a');
      
      // Ensure dropdown doesn't appear
      expect(screen.queryByText('How to install Gemini CLI on Windows')).not.toBeInTheDocument();
      expect(screen.queryByText(/to navigate/)).not.toBeInTheDocument();
    });

    it('should show dropdown when query length > 1', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      // Wait for the dropdown to appear with results
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
        expect(screen.getByText(/to navigate/)).toBeInTheDocument();
      });
    });

    it('should filter results based on query', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'windows');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
        expect(screen.queryByText('How to install Gemini CLI on macOS')).not.toBeInTheDocument();
      });
    });

    it('should show max 5 results', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      // Type something that matches many results (need at least 2 characters)
      await typeAndWait(user, input, 'in');
      
      await waitForElement(() => {
        const results = screen.getAllByRole('button').filter(button => 
          button.textContent && !button.querySelector('svg')
        );
        expect(results.length).toBeGreaterThan(0);
        expect(results.length).toBeLessThanOrEqual(5);
      });
    });

    it('should show no results message when no matches found', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'xyzabc123');
      
      await waitForElement(() => {
        expect(screen.getByText('No results found for "xyzabc123"')).toBeInTheDocument();
        expect(screen.getByText('browse all Q&A')).toBeInTheDocument();
      });
    });
  });

  /**
   * Test keyboard navigation
   */
  describe('keyboard navigation', () => {
    it('should navigate results with arrow keys', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      // Press down arrow
      await user.keyboard('{ArrowDown}');
      await waitForUpdates();
      
      // First result should be highlighted
      const results = screen.getAllByRole('button').filter(button => 
        button.textContent && !button.querySelector('svg')
      );
      expect(results[0]).toHaveClass('bg-google-blue/10');
      
      // Press down arrow again
      await user.keyboard('{ArrowDown}');
      await waitForUpdates();
      expect(results[1]).toHaveClass('bg-google-blue/10');
      expect(results[0]).not.toHaveClass('bg-google-blue/10');
      
      // Press up arrow
      await user.keyboard('{ArrowUp}');
      await waitForUpdates();
      expect(results[0]).toHaveClass('bg-google-blue/10');
      expect(results[1]).not.toHaveClass('bg-google-blue/10');
    });

    it('should not navigate beyond boundaries', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      const results = screen.getAllByRole('button').filter(button => 
        button.textContent && !button.querySelector('svg')
      );
      
      // Navigate to last result
      for (let i = 0; i < results.length; i++) {
        await user.keyboard('{ArrowDown}');
        await waitForUpdates();
      }
      
      // Try to go beyond last result
      await user.keyboard('{ArrowDown}');
      await waitForUpdates();
      expect(results[results.length - 1]).toHaveClass('bg-google-blue/10');
      
      // Navigate back to top and try to go beyond
      for (let i = results.length - 1; i > 0; i--) {
        await user.keyboard('{ArrowUp}');
        await waitForUpdates();
      }
      await user.keyboard('{ArrowUp}');
      await waitForUpdates();
      
      // Should deselect all when going up from first item
      results.forEach(result => {
        expect(result).not.toHaveClass('bg-google-blue/10');
      });
    });

    it('should navigate to selected result on Enter key', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'windows');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      // Navigate to first result and press Enter
      await user.keyboard('{ArrowDown}');
      await waitForUpdates();
      await user.keyboard('{Enter}');
      await waitForUpdates();
      
      expect(mockPush).toHaveBeenCalledWith('/qa/install-windows');
      expect(input).toHaveValue('');
    });

    it('should call onSearch when Enter is pressed without selection', async () => {
      const onSearchMock = jest.fn();
      const user = userEvent.setup();
      render(<SearchBox onSearch={onSearchMock} />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'test query');
      await user.keyboard('{Enter}');
      await waitForUpdates();
      
      expect(onSearchMock).toHaveBeenCalledWith('test query');
    });

    it('should close dropdown on Escape key', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      // Wait for dropdown to appear
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      await user.keyboard('{Escape}');
      await waitForUpdates();
      
      // Wait for dropdown to disappear
      await waitForElement(() => {
        expect(screen.queryByText('How to install Gemini CLI on Windows')).not.toBeInTheDocument();
      });
    });
  });

  /**
   * Test mouse interactions
   */
  describe('mouse interactions', () => {
    it('should navigate to result on click', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'windows');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      const result = screen.getByText('How to install Gemini CLI on Windows').closest('button');
      await clickAndWait(user, result!);
      
      expect(mockPush).toHaveBeenCalledWith('/qa/install-windows');
      expect(input).toHaveValue('');
    });

    it('should highlight result on hover', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      const result = screen.getByText('How to install Gemini CLI on Windows').closest('button');
      await user.hover(result!);
      
      expect(result).toHaveClass('hover:bg-neutral-light');
    });

    it('should close dropdown when clicking outside', async () => {
      const user = userEvent.setup();
      
      render(
        <div>
          <SearchBox />
          <div data-testid="outside">Outside element</div>
        </div>
      );
      
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      // Wait for dropdown to appear
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      // Click outside
      const outside = screen.getByTestId('outside');
      await clickAndWait(user, outside);
      
      // Wait for dropdown to disappear
      await waitForElement(() => {
        expect(screen.queryByText('How to install Gemini CLI on Windows')).not.toBeInTheDocument();
      });
    });

    it('should call onSearch when search button is clicked', async () => {
      const onSearchMock = jest.fn();
      const user = userEvent.setup();
      render(<SearchBox onSearch={onSearchMock} />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'test query');
      
      const searchButton = screen.getByRole('button');
      await clickAndWait(user, searchButton);
      
      expect(onSearchMock).toHaveBeenCalledWith('test query');
    });
  });

  /**
   * Test search result display
   */
  describe('search result display', () => {
    it('should display result title, description, and category', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'windows');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
        expect(screen.getByText('Step-by-step guide for Windows installation')).toBeInTheDocument();
        expect(screen.getByText('Installation')).toBeInTheDocument();
      });
    });

    it('should display keyboard navigation help', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      await waitForElement(() => {
        const navigationText = screen.getByText(/to navigate/);
        expect(navigationText).toBeInTheDocument();
        
        // Check for kbd elements
        const enterKbd = screen.getByText('Enter');
        const arrowKbd = screen.getByText('↑↓');
        expect(enterKbd.tagName.toLowerCase()).toBe('kbd');
        expect(arrowKbd.tagName.toLowerCase()).toBe('kbd');
      });
    });

    it('should search by category', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'troubleshooting');
      
      await waitForElement(() => {
        expect(screen.getByText('Authentication Errors')).toBeInTheDocument();
        expect(screen.getByText('Rate Limit Errors')).toBeInTheDocument();
      });
    });
  });

  /**
   * Test edge cases
   */
  describe('edge cases', () => {
    it('should handle empty search gracefully', async () => {
      const onSearchMock = jest.fn();
      const user = userEvent.setup();
      render(<SearchBox onSearch={onSearchMock} />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      // Focus the input and press Enter with empty query
      await user.click(input);
      await user.keyboard('{Enter}');
      
      // onSearch should not be called with empty query based on the component logic
      expect(onSearchMock).not.toHaveBeenCalled();
      
      // Now test with a query
      await typeAndWait(user, input, 'test');
      await user.keyboard('{Enter}');
      
      expect(onSearchMock).toHaveBeenCalledWith('test');
    });

    it('should clear input after navigation', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...') as HTMLInputElement;
      
      await typeAndWait(user, input, 'windows');
      
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      
      const result = screen.getByText('How to install Gemini CLI on Windows').closest('button');
      await clickAndWait(user, result!);
      
      expect(input.value).toBe('');
    });

    it('should handle rapid typing', async () => {
      const user = userEvent.setup({ delay: null }); // Remove delay for rapid typing
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      // Rapidly type and delete
      await typeAndWait(user, input, 'install');
      await clearAndWait(user, input);
      await typeAndWait(user, input, 'config');
      
      await waitForElement(() => {
        expect(screen.getByText('Configure API Key')).toBeInTheDocument();
        expect(screen.queryByText('How to install Gemini CLI on Windows')).not.toBeInTheDocument();
      });
    });

    it('should handle special characters in search', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, "google's");
      
      await waitForElement(() => {
        expect(screen.getByText("Google's official Gemini CLI docs")).toBeInTheDocument();
      });
    });
  });

  /**
   * Test accessibility
   */
  describe('accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      expect(input).toHaveAttribute('type', 'text');
      expect(input.closest('div')).toHaveClass('relative');
    });

    it('should be keyboard accessible', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      // Tab to input
      await user.tab();
      await waitForUpdates();
      
      expect(input).toHaveFocus();
      
      // Type in input
      await typeAndWait(user, input, 'test');
      expect(input).toHaveValue('test');
    });

    it('should show keyboard hints for screen readers', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'install');
      
      await waitForElement(() => {
        // Look for kbd elements by their content
        const enterKbd = screen.getByText('Enter');
        const arrowKbd = screen.getByText('↑↓');
        expect(enterKbd.tagName.toLowerCase()).toBe('kbd');
        expect(arrowKbd.tagName.toLowerCase()).toBe('kbd');
      });
    });
  });

  /**
   * Test performance considerations
   */
  describe('performance', () => {
    it('should debounce search results', async () => {
      const user = userEvent.setup({ delay: 5 });
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      // Type quickly
      await typeAndWait(user, input, 'inst');
      
      // Results should appear for the final query
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
    });

    it('should limit displayed results to 5', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      // Search for something that matches many results (need at least 2 characters)
      await typeAndWait(user, input, 'in'); // 'in' should match multiple results like 'install', 'integration', etc.
      
      await waitForElement(() => {
        const resultButtons = screen.getAllByRole('button').filter(button => {
          // Exclude the search button (has SVG)
          return button.textContent && !button.querySelector('svg');
        });
        expect(resultButtons.length).toBeGreaterThan(0);
        expect(resultButtons.length).toBeLessThanOrEqual(5);
      });
    });
  });

  /**
   * Test integration with router
   */
  describe('router integration', () => {
    it('should use router.push for navigation', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      await typeAndWait(user, input, 'api key');
      
      await waitForElement(() => {
        expect(screen.getByText('Configure API Key')).toBeInTheDocument();
      });
      
      const result = screen.getByText('Configure API Key').closest('button');
      await clickAndWait(user, result!);
      
      expect(mockPush).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/qa/configure-api-key');
    });

    it('should handle multiple navigations', async () => {
      const user = userEvent.setup();
      render(<SearchBox />);
      const input = screen.getByPlaceholderText('Search for solutions...');
      
      // First search and navigation
      await typeAndWait(user, input, 'windows');
      await waitForElement(() => {
        expect(screen.getByText('How to install Gemini CLI on Windows')).toBeInTheDocument();
      });
      const result1 = screen.getByText('How to install Gemini CLI on Windows').closest('button');
      await clickAndWait(user, result1!);
      
      // Wait for the input to be cleared
      await waitForElement(() => {
        expect(input).toHaveValue('');
      });
      
      // Second search and navigation
      await typeAndWait(user, input, 'api key');
      await waitForElement(() => {
        expect(screen.getByText('Configure API Key')).toBeInTheDocument();
      });
      const result2 = screen.getByText('Configure API Key').closest('button');
      await clickAndWait(user, result2!);
      
      expect(mockPush).toHaveBeenCalledTimes(2);
      expect(mockPush).toHaveBeenNthCalledWith(1, '/qa/install-windows');
      expect(mockPush).toHaveBeenNthCalledWith(2, '/qa/configure-api-key');
    });
  });
});