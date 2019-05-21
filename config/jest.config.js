// config/jest.config.js

const {join} = require('path');

module.exports = {
  rootDir: join(__dirname, '..'),
  roots: [
    '<rootDir>/src'
  ],
  setupFiles: [
    join(__dirname, 'jest/enzyme.js')
  ],
  moduleDirectories: ["node_modules", "src"],
  testMatch: [
    '**/*.test.js',
    '**/*.e2e.test.js',
  ],
  verbose: false,
  bail: true
};
