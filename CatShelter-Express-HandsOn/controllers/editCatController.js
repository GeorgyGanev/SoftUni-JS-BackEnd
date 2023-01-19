const router = require('express').Router();
const {getList, getBreeds, addCat} = require('../services/dataService');
 

const cats = getList();
const breeds = getBreeds();

router.get('/:catId', (req, res) => {
    const catId = req.params.catId;
    const cat = cats.find(cat => cat.id == catId);

    console.log(cat);

    res.render('editCat', {
        cat,
        breeds});
});

router.post('/:catId', async (req, res, next) => {
    const catId = req.params.catId;

    const cat = cats.find(cat => cat.id == catId);
    const catPosition = cats.indexOf(cat);

    cats.splice(catPosition, 1);
    console.log(cat)

    cat.name = req.body.name;
    cat.breed = req.body.breed;
    cat.imageUrl = req.body.imageUrl;
    cat.description = req.body.description;

    console.log(cat);

    try {
        await addCat(cat);
    } catch(err){
        next(err);
    }
    
    res.redirect('/');
})

module.exports = router;

