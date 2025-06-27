/**
 * Unit tests for utils.ts
 * Testing the cn() utility function that combines clsx and tailwind-merge
 * 
 * @jest-environment node
 */

import { cn } from './utils';

describe('cn utility function', () => {
  /**
   * Test basic functionality
   */
  describe('basic functionality', () => {
    it('should return empty string when called with no arguments', () => {
      const result = cn();
      expect(result).toBe('');
    });

    it('should return a single class name when passed one string', () => {
      const result = cn('text-red-500');
      expect(result).toBe('text-red-500');
    });

    it('should combine multiple class names with spaces', () => {
      const result = cn('text-red-500', 'bg-blue-100', 'p-4');
      expect(result).toBe('text-red-500 bg-blue-100 p-4');
    });

    it('should handle array of class names', () => {
      const result = cn(['text-red-500', 'bg-blue-100']);
      expect(result).toBe('text-red-500 bg-blue-100');
    });

    it('should handle nested arrays of class names', () => {
      const result = cn(['text-red-500', ['bg-blue-100', 'p-4']]);
      expect(result).toBe('text-red-500 bg-blue-100 p-4');
    });
  });

  /**
   * Test conditional class names (clsx functionality)
   */
  describe('conditional class names', () => {
    it('should handle object with boolean values', () => {
      const result = cn({
        'text-red-500': true,
        'bg-blue-100': false,
        'p-4': true
      });
      expect(result).toBe('text-red-500 p-4');
    });

    it('should handle mixed arguments with objects and strings', () => {
      const result = cn(
        'base-class',
        {
          'text-red-500': true,
          'bg-blue-100': false
        },
        'another-class'
      );
      expect(result).toBe('base-class text-red-500 another-class');
    });

    it('should handle objects with truthy and falsy values', () => {
      const result = cn({
        'class-1': 'truthy string',
        'class-2': 1,
        'class-3': 0,
        'class-4': null,
        'class-5': undefined,
        'class-6': false,
        'class-7': true
      });
      expect(result).toBe('class-1 class-2 class-7');
    });
  });

  /**
   * Test tailwind-merge functionality
   */
  describe('tailwind-merge functionality', () => {
    it('should merge conflicting Tailwind CSS classes', () => {
      const result = cn('p-4', 'p-8');
      expect(result).toBe('p-8');
    });

    it('should merge multiple conflicting utility classes', () => {
      const result = cn('text-red-500', 'text-blue-500', 'bg-white', 'bg-gray-100');
      expect(result).toBe('text-blue-500 bg-gray-100');
    });

    it('should preserve non-conflicting classes', () => {
      const result = cn('text-red-500', 'bg-blue-100', 'p-4', 'text-lg');
      // tailwind-merge may reorder classes, so we check that all classes are present
      const classes = result.split(' ');
      expect(classes).toContain('text-red-500');
      expect(classes).toContain('bg-blue-100');
      expect(classes).toContain('p-4');
      expect(classes).toContain('text-lg');
      expect(classes).toHaveLength(4);
    });

    it('should handle complex tailwind class merging', () => {
      const result = cn(
        'px-2 py-1 text-sm',
        'px-4 text-lg font-bold'
      );
      expect(result).toBe('py-1 px-4 text-lg font-bold');
    });

    it('should merge responsive and state variants correctly', () => {
      const result = cn(
        'hover:bg-red-500 md:text-lg',
        'hover:bg-blue-500 md:text-xl'
      );
      expect(result).toBe('hover:bg-blue-500 md:text-xl');
    });
  });

  /**
   * Test edge cases and error handling
   */
  describe('edge cases', () => {
    it('should handle null values', () => {
      const result = cn(null, 'valid-class', null);
      expect(result).toBe('valid-class');
    });

    it('should handle undefined values', () => {
      const result = cn(undefined, 'valid-class', undefined);
      expect(result).toBe('valid-class');
    });

    it('should handle empty strings', () => {
      const result = cn('', 'valid-class', '');
      expect(result).toBe('valid-class');
    });

    it('should handle whitespace-only strings', () => {
      const result = cn('   ', 'valid-class', '   ');
      expect(result).toBe('valid-class');
    });

    it('should handle boolean values', () => {
      const result = cn(true, false, 'valid-class');
      expect(result).toBe('valid-class');
    });

    it('should handle number values', () => {
      const result = cn(123, 0, 'valid-class');
      expect(result).toBe('123 valid-class');
    });

    it('should handle all falsy values', () => {
      const result = cn(false, null, undefined, 0, '', NaN);
      expect(result).toBe('');
    });

    it('should handle deeply nested arrays', () => {
      const result = cn([
        'class-1',
        ['class-2', ['class-3', 'class-4']],
        'class-5'
      ]);
      expect(result).toBe('class-1 class-2 class-3 class-4 class-5');
    });

    it('should handle mixed types in arrays', () => {
      const result = cn([
        'class-1',
        null,
        { 'class-2': true, 'class-3': false },
        undefined,
        'class-4'
      ]);
      expect(result).toBe('class-1 class-2 class-4');
    });
  });

  /**
   * Test real-world usage scenarios
   */
  describe('real-world scenarios', () => {
    it('should handle component prop className merging', () => {
      const baseClasses = 'rounded-lg border p-4';
      const variantClasses = {
        'bg-red-50 border-red-200': true,
        'bg-blue-50 border-blue-200': false
      };
      const userClasses = 'p-8 mt-4';
      
      const result = cn(baseClasses, variantClasses, userClasses);
      expect(result).toBe('rounded-lg border bg-red-50 border-red-200 p-8 mt-4');
    });

    it('should handle dynamic class generation', () => {
      const isActive = true;
      const isDisabled = false;
      const size = 'large';
      
      const result = cn(
        'btn',
        {
          'btn-active': isActive,
          'btn-disabled': isDisabled,
          'btn-sm': size === 'small',
          'btn-lg': size === 'large'
        }
      );
      expect(result).toBe('btn btn-active btn-lg');
    });

    it('should handle theme variant classes', () => {
      const isDarkMode = true;
      const result = cn(
        'text-gray-900 bg-white',
        isDarkMode && 'dark:text-white dark:bg-gray-900'
      );
      expect(result).toBe('text-gray-900 bg-white dark:text-white dark:bg-gray-900');
    });

    it('should merge button variant classes correctly', () => {
      const baseButton = 'px-4 py-2 font-semibold rounded-lg';
      const primaryVariant = 'bg-blue-500 text-white hover:bg-blue-600';
      const customOverrides = 'px-6 bg-blue-700';
      
      const result = cn(baseButton, primaryVariant, customOverrides);
      expect(result).toBe('py-2 font-semibold rounded-lg text-white hover:bg-blue-600 px-6 bg-blue-700');
    });
  });

  /**
   * Test performance considerations
   */
  describe('performance', () => {
    it('should handle large number of classes efficiently', () => {
      const classes = Array(100).fill(null).map((_, i) => `class-${i}`);
      const startTime = performance.now();
      const result = cn(...classes);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(50); // Should complete in less than 50ms
      expect(result.split(' ')).toHaveLength(100);
    });

    it('should handle duplicate classes', () => {
      const result = cn(
        'duplicate-class',
        'duplicate-class',
        'unique-class',
        'duplicate-class'
      );
      // clsx handles duplicates but tailwind-merge may not deduplicate non-conflicting classes
      // We just verify that both classes are present in the result
      expect(result).toContain('duplicate-class');
      expect(result).toContain('unique-class');
    });
  });

  /**
   * Test TypeScript type inference
   */
  describe('type safety', () => {
    it('should accept ClassValue types', () => {
      // This test mainly ensures TypeScript compilation works correctly
      const stringClass: string = 'text-red-500';
      const arrayClass: string[] = ['bg-blue-100', 'p-4'];
      const objectClass: Record<string, boolean> = { 'font-bold': true };
      const mixedClass = [stringClass, objectClass, null, undefined];
      
      const result = cn(
        stringClass,
        arrayClass,
        objectClass,
        mixedClass,
        null,
        undefined,
        false,
        true,
        0,
        1
      );
      
      expect(typeof result).toBe('string');
    });
  });
});