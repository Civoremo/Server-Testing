const express = require("express");

const users = require("../data/users/usersModel.js");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
    res.status(200).json({ user: "someone" });
});

server.get("/users", async (req, res) => {
    const rows = await users.getAll();

    res.status(200).json(rows);
});

server.post("/users", async (req, res) => {
    const user = { name: "Trevor" };
    const id = await users.insert(user);

    res.status(201).json(id);
});

module.exports = server;
