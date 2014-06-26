function animate() {
  var el = document.getElementById("welcome_text_highlight");
  console.log(el.className);
  if (el.className != "welcome_text_highlight_on") {
    el.className = "welcome_text_highlight_on";
  } else {
    el.className = "";
  }
}

function email() {
  var username = "andrin"
  document.location.href="mailto:" + username + "@codereviewhub.com";
}

function init() {
  window.setInterval(animate, 500);
}