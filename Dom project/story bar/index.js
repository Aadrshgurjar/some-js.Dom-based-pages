var arr = [
  {dp:"images/profile-1.jpg",story:"images/story-1.avif"},
  {dp:"images/profile-2.jpg",story:"images/story-2.jpeg"},
  {dp:"images/profile-3.avif",story:"images/story-3.jpeg"},
  {dp:"images/profile-4.avif",story:"images/story-4.avif"},
  {dp:"images/profile-5.webp",story:"images/story-5.jpeg"},
  {dp:"images/profile-6.jpeg",story:"images/story-6.avif"},
]

 var storis = document.querySelector(".storis")
var clutter = ""

arr.forEach(function(elem ,idx){

   clutter += ` <div class = "story">
  <img id="${idx}"  src="${elem.dp}" aly="" >
  </div> `
});
storis.innerHTML = clutter


 storis.addEventListener("click",function(dets){

   document.querySelector(".full-screen").style.display="block"

   document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(function(){
    document.querySelector(".full-screen").style.display ="none"
  },3000)
 });




