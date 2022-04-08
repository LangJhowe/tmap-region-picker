import pkg from '../package.json'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'

module.exports = {
  input: './src/index.ts',
  output: [
    {
      name: 'tmap-region-picker',
      file: pkg.browser,
      format: 'umd',

    },
    {
      name: 'tmap-region-picker',
      file: pkg.main,
      format: 'cjs',
    },
  ],
  plugins: [
    alias({
      entries: [
        { find: '@', replacement: '../src' }
      ]
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ]
}