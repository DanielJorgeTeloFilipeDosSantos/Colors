var a=255,b=255,c=0,d=255,e=0,f=0;
var averageAD = 0; var averageBE = 0; var averageCF = 0;
var midleColor ='rgb('+averageAD+','+averageBE+','+averageCF+')';

var yellow = ''
var red = ''

function CC1(){
    a = document.getElementById("b11").value
    b = document.getElementById("b12").value
    c = document.getElementById("b13").value
    var li = document.getElementById('div1').style;
    yellow = 'rgb('+a+','+b+','+c+')';
    li.backgroundColor = yellow;
    return(a,b,c,yellow)
}
function CC2(){
    d = document.getElementById("b21").value
    e = document.getElementById("b22").value
    f = document.getElementById("b23").value
    console.log(d,e,f)
    var li = document.getElementById('div3').style;
    red = 'rgb('+d+','+e+','+f+')';
    li.backgroundColor = red;
    return(d,e,f,red)
}

function average(x,y){
    average2 = (x+y)/2
    return(average2)
}


function cD2(){
    return(midleColor='rgb('+~~((a*1)+(d*1))/2+','+~~((b*1)+(e*1))/2+','+~~((c*1)+(f*1))/2+')')
}

function changeColor(){
    document.getElementById("div2").style.backgroundColor = midleColor;
}


function cM(){
    console.log('-----------------------------------')
    console.log('a: '+a,'b: '+b,'c: '+c,'d: '+d,'e: '+e,'f: '+f)
    cD2();
    console.log('midlecolor: '+midleColor)
    changeColor();

}
