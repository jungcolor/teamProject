const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
const app = express();
const port = 5050;

sequelize.sync();

// express 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/", (req, res, next) => {
    res.send("서버시작");
});

// --------------------------- API --------------------------- //

app.post("/api/register", (req, res, next) => {
    console.log("회원가입");
});

app.post("/api/login", (req, res, next) => {
    console.log("로그인");
});

app.get("/api/logout", (req, res, next) => {
    console.log("로그아웃");
});

// --------------------------- API --------------------------- //

app.listen(port, async () => {
    console.log(`Server Listening on port : 5050`);
});
