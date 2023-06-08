//dropdowMenu
var ul = document.getElementById('dropdownElement');
var aLink = document.getElementById('linkMenu');
var ulhide = document.getElementById('drop-down-Menu');

ul.addEventListener('mouseover',afficheMenu);
ul.addEventListener('mouseout',cacheMenu);

function afficheMenu(){
  ulhide.style.display = 'block';
  aLink.style.opacity = '1';
}
function cacheMenu(){
  ulhide.style.display = '';
  aLink.style.opacity = '';
}

//footer, service elements
var li = document.getElementById('dropdownList');
var closeli = document.getElementById('closeli')
var img = document.getElementById('flecheDroite');
var ul = document.getElementById('List');

li.addEventListener('mouseover', displayElement);
closeli.addEventListener('click', HideElement);

function displayElement(){
  img.setAttribute('src','img/down-arrow.png');
  ul.style.display = 'block';

}
function HideElement(){
  img.setAttribute('src','img/right-arrow.png');
  ul.style.display = 'none';

}


jQuery(document).ready(function( $ ){

    // Back to top button
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });
    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });
  
    // Header fixed on scroll
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#navigation').addClass('header-scrolled');
      } else {
        $('#navigation').removeClass('header-scrolled');
      }
    });
  
    if ($(window).scrollTop() > 100) {
      $('#navigation').addClass('header-scrolled');
    }
});

