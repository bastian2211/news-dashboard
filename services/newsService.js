require('dotenv').config();
const
    newsApi = require('newsapi-wrapper'),
    settingsService = require('./settingsService');

const getNews = () => {
    return settingsService.readSettings()
        .then(settings => {
            return newsApi
                .setApiKey(settings['news-api-key'] || process.env.NEWS_API_KEY || '')
                .setCategory(settings['news-api-category'] || 'business')
                .send();
        });   
};

module.exports = {
    getNews
};
