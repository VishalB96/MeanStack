function call1(){
    window.open("01_demo.html");//opents page in new tab
}

function call2(){
    window.open("01_demo.html","_blank","height =200,width=200,left=0,reight=100");
}

document.getElementById("btn1").addEventListener("click",call1);
document.getElementById("btn2").addEventListener("click",call2);