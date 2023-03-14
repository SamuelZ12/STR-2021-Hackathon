var theme;

function init() {
  if (localStorage.getItem('theme')=='light-theme') {
    theme = 1;
    checkTheme();
  } else {
    theme = 0;
    localStorage.setItem('theme','dark-theme');
    checkTheme();
  }
}

let toggleSwitch = document.getElementById('toggle-theme');
init();

function toggleTheme() {
  theme ^= 1;
  localStorage.setItem('theme',(theme?'light-theme':'dark-theme'));
  checkTheme();
}
function checkTheme() {
  toggleSwitch.checked = theme;
  document.documentElement.className = localStorage.getItem('theme');
}

var button = document.getElementById('menuButton-nav');

function menuButton() {
  button.classList.toggle('toggled-nav');
  document.getElementById('navMenu').classList.toggle('show-nav');
}


window.addEventListener('resize', checkButton, false);
function checkButton() {
  if (window.innerWidth>620) {
    document.getElementById('navMenu').classList.remove('show-nav');
    button.classList.remove('toggled-nav');
  }
};

window.newHref = function (href) {
  document.body.style.opacity = 0;
  setTimeout(function () {
    window.location.href = href;
  },355);
};

document.addEventListener('DOMContentLoaded', function (e) {document.body.style.opacity = 1;});