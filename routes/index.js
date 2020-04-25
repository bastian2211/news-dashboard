const
    router = require('express').Router(),
    newsController = require('../controllers/newsController'),
    settingsController = require('../controllers/settingsController'),
    loginController = require('../controllers/loginController'),
    authMiddleware = require('../middleware/authMiddleware'),
    userController = require('../controllers/userController');

router.get('/', newsController.renderNews);
router.get('/news', newsController.renderNews);

router.get('/admin', authMiddleware.auth, settingsController.renderSettings);
router.get('/settings', authMiddleware.auth, settingsController.renderSettings);
router.post('/settings', authMiddleware.auth, settingsController.receiveSettings);

router.get('/login', loginController.renderLogin);
router.post('/login', loginController.submitLogin);
router.get('/logout', loginController.logout);

router.post('/user', userController.create);
router.get('/user/:id', userController.getById);
router.get('/user', userController.getAll);
router.delete('/user/:id', userController.deleteById);
router.patch('/user', userController.update)

module.exports = router;