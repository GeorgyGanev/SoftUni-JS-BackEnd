const cubesDb = require('../db.json');

exports.getHomePage = (req, res) => {

    const { search, from: difficultyFrom, to: difficultyTo } = req.query;

    let cubes = cubesDb;

    if (search){
        cubes = cubes.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (difficultyFrom) {
        cubes = cubes.filter(cube => cube.difficultyLevel >= difficultyFrom);
    }

    if (difficultyTo) {
        cubes = cubes.filter(cube => cube.difficultyLevel <= difficultyTo);
    }

    res.render('index', {cubes});
}

exports.getAboutPage = (req, res) => {
    res.render('about');
}

exports.get404Page = (req, res) => {
    res.render('404');
}