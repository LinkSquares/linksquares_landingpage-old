$(document).ready(function() {

  function postToGoogle() {
    var data = {
        'entry.921313200': $('.form-control.email-field').val(),
      }

      $.post("https://docs.google.com/a/linksquares.com/forms/d/19J9SD8mB8nqXDPIf6Ds1ECuuT09fFF5Tn7XdEd_UbEM/formResponse", data);
      
      // Modify the DOM to show success (e.g. show hidden div with success message).

      //$('.form-group.has-success').show();
      //$('.form-group.has-error').hide();

      return false;
  }

  //When the form is submitted, validate the checkboxes are okay, then post to Google
  
 // if validateEmail($('.form-control.email-field').val())

  //else





  $('#target').submit(function(event) {
    event.preventDefault();
    $('.btn.btn-primary.btn-lg.btn-block').hide();   
    $('.form-control.email-field').hide(); 
    $('.success-text').show();
    $('.form-group').css("height", "118px");
    $('.preview-text').hide();
    postToGoogle();

  });
});
