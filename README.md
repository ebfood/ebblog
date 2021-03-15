# 技术分析

+ vue
+ 响应式布局



# 响应式布局

思路：用container容器装下面紫色绿色蓝色，用@media媒体查询屏幕宽度，分成三个区间
```scss
@media screen and (min-width: 320px) and (max-width: 749px) {
  @import "~@/assets/CSS/mobile.scss";
}
@media screen and (min-width: 750px) and (max-width: 1279px) {
  @import "~@/assets/CSS/middle.scss";
}
```
两个scss中，分别重写部分样式，把这些放在Home.vue的style的最下方，就可以覆盖组件里面的默认配置，目的就达成了！

默认的配置第一区间，container默认的css
![image-20210313170654253](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210313170654253.png)



第二区间，调用middle.scss，适用于手机横屏，iPad

![image-20210313185012723](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210313185012723.png)

第三区间，侧边栏都跑到下面去，适用于手机。

![image-20210313185119165](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210313185119165.png)



# 首页界面搭建

ui风格要一致, 首先就是要黑色主题, 护眼啊! 然后就是我想让博客有点模块化的感觉, 所以把功能都写成卡片的形式.

来康康最终结果

PC
![image-20210315114254931](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210315114254931.png)

iPad or 手机横屏![image-20210315114458888](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210315114458888.png)

手机

<img src="https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210315114546181.png" alt="image-20210315114546181" style="zoom:50%;" />



思路:
最外层用container包裹左中右三个大组件, 大组件装着一堆卡片小组件, 屏幕大小不同只需要调整container中的大组件排列顺序就好了

+ 在pc, 横向flex, 中间的文章内容flex: 1;
+ 在iPad, 把右侧组件 position: absolute; 让他定位到屏幕左边, 相对于他的父亲container, top设置成左边的高度.
+ 移动端 纵向flex, width都改成100%, 给左中右组件一个padding, 挤出来一个边距

这些个卡片组件都不难, 很好布局, 具体都不写了, 除了有个背景图这里:

+ 文章板块的背景图这里, 因为以后要用v-for构造文章, 所以在html中style属性里面指定 background-image的url, 然后在scss中指定背景的属性, 以保证背景可以缩放且居中.

  ```scss
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center; //很重要
  ```

  

# axios请求文章数据

## 模拟后台数据

使用mock.js

1.    npm install mockjs -S

2. src下创建mock目录

> 	mock
   > 		index.js
> 		json
   > 			index.json

3. index.js 中

   ```javascript
   const Mock = require("mockjs");
   Mock.mock("/api/index", "get", require("./json/index.json"));
   ```
   
4. main.js里面
   `require("./mock");`

5. axios请求 /api/index就好了

## 数据处理

设置变量, 把数据按照组件分类, 然后传给不同组件.
![image-20210315155947659](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210315155947659.png)

