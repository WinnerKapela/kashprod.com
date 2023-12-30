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

}); 

$(document).ready(function(){
  $('#dropdownList').click(function(){
      $('#List').slideToggle('show');
     
  });
 
});

//Dispaly Contact Box on service page
var pageContent = document.getElementById('Content');
var box = document.getElementById('Contact-Box');
var boxTwo = document.querySelector('#design .detail .contactBox');
var boxThree = document.querySelector('#photo .detail .contactBox');
var BtnTrigger = document.getElementById('displayBox');
var BtnTriggerTwo = document.getElementById('displayBox2');
var BtnTriggerThree = document.getElementById('displayBox3');
var backgroundDiv = document.getElementById('Darkbackground');
BtnTrigger.addEventListener('click', displaybx);
BtnTriggerTwo.addEventListener('click', displaybxTwo);
BtnTriggerThree.addEventListener('click', displaybxThree);
backgroundDiv.addEventListener('click', cancelBkgrnd);


 function cancelBkgrnd(){
 box.style.display = 'none';
 boxTwo.style.display = '';
 boxThree.style.display = '';
 backgroundDiv.style.display = 'none';

}

function displaybx(){
  box.style.display = 'block';
  backgroundDiv.style.display = 'block';
}
function displaybxTwo(){
  boxTwo.style.display = 'block';
  backgroundDiv.style.display = 'block';
 
}
function displaybxThree(){
  boxThree.style.display = 'block';
  backgroundDiv.style.display = 'block';
 
}

//Footer Update
var copyright = document.querySelector('.Kash-copyright strong span');
var date = new Date();
var year = date.getFullYear();

copyright.textContent = year;