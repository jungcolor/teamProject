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

app.listen(port, async () => {
    console.log(`Server Listening on port : 5050`);
});
