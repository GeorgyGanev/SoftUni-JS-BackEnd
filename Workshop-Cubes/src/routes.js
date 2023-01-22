const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);
router.get('/404', homeController.get404Page);

router.get('/create', cubeController.getCreateView);
router.post('/create', cubeController.createCube);
router.get('/details/:cubeId', cubeController.getDetails);



module.exports = router;