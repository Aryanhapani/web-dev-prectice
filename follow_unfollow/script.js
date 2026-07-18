// var h5=document.querySelector("h5");

// var add=document.querySelector(".add");
// var remove=document.querySelector(".remove");



// add.addEventListener("click",()=>{
//     h5.innerHTML="Freind"
//     h5.style.color="green"
// })

// remove.addEventListener("click",()=>{
//     h5.innerHTML="Stranger"
//     h5.style.color="red"

// })

var h5=document.querySelector("h5");

var btn=document.querySelector("button");
var check=0

btn.addEventListener("click",()=>{
    if(check == 0){
        h5.innerHTML="Freind"
        h5.style.color="green"
        btn.innerHTML="Remove"
        btn.style.backgroundColor="red"
        check=1;
    }else{
        h5.innerHTML="Stranger"
        h5.style.color="red"
        btn.innerHTML="Add"
        btn.style.backgroundColor="green"


        check=0;
    }

})