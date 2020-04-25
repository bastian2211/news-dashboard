const
    newsService = require('../services/newsService');

const renderNews = (req, res) => {
    let articles = [],
        message = '';

    newsService.getNews()
        .then(response => {
            articles = response.articles;
        })
        .catch(err => {
            message = 'Error when retrieving articles from NewsAPI';
        })
        .then(() => {
            res.render('news', {
                title: 'News',
                heading: 'Welcome to your News-Dashboard',
                newsActive: true,
                articles,
                message
            });
        });
};

module.exports = {
    renderNews
};