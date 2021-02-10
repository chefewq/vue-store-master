# Store（参考小米商城）

## 前言

2020年这个寒假过的十分特殊，因为新冠疫情，在家呆了大半年。我于是利用了课余时间自学了，Java web 、Java Spring、

SpringBoot、 MySql 、Mybatis 、粗略的学习了vue 但是在自学的过程中，学的这些东西很零散，没有将学的这些东西组成一个系统，s所以一直想做一个完整网站，正好我们这个学期有一个`人机交互的课程`
给了我很多时间，于是我就想做一个项目把我学的这些东习巩固一下。

因为我只是粗略的学习了vue所以写网站前端我不是很熟练，我先是准备只写后台和用`vue-element-admin`做一个后台管理系统但是老师说不太好，我们这门课最好是有一个前台界面，于是我就在github
上找了好几个项目最终才选定了`vue-store`来做网站的前台，开始没有经验看到vue就烦，进度很慢，后面把axious
封装之后进度才开始快起来了。我在做新手上路，后台难免会有写bug，欢迎指正，我阿里云还有几天就到期了所以就不布置到服务器上了。

## 说明

> 本项目为前后端分离项目一共有两个前端一个基于vue-element-admin 是网站的后台管理程序另一个基于vue-store是网站面向用户的前台，我其实还想做一个店家的管理后台，但是时间太少了——我现在是大三正在准备考研，

> 后台管理程序我只完成了部分的功能 管理员登录 、权限认证、地区显示、地区管理 、商品添加（这个部分后台没有做完整，只能添加一个图片，其他图片需要手动添加）如果有时间我会改进的。

> 我原来是打算将这个项目还要结合物联网的，现在我的技术学习的还不够，如果有这方面想法的可以与我联系。

> 因为我是一个缺乏创新的人，（连说明文档也要照着别人的写）所以我把vue-store功能需要的接口全部重写了一遍。

> 如果觉得这个项目还不错，您可以点右上角 `Star`支持一下， 谢谢！ ^_^ 不要白嫖！不要白嫖!不要白嫖！。

> 这个网站的数据库构建我是从一个慕课网的课程哪里借鉴的，可能有些无用字段字段，没关系不要紧，这只是个练手项目。

> 后台处理订单的模块我感觉我做的不是很好，一旦连接的人数多一点，必然会崩，如果有更好的解决方案欢迎指正。

## 项目简介

本项目前后端分离，前台基于vue-store实现，用到的技术栈有`Vue`+`Vue-router`+`Vuex`+`Element-ui`+`Axios` 我封装了一下他的请求。中台（后台管理系统）基于vue-element-admin
实现我没有做完只是重连了一下后台，完成了部分功能。后台基于`SpringBoot`+`mybatis`+`Mysql`实现。

前端包含了11个页面：首页、登录、注册、全部商品、商品详情页、关于我们、我的收藏、购物车、订单结算页面、我的订单以及错误处理页面。

实现了商品的展示、商品分类查询、关键字搜索商品、商品详细信息展示、登录、注册、用户购物车、订单结算、用户订单、用户收藏列表以及错误处理功能。

我根据vue-store的前台的功能重新用Java设计了程序后台。但后台的有些功能前台没有用上比如说token验证前台登录后用户信息直接放在了Cooke里面确实存在有安全问题。

## 技术栈

- **前端：**`vue-store` +`axios`+`vue_element_admin`+`element_ui`+`node`
- **后端：**`SpringBoot`+`mybatis`+`shiro`+`swagger_ui`+`json`+`druid` +`mybatis`
- **数据库：**`Mysql`

## 功能模块

### 登录

页面使用了element-ui的`Dialog`实现弹出蒙版对话框的效果，`登录`按钮设置在App.vue根组件，通过`vuex`中的`showLogin`状态控制登录框是否显示。

这样设计是为了既可以通过点击页面中的按钮登录，也可以是用户访问需要登录验证的页面或后端返回需要验证登录的提示后自动弹出登录框，减少了页面的跳转，简化用户操作。

用户输入的数据往往是不可靠的，所以本项目前后端都对登录信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。

### 注册

页面同样使用了element-ui的`Dialog`实现弹出蒙版对话框的效果，`注册`按钮设置在App.vue根组件，通过父子组件传值控制注册框是否显示。

用户输入的数据往往是不可靠的，所以本项目前后端同样都对注册信息进行了校验，前端基于element-ui的表单校验方式，自定义了校验规则进行校验。

### 首页

首页主要是对商品的展示，有轮播图展示推荐的商品，分类别对热门商品进行展示。

### 全部商品

全部商品页面集成了全部商品展示、商品分类查询，以及根据关键字搜索商品结果展示。

### 商品详情页

商品详情页主要是对某个商品的详细信息进行展示，用户可以在这里把喜欢的商品加入购物车或收藏列表。

### 我的购物车

购物车采用vuex实现，页面效果参考了小米商城的购物车。

详细实现过程请看：[基于Vuex实现小米商城购物车](https://juejin.im/post/5e660ef9518825490276748a)

### 订单结算

用户在购物车选择了准备购买的商品后，点击“去结算”按钮，会来到该页面。 用户在这里选择收货地址，确认订单的相关信息，然后确认购买。

### 我的收藏

用户在商品的详情页，可以通过点击加入 喜欢 按钮，把喜欢的商品加入到收藏列表。

### 我的订单

对用户的所有订单进行展示。

## 运行项目

**注意：**

- 为了方便测试，数据库数据没有加密，注册时切记**不要使用自己的常用密码**。
- 如果需要自己运行后端，请移步到clone后端项目，并修改前端的接口地址为您的服务器地址。

```
1. Clone project

git clone 

2. Project setup

cd vue-store
npm install

3. Compiles and hot-reloads for development

npm run dev

4. Compiles and minifies for production

npm run build
```

## 页面截图

**首页**

![image-20201217152006022](C:\Users\24056\AppData\Roaming\Typora\typora-user-images\image-20201217152006022.png)

**全部商品**

![image-20201217152020438](C:\Users\24056\AppData\Roaming\Typora\typora-user-images\image-20201217152020438.png)

**购物车**

![image-20201217152124755](C:\Users\24056\AppData\Roaming\Typora\typora-user-images\image-20201217152124755.png)

**我的收藏**

![image-20201217152146110](C:\Users\24056\AppData\Roaming\Typora\typora-user-images\image-20201217152146110.png)

**我的订单**

![image-20201217152223766](C:\Users\24056\AppData\Roaming\Typora\typora-user-images\image-20201217152223766.png)

**注册**

![image-20201217152257380](C:\Users\24056\AppData\Roaming\Typora\typora-user-images\image-20201217152257380.png)

**作者**

https://github.com/chefewq

2020年12月17日