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