////////////////////////////////////////////
///////Function For Modal Contact/////////
///////////////////////////////////////////

var modal = document.getElementById("mainmodal");

var button = document.getElementById("mainbutton");

var span = document.getElementsByClassName("close")[0];


button.onclick = function ()
{
    modal.style.display = "block";
}

span.onclick = function()
{
    modal.style.display = "none";
}

window.onclick = function()
{
    if(event.target == modal)
    {
        modal.style.display = "none";
    }
}

////////////////////////////////////////////
///////Function For Loading Screen/////////
///////////////////////////////////////////
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 1000);
	
});