var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
//设置允许跨域访问
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
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
    res.status(200),
        res.json(response)
    // console.log(response);
    // res.end(JSON.stringify(resLogin));
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