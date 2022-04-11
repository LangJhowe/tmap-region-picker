import pkg from '../package.json'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import css from "rollup-plugin-import-css";

module.exports = {
  input: './src/index.ts',
  output: [
    {
      name: 'tmap-region-picker',
      file: pkg.browser,
      format: 'umd',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDom',
        'antd': 'antd'
      }
    },
    {
      name: 'tmap-region-picker',
      file: pkg.main,
      format: 'cjs',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDom',
        'antd': 'antd'
      }
    },
    {
      name: 'tmap-region-picker',
      file: pkg.module,
      format: 'esm',
      globals: {
        'react': 'React',
        'react-dom': 'ReactDom',
        'antd': 'antd'
      }
    },
  ],
  plugins: [
    external(),
    alias({
      entries: [
        { find: '@', replacement: '../src' }
      ]
    }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    css()
  ]
}