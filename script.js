let elems = document.querySelectorAll(".elem");
let h2 = document.querySelectorAll(".elem h2");
let page2 = document.querySelector(".page2");


Shery.mouseFollower() ;
Shery.makeMagnet(".magnet") ;
document.querySelector("footer #back").addEventListener("click" , function() {
  scroll.scrollTo(0) ; 
})

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 1.015 
});

function changeHeadingColor() {
  h2.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      el.style.color = "#000";
    });

    el.addEventListener("mouseleave", function () {
      el.style.color = "#fff";
    });
  });
}

function changePage2Background() {
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      let bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
      h2.style.color = "#000";
      page2.style.backgroundSize = "cover";
      page2.style.backgroundPosition = "center" ;
    });
  });
}

changeHeadingColor();
changePage2Background() ; 