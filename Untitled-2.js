function fistart () {

"use strict";
var xlsx = require("xlsx");

var firstBook = xlsx.readFile("./uploads/kniga1.xlsx");
console.log(firstBook.SheetNames);
var listReaderFirst = firstBook.Sheets["Лист1"];
var dataFirstBook = xlsx.utils.sheet_to_json(listReaderFirst);
console.log(dataFirstBook);
var secondBook = xlsx.readFile("./uploads/kniga2.xlsx");
console.log(secondBook.SheetNames)
var listReaderSec = secondBook.Sheets["list1"];
var dataSecondBook = xlsx.utils.sheet_to_json(listReaderSec);
console.log(dataSecondBook);


var Newdata1 = dataFirstBook.map((record) => {
  record.KONTORY;
  delete record.B;
  delete record.C;
  delete record.D;
  delete record.F;
  delete record.E;
  delete record.A;
  delete record.H;
  delete record.G;
  delete record.I;
  delete record.J;
  delete record.A;
  delete record.K;
  delete record.L;
  record.Kilovaty;
  return record;
});
var Newdata2 = dataSecondBook.map(({ KONTORY_2, NumberSCH_2 }) => ({
  KONTORY_2,
  NumberSCH_2,
  Kilovaty_2: Newdata1.find((x) => NumberSCH_2 == x.NumberSCH).Kilovaty,
}));

var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(Newdata2);
xlsx.utils.book_append_sheet(newWB, newWS, "Newdata");
xlsx.writeFile(newWB, "./New Data File.xlsx");
return ('Untitled-2.js')};
module.exports = {fistart};
