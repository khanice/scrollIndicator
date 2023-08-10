import './styles.css'

window.onscroll = function() {myFunction()};

function myFunction(){
  var windScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (windScroll/height)*100;
  document.getElementById("myBar").style.width = scrolled +"%"
}