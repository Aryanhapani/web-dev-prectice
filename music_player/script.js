var arr=[
    {songName:"company",url:"./songs/JUSTIN_BIBER_-_Company_(mp3.pm).mp3",img:"https://i.pinimg.com/736x/9d/93/ab/9d93abe148c30f4393615b0bc2872d08.jpg"},
    {songName:"do't trust me",url:"./songs/Justin_Biber_-_don_t_trust_me_(mp3.pm).mp3",img:"https://i.pinimg.com/1200x/96/22/b7/9622b74b7dd777e2ed75b88cb5cfd794.jpg"},
    {songName:"never let u go",url:"./songs/Justin_Biber_-_Justin_Bieber_-_Never_Let_You_Go_(mp3.pm).mp3",img:"https://i.pinimg.com/736x/5a/0b/0f/5a0b0f4bdde2bc92567cf5395a85482f.jpg"},
    {songName:"Runway Love",url:"./songs/Justin_Biber_-_Justin_Bieber_-_Runaway_Love_(mp3.pm).mp3",img:"https://i.pinimg.com/vwebp/736x/3d/06/90/3d0690ba243dcceba86010026e35f2bc.webp"},
]
var allsongs=document.querySelector("#all-songs");
var poster=document.querySelector("#left")
var play=document.querySelector("#play")
var back=document.querySelector("#back")
var forword=document.querySelector("#forword")

var audio=new Audio()
var selectedsong=0;
function mainfunction(){ 
var clutter=" "
arr.forEach((elem,idx)=>{
    clutter = clutter + `<div class="song-card" id="${idx}">
                    <div id="part1">
                        <img src="${elem.img}" alt="">
                        <h2>${elem.songName}</h2>
                    </div>
                    <h6>3:28</h6>
                </div>`
})

audio.src=arr[selectedsong].url
poster.style.backgroundImage=`url(${arr[selectedsong].img})`
allsongs.innerHTML=clutter
}
mainfunction()

allsongs.addEventListener("click",function(dets){
    // console.log(arr[dets.target.id].img);
    selectedsong=dets.target.id
    // console.log(selectedsong);
    mainfunction()
     play.innerHTML=`<i class="ri-pause-line"></i>`
     flag=1
    audio.play()
    
})

var flag=0;
play.addEventListener("click",function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-line"></i>`
        mainfunction()
        audio.play()
        flag=1
    }else{
        play.innerHTML=`<i class="ri-play-fill"></i>`
        mainfunction()
        audio.pause()
        flag=0
    }
})

forword.addEventListener("click",function(){
   if(selectedsong < arr.length-1){
    selectedsong++;
    mainfunction()
    audio.play()
   }else{
    forword.style.opacity=0.5
   }
})

back.addEventListener("click",function(){
     if(selectedsong > 0){
    selectedsong--;
    mainfunction()
    audio.play()
   }else{
    back.style.opacity=0.5
   }
})