let img=document.querySelector('.img');
let like=document.querySelector('.like');
// console.log(i);
console.log(like);



img.addEventListener("dblclick",function(){
    
   like.style.opacity="1";

   like.style.transform= 'translate(-50%,-50%) scale(1) ';

   setTimeout(()=>{
   like.style.transform= 'translate(-50%,-320%) scale(1.5) rotate(30deg)';
      
   },500)
   
   setTimeout(() => {
   like.style.opacity="0";
    
   }, 800);
    

   setTimeout(()=>{
     like.style.transform= 'translate(-50%,-50%) scale(0) ';
     
   },1000)
    
})