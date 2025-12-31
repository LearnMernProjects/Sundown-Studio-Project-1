// Hide loader after 4 seconds
var loader = document.querySelector("#loader")
setTimeout(function(){
   loader.style.top = "-100%"
}, 4000)

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
function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}
swiperAnimation();  