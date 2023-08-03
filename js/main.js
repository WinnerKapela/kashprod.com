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
  ulhide.style.display = 'none';
  aLink.style.opacity = '';
}

//Display Menu for small devices
$(document).ready(function(){
  $('#btnMenu').click(function(){
      $('#Menu').slideToggle('show');
     
  });
 
});

//footer, service elements
var li = document.getElementById('dropdownList');
var closeli = document.getElementById('closeli');
var img = document.getElementById('flecheDroite');
var List = document.getElementById('List');
var Liste = document.querySelector('ul.Liste');

li.addEventListener('click', displayElement);
closeli.addEventListener('click', HideElement);

function displayElement(){
  img.setAttribute('src','img/down-arrow.png');
 

}
function HideElement(){
  img.setAttribute('src','img/right-arrow.png');
  
}

//display icones Fb & Ig

var media = document.getElementById('medias-sociaux');
var media2 = document.getElementById('medias-sociaux2');
var media3 = document.getElementById('medias-sociaux3');
var media4 = document.getElementById('medias-sociaux4');
var media5 = document.getElementById('medias-sociaux5');
var profil = document.getElementById('profil-Img');
var profil2 = document.getElementById('profil-Img2');
var profil3 = document.getElementById('profil-Img3');
var profil4 = document.getElementById('profil-Img4');
var profil5 = document.getElementById('profil-Img5');

profil.addEventListener('mouseover', displayMedia);
profil2.addEventListener('mouseover', displayMedia2);
profil3.addEventListener('mouseover', displayMedia3);
profil4.addEventListener('mouseover', displayMedia4);
profil5.addEventListener('mouseover', displayMedia5);

profil.addEventListener('mouseout', hideMedia);
profil2.addEventListener('mouseout', hideMedia2);
profil3.addEventListener('mouseout', hideMedia3);
profil4.addEventListener('mouseout', hideMedia4);
profil5.addEventListener('mouseout', hideMedia5);

function displayMedia(){
  media.style.display = 'block';
}
function displayMedia2(){
  media2.style.display = 'block';
}
function displayMedia3(){
  media3.style.display = 'block';
}
function displayMedia4(){
  media4.style.display = 'block';
}
function displayMedia5(){
  media5.style.display = 'block';
}

function hideMedia(){
  media.style.display = 'none';
}
function hideMedia2(){
  media2.style.display = 'none';
}
function hideMedia3(){
  media3.style.display = 'none';
}
function hideMedia4(){
  media4.style.display = 'none';
}
function hideMedia5(){
  media5.style.display = 'none';
}

//Carousel Equipe

const carousel = document.querySelector('.Equipe-Content');
const arrowBtns = document.querySelectorAll('.icones-arrow img');
const firstImgWidth = carousel.querySelector('.Photo-Profile').offsetWidth;

let isDragging = false, startX, startScrollLeft;

arrowBtns.forEach( btn => {
  btn.addEventListener('click', () =>{
    carousel.scrollLeft += btn.id === 'left' ? - firstImgWidth : firstImgWidth;
  })
})

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add('dragging');
  // Enregistre le curseur initial et scroll le position du carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragging) return; // Is isDragging est false retourne ici
  // Met en jour la position du scroll du carousel basé sur le mouvement sur le cursor
  carousel.scrollLeft = startScrollLeft - (startX - e.pageX);
}
const dragstop = () => {
  isDragging = false;
  carousel.classList.remove('dragging');
}

carousel.addEventListener('mousemove', dragStart);
carousel.addEventListener('mousemove', dragging);
document.addEventListener('mouseup',dragstop);

//Footer Update
var copyright = document.querySelector('.Kash-copyright strong span');
var date = new Date();
var year = date.getFullYear();

copyright.textContent = year;

