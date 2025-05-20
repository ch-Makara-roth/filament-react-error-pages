import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Add React support
    dts({
      // Generate TypeScript declaration files
      insertTypesEntry: true,
    }),
  ],
  
  // Define the build configuration
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      // Define entry point for the error page components
      entry: resolve(__dirname, 'resources/tsx/index.ts'),
      name: 'FilamentReactErrorPages',
      fileName: (format) => `js/app.${format}.js`,
    },
    rollupOptions: {
      // External dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        // Global variables to use in UMD build for externalized deps
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Configure CSS output
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/app.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
  
  // Resolve configuration for module imports
  resolve: {
    alias: {
      '@': resolve(__dirname, 'resources/tsx'),
    },
  },
 // CSS configuration
  css: {
    postcss: './postcss.config.mjs', // Explicitly point to PostCSS config
  }, 
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  
  // Development server configuration (for testing the components)
  server: {
    open: false,
    port: 3000,
  },
});

