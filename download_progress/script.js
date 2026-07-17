// var user='Harsh';
// var h1=document.querySelector('h1');
// var btn=document.querySelector('button');

// btn.addEventListener("click",()=>{
// //    h1.innerHTML="e ladle ghop ghop"
// console.log("changing user name....");

// setTimeout(()=>{
//     h1.innerHTML="hello my name is aryan"
// },2000)
// })
// var a=0
// var int=setInterval(()=>{
//    a++;
//    console.log(a);
// },100)

// setTimeout(()=>{
//   clearInterval(int);
// },5000)

var grow=0;
var btn=document.querySelector('button');
var h2=document.querySelector('h2');
var inner=document.querySelector('.inner');

btn.addEventListener("click",()=>{
        btn.style.pointerEvents='none'

    var num=50+ Math.floor(Math.random()*50);
    console.log(num);
    
    var int=setInterval(()=>{
        grow++;
        // console.log(grow);
        h2.innerHTML=grow + "%";
        inner.style.width=grow + "%"
        },num)

    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML="Downloaded"
        btn.style.opacity=0.5;
        btn.style.pointerEvents='none'
        console.log("downloaded",num/10,"in sec");
        
    },num*100)
})