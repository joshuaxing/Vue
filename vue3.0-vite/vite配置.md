

### [引入jest 测试](https://segmentfault.com/a/1190000038533257)

#### 安装
```
yarn add jest
yarn add --dev @babel/core @babel/preset-env @testing-library/jest-dom @types/jest @vue/test-utils@next babel-jest jest ts-jest vue-jest@next
```
#### 配置
 - jest.config.js 
    ```
    const path = require('path')

    module.exports = {
    rootDir: path.resolve(__dirname),
    clearMocks: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    // 别名设置
    moduleNameMapper: {
        '@/(.*)$': '<rootDir>/src/components/$1'
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    // 测试文件
    testMatch: ['<rootDir>/tests/unit/*.spec.ts?(x)'],
    
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\js$': 'babel-jest',
        '^.+\\.(t|j)sx?$': 'ts-jest'
    }
    }
    ```

 - .babelrc
    ```
    {
      "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]]
    }
    ```