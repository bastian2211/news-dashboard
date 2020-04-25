const auth = (req, res, next) => {
    if (req.session && req.session.isLoggedIn === true) {
        next();
    } else {
        res.status().send();
    }
}

module.exports = {
    auth
};