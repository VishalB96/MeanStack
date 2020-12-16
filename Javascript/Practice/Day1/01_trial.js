"use strict"
var f = "vishal";
console.log(f);
console.log("welcome "+f);
var a;
var b;
a=5;
b=9;
console.log(a+b);
console.log(a+b+"ans");
console.log("ans : " + a+b);
console.log("ans : "+ (a+b));
console.log(5+6);
console.log(5-"6");
console.log("5"+6);
console.log(5+"6");
console.log(5+"ss");
console.log(5*"asdasd");
function printName (){
    console.log("welcomr "+f);

};
var r = printName();
console.log(r);

function mul(x,y){
    let p ;
    p=x*y;
    return p;
};

var multi = mul(4,3);
console.log(multi);
console.log(mul(3));

function addAll(){
    let i = 0,sum=0;
    for(i;i<arguments.length;i++)
    sum=sum+arguments[i];

    return sum;
}

function addAllRest(...myargs){
    let i = 0,sum=0;
    for(i;i<myargs.length;i++)
    sum=sum+myargs[i];

    return sum;
}

var array1 = [1,2,3,4,5,6,7,8,9,10];

console.log(addAll(...array1));
console.log(addAllRest(...array1));
console.log(addAll(35,...array1));
console.log(addAllRest(35,...array1));