/**
 * rollup 配置
 * */ 
import * as path from 'path';
import * as fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import eslint from '@rollup/plugin-eslint';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
import url from 'postcss-url';

const entryFile = 'src/index.ts';
const BABEL_ENV = process.env.BABEL_ENV || 'umd';
const extensions = ['.js', '.ts', '.tsx'];
const globals = {react: 'React', 'react-dom': 'ReactDOM', 'lodash': '_'};
const externalPkg = ['react', 'react-dom', 'lodash'];
BABEL_ENV !== 'umd' && externalPkg.push('@babel/runtime');
const external = id => externalPkg.some(e => id.indexOf(e) === 0);
const componentDir = 'src/components';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
const componentEntryFiles = cModuleNames.map((name) => /^[A-Z]\w*/.test(name) ? `${componentDir}/${name}/index.tsx` : undefined).filter(n => !!n);

// 通用配置
const commonPlugins = [
  image(),
  eslint({fix: true, exclude: ['*.less', '*.png', '*.svg']}),
  resolve({ extensions }),
  babel({
    exclude: 'node_modules/**', // 只编译源代码
    babelHelpers: 'runtime',
    extensions,
    skipPreflightCheck: true
  }),
  // 全局变量替换
  replace({
    exclude: 'node_modules/**',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.BABEL_ENV': JSON.stringify(BABEL_ENV || 'umd'),
  }),
  commonjs(),
];

const postcssConfig = {
  plugins: [autoprefixer({env: BABEL_ENV}), url({ url: 'inline' })],
  extract: true,
  extensions: ['.less', '.css'],
  use: {'less': {javascriptEnabled: true}}
};

const umdOutput = { 
  format: 'umd',
  name: 'RollupUI',
  globals,
  assetFileNames: '[name].[ext]'
};

const esOutput = {
  globals,
  preserveModules: true,
  preserveModulesRoot: 'src',
  exports: 'named',
  assetFileNames: '[name].[ext]',
}

export default () => {
  switch (BABEL_ENV) {
    case 'umd':
      return [{
        input: entryFile,
        output: {...umdOutput, file: 'dist/umd/yufud.development.js'},
        external,
        plugins: [postcss(postcssConfig), ...commonPlugins]
      }, {
        input: entryFile,
        output: {...umdOutput, file: 'dist/umd/yufud.production.min.js', plugins: [terser()]},
        external,
        plugins: [postcss({...postcssConfig, minimize: true}), ...commonPlugins]
      }];
    case 'esm':
      return {
        input: [entryFile, ...componentEntryFiles],
        preserveModules: true, // rollup-plugin-styles 还是需要使用
        output: { ...esOutput, dir: 'dist/es', format: 'es'},
        external,
        plugins: [postcss(postcssConfig), ...commonPlugins]
      };
    case 'cjs':
      return {
        input: [entryFile, ...componentEntryFiles],
        preserveModules: true, // rollup-plugin-styles 还是需要使用
        output: { ...esOutput, dir: 'dist/cjs', format: 'cjs'},
        external,
        plugins: [postcss(postcssConfig), ...commonPlugins]
      };
    default:
      return [];      
  }
};