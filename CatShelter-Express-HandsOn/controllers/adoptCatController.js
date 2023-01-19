const { deleteCat } = require('../services/dataService');

const router = require('express').Router();

router.get('/:catId', (req, res) => {
    const catId = req.params.catId;
    
    deleteCat(catId);
    res.redirect('/');  
})

module.exports = router;
