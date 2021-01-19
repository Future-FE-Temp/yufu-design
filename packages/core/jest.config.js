module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['src/components/**', '!**/node_modules/**', '!src/**/*.d.ts'],
  /**
   * react-app-polyfill/jsdom: fetch()的polyfill实现，内部调用了 whatwg-fetch
   */
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}'],
  testEnvironment: 'jsdom',
  testRunner: 'jest-circus/runner.js',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '^.+\\.less$': '<rootDir>/jest/lessTransform/index.js',
    '^.+\\.css$': '<rootDir>/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|less|json)$)': '<rootDir>/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetMocks: true,
  verbose: true,
};
