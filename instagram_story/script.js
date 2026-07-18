// var arr=[1,2,3,4,5];

const users = [
  {
    id: 1,
    name: "Aryan",
    dp: "https://picsum.photos/seed/user1/100/100",
    story: "https://picsum.photos/seed/story1/500/800"
  },
  {
    id: 2,
    name: "Rahul",
    dp: "https://picsum.photos/seed/user2/100/100",
    story: "https://picsum.photos/seed/story2/500/800"
  },
  {
    id: 3,
    name: "Priya",
    dp: "https://picsum.photos/seed/user3/100/100",
    story: "https://picsum.photos/seed/story3/500/800"
  },
  {
    id: 4,
    name: "Neha",
    dp: "https://picsum.photos/seed/user4/100/100",
    story: "https://picsum.photos/seed/story4/500/800"
  },
  {
    id: 5,
    name: "Rohan",
    dp: "https://picsum.photos/seed/user5/100/100",
    story: "https://picsum.photos/seed/story5/500/800"
  },
  {
    id: 6,
    name: "Aisha",
    dp: "https://picsum.photos/seed/user6/100/100",
    story: "https://picsum.photos/seed/story6/500/800"
  },
  {
    id: 7,
    name: "Vikram",
    dp: "https://picsum.photos/seed/user7/100/100",
    story: "https://picsum.photos/seed/story7/500/800"
  },
  {
    id: 8,
    name: "Karan",
    dp: "https://picsum.photos/seed/user8/100/100",
    story: "https://picsum.photos/seed/story8/500/800"
  },
  {
    id: 9,
    name: "Sneha",
    dp: "https://picsum.photos/seed/user9/100/100",
    story: "https://picsum.photos/seed/story9/500/800"
  },
  {
    id: 10,
    name: "Ankit",
    dp: "https://picsum.photos/seed/user10/100/100",
    story: "https://picsum.photos/seed/story10/500/800"
  }
];

var clutter=""
var storiyan=document.querySelector(".storiyan");
users.forEach((elem,index)=>{
  
    clutter=clutter + `<div class="story">
    <img id="${index}" src="${elem.dp}" alt="">
    </div> `

    


})
// console.log(clutter);

storiyan.innerHTML=clutter

storiyan.addEventListener("click",(dets)=>{
    console.log(users[dets.target.id].story);

    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${users[dets.target.id].story})`

    setTimeout(()=>{
    document.querySelector("#full-screen").style.display="none";

    },3000)
    
})
