const router = require('express').Router();
const {getList, getBreeds} = require('../services/dataService');
 

const cats = getList();
const breeds = getBreeds();

router.get('/:catId', (req, res) => {
    const catId = req.params.catId;
    const cat = cats.find(cat => cat.id == catId);

    console.log(cat);

    res.render('editCat', {cat, breeds});
})

module.exports = router;

