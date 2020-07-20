$(document).ready(function(){
  $('body').hide().fadeIn(1500);
});
function toggle(sDivId) {
  var oDiv = document.getElementById(sDivId);
  oDiv.style.display = (oDiv.style.display == "none") ? "block" : "none";
}