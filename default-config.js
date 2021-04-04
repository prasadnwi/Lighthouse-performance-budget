const perofrmanceBudget = require('./performanceBudget');
const defaultConfig = require('lighthouse/lighthouse-core/config/default-config.js');

const allowedCategories = ['performance', 'accessibility', 'best-practices','seo'];
const config = { ...defaultConfig,
        settings: {
            ...defaultConfig.settings,
            budgets: perofrmanceBudget,
            onlyCategories: allowedCategories,
        }
    };

module.exports = config;
