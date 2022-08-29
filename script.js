window.onload = function() {
  var outer = document.getElementById('outer');
  counter = 0;
  cover = document.getElementById('cover');
  cover.addEventListener('click', opener);
}

function opener() {
  counter++;
  if(counter % 2 !== 0) {
    outer.classList.add('isOpen');
  } else if(counter % 2 == 0) {
    outer.classList.remove('isOpen');
  }
}
