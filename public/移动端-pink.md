# 基础

## meta视口标签

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
```

取消默认的980px视口, 来用理想视口显示

## 物理像素比

在pc上1px等于屏幕上的一个像素点
在移动端, 就不一定, 一个px能显示的物理像素点的个数, 称之为物理像素比or屏幕像素比
eg: iPhone678 都是2
物理像素是750, 1px等于两个物理像素

## 二倍图

为了解决在**Retina屏幕**放大了图像倍数导致**模糊**的问题, 采用了倍图提高图像质量, 两倍于开发尺寸的图像大小, 压缩成正常大小

## 二倍精灵图

CSS使用二倍精灵图的方法https://blog.csdn.net/weixin_39295546/article/details/104709129

## background-size

+ 拉伸背景图, 只给一个参数就是宽度,
+ 也可以给百分比, 更方便
+ 值 cover是完全盖住盒子
+ contain 宽度到了就行

## 移动端开发选择

+ 单独开发移动端页面
+ 响应式兼容pc移动端 

## 移动端初始化CSS

nomalize.css

## box-sizing

box-sizing: border-box;
有了这句就让盒子变成CSS3盒子模型, border和padding不会再撑开盒子了. 

## 流式布局

+ 也就是百分比布局
+ max-width 最大宽度 min-width 最小宽度



# flex布局

## 原理

+ float、clear、vertical-align属性失效
+ 又叫伸缩布局 弹性布局
+ 采用flex称作flex容器, 成员成为flex项目
+ 通过给父亲添加flex属性,控制子盒子的位置和排列方式

## flex 父项的属性

**父亲必须有display: flex**

### flex-direction 主轴方向

flex-direction: row | column;

+ 设置谁谁就是主轴, 剩下的就是侧轴喽
+ 元素按照主轴排列

### justify-content 主轴子元素对齐方式 

+ 一定要先确认好主轴
+ flex-start 左到右 默认
+ center 居中对齐
+ space-around 平分剩余空间
+ space-between 两边贴边, 剩余平分

### flex-wrap 换行

flex默认不换行，如果装不开，缩小子元素宽度，硬塞进去
flex-wrap: warp  就可以另起一行显示

### align-items 侧轴上的对齐方式（单行）

侧轴是相对于主轴的，默认的主轴是x
align-items: xxx

+ flex-start | center | stretch(子元素不能设置高度，就会沿着y轴去拉伸)
+ 对齐方式先主轴，然后侧轴, 所以 主轴是x, 还是y, 都居中, 结果不一样
+ 只适用于单行子元素的情况

### align-content 侧轴对齐方式（换行时）

出现多行时候才有效

+ flex-wrap: wrap; 因为有了换行，所以用align-content
+ align-content:  flex-start | center | space-between | space-around...

### flex-flow 符合属性

flex-flow: row wrap;
行主轴，而且换行

## 子项属性

flex的子项行内元素产生宽度高度

### flex 剩余空间分几份

排除了已经给的width/height, 剩余的距离平均分
flex 1 | 2 |3 ..... 也可以是百分比
注意, 这个的计算方式是, 一个父亲下有三个儿子flex分别是 1, 2, 3, 那就是分别占1/6, 2/6, 3/6

 ### 在侧轴上的单独行动

align-self 控制子项在侧轴上的排列方式
align-self: flex-end;

### 排列顺序

order: <number>; 越小越靠前，默认是0



# Less

## 变量

@name: v;	eg: @fontColor: #333;

## 编译

easy less插件, 会自动编译css, 引用就好了

## 嵌套

```less
.header {
  a {
    // 子元素直接卸载父元素里面
    &:hover {
      // 伪类, 伪元素, 交集选择器, 需要加&
    }
  }
}
```

## 运算

+ 运算符之间, 左右空格隔开
+ 第二个数字可以省略单位
+  两个数字单位不同,结果以第一个数的单位为准
+ 除法需要加括号

## @import

可以吧一个less导入less, link是导入到html



# rem布局

## 基础

em是相对于父元素的字体大小来说的, rem是相对于html元素的字体大小来说的, 所以整体用rem布局, 当页面大小改变的时候, 只需要改变html元素的字体大小, 就可以实现改变页面元素大小整体控制

## 媒体查询

@media可以根据不同的屏幕尺寸设置不同样式

```css
@media screen and (max-width:800px){
  /* 在小于等于800px的屏幕上 */
}
@media screen and (max-width:600px){
  /* 在小于等于600px的屏幕上 */
}
@media screen and (min-width:600px) and (max-width:700px) {
  /* 在600px-700px的屏幕上 */
}
```

+ 一般按照从大到小or从小到大来设置
  从小到大更简洁, 因为可以层叠

## 引入资源

当样式比较多, 直接在link中判断设备尺寸, 准备多套css, 根据尺寸调不同的css
eg: 当屏幕够大, 一行三个div, 当小屏幕, 一行1个div 

```css
<link rel="stylesheet" href="style320.css" media="screen and (min-width: 320px)">
    <link rel="stylesheet" href="style640.css" media="screen and (min-width: 640px)">
```

## rem适配方案

1. less + 媒体查询 + rem
2. flexible.js + rem



# less+ 媒体查询 + rem

## 元素大小

pink老师讲的太好: https://www.bilibili.com/video/BV14J4114768?p=453

+ 将屏幕划分n等份, 作为html字体大小
+ 页面元素rem = 页面元素值px / (屏幕宽度/分的份数n)
+ or  元素rem = px / html.font-size

来康康苏宁的写法

![image-20210312103243050](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210312103243050.png)

苏宁分了15份

***<u>所以, 就照着750px宽度, 分成15份去写, 也就是一份50px, 去算rem, 在其他尺寸会自适应!!!!</u>***

- *重点是, 假设给的设计稿是750px, 要求切15等份, 那么一份就是50px, 设置less变量@baseFont: 50px; 量取设计稿的px之后, 比如说36px的按钮, 那就是 (36rem / @baseFont), 就会转化成rem 注意 #baseFont应该跟着设计稿计算出来在设置, 要和设计稿尺寸统一, 就可以算出rem, 之后无论什么尺寸, 都是按照比例缩放的.*

详见苏宁项目

# flexible.js

+ 自动划分10等份, 不需要去写媒体查询啦, 要做的只是按照设计稿/10得到font-size, 然后去算rem

+ 因为是按照整个屏幕划分的, 因此需要加max-width约束一下

+ 限制750宽度

  ```css
  @media screen and (min-width:750px) {
    html {
      font-size: 75px!important;
    }
  }
  ```

  

## CSSREM 插件

自动转化rem, 神器, 记得设置htmlroot的font-size哦, 不然默认是16px

webstrom 里面的是px2rem, 首选项  px to rem 设置root fontsize





# 响应式开发

基于媒体查询, 有一组划分屏幕的档位

![image-20210312195200106](https://ebcode.oss-cn-shanghai.aliyuncs.com/img/image-20210312195200106.png)

## 布局容器

不同屏幕下, 通过媒体查询改变布局容器的大小, 再改变里面的子元素排列方式, 从而实现在不同屏幕下, 看到的布局样式不同

一般叫做container, 直接用@media设置
