let element = document.querySelectorAll(".elem")

element.forEach(function (val){



    val.addEventListener("mouseenter",function(){
      val.childNodes[3].style.opacity = 1
    });

    val.addEventListener("mouseleave",function(){
      val.childNodes[3].style.opacity = 0
    });

    val.addEventListener("mousemove",function(dets){
      val.childNodes[3].style.left = dets.x+"px"
      val.childNodes[3].style.right = dets.y+"px"
    });

  });
