module.exports = {
  'src/**/*.{css,md,html}': ['prettier --write'],
  'src/**/*.less': (fileNames) => {
    const fileStr = fileNames.join(' ');
    return [
      fileNames.length > 30 ? 'yarn lint-staged:style src/' : `yarn lint-staged:style ${fileStr}`,
      `prettier --write ${fileStr}`,
    ];
  },
  'src/**/*.{js,jsx}': (fileNames) => {
    const fileStr = fileNames.join(' ');
    return [
      `prettier --write ${fileStr}`,
      fileNames.length > 30 ? 'yarn lint-staged:js src/' : `yarn lint-staged:js ${fileStr}`,
    ];
  },
  'src/**/*.{ts,tsx}': (fileNames) => {
    return fileNames.length > 30
      ? 'yarn lint-staged:ts src/'
      : `yarn lint-staged:ts ${fileNames.join(' ')}`;
  },
  '**/*.{ts,tsx}': () => 'yarn check:tsc', // 函数的方式用来避免，传递过来的 fileNames 进入 tsc 的类型检查中
  '**/*.{js,jsx,ts,tsx,css,less}': (fileNames) => {
    const fileStr = fileNames.join(' ');
    return fileStr.includes('jest/') || fileNames.length > 30
      ? 'yarn test:all'
      : `yarn test:files ${fileStr}`;
  },
};
