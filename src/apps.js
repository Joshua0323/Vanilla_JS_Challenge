const title = document.querySelector("div.hello:first-child h1");

function handleWindowClick() {
  title.innerText = "That was a right click!";
  title.style.color = "orange";
}

function handleMouseEnter() {
  title.innerText = "The mouse is here!";
  title.style.color = "green";
}

function handleMouseLeave() {
  title.innerText = "The mouse is gond!";
  title.style.color = "blue";
}

function handleWindowResize() {
  title.innerText = "You just resized!";
  title.style.color = "purple";
}

// title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("contextmenu", handleWindowClick);
