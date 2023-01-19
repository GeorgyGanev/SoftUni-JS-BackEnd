const { getBreeds, addBreed } = require('../services/dataService');

const router = require('express').Router();

const breeds = getBreeds();

router.get('/', (req, res) => {
    res.render('addBreed', {
        breeds
    });
});

router.post('/', async (req, res, next) => {
    
    try {
        await addBreed(req.body.breed)
    } catch(err) {
        next(err);
    }

    res.redirect('/add-cat');
})


module.exports = router;
