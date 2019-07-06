window.onscroll = function(){
	scrollFunction()
};

function scrollFunction() {
	let button = document.getElementById("myBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Когда пользователь нажимает на кнопку, произойдет прокрутка к началу документа
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
} 