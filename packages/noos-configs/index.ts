import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { TSESLint } from '@typescript-eslint/utils';

enum ConfigTypes {
  react = 'react',
}

const eslint: Record<ConfigTypes, TSESLint.FlatConfig.ConfigArray> = {
  react: [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat['jsx-runtime'],
  ],
};

export default { eslint };
