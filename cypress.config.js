const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const webpackConfig = require('./config/webpack.cypress.config');

module.exports = defineConfig({
    projectId: '8t7wc9',
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig,
        },
        specPattern: ['src/**/*.cy.{js,jsx}'],
        setupNodeEvents(on, config) {
            // Code coverage setup
            require('@cypress/code-coverage/task')(on, config);

            // Custom Webpack preprocessor for components
            const options = {
                webpackOptions: webpackConfig,
                watchOptions: {},
            };
            on('file:preprocessor', webpack(options));

            return config;
        },
    },
    e2e: {
        baseUrl: 'http://localhost:9000',
        devServer: {
            bundler: 'webpack',
            webpackConfig,
        },
        specPattern: ['cypress/e2e/**/*.cy.{js,jsx}'],
        setupNodeEvents(on, config) {
            require('@cypress/code-coverage/task')(on, config);

            // Custom Webpack preprocessor for e2e tests
            const options = {
                webpackOptions: webpackConfig,
                watchOptions: {},
            };
            on('file:preprocessor', webpack(options));

            return config;
        },
    },
});
