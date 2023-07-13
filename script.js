// document.querySelector("body").appendChild(document.createElement('div')).className ='star';
// document.querySelector("body").appendChild(document.createElement('div')).classList.add('star'+i);
let booleano = true;
function createStars() {
  let positionX, positionY;
  let dimension = 0;
  let star;
  let stars = [];

  if (booleano){
    for (var i = 1; i <= 710; i++) {
      star = document.createElement('div');

      dimension = Math.floor(Math.random() * (2.6 - 0.5 + 1) ) + 0.3;

      positionX = Math.floor(Math.random() * (100 - 0 + 1) ) + 0;
      positionY = Math.floor(Math.random() * (100 - 0.2 + 1) ) + 0.5;

      star.style.left=  positionX + 'vw';
      star.style.top= positionY + 'vh';

      star.style.width = dimension + 'px';
      star.style.height = dimension + 'px';

      star.classList.add('star');
      document.querySelector('.container').appendChild(star);
      stars[i] = star;
    }
    booleano = false;
  }else {
    for (var i = 1; i <= 700; i++) {
      star = document.createElement('div');
      dimension = Math.floor(Math.random() * (2.6 - 0.5 + 1) ) + 0.3;

      positionX = Math.floor(Math.random() * (-150 - 100 + 1) ) + 100;
      positionY = Math.floor(Math.random() * (100 - 0.2 + 1) ) + 0.5;

      star.style.left=  positionX + 'vw';
      star.style.top= positionY + 'vh';

      star.style.width = dimension + 'px';
      star.style.height = dimension + 'px';

      star.classList.add('star');
      document.querySelector('.container').appendChild(star);
      stars[i] = star;
    }

  }


  setTimeout(function(){
    stars.forEach(s => s.remove());
  },25000)
}

setInterval(createStars, 5000)
createStars()
