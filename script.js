var buttons = document.querySelector('.inner-container');
var line_one = document.querySelector('.line1');
var line_two = document.querySelector('.line2');
var nav_bar = document.querySelector('.nav-bar');
var nav_icons = document.querySelectorAll('.nav-icon');
var social_media = document.querySelector('.social-media');
var social_media_icons = document.querySelector('.social-media-icons');
var container_toggle = document.querySelector('.container');
buttons.addEventListener('click', ()=>{
  nav_icons.forEach((nav_icon)=>{
    setTimeout(()=>{
        nav_icon.classList.toggle('hidden');
    },200)
  })
    line_one.classList.toggle('line-toggle');
    line_two.classList.toggle('line-toggle');
    nav_bar.classList.toggle('nav-bar__toggle');
    container_toggle.classList.toggle('container__toggle')
  setTimeout(()=>{
    social_media.classList.toggle('hidden');
    social_media_icons.classList.toggle('hidden');
  },200);
})