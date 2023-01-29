// npm 모듈
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 5000;

// 로컬 모듈
const db = require("./config/db/db");
const server = require("./config/server/server");

// DB 셋팅
db.init();

// 서버 초기 셋팅
server.init(express(), port);

// 미들웨어 설정
server.setMiddleWare(bodyParser.urlencoded({ extended: true }));
server.setMiddleWare(bodyParser.json());
server.setMiddleWare(cors({ origin: true }));

// 서버 연결
server.connect();

// 서버 CRUD
server.api("get", "/api/dress", (req: any, res: any) => {
    console.log(`옷정보 가져오기!!!!!!!!!!!`);
    return req;
});

server.api("post", "/api/dress/:data", (req: any, res: any) => {
    console.log(`날씨와 온도정보로 옷 목록 가져오기`);
    return req;
});
