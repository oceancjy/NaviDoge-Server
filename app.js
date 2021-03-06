var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(session({
  secret: 'sqwoq%@&^%#&@^&80hskdsjlda.s2i3213^&68276nmxc86%^#(', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 }
}));

// parse application/x-www-form-urlencoded
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());

app.get('/area', require('./router/area.js'));
app.get('/time', function (req, res) {
  res.send(Date().toLocaleString());
  res.end()
});

app.post('/initial', require('./router/initial.js'));
app.get('/bssids', require('./router/bssids.js'));
//app.post('/locate', require('./router/locate.js'));
app.post('/locate', require('./router/locateRequest.js'));
app.post('/floorplan', require('./router/floorplan.js'));

app.listen(8080);
