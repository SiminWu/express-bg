var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//设置允许跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});



app.use('/public', express.static('public'));

app.get('/index.htm', function (req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
})
app.post('/user/login', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        username: req.body.username,
        password: req.body.password
    };
  
    // console.log(response);
    res.end(JSON.stringify({ message: "获取token成功", code: 1, data:{
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTc2ODM1Mjk3LCJleHAiOjE1NzY5MjE2OTd9.k30cIlhoYs-4o3-TvKYB0fNHo3r3KV_oZz5ccdDFz08"
    }}));
})
app.post('/user/login', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        username: req.body.username,
        password: req.body.password
    };

    // console.log(response);
    res.end(JSON.stringify({
        message: "获取token成功", code: 1, data: {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNTc2ODM1Mjk3LCJleHAiOjE1NzY5MjE2OTd9.k30cIlhoYs-4o3-TvKYB0fNHo3r3KV_oZz5ccdDFz08"
        }
    }));
})
    
app.get('/user/info', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        code:1,
        data:{
            avatar: "https://randy168.com/1533262153771.gif",
            name: "admin",
            roles: ["admin"],
            data: ["order-manage", "order-list", "product-manage", "product-list", "review-manage", "return-goods", "goods", "goods-list", "goods-classify", "permission", "user-manage", "role-manage","menu-manage"]
        }
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
app.post('/goods/putinstorage', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        goodName: req.body.goodName,//商品名称
        totelWeight: req.body.totelWeight,//总重量
        weightUnits: req.body.weightUnits,//重量单位
        iUnitPrice: req.body.iUnitPrice,//入库单价
        iDate: req.body.iDate,//入库时间
        desc: req.body.desc,//备注
    };

    // console.log(response);
    res.end(JSON.stringify({
        message: "新增成功", code: 1, data: response
    }));
})


var server = app.listen(8099, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})