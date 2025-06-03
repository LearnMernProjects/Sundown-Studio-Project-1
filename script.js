var elemC =document.querySelector("#elem-container")
var fixed =document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none";
})
var elem1 =document.querySelector("#elem")
elem1.addEventListener("mouseenter",function(){
    var image =elem1.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image})`
});
var elems=document.querySelectorAll("#elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image =e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })

})
var images2=document.querySelector("#P")
images2.addEventListener("onclick",function(){
    var image21 =images2.getAttribute("data-image")
    fixed.style.backgroundImage = `url(${image21})`
})
 
function menuAnimation() {
    var menu = document.querySelector("#page1")
    var full = document.querySelector("#main")
    var navimg = document.querySelector("#page2")
    var flag= 0
    menu.addEventListener("click", function() {
        if (flag=0){
            full.style.top="0"
            navimg.style.opacity= 0
            flag=1
        } else {
            full.style.top="-100"
            navimg.style.opacity= 1
            flag=0
        }
    })
}
menuAnimation()
var loader= document.querySelector("#loader")
setTimeout(function(){
   loader.style.top= "-100%"
},4000)
