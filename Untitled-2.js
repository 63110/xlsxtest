"use strict";
var xlsx = require("xlsx");

var firstBook = xlsx.readFile("test22.xlsx");
var listReaderFirst = firstBook.Sheets["list1"];
var dataFirstBook = xlsx.utils.sheet_to_json(listReaderFirst);

var secondBook = xlsx.readFile("test2.xlsx");
var listReaderSec = secondBook.Sheets["Лист1"];
var dataSecondBook = xlsx.utils.sheet_to_json(listReaderSec);

var Newdata1 = dataFirstBook.map((record) => {
  record.KONTORY;
  delete record.phones;
  delete record.inf;
  delete record.smth_inf;
  delete record.more;
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
xlsx.writeFile(newWB, "New Data File.xlsx");
