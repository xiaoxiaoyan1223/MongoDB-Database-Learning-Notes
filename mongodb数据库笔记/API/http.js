//1、引入express模块
const express=require('express')
//2、创建app对象，通过语法express（） 底层原理http模块的createServer
const app=express()
//3、路由，语法app.HTTP请求方式（路径，回调函数）
app.get('/',(req,res)=>{
    // send是express用来响应数据
    res.send('hello,webopenfather')
})
const stuController=require(process.cwd()+'/controller/stu')
//#学生添加
app.post('/stu',stuController.create)
//4、启动服务监听端口
app.listen(3000,()=>{
    console.log('已经监视端口3000');
})