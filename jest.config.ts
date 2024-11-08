import type { Config } from "jest";

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  preset: "ts-jest",
  testPathIgnorePatterns: ['/__tests__/test-data/'],
};

export default config;
