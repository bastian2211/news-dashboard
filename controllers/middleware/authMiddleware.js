const auth = (req, res, next) => {
    debugger;
    if (req.session && req.session.isLoggedIn === true) {
        next();
    } else {
        res.status(401).send();
        //res.render('not-authorized');
    }
}

module.exports = auth;