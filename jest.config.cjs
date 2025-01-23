module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testMatch: [
    "**/test/**/*.test.js"
  ],
  moduleFileExtensions: ['js'],
  verbose: true,
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
