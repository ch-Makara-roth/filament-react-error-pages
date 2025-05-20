import { expect } from 'vitest';

// Import and set up the matchers from jest-dom
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// This file is referenced in vite.config.ts and runs before each test file
// Learn more: https://github.com/testing-library/jest-dom
