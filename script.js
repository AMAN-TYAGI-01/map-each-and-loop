// switch
let day=5;
switch(day){
    case 0:
        day="sunday";
        break;

        case 1:
            day="monday";
            break;

            case 2:
                day="tuesday";
                break;

                case 3:
                    day="wensday";
                    break;

                    case 4:
                        day="thursday";
                        break;
                        
                        case 5:
                            day="friday";
                            break;

                            case 6:
                                day="saturday";
                                break;


}
document.getElementById("demo").innerHTML=day;

// loop
let text="";
for(let i=10;i>=1;i--){
text+=i;
    document.getElementById("demo1").innerHTML=text;
}

let text1="";
for(let i=2;i<=10;i++){
    for(let j=1;j<=10;j++){
        text1+=i*j+"<br>";
        document.getElementById("demo2").innerHTML=text1;
    }
}

// even
let text2=" ";
for(let i=1;i<=100;++i){
    if(i%2==0){
        text2+=i;
        document.getElementById("demo3").innerHTML=text2;
    }
}

// odd
let text3="";
for(let i=1;i<=100;i++){
    if(i%2!=0){
        text3+=i;
        document.getElementById("demo4").innerHTML=text3;
    }
}

// for in loop
let o="<ul>";
const cars={
    1.:"bmw",
    2.:"audi",
    3.:"punch",
    4.:"mercedese",
    5.:"thar",
}
let text4="";
for(let x in cars){
    text4+=`<li>${cars[x]}</li>`;
    
    document.getElementById("demo5").innerHTML=text4;
    let o="</ul>";
}

let text5=" ";
const student=["aman","anuj","advik"];
for(let a in student){
    text5+=student [a]+"<br>";
    document.getElementById("demo6").innerHTML=text5;
}

// for of loop


const course="javascript";
let text6="";
for(let c of course){
    text6+=c+"<br>";
    
}
document.getElementById("demo7").innerHTML=text6;


const name=["gil","rohit","virat","bumraha"];
let text7="";
let ul="<ul>";
for(let n of name){
    text7+=`<li>${n}</li>`;
    document.getElementById("demo8").innerHTML=text7;
}

// for each loop

const num=[32,695,395,384,49];

let text8="";
num.forEach(y);
function y(x){
    text8+=x*10+"<br>";
    document.getElementById("demo9").innerHTML=text8;
}

const person=["aman",21,"paython","sehore"];
let text9="";
person.map((x)=>{
 text9+=x+"<br>";   
});
    document.getElementById("demo10").innerHTML=text9;
