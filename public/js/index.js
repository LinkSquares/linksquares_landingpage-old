$(document).ready(function() {

  function postToGoogle() {
    var data = {
        'entry.921313200': $('.form-control.email-field').val(),
      }

      $.post("https://docs.google.com/a/linksquares.com/forms/d/19J9SD8mB8nqXDPIf6Ds1ECuuT09fFF5Tn7XdEd_UbEM/formResponse", data);

      return false;
  }

  $('#target').submit(function(event) {
    event.preventDefault();
    $('.btn.btn-primary.btn-lg.btn-block').hide();   
    $('.form-control.email-field').hide(); 
    $('.success-text').show();
    //$('.form-group').css("@media (max-width:767px) {'height', '170px'}")
    //$('.form-group').css("height", "170px");

    $('.preview-text').hide();
    postToGoogle();

  });
});
