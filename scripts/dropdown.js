/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


$(document).ready(function(){

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        var dropDownContainer = document.getElementById("dropdown-container");
        dropDownContainer.style.textAlign = "center";
        // myDropdown.setAttribute('class', 'show-middle');
      }
  }
}
});


//$('#mobilebutton').click(function() {
  //$(this).toggleClass('expanded').siblings('div').slideToggle();
//});

