// burger and sidemenu
var burger = document.getElementById("burger");
var sideMenu = document.getElementById('side-menu');

burger.addEventListener("click", function(){
  burger.classList.toggle("rotate");
  sideMenu.classList.toggle("translate");
});

var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(){
    if(this.classList.contains("active")){}
    else {
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove("active");
      }
      this.classList.add("active");
    }
  });
}

function changeTab(target, name){
  var tabs = document.getElementsByClassName("tab");
  var tab = document.getElementById(name);
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < tabs.length; i++) {

    // Removes all tabs style
    tabs[i].style.display = "none";
    tabs[i].classList.remove("tabStyle1");
    tabs[i].classList.remove("tabStyle2");

    // Display tab
    tab.style.display = "block";

    // Add tab style
    setTimeout(function(){
    tab.classList.add("tabStyle1");
  }, 100);


    setTimeout(function(){
    tab.classList.add("tabStyle2");
  }, 100);

  buttons[i].classList.remove("active");
}
  target.currentTarget.className = "active";
};

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerGroup: 3,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
breakpoints: {
  // when window width is >= 480px
  600: {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 20
  },
  // when window width is >= 640px
  1000: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20
  }
}
});
