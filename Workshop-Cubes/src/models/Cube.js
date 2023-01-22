const fs = require('fs');
const cubeDb = require('../db.json');
const path = require('path');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name =name,
        this.description = description,
        this.imageUrl = imageUrl,
        this.difficultyLevel = difficultyLevel
    }

    save(){
        this.id = cubeDb[cubeDb.length -1].id + 1;
        cubeDb.push(this);
        const jsonData = JSON.stringify(cubeDb, null, 2);
        fs. writeFileSync(path.resolve(__dirname, '../db.json'), jsonData);

    }
}

module.exports = Cube;