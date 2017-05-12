/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }

  function showHideNav(){
      var nav = document.getElementById("mobilebutton");
      if(nav.className === "mobile"){
          console.log("will hide now");
          nav.setAttribute("class", "mobilehide");
      }
      else{
          console.log("will show now");
          nav.setAttribute("class", "mobile");
      }
  }
}
