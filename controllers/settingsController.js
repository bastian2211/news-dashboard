const
    newsApi = require('newsapi-wrapper'),
    settingsService = require('../services/settingsService');


const receiveSettings = (req, res) => {
    settingsService.writeSettings(req.body);
    renderSettings(req, res);
};

const renderSettings = (req, res) => {
    settingsService.readSettings()
        .then(settings => {
            res.render('settings', {
                title: 'Settings',
                heading: 'Settings',
                settingsActive: true,
                newsApiKey: settings['news-api-key'] || '',
                newsApiCategories: newsApi.getCategories().map(categoryName => {
                    return {
                        value: categoryName,
                        label: categoryName,
                        selected: categoryName === settings['news-api-category']
                    };
                }),
            });
        });    
};

module.exports = {
    renderSettings,
    receiveSettings
};