const router = require('express').Router();
const {getList, getBreeds, addCat} = require('../services/dataService');
 

const cats = getList();
const breeds = getBreeds();

router.get('/:catId', (req, res) => {
    const catId = req.params.catId;
    const cat = cats.find(cat => cat.id == catId);

    res.render('editCat', {
        cat,
        breeds});
});

router.post('/:catId', async (req, res, next) => {
    const catId = req.params.catId;

    const cat = cats.find(cat => cat.id == catId);
    const catPosition = cats.indexOf(cat);

    cats.splice(catPosition, 1);

    cat.name = req.body.name;
    cat.breed = req.body.breed;
    cat.imageUrl = req.body.imageUrl;
    cat.description = req.body.description;

    try {
        await addCat(cat);
    } catch(err){
        next(err);
    }
    
    res.redirect('/');
})

module.exports = router;

