const setupDb = require ("./setupDb");
const City = require("./city");
const express = require("express");

const app = express();

app.use(express.json());

app.get("./cities", async(req,res) => {
    const cities = await City.findAll();
    res.json(cities);
})

// Go from the 28 min mark

app.post ("/cities", async (req, res) => {
    const {name, population} = req.body;
    await City.create ({name, population});
    res.sendStatus(201);
});

setupDb();

module.exports = app;


// async function doStuff () {
//     await setupDb();
//     const london = await City.create({name: "London", population: 8000000});
//     london.createLandmark ({name: "London Eye", imageURL: "not yet"});
// }
 
// doStuff();

