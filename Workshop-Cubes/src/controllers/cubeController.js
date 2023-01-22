const Cube = require('../models/Cube');
const cubeDb = require('../db.json');

exports.getCreateView = (req, res) => {

    res.render('create');
}

exports.createCube = (req, res) => {
    
    const {name, imageUrl, description, difficultyLevel} = req.body;

    let cube = new Cube(name, description, imageUrl, difficultyLevel);

    cube.save();

    res.redirect('/');
};

exports.getDetails = (req, res) => {
    const cubeId = Number(req.params.cubeId);

    if (!cubeId){
        return res.redirect('/404');
    }

    let cube = cubeDb.find(cube => cube.id == cubeId);

    if (!cube){
        return res.redirect('/404');
    }

    res.render('details', {cube});
}