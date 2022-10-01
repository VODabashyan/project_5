const express = require("express");
const sqlite = require("sqlite3").verbose();
const app = express();

const data = new sqlite.Database("data.db");
data.run("create table if not exists contacts (id integer primary key autoincrement, fullName text not null, address text not null, phoneNumber text not null, email text not null)");

app.get("/test", (req, res) => {
    res.status(200).json({success: true})
});

app.listen(1337, () => console.log("server is running on port 1337"));