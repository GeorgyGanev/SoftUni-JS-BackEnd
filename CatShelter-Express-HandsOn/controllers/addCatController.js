const { getBreeds, addCat } = require('../services/dataService');

const router = require('express').Router();

const breeds = getBreeds();

router.get('/', (req, res) => {
    res.render('addCat', {
        breeds
    });
})

router.post('/', async(req, res, next) => {
    const id = 'asdf-' + ('0000' + (Math.random() * 9999 | 0)).slice(-4);

    const catData = {
        id: id,
        name: req.body.name,
        breed: req.body.breed,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    };

    try {
        await addCat(catData);
    } catch(err) {
        next(err);
    }

    res.redirect('/');
})


module.exports = router;