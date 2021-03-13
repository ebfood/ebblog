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

