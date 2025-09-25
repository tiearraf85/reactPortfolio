// ESLINT CONFIG FILE - This is like a "grammar checker" for your JavaScript code
// ESLint helps find mistakes and keeps your code neat and consistent
// Think of it like spell-check for Microsoft Word, but for programming

// IMPORTS - These are the different "rule books" that ESLint uses
import js from '@eslint/js'                            // Basic JavaScript rules (like "use semicolons")
import globals from 'globals'                          // Tells ESLint about browser stuff (like "window", "document")
import reactHooks from 'eslint-plugin-react-hooks'    // Special rules for React hooks (useState, useEffect, etc.)
import reactRefresh from 'eslint-plugin-react-refresh' // Rules for hot reload during development

// EXPORT DEFAULT - This exports the configuration that ESLint will use
export default [
  // IGNORE CONFIGURATION - Files ESLint should NOT check
  // 'dist' folder contains the final built website, so we don't need to check it
  { ignores: ['dist'] },

  // MAIN CONFIGURATION OBJECT - The main rules for your project
  {
    // FILES TO CHECK - Which files ESLint should look at
    // This means "check all .js and .jsx files anywhere in the project"
    files: ['**/*.{js,jsx}'],

    // LANGUAGE OPTIONS - Tells ESLint what version of JavaScript you're using
    languageOptions: {
      // ECMA VERSION - JavaScript version (2020 = modern JavaScript features)
      ecmaVersion: 2020,

      // GLOBALS - Variables that exist in the browser (like window, document, console)
      // Without this, ESLint would complain about using "console.log" or "window.location"
      globals: globals.browser,

      // PARSER OPTIONS - How ESLint should read your code
      parserOptions: {
        ecmaVersion: 'latest',              // Use the newest JavaScript features
        ecmaFeatures: { jsx: true },        // Understand JSX (React's HTML-in-JavaScript)
        sourceType: 'module',               // Allow import/export statements
      },
    },

    // PLUGINS - Extra sets of rules for specific technologies
    plugins: {
      // REACT HOOKS PLUGIN - Rules specific to React hooks
      // Makes sure you use useState, useEffect, etc. correctly
      'react-hooks': reactHooks,

      // REACT REFRESH PLUGIN - Rules for hot reload during development
      // Helps ensure your components reload properly when you save changes
      'react-refresh': reactRefresh,
    },

    // RULES - The actual "grammar rules" for your code
    rules: {
      // SPREAD RECOMMENDED RULES - Use the standard recommended JavaScript rules
      // This includes basics like "variables must be declared" and "no duplicate functions"
      ...js.configs.recommended.rules,

      // SPREAD REACT HOOKS RULES - Use the recommended React hooks rules
      // This includes things like "hooks must be called in the same order every time"
      ...reactHooks.configs.recommended.rules,

      // CUSTOM RULE: NO UNUSED VARIABLES
      // This rule says "error if you create a variable but never use it"
      // Exception: variables starting with capital letters or underscores are okay
      // This is useful for constants or placeholder variables
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // CUSTOM RULE: REACT REFRESH COMPONENTS
      // This helps with hot reload - makes sure components export properly
      // 'warn' means show a warning (not an error) if this rule is broken
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allow exporting constants too
      ],
    },
  },
]
