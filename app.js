const express = require("express");
const multer  = require("multer");
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});


const app = express();
 
const storageConfig = multer.diskStorage({
    destination: (req, files, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, files, cb) =>{
        cb(null, files.originalname);
    }
});
 
app.use(express.static(__dirname));
 
app.use(multer({storage:storageConfig}).array("filedata" ,3));
app.post("/upload", function (req, res, next) {
   
    let filedata = req.files;
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");
});
app.post("/start", function (req, res, next) {
app.use('./Untitled-2.js', function(req, res, next) {

    console.log('runnu');
  
      });
});
app.get('/download', function(req, res){
    const file = `${__dirname}`;
    res.download(filePath, fileName);  
  });
    

app.listen(2000, ()=>{console.log("Server started");});
