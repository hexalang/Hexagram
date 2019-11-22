let rippleElements = document.getElementsByClassName("rp");

for (let i = 0; i < rippleElements.length; i++) {
  rippleElements[i].onmousedown = function(e) {
    let rect = this.getBoundingClientRect();

    let X = e.clientX - rect.left;
    let Y = e.clientY - rect.top;
    let rippleDiv = document.createElement("div");
    rippleDiv.classList.add("ripple");
    rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");
    this.appendChild(rippleDiv);
    setTimeout(function() {
      rippleDiv.parentElement.removeChild(rippleDiv);
    }, 900);
  };
}
//  rippleElements[i].onclick = function(e){
//    let X = e.pageX - this.offsetLeft;
//    let Y = e.pageY - this.offsetTop;
//    let rippleDiv = document.createElement("div");
//    let customColor = this.getAttribute('ripple-color');
//    if (customColor) rippleDiv.style.background = customColor;
