var products = [
  {
    name: "iPhone 16 Pro",
    headline: "Apple's latest flagship ",
    price: "$1199",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
  },
  {
    name: "Samsung Galaxy S25 Ultra",
    headline: "Powerful Android",
    price: "$1299",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500"
  },
  {
    name: "Sony WH-1000XM5",
    headline: "Industry-leading noise ",
    price: "$399",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
  },
  {
    name: "MacBook Air M4",
    headline: "Thin, lightweight",
    price: "$999",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?w=500"
  },
  {
    name: "Apple Watch Series 10",
    headline: "Advanced fitnes",
    price: "$499",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500"
  }
];



function addprodect(){ 
var clutter=" "
products.forEach((elem,index)=>{
    clutter += `
            <div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl">
                  <img class="h-full w-full object-cover" src="${elem.image}">
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${elem.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${elem.headline}</h3>
                            <h4 class="font-semibold mt-2">${elem.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400"><i data-index="${index}"  
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
    
    

})

document.querySelector(".products").innerHTML=clutter
}

addprodect()


var popular = [
  {
    name: "Dell XPS 13",
    headline: "Premium ultrabook with stunning",
    price: "$1099",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
  },
  {
    name: "Canon EOS R50",
    headline: "Compact mirrorless camera for creators",
    price: "$799",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
  },
  {
    name: "iPad Air M3",
    headline: "Powerful tablet for work",
    price: "$699",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500"
  },
  {
    name: "Nike Air Max 270",
    headline: "Comfortable sneakers",
    price: "$159",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
  },
  {
    name: "PlayStation 5",
    headline: "Next-generation gaming ",
    price: "$499",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500"
  }
];


function addpopular(){ 
var clutter=" "
popular.forEach((elem)=>{
    clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${elem.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${elem.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${elem.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${elem.price}</h4>
                    </div>
                </div>`
    
})

document.querySelector(".populars").innerHTML=clutter
}

addpopular()

var cart=[]

function addtocart(){
   document.querySelector(".products").addEventListener("click",(det)=>{
    // console.log(det.target.classList.contains("add"));
    if(det.target.classList.contains("add")){
        cart.push(products[det.target.dataset.index])
        console.log(cart);
        
    }
    
   })
   
}

addtocart()

function showcart(){
    document.querySelector(".carticon").addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display="block";

        var clutter=" "

        cart.forEach((elem,index)=>{
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
    
                    <img src="${elem.image}" alt="">
                </div>
                <div>
                    <h3 class="font-semibold">${elem.name}</h3>
                    <h5 class="text-sm font-semibold opacity-80">${elem.price}</h5>
                </div>
              </div>`
        })
      document.querySelector(".cartexpnd").innerHTML=clutter;
    })


     

     


}

showcart()