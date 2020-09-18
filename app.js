const express = require("express");
const multer  = require("multer");

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
