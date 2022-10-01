const express = require("express");
const sqlite = require("sqlite3").verbose();
const app = express();
const bodyParser = require('body-parser');
const data = new sqlite.Database("data.db");
const db = require("./db/contacts");

data.run("create table if not exists contacts (id integer primary key autoincrement, fullName text not null, address text not null, phoneNumber text not null, email text not null)");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/contacts", async (req, res) => {
    const results = await db.createContact(req.body);
    res.status(201).json({ id: results[0] });
});

app.get("/contacts", async (req, res) => {
    const contacts = await db.getAllContacts();
    res.status(200).json({ contacts });
});

app.patch("/contacts/:id", async (req, res) => {
    const id = await db.updateContact(req.params.id, req.body);
    res.status(200).json({ id });
});

app.delete("/contacts/:id", async (req, res) => {
    await db.deleteContact(req.params.id);
    res.status(200).json({ success: true });
});

app.listen(1337, () => console.log("server is running on port 1337"));