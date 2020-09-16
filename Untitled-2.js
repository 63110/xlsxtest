"use strict";
var xlsx = require("xlsx");

var firstBook = xlsx.readFile("test.xlsx");
var listReaderFirst = firstBook.Sheets["Лист1"];
var dataFirstBook = xlsx.utils.sheet_to_json(listReaderFirst);

var secondBook = xlsx.readFile("test2.xlsx");
var listReaderSec = secondBook.Sheets["Лист1"];
var dataSecondBook = xlsx.utils.sheet_to_json(listReaderSec);

var Newdata1 = dataFirstBook.map(function (record) {
    record.value = record.RASHOD_PTO - record.Kilovaty;
    record.KONTORY;
    delete record.phones;
    delete record.inf;
    delete record.smth_inf;
    delete record.more;
    return record;
  });/*
const {item} = item;
const result = Newdata1.find(x => x.NumberSCH == item);
console.log(Newdata1);
result.Kilovaty;
  console.log(result.Kilovaty);
  */

  var Newdata2 = dataSecondBook.map(function (record) {
    record.KONTORY_2
    record.NumberSCH_2;
    record.Kilovaty_2;
    return record;
  });
const x=0;
  Newdata2.forEach (function (item) {
    if (item == x.NumberSCH){
        const result = Newdata1.find(x => x.NumberSCH === item.NumberSCH_2);
        result.Kilovaty;
        console.log(item.NumberSCH_2);
    }
        
//console.log();
//console.log(item.NumberSCH_2);

    
  });

var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(Newdata2);
xlsx.utils.book_append_sheet(newWB, newWS, "Newdata");
xlsx.writeFile(newWB, "New Data File.xlsx");