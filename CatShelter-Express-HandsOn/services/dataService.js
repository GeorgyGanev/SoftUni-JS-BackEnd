const fs = require('fs');

const cats = JSON.parse(fs.readFileSync('./services/data.json'));
const breeds = JSON.parse(fs.readFileSync('./services/breeds.json'));

function getList(){
    return cats;
}

function getBreeds(){
    return breeds;
}

function getById(catId){
    return cats.find(cat => cat.id == catId);
}

async function addBreed(breed){
    breeds.push({
        "type": breed
    });

    createPromise('./services/breeds.json', breeds);
}

async function addCat(catData){
    cats.push(catData);

    createPromise('./services/data.json', cats);
}

async function deleteCat(catId){
    const cat = getById(catId);
    const index = cats.indexOf(cat);
    cats.splice(index, 1);

    createPromise('./services/data.json', cats);
}

function createPromise(path, data){
    return new Promise((resolve, reject) => {
        fs.writeFile(path, JSON.stringify(data, null, 2), (err) => {
            if (err == null){
                resolve();
            } else {
                reject(err);
            }
        });
    })
}

module.exports = {
    getList,
    getById,
    getBreeds,
    addBreed,
    addCat,
    deleteCat
}