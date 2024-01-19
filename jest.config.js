export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+.tsx?$': [
      'ts-jest',
      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: 'node_modules/ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  env: {
                    VITE_API_KEY: 'AIzaSyB9a9beVu604cjzrw',
                    VITE_PROJECT_ID: 'graphiql-app-d3834',
                    VITE_SENDER_ID: '621072740843',
                    VITE_APP_ID: '1:621072740843:web:250dab1c4202f2278c29ae',
                    VITE_MEASUREMENT_ID: '51PDQG09K4',
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '^@src/(.*)$': '<rootDir>src/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>src/components/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  coveragePathIgnorePatterns: [
    '/src/services/firebaseApi/firebaseConfig.ts',
    '/src/vite-env.d.ts',
    '/src/constants',
    '/src/router/routes.ts',
    '/src/components/RegistrationForm/RegistrationForm.schema.ts',
    '/src/components/RegistrationForm/validationRules.ts',
    '/src/index.tsx',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
