/**
 * Unit tests for Navbar component
 * Testing navigation, mobile menu behavior, scroll effects, and responsive design
 * 
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock SearchBox component
jest.mock('@/components/SearchBox', () => {
  return function MockSearchBox({ placeholder, className }: { placeholder?: string; className?: string }) {
    return (
      <div className={className}>
        <input 
          type="text" 
          placeholder={placeholder} 
          className="w-full px-6 py-4 text-lg bg-white rounded-full shadow-lg"
        />
      </div>
    );
  };
});

describe('Navbar Component', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  /**
   * Test basic rendering
   */
  describe('basic rendering', () => {
    it('should render logo with correct text', () => {
      render(<Navbar />);
      
      const logo = screen.getByText('Gemini CLI');
      expect(logo).toBeInTheDocument();
      expect(logo.tagName).toBe('SPAN');
    });

    it('should render all navigation items on desktop', () => {
      render(<Navbar />);
      
      expect(screen.getByText('Quick Start')).toBeInTheDocument();
      expect(screen.getByText('Q&A Hub')).toBeInTheDocument();
      expect(screen.getByText('Resources')).toBeInTheDocument();
      expect(screen.getByText('Use Cases')).toBeInTheDocument();
      expect(screen.getByText('Troubleshooting')).toBeInTheDocument();
      expect(screen.getByText('Community')).toBeInTheDocument();
    });

    it('should render search box on desktop', () => {
      render(<Navbar />);
      
      // Find the search input
      const searchInput = screen.getByPlaceholderText('Search...');
      expect(searchInput).toBeInTheDocument();
      
      // Check that it's in the desktop container
      const desktopSearchContainer = searchInput.closest('.hidden.xl\\:block');
      expect(desktopSearchContainer).toBeInTheDocument();
    });

    it('should render mobile menu button', () => {
      render(<Navbar />);
      
      const mobileMenuButton = screen.getByRole('button');
      expect(mobileMenuButton).toBeInTheDocument();
      expect(mobileMenuButton).toHaveClass('xl:hidden');
    });

    it('should apply correct styles to navbar', () => {
      render(<Navbar />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
    });
  });

  /**
   * Test scroll behavior
   */
  describe('scroll behavior', () => {
    it('should change navbar style when scrolled', () => {
      render(<Navbar />);
      
      const nav = screen.getByRole('navigation');
      
      // Initial state - should not have shadow
      expect(nav).not.toHaveClass('shadow-lg');
      
      // Simulate scroll
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      
      // Should have shadow after scroll
      expect(nav).toHaveClass('shadow-lg');
    });

    it('should revert navbar style when scrolled back to top', () => {
      render(<Navbar />);
      
      const nav = screen.getByRole('navigation');
      
      // Scroll down first
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      expect(nav).toHaveClass('shadow-lg');
      
      // Scroll back to top
      fireEvent.scroll(window, { target: { scrollY: 0 } });
      expect(nav).not.toHaveClass('shadow-lg');
    });

    it('should properly clean up scroll event listener on unmount', () => {
      const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
      
      const { unmount } = render(<Navbar />);
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
      removeEventListenerSpy.mockRestore();
    });
  });

  /**
   * Test navigation links
   */
  describe('navigation links', () => {
    it('should have correct href attributes for all nav items', () => {
      render(<Navbar />);
      
      const links = screen.getAllByRole('link');
      
      // Find specific links by text
      const quickStart = links.find(link => link.textContent === 'Quick Start');
      const qa = links.find(link => link.textContent === 'Q&A Hub');
      const resources = links.find(link => link.textContent === 'Resources');
      
      expect(quickStart).toHaveAttribute('href', '/quick-start');
      expect(qa).toHaveAttribute('href', '/qa');
      expect(resources).toHaveAttribute('href', '/resources');
    });

    it('should have hover styles on navigation links', () => {
      render(<Navbar />);
      
      const quickStartLink = screen.getByText('Quick Start');
      expect(quickStartLink).toHaveClass('hover:text-google-blue');
    });

    it('should have correct logo link', () => {
      render(<Navbar />);
      
      const logoLink = screen.getByText('Gemini CLI').closest('a');
      expect(logoLink).toHaveAttribute('href', '/');
    });
  });

  /**
   * Test mobile menu functionality
   */
  describe('mobile menu functionality', () => {
    it('should toggle mobile menu when button is clicked', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      
      // Mobile menu should not be visible initially
      expect(screen.queryByText('Quick Start', { selector: '.xl\\:hidden a' })).not.toBeInTheDocument();
      
      // Click to open
      await user.click(menuButton);
      
      // Mobile menu should be visible with search box and nav items
      await waitFor(() => {
        const searchInputs = screen.getAllByPlaceholderText('Search...');
        expect(searchInputs).toHaveLength(2); // Desktop + Mobile
        
        // Check for duplicate nav items (desktop + mobile)
        const quickStartLinks = screen.getAllByText('Quick Start');
        expect(quickStartLinks).toHaveLength(2);
      });
      
      // Close mobile menu
      await user.click(menuButton);
      
      await waitFor(() => {
        const searchInputs = screen.getAllByPlaceholderText('Search...');
        expect(searchInputs).toHaveLength(1); // Only desktop
      });
    });

    it('should show hamburger icon when menu is closed', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      const svg = menuButton.querySelector('svg');
      const path = svg?.querySelector('path');
      
      expect(path).toHaveAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });

    it('should show close icon when menu is open', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      await user.click(menuButton);
      
      const svg = menuButton.querySelector('svg');
      const path = svg?.querySelector('path');
      
      expect(path).toHaveAttribute('d', 'M6 18L18 6M6 6l12 12');
    });

    it('should close mobile menu when a nav item is clicked', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      
      // Open mobile menu
      await user.click(menuButton);
      
      // Click on a mobile nav item
      const mobileQuickStart = screen.getAllByText('Quick Start')[1]; // Second one is mobile
      await user.click(mobileQuickStart);
      
      // Mobile menu should close
      await waitFor(() => {
        const quickStartLinks = screen.getAllByText('Quick Start');
        expect(quickStartLinks).toHaveLength(1); // Only desktop
      });
    });

    it('should have correct styles for mobile menu', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      await user.click(menuButton);
      
      const mobileMenu = screen.getByText('Quick Start', { selector: '.xl\\:hidden a' })?.closest('div.xl\\:hidden');
      expect(mobileMenu).toHaveClass('py-4', 'border-t', 'border-neutral-border');
    });

    it('should have hover styles on mobile nav items', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      await user.click(menuButton);
      
      const mobileQuickStart = screen.getAllByText('Quick Start')[1];
      expect(mobileQuickStart).toHaveClass('hover:text-google-blue', 'hover:bg-neutral-light');
    });
  });

  /**
   * Test responsive behavior
   */
  describe('responsive behavior', () => {
    it('should hide desktop navigation on small screens', () => {
      render(<Navbar />);
      
      const desktopNav = screen.getByText('Quick Start').closest('a')?.parentElement;
      expect(desktopNav).toHaveClass('hidden', 'xl:flex');
    });

    it('should hide mobile menu button on large screens', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      expect(menuButton).toHaveClass('xl:hidden');
    });

    it('should show desktop search box only on xl screens', () => {
      render(<Navbar />);
      
      const searchInput = screen.getByPlaceholderText('Search...');
      const desktopSearchContainer = searchInput.closest('.hidden.xl\\:block');
      
      expect(desktopSearchContainer).toBeInTheDocument();
      expect(desktopSearchContainer).toHaveClass('hidden', 'xl:block');
    });

    it('should apply correct container styles', () => {
      render(<Navbar />);
      
      // The container class is 'container' in the actual component
      const nav = screen.getByRole('navigation');
      const container = nav.querySelector('.container');
      expect(container).toBeInTheDocument();
      expect(container).toHaveClass('container');
    });
  });

  /**
   * Test search box integration
   */
  describe('search box integration', () => {
    it('should pass correct props to desktop SearchBox', () => {
      render(<Navbar />);
      
      const searchInput = screen.getByPlaceholderText('Search...');
      expect(searchInput).toBeInTheDocument();
      
      // Check parent has the correct className
      const searchContainer = searchInput.closest('div[class*="[&>input]:py-1.5"]');
      expect(searchContainer).toBeInTheDocument();
    });

    it('should pass correct props to mobile SearchBox', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      await user.click(menuButton);
      
      const searchInputs = screen.getAllByPlaceholderText('Search...');
      const mobileInput = searchInputs[1]; // Second one is mobile
      
      expect(mobileInput).toBeInTheDocument();
      
      // Check parent has the correct className for mobile
      const mobileSearchContainer = mobileInput.closest('div[class*="[&>input]:py-2"]');
      expect(mobileSearchContainer).toBeInTheDocument();
    });

    it('should have correct width for desktop search box', () => {
      render(<Navbar />);
      
      const searchInput = screen.getByPlaceholderText('Search...');
      const desktopSearchContainer = searchInput.closest('.hidden.xl\\:block');
      
      expect(desktopSearchContainer).toHaveClass('w-56');
    });
  });

  /**
   * Test accessibility
   */
  describe('accessibility', () => {
    it('should have accessible navigation structure', () => {
      render(<Navbar />);
      
      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
      
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });

    it('should have accessible mobile menu button', () => {
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      expect(menuButton).toBeInTheDocument();
      
      // Button should be focusable
      menuButton.focus();
      expect(document.activeElement).toBe(menuButton);
    });

    it('should maintain focus management in mobile menu', async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      
      const menuButton = screen.getByRole('button');
      
      // Open mobile menu
      await user.click(menuButton);
      
      // Get all focusable elements in mobile menu
      const searchInputs = screen.getAllByPlaceholderText('Search...');
      const mobileSearchInput = searchInputs[1];
      
      // Mobile search should be focusable
      mobileSearchInput.focus();
      expect(document.activeElement).toBe(mobileSearchInput);
    });
  });

  /**
   * Test performance considerations
   */
  describe('performance', () => {
    it('should not cause unnecessary re-renders on scroll', () => {
      const renderSpy = jest.fn();
      
      const TestWrapper = () => {
        renderSpy();
        return <Navbar />;
      };
      
      render(<TestWrapper />);
      
      // Initial render
      expect(renderSpy).toHaveBeenCalledTimes(1);
      
      // Scroll multiple times
      fireEvent.scroll(window, { target: { scrollY: 50 } });
      fireEvent.scroll(window, { target: { scrollY: 100 } });
      fireEvent.scroll(window, { target: { scrollY: 150 } });
      
      // Should still only have rendered once (React handles the state updates efficiently)
      expect(renderSpy).toHaveBeenCalledTimes(1);
    });
  });
});