'use strict';

var toggleBtn = document.querySelector(".btn-toggle");
var themeColor = document.querySelector('[name=theme-color]');
var style = document.getElementById('color-scheme');
var darkMedia = document.querySelector('[media="(prefers-color-scheme: dark)"]');
var lightMedia = document.querySelector('[media="(prefers-color-scheme: light)"]');
var state = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setLightState() {
    style.setAttribute("href", "assets/style/light-theme.min.css");
    darkMedia.setAttribute("media", "prefers-color-scheme: light)");
    toggleBtn.innerHTML = '🌙';
    toggleBtn.title = 'Turn lights off';
    themeColor.content='#010101';
    state = true;
}

function setDarkState() {
    style.setAttribute("href", "assets/style/dark-theme.min.css");
    lightMedia.setAttribute("media", "prefers-color-scheme: dark)");
    toggleBtn.innerHTML = '☀️'
    toggleBtn.title = 'Turn lights on';
    themeColor.content='#fefefe';
    state = false;
}

function setup() {
  if (state) {
    setDarkState();
  } else {
    setLightState(); 
  }
}

window.onload = setup();

toggleBtn.addEventListener("click", function (event) {
    setup();
    location.reload;
    event.preventDefault();
});
