import rollupReact from '@noos/configs/rollup/react';

/** @type {import('rollup').RollupOptions} */
export default [
  {
    ...rollupReact.main,
    input: ['src/index.tsx'],
    external: ['jotai', 'react', 'react-dom'],
  },
  {
    ...rollupReact.declarations,
    input: ['src/index.tsx'],
  },
];
