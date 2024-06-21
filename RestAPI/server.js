const express = require("express");
const app = express();
const db = require("./Db.js");

app.use(express.json());

let currentId = 1;

const data = [
    { name: "hans", age: 40, id: 0 },
    { name: "sepp", age: 21, id: 1 },
    { name: "susi", age: 15, id: 2 },
];

app.get("/", (req, res) => {
    res.send("Testing");
})

app.get("/people", async function (req, res) {
    try {
        let result = await db.query("select * from people");
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.get("/people/:id", function (req, res) {
    let id = req.params.id;
    res.send(data[id]);
});

app.delete("/people/:id", function (req, res) {
    res.send.splice(id, 1);
});

Server.js

app.post("/people", async function (req, res) {
    let person = req.body;
    let sql = "insert into people values(?,?,?)";
    try {
        let result = await db.query(sql, [1, person.name, person.age]);
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

app.listen(3000); 