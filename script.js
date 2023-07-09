// document.querySelector("body").appendChild(document.createElement('div')).className ='star';
let positionX, positionY;
let dimension=0;
let star;
for (var i = 1; i <= 60; i++) {
  star = document.createElement('div');
  // document.querySelector("body").appendChild(document.createElement('div')).classList.add('star'+i);
  dimension = Math.floor(Math.random() * (3 - 0.5 + 1) ) + 0.5;

  positionX = Math.floor(Math.random() * (1100 - 0.5 + 1) ) + 0.5;
  positionY = Math.floor(Math.random() * (800 - 0.2 + 1) ) + 0.5;

  star.style.width = dimension + 'px';
  star.style.height = dimension + 'px';


  star.style.left= positionX + 'px';
  star.style.top= positionY + 'px';

  star.classList.add('star-'+i);
  document.querySelector('body').appendChild(star);
}
