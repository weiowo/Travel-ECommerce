import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginNext from 'eslint-plugin-next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
    plugins: ['react', 'next'],
    rules: {
      'react/react-in-jsx-scope': 'off', // Next.js automatically handles this
      'react/prop-types': 'warn', // Enable prop-types validation
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended, // Use the recommended React config
  pluginNext.configs.recommended,  // Include the Next.js recommended config
];
