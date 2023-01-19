const router = require('express').Router();
const {getList} = require('../services/dataService');
 

const cats = getList();

router.get('/:catId', (req, res) => {
    const catId = req.params.catId;
    const cat = cats.find(cat => cat.id == catId);

    console.log(cat);
    
    res.render('editCat', {cat});
})

module.exports = router;


