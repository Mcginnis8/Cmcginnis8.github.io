window.onload = function() {
  var outer = document.getElementById('outer');
  counter = 0;
  cover = document.getElementById('cover');
  cover.addEventListener('click', opener);
  $('.pop-up').hide(0);
  $('#Node3').click(function(){
    $('#cover').hide(0);
    $('#Node0').hide(0);
    $('#Node1').hide(0);
    $('#Node2').hide(0);
    $('#Node3').hide(0);
    $('.pop-up').fadeIn(500);
  });
  $('.pop-up span').click(function() {
    $('.pop-up').hide(500);
    $('#cover').show(0);
    $('#Node0').show(0);
    $('#Node1').show(0);
    $('#Node2').show(0);
    $('#Node3').show(0);
  });
}

function opener() {
  counter++;
  if(counter % 2 !== 0) {
    outer.classList.add('isOpen');
  } else if(counter % 2 == 0) {
    outer.classList.remove('isOpen');
  }
}
