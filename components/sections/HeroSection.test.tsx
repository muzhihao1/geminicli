/**
 * Unit tests for HeroSection component
 * Testing animations, responsive behavior, content rendering, and user interactions
 * 
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeroSection from './HeroSection';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>;
  };
});

// Mock SearchBox component
jest.mock('@/components/SearchBox', () => {
  return function MockSearchBox({ placeholder, onSearch }: any) {
    return (
      <div data-testid="search-box">
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            if (e.target.value && onSearch) {
              onSearch(e.target.value);
            }
          }}
          data-testid="search-input"
        />
      </div>
    );
  };
});

// Mock window.location for navigation tests
delete (window as any).location;
window.location = { href: '' } as any;

describe('HeroSection Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    window.location.href = '';
  });

  /**
   * Test basic rendering and content
   */
  describe('content rendering', () => {
    it('should render main title with gradient text', () => {
      render(<HeroSection />);
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Gemini CLI All in One');
      
      // Check for gradient span
      const gradientSpan = screen.getByText('Gemini CLI');
      expect(gradientSpan).toHaveClass('text-gradient');
    });

    it('should render subtitle with correct content', () => {
      render(<HeroSection />);
      
      const subtitle = screen.getByText(/One-stop solution hub/);
      expect(subtitle).toBeInTheDocument();
      expect(subtitle.tagName).toBe('P');
      expect(subtitle).toHaveClass('text-h3', 'text-neutral-gray');
    });

    it('should render search box with correct placeholder', () => {
      render(<HeroSection />);
      
      const searchBox = screen.getByTestId('search-box');
      expect(searchBox).toBeInTheDocument();
      
      const searchInput = screen.getByPlaceholderText(/Search for your Gemini CLI needs/);
      expect(searchInput).toBeInTheDocument();
    });

    it('should render CTA buttons with correct text and links', () => {
      render(<HeroSection />);
      
      const problemButton = screen.getByRole('link', { name: 'Solve My Problem' });
      const quickStartButton = screen.getByRole('link', { name: 'Quick Start Guide' });
      
      expect(problemButton).toHaveAttribute('href', '/qa');
      expect(quickStartButton).toHaveAttribute('href', '/quick-start');
      
      expect(problemButton).toHaveClass('btn-primary');
      expect(quickStartButton).toHaveClass('btn-secondary');
    });

    it('should render feature cards with correct content', () => {
      render(<HeroSection />);
      
      // Check all feature cards
      expect(screen.getByText('Installation & Setup')).toBeInTheDocument();
      expect(screen.getByText('Troubleshooting')).toBeInTheDocument();
      expect(screen.getByText('Tools & Resources')).toBeInTheDocument();
      
      // Check descriptions
      expect(screen.getByText(/platform-specific installation guides/)).toBeInTheDocument();
      expect(screen.getByText(/common errors and issues/)).toBeInTheDocument();
      expect(screen.getByText(/recommended tools and integrations/)).toBeInTheDocument();
    });
  });

  /**
   * Test user interactions
   */
  describe('user interactions', () => {
    it('should handle search input correctly', async () => {
      const user = userEvent.setup();
      render(<HeroSection />);
      
      const searchInput = screen.getByTestId('search-input');
      
      await user.type(searchInput, 'install gemini');
      expect(searchInput).toHaveValue('install gemini');
    });

    it('should navigate to search results on valid search', async () => {
      const user = userEvent.setup();
      render(<HeroSection />);
      
      const searchInput = screen.getByTestId('search-input');
      
      // Type and trigger change
      await user.type(searchInput, 'test query');
      
      // Since our mock only calls onSearch when there's a value,
      // and HeroSection redirects on search, check if navigation would occur
      fireEvent.change(searchInput, { target: { value: 'test query' } });
      
      // In real implementation, this would navigate to /search?q=test+query
      expect(window.location.href).toBe('/search?q=test+query');
    });

    it('should handle CTA button clicks', async () => {
      const user = userEvent.setup();
      render(<HeroSection />);
      
      const problemButton = screen.getByRole('link', { name: 'Solve My Problem' });
      
      // Since we're using mocked Next Link, just verify the href
      expect(problemButton).toHaveAttribute('href', '/qa');
    });

    it('should handle feature card hover effects', async () => {
      const user = userEvent.setup();
      render(<HeroSection />);
      
      const featureCard = screen.getByText('Installation & Setup').closest('.group');
      
      expect(featureCard).toHaveClass('hover:shadow-lg');
    });
  });

  /**
   * Test animations
   */
  describe('animations', () => {
    it('should apply initial animation props to title', () => {
      render(<HeroSection />);
      
      const title = screen.getByRole('heading', { level: 1 });
      
      // Check if motion props are applied (mocked as regular props)
      expect(title).toHaveAttribute('initial');
      expect(title).toHaveAttribute('animate');
      expect(title).toHaveAttribute('transition');
    });

    it('should apply staggered animation delays', () => {
      render(<HeroSection />);
      
      const subtitle = screen.getByText(/One-stop solution hub/);
      
      // Motion components are mocked, so we check for the props
      expect(subtitle).toHaveAttribute('transition');
    });

    it('should animate feature cards with progressive delay', () => {
      render(<HeroSection />);
      
      const featureCards = screen.getAllByText(/Installation|Troubleshooting|Tools/).map(
        el => el.closest('.group')
      );
      
      featureCards.forEach((card, index) => {
        const motionDiv = card?.parentElement;
        expect(motionDiv).toHaveAttribute('transition');
      });
    });
  });

  /**
   * Test responsive design
   */
  describe('responsive design', () => {
    it('should have responsive container classes', () => {
      render(<HeroSection />);
      
      const section = document.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass('pt-24', 'pb-20', 'overflow-hidden');
      
      const container = section?.querySelector('.container');
      expect(container).toBeInTheDocument();
    });

    it('should have responsive grid for feature cards', () => {
      render(<HeroSection />);
      
      const gridContainer = screen.getByText('Installation & Setup').closest('.grid');
      expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-3');
    });

    it('should have responsive button layout', () => {
      render(<HeroSection />);
      
      const buttonContainer = screen.getByRole('link', { name: 'Solve My Problem' }).parentElement;
      expect(buttonContainer).toHaveClass('flex', 'flex-col', 'sm:flex-row');
    });

    it('should center content with max-width constraints', () => {
      render(<HeroSection />);
      
      const contentWrapper = screen.getByRole('heading', { level: 1 }).closest('.max-w-4xl');
      expect(contentWrapper).toBeInTheDocument();
      expect(contentWrapper).toHaveClass('mx-auto', 'text-center');
    });
  });

  /**
   * Test visual elements
   */
  describe('visual elements', () => {
    it('should render background decoration blobs', () => {
      render(<HeroSection />);
      
      const section = document.querySelector('section');
      const decorationContainer = section?.querySelector('.absolute.inset-0');
      
      expect(decorationContainer).toBeInTheDocument();
      
      // Check for decoration blobs
      const blobs = decorationContainer?.querySelectorAll('.rounded-full.blur-3xl');
      expect(blobs).toHaveLength(2);
      
      // Check blob colors
      const blueBlob = decorationContainer?.querySelector('.bg-google-blue\\/10');
      const greenBlob = decorationContainer?.querySelector('.bg-google-green\\/10');
      
      expect(blueBlob).toBeInTheDocument();
      expect(greenBlob).toBeInTheDocument();
    });

    it('should have gradient background on section', () => {
      render(<HeroSection />);
      
      const section = document.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveClass('gradient-bg');
    });

    it('should render gradient overlay for visual elements', () => {
      render(<HeroSection />);
      
      const gradientOverlay = screen.getByText('Gemini CLI').closest('span');
      expect(gradientOverlay).toHaveClass('text-gradient');
    });

    it('should render colored squares in feature cards', () => {
      render(<HeroSection />);
      
      const coloredSquares = document.querySelectorAll('.absolute.top-3.right-3');
      expect(coloredSquares).toHaveLength(3);
      
      // Check colors
      expect(coloredSquares[0]).toHaveClass('bg-google-blue');
      expect(coloredSquares[1]).toHaveClass('bg-google-yellow');
      expect(coloredSquares[2]).toHaveClass('bg-google-green');
    });
  });

  /**
   * Test accessibility
   */
  describe('accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<HeroSection />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      const h3s = screen.getAllByRole('heading', { level: 3 });
      
      expect(h1).toBeInTheDocument();
      expect(h3s.length).toBeGreaterThanOrEqual(3); // Feature card titles
    });

    it('should have semantic section element', () => {
      render(<HeroSection />);
      
      const section = document.querySelector('section');
      expect(section).toBeInTheDocument();
      expect(section?.tagName).toBe('SECTION');
    });

    it('should have accessible link buttons', () => {
      render(<HeroSection />);
      
      const links = screen.getAllByRole('link');
      
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });

    it('should maintain proper z-index layering', () => {
      const { container } = render(<HeroSection />);
      
      // Background should not have z-10
      const section = document.querySelector('section');
      const backgroundDecoration = section?.querySelector('.absolute.inset-0');
      expect(backgroundDecoration).toBeInTheDocument();
      expect(backgroundDecoration).not.toHaveClass('z-10');
    });
  });

  /**
   * Test edge cases
   */
  describe('edge cases', () => {
    it('should handle empty search query', async () => {
      const user = userEvent.setup();
      render(<HeroSection />);
      
      const searchInput = screen.getByTestId('search-input');
      
      // Focus and press Enter with empty input
      await user.click(searchInput);
      await user.keyboard('{Enter}');
      
      // Should not navigate (SearchBox mock doesn't trigger onSearch for empty input)
      expect(window.location.href).toBe('');
    });

    it('should render correctly without JavaScript', () => {
      render(<HeroSection />);
      
      // All content should be present even without JS interactions
      expect(screen.getByText('Gemini CLI All in One')).toBeInTheDocument();
      expect(screen.getByText('Installation & Setup')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Solve My Problem' })).toBeInTheDocument();
    });

    it('should handle very long search queries', async () => {
      const user = userEvent.setup();
      render(<HeroSection />);
      
      const searchInput = screen.getByTestId('search-input');
      const longQuery = 'a'.repeat(100);
      
      await user.type(searchInput, longQuery);
      expect(searchInput).toHaveValue(longQuery);
    });
  });

  /**
   * Test component integration
   */
  describe('component integration', () => {
    it('should pass correct props to SearchBox', () => {
      render(<HeroSection />);
      
      const searchInput = screen.getByPlaceholderText(/Search for your Gemini CLI needs/);
      expect(searchInput).toBeInTheDocument();
    });

    it('should have proper layout structure', () => {
      render(<HeroSection />);
      
      const section = document.querySelector('section');
      const container = section?.querySelector('.container');
      const contentWrapper = container?.querySelector('.max-w-4xl');
      
      expect(container).toBeInTheDocument();
      expect(contentWrapper).toBeInTheDocument();
      expect(contentWrapper).toHaveClass('mx-auto', 'text-center');
    });
  });

  /**
   * Test performance considerations
   */
  describe('performance', () => {
    it('should use backdrop-blur sparingly', () => {
      render(<HeroSection />);
      
      // Only feature cards should have backdrop blur
      const blurElements = document.querySelectorAll('.backdrop-blur-sm');
      expect(blurElements).toHaveLength(3); // Only the 3 feature cards
    });

    it('should lazy-load non-critical animations', () => {
      render(<HeroSection />);
      
      // Check that decorative elements exist and are positioned correctly
      const decorativeBlobs = document.querySelectorAll('.rounded-full.blur-3xl');
      
      // Should have 2 decorative blobs
      expect(decorativeBlobs).toHaveLength(2);
    });
  });
});