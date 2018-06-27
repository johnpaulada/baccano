import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: 'baccano.js',
  output: [
    {
      file: 'index.js',
      format: 'cjs'
    },
    {
      file: 'index.es.js',
      format: 'es'
    },
    {
      file: 'baccano.min.js',
      format: 'iife',
      name: 'Baccano',
      globals: ['Maybe']
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};