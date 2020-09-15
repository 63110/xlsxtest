"use strict";
var xlsx = require("xlsx");

var firstBook = xlsx.readFile("test.xlsx");
//console.log(firstBook.SheetNames)
var listReaderFirst = firstBook.Sheets["Лист1"];
var dataFirstBook = xlsx.utils.sheet_to_json(listReaderFirst);
//console.log(dataFirstBook);

var secondBook = xlsx.readFile("test2.xlsx");
//console.log(secondBook.SheetNames)
var listReaderSec = secondBook.Sheets["Лист1"];
var dataSecondBook = xlsx.utils.sheet_to_json(listReaderSec);
//console.log(dataSecondBook);
var Newdata1 = dataFirstBook.map(function (record) {
  record.value = record.RASHOD_PTO - record.Kilovaty;
  record.KONTORY;
  delete record.phones;
  delete record.inf;
  delete record.smth_inf;
  delete record.more;
  return record;
});
//console.log (Newdata1);

var Newdata2 = dataSecondBook.map(function (record) {
  record.KONTORY_2
  record.NumberSCH_2;
  record.Kilovaty_2;
  return record;
});

//console.log(Newdata1)
//console.log(Newdata2)

var twoArrays = Newdata1.concat(Newdata2);

//const twoArrays = [...Newdata1, ...Newdata2]
//console.log(twoArrays);
var last =twoArrays.map(function (record) {
  record.value;
  record.NumberSCH;
  record.NumberSCH_2;
  record.Kilovaty;
  record.Kilovaty_2;
  return record;
});

  
/*
let i=0;
Newdata1.forEach (function (item) {
  console.log(item)
   Newdata2[i].key = item.key;
    i++;
  });

*/

var step;
for (step = 0; step < 15; step++) {
  const result = Newdata2.find(x=>x.NumberSCH_2)
  console.log(result);
  
}

Newdata1.forEach(function (value) {
  if (value == value.NumberSCH)
  console.log(value.NumberSCH);



Newdata1.forEach((item) => {
  if (item == 'Kilovaty') 
  { const result = Newdata2.find(x=>)
    return;
  }
});

/*
twoArrays.forEach(function callback () {
  if (base.Ned == base.NumberSCH){
    base.Kilovaty = base.Kilovaty_2;

  } else {
    base.Kilovaty_2 = base.Kilovaty;
  //console.log(value.Kilovaty);
  }
}
  //console.log(value.Kilovaty_2)
 // console.log(value)
 
);


var newWB = xlsx.utils.book_new();
var newWS = xlsx.utils.json_to_sheet(twoArrays);
xlsx.utils.book_append_sheet(newWB, newWS, "Newdata");
xlsx.writeFile(newWB, "New Data File.xlsx");
