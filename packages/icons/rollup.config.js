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
import styles from 'rollup-plugin-styles'; // 暂时使用后续会被替代
import {terser} from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';

const entryFile = 'src/index.ts';
const BABEL_ENV = process.env.BABEL_ENV || 'umd';
const extensions = ['.js', '.ts', '.tsx'];
const globals = {react: 'React', 'react-dom': 'ReactDOM'};
const externalPkg = ['react', 'react-dom', 'lodash'];
BABEL_ENV !== 'umd' && externalPkg.push('@babel/runtime');
const external = id => externalPkg.some(e => id.indexOf(e) === 0);
const iconsDir = 'src/icons';
const cModuleNames = fs.readdirSync(path.resolve(iconsDir));
const componentEntryFiles = cModuleNames.map((name) => /^[A-Z]\w*/.test(name) ? `${iconsDir}/${name}` : undefined).filter(n => !!n);

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
  // replace({
  //   exclude: 'node_modules/**',
  //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  //   'process.env.BABEL_ENV': JSON.stringify(BABEL_ENV || 'umd'),
  // }),
  commonjs(),
];
const stylePluginConfig = {
  mode: "extract",
  less: {javascriptEnabled: true},
  extensions: ['.less', '.css'],
  minimize: false,
  use: ['less'],
  url: {
    inline: true
  },
  plugins: [autoprefixer({env: BABEL_ENV})]
};
const umdOutput = { 
  format: 'umd',
  name: 'YufudIcon',
  globals,
  assetFileNames: '[name].[ext]'
};
const esOutput = {
  globals,
  preserveModules: true,
  preserveModulesRoot: 'src',
  exports: 'named',
}

export default () => {
  switch (BABEL_ENV) {
    case 'umd':
      return [{
        input: entryFile,
        output: {...umdOutput, file: 'dist/umd/yufud-icons.development.js'},
        external,
        plugins: [styles(stylePluginConfig), ...commonPlugins]
      }, {
        input: entryFile,
        output: {...umdOutput, file: 'dist/umd/yufud-icons.production.min.js', plugins: [terser()]},
        external,
        plugins: [styles({...stylePluginConfig, minimize: true}), ...commonPlugins]
      }];
    case 'esm':
      return {
        input: [entryFile, ...componentEntryFiles],
        preserveModules: true, // rollup-plugin-styles 还是需要使用
        output: { ...esOutput, dir: 'dist/es', format: 'es' },
        external,
        plugins: [styles(stylePluginConfig), ...commonPlugins],
      };
    case 'cjs':
      return {
        input: [entryFile, ...componentEntryFiles],
        preserveModules: true, // rollup-plugin-styles 还是需要使用
        output: { ...esOutput, dir: 'dist/cjs', format: 'cjs' },
        external,
        plugins: [styles(stylePluginConfig), ...commonPlugins],
      };
    default:
      return [];      
  }
};