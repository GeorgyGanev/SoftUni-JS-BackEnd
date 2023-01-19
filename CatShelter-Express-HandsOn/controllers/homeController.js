const { getList } = require('../services/dataService');

const router = require('express').Router();

router.get('/', (req, res) => {
    let cats = getList();

    const {search} = req.query;

    if (search){
        cats = cats.filter(cat => cat.name.toLowerCase().includes(search.toLowerCase()));
    }

    res.render('home', {
        cats,
        search
    });
})

module.exports = router;