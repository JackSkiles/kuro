var moon = document.getElementById('moon')
function scrolListener(e){
  var screenTop = document.scrollingElement.scrollTop;
  var screenBottom = screenTop + innerHeight;
  var moonTop = moon.getBoundingClientRect().top
  
  if ( moonTop < screenBottom && moonTop < screenTop)
  {
      moon.classList.add("moon");
      moon.classList.remove("firstMoon");
    console.log("Hello");
  }
  else if ( moonTop > screenBottom && moonTop > screenTop)
  {
      moon.classList.add("firstMoon");
      moon.classList.remove("moon");
    console.log("Hello");
  }
  
}


document.onscroll = scrolListener