// Offer bar
var offerbar=document.querySelector(".offerbar")
var offerclose=document.getElementById("offerclose")

offerclose.addEventListener("click",function(){
    offerbar.style.display="none"
})
//  Side menu bar

var sidenavbar=document.querySelector(".sidenavbar")
var menuicon=document.getElementById("menuicon")
var menuiconclose=document.getElementById("menubarclose")

menuicon.addEventListener("click",function()
{
    sidenavbar.style.marginLeft="0"
})

menuiconclose.addEventListener("click",function(){
    sidenavbar.style.marginLeft="-60%"
})

// Scroll animation

window.addEventListener("scroll", function () {
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((elements) => {
        windowHeight = window.innerHeight
        var length = elements.getBoundingClientRect()
        console.log(windowHeight)
        console.log(length.top)
        if (windowHeight > length.top - 100) {
            elements.classList.remove("reveal-scroll-animate")

        }

    })

})

// Like button

var likebutton=document.querySelectorAll(".heart-like")

likebutton.forEach((btn)=>{
    btn.addEventListener("click",function(like){
        
        
        if(like.target.src.indexOf("blackheart")>0)
        {
            console.log("liked");
            like.target.src="images/redheart.png"
        }
        else{
            like.target.src="images/blackheart.png"
        }
    })
})

// Sliding images

var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton =document.getElementById("slider-right-activate")
var sliderimage= document.querySelector(".images")
var slidermargin=0


sliderrightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
   

}
)

sliderleftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
}
)