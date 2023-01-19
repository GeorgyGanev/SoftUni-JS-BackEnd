const { getList } = require('../services/dataService');

const router = require('express').Router();

router.get('/', (req, res) => {
    const cats = getList();
    res.render('home', {
        cats
    });
})

module.exports = router;