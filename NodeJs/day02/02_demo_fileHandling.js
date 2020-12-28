var fs = require("fs");
fs.readFile('input.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 });
console.log("Going to write into existing file");

fs.writeFile('input.txt', 'Simply Easy Learning!LOLOLOLOLOLOLOL', function(err) {
   if (err) {
      return console.error(err);
   }
     
   
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});
