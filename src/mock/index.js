import Mock from "mockjs";
import mdList from "./json/index.json";

let data = mdList.mdList;

Mock.mock("/api/index", "get", mdList);

Mock.mock(RegExp("api/detail.*"), "get", options => {
  let id = JSON.parse(options.body).id;
  console.log(id);
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
