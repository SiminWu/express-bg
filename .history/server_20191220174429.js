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
    res.end(JSON.stringify({ code: 1, msg: "登录成功", token:"12bbhjk"}));
})
app.post('/process_post', urlencodedParser, function (req, res) {

    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "goodName": req.body.goodName,//商品名称
        "date1": req.body.date1,//入库日期
        "size": req.body.size,//规格
        "weight": req.body.weight,//总重量
        "storageAllPrice": req.body.storageAllPrice,//入库总价格
        "remark": req.body.remark,//备注
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8099, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})