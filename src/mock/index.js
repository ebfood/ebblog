import Mock from "mockjs";
import mdList from "./json/index.json";

let data = mdList.mdList;

Mock.mock("/api/index", "get", mdList);

Mock.mock(RegExp("api/detail.*"), "get", options => {
  let id = JSON.parse(options.body).id;
  for (let i = 0; i < data.length; i++) {
    if (id === data[i].id) {
      return {
        article: {
          title: data[i].title,
          date: data[i].date,
          content: data[i].content,
          cover: data[i].cover
        }
      };
    }
  }
});

Mock.mock(RegExp("api/category.*"), "get", options => {
  let category = JSON.parse(options.body).name;
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (category === data[i].category) {
      res.push(data[i]);
    }
  }
  return res;
});

Mock.mock(RegExp("api/tag.*"), "get", options => {
  let tag = JSON.parse(options.body).tag;
  let res = [];
  for (let i = 0; i < data.length; i++) {
    if (tag in data[i].tag) {
      res.push(data[i]);
    }
  }
  return res;
});
