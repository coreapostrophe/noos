import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

/** @type {import('rollup').RollupOptions} */
const main = {
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    postcss({
      extract: true,
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};

/** @type {import('rollup').RollupOptions} */
const declarations = {
  output: {
    file: 'dist/bundle.d.ts',
    format: 'es',
  },
  plugins: [dts()],
};

export default {
  main,
  declarations,
};
