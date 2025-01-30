import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from 'eslint-define-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig({
  // Specify your parser options
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // Add other configurations as needed
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'off', // or 'off' to disable completely
      { 
        argsIgnorePattern: '^_', // Ignore unused variables starting with an underscore
        varsIgnorePattern: '^_', // Ignore unused variable names starting with an underscore
      },
    ],
  },
});


// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

// eslint.config.mjs