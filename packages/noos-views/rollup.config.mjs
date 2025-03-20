import rollupReact from '@noos/configs/rollup/react';

/** @type {import('rollup').RollupOptions} */
export default [
  {
    ...rollupReact.main,
    input: ['src/index.tsx'],
    external: ['jotai', 'react', 'react-dom'],
    plugins: [
      ...rollupReact.main.plugins,
      {
        name: 'add-vite-ignore',
        generateBundle(_, bundle) {
          for (const file of Object.values(bundle)) {
            if (file.type === 'chunk' && file.code) {
              file.code = file.code.replace(
                /import\((.*?)\)/g,
                'import(/* @vite-ignore */ $1)',
              );
            }
          }
        },
      },
    ],
  },
  {
    ...rollupReact.declarations,
    input: ['src/index.tsx'],
    external: [
      '@fontsource/inter/300.css',
      '@fontsource/inter/400.css',
      '@fontsource/inter/500.css',
      '@fontsource/inter/700.css',
    ],
  },
];
