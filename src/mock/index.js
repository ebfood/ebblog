const Mock = require("mockjs");

Mock.mock("/api/index", "get", require("./json/index.json"));
