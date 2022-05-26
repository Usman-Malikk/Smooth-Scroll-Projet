let tog = document.querySelector('#tog')
let liitems = document.querySelector('#liitems')

tog.addEventListener("click",function()

{
    tog.classList.toggle("rotate")
    liitems.classList.toggle("visibility")
    
    if (liitems.classList.contains("visibility") == true)
    {
        console.log("hi")
    }
})
var headers = document.querySelector("#homeee");
var sticky = headers.offsetTop;
var atag =  document.querySelectorAll(".atag")
atag.forEach(function(a)
{
    a.addEventListener("click",function(key)
    {
     liitems.classList.toggle("visibility")
     tog.classList.toggle("rotate")
    })
})
// window.addEventListener("scroll",function()
// {
// console.log("hi")
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//       } else {
//         header.classList.remove("sticky");
//       }

//     })
// window.onscroll = function() {myFunction()};


// function myFunction() {
//     console.log("hi")
//     if (window.pageYOffset > sticky) {
//       headers.classList.add("sticky");
//     } else {
//       headers.classList.remove("sticky");
//     }
//   }
var spanfix = document.querySelector("#spanfix")
window.addEventListener("scroll",function(a)
{
    console.log(window.pageYOffset);
if(window.pageYOffset>300)

{
  spanfix.classList.add("top")
}
else{
    
    spanfix.classList.remove("top")

}
})
spanfix.addEventListener("click",function()

{
 window.scrollTo(0,0)   
})