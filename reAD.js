var xlsx = require("xlsx");

var firstBook = xlsx.readFile("test.xlsx");
//console.log(wkbook.SheetNames)
var listReaderFirst = firstBook.Sheets["Лист1"];
var dataFirstBook = xlsx.utils.sheet_to_json(listReaderFirst);
//console.log(wkbook.SheetNames)
var secondBook = xlsx.readFile("test2.xlsx");
var listReaderSec = secondBook.Sheets["Лист1"];
var dataSecondBook = xlsx.utils.sheet_to_json(listReaderSec);
// var wkbookSecond = xlsx.readFile("",{cellDates:true});
 console.log(wkbookSecond.SheetNames)
// var ws2 = wkbookSecond.Sheets['Лист1']
var Newdata = data.map(function (record) {
  record.Net = record.KILOVATY - record.ZATRATY;
  delete record.ADRESS;
  delete record.ZATRATY;
  return record;
});
//console.log(Newdata)

var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(Newdata);
xlsx.utils.book_append_sheet(newWB, newWS, "Newdata");

xlsx.writeFile(newWB, "New Data File.xlsx");
