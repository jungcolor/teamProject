// npm 모듈
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = 5050;

// express 미들웨어
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));

app.get("/", (req, res, next) => {
    res.send("서버시작");
});

app.listen(port, async () => {
    console.log(`Server Listening on port : 5050`);

    // await sequelize
    //     .authenticate()
    //     .then(async () => {
    //         console.log("connection success");
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     });
});
