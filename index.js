const express = require('express');
const app = express();
const port = 3000;
// route:  Khai báo tuyến đường
//app.get('/trangchu', (req, res) => res.send("hello world"));
// or:
app.get('/', function (red, res){
    return res.send('hello ban hien nhé bạn bao nhiêu tuổi rồi');
})

// 127.0.0.1 = localhost
app.listen(port, () => console.log('Example app listening at http://localhost:'+ port));
