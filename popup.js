document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('submit_btn');
  checkButton.addEventListener('click', function() {
   var btn = document.getElementById('number');
   var countryCode = document.getElementById('countryCode');
   var path = "https://wa.me/" + countryCode.value + btn.value;
   window.open(path, '_blank')
  }, false);
}, false);