<script>
import axios from "axios";

export default {
  methods: {
    getCpnData(basePage) {
      axios.get("/api/index").then(res => {
        let mdList = res.data.mdList;
        let tagData = {};
        for (let item of mdList) {
          // 处理tag
          for (let tag of item.tag) {
            tag in tagData
              ? tagData[tag].push(item.id)
              : (tagData[tag] = [item.id]);
          }
          // 处理类别
          item.category in basePage.category
            ? basePage.category[item.category].push(item.id)
            : (basePage.category[item.category] = [item.id]);
          // 添加top
          if (item.top) {
            basePage.topList.push({
              id: item.id,
              title: item.title
            });
          }
          // 打包blog，给blogBox组件
          basePage.blogList.push({
            id: item.id,
            date: item.date,
            cover: item.cover,
            title: item.title,
            description: item.description
          });
        }

        // 排序tag
        for (let key in tagData) {
          basePage.tagList.push({
            name: key,
            amount: tagData[key]
          });
        }
        basePage.tagList.sort((a, b) => b.amount.length - a.amount.length);
      });
    }
  }
};
</script>
