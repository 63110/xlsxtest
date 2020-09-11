var xlsx = require("xlsx");

var firstBook = xlsx.readFile("test.xlsx");
console.log(firstBook.SheetNames)
var listReaderFirst = firstBook.Sheets["Лист1"];
var dataFirstBook = xlsx.utils.sheet_to_json(listReaderFirst);

var secondBook = xlsx.readFile("test2.xlsx");
console.log(secondBook.SheetNames)
var listReaderSec = secondBook.Sheets["Лист1"];
var dataSecondBook = xlsx.utils.sheet_to_json(listReaderSec);

var Newdata1 = dataFirstBook.map(function (record) {
  record.value = record.KILOVATY - record.ZATRATY;
  record.ADRESS;
  delete record.ZATRATY;
  return record;
});

var Newdata2=dataSecondBook.map(function (record){
  delete record.ADRESS;
  delete record.ZATRATY;
  record.value;
  return record;
});

//console.log(Newdata1)
//console.log(Newdata2)
//var newWB;

var merged = new map(function (record){
  record.Newdata1;
  record.Newdata2;
  return record;
});

console.log(merged);
/*
var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(Newdata1);
xlsx.utils.book_append_sheet(newWB, newWS, "Newdata");

xlsx.writeFile(newWB, "New Data File.xlsx");
*/