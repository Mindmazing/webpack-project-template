export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|webp|svg|woff|woff2)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
};
