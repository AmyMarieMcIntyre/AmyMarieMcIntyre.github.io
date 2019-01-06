/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// Close the dropdown menu if the user clicks outside of it


////////////////////////////////////////////
///////Function For Loading Screen/////////
///////////////////////////////////////////
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);
	
});


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 
