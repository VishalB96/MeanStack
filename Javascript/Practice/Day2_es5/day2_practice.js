"use strict";
var go = function(){return "Anonymous function"};

var ans = go();
console.log(ans);
console.log(go());
let a=2;
let s = function(aa){return aa*aa; }
let s2 = function(aa) {return aa*aa*aa;}
let w = function(ww){console.log(ww(a));}

w(s);
w(s2);
console.log("callback function");
w(function(aa){return aa*aa; });

function mydata(param1, param2, callback) {  
    console.log('Started learning at.\n\nIt has: ' + param1 + ', ' + param2);  
    callback();  
}  

mydata('vita', 'DAC', function() { console.log('Finished learning DAC');});


console.log("\nself invoking function");
(function(a){console.log("hello "+a);})("lala");

console.log("\narrow function");
let arr = [100,111,1,2,332,111111,0.1];
console.log(arr);
arr.sort();
console.log(arr);
arr.sort((a,b)=>a-b);
console.log(arr);

//userdefine object
function person(nm,mks)
{
     alert(this)
    this.name=nm
    this.marks=mks
 }
var ob=new person("mona",80);// control will go to function
document.write(ob); //object Object
document.write(ob.constructor); //function Person
document.write("<hr/>")
document.write(ob.name+" "+ob["name"])
document.write("<hr/>")
for(let pp in ob)
document.write(pp+"  "+ob[pp]);
document.write(ob instanceof person);//true
document.write(ob instanceof Object);//true
