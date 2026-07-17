
// var h1=document.createElement('h1');

// h1.innerHTML='hello bro kese ho';

// var main=document.querySelector('main');

// main.appendChild(h1);

// var btn=document.createElement("button");

// btn.innerHTML='download';
// btn.style.color='#af2424'
// btn.style.backgroundColor='#812323'

// main.appendChild(btn);

var btn=document.querySelector('button');
var main=document.querySelector('main');

btn.addEventListener("click",()=>{
    var div=document.createElement('div');
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    var x=Math.floor(Math.random()*100);
    var y=Math.floor(Math.random()*100);
    div.style.height='200px'
    div.style.width='200px'
    div.style.position='absolute'
    div.style.left=x+"%";
    div.style.top=y+"%";
    div.style.backgroundColor=`rgb(${r},${g},${b})`;

    main.appendChild(div);
})



