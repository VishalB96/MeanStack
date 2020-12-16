/*Q1. Write function bigno(){} which will accept 5 number as array and return max value. 
This function should work even if you pass different number of argument. */
"using strict";

function bingo(...nos){
    let i,max;
    console.log("Parameters are : "+ nos);
    if(nos[0]==undefined){
            console.log("Enter numbers");
            return 0;
    }
    else{
        max=nos[0];
        for(i=1;i<nos.length;i++){
            if(max<nos[i])
                max = nos[i];
        }
    }
    return max;
}

let array = [2,3,11,5,445,4,444,9];

console.log(bingo(...array));

/*Q2. Write function fact(){} which will accept a number and return factorial of a number.*/

function fact(n) {
    let fact=1,i;
    console.log(n);
    if(n==undefined){
        console.log("Give proper input");
        return 0;
    }else if(n==1 || n== 2){
        return n;
    }else{
        for(i=n;i>=2;i--)
            fact=fact*i;
    }
    return fact;
   
}

console.log(fact(3));