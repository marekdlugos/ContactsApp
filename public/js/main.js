var online = navigator.onLine;
if(online == true) {
  console.log('User is online.');
}
else {
  console.log('User is offline.');
}

var logo = document.querySelector(".logo");
logo.style.opacity = "0.6";
