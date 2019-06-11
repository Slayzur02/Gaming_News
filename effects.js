

// animated fadeIn
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)
document.getElementsByClassName('parallax-background')[0].style.transform = 'translate(0px, -' + currentScrollPos /2 + + '%)'
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.opacity = "1";
  } else if(currentScrollPos<10) {
    document.getElementById("navbar").style.opacity = "1";
  }
  else {
    document.getElementById("navbar").style.opacity = "0";
  }
  if(currentScrollPos>1000) {
    let champions = document.getElementById('aatrox');
    champions.classList.add('animated')
    champions.classList.add('fadeIn')
    champions.style.visibility = 'visible'

  }
  if(currentScrollPos>1270) {
    let champions = document.getElementById('akali');
    champions.classList.add('animated')
    champions.classList.add('fadeIn')
    champions.style.visibility = 'visible'

  }
  if(currentScrollPos>1540) {
    let champions = document.getElementById('ahri');
    champions.classList.add('animated')
    champions.classList.add('fadeIn')
    champions.style.visibility = 'visible'

  }
  if(currentScrollPos>1810) {
    let champions = document.getElementById('alistar');
    champions.classList.add('animated')
    champions.classList.add('fadeIn')
    champions.style.visibility = 'visible'

  }
  if(currentScrollPos>2080) {
    let champions = document.getElementById('amumu');
    champions.classList.add('animated')
    champions.classList.add('fadeIn')
    champions.style.visibility = 'visible'

  }
  prevScrollpos = currentScrollPos;
}