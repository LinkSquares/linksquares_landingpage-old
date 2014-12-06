$(document).ready(function() {

  function postToGoogle() {
    var data = {
        'entry.921313200': $('.form-control.email-field').val(),
      }

      $.post("https://docs.google.com/a/linksquares.com/forms/d/19J9SD8mB8nqXDPIf6Ds1ECuuT09fFF5Tn7XdEd_UbEM/formResponse", data);
      

      return false;
  }

  //When the form is submitted, validate the checkboxes are okay, then post to Google
  
 // if validateEmail($('.form-control.email-field').val())

  //else

  function validateFormMobile() {
    $( "#target" ).validate({
    submitHandler: function( form ) {
        alert( "Call Login Action" );
      }
    });
    
  }




  $('#target').submit(function(event) {
      validateFormMobile();






    //event.preventDefault();
    //$('.btn.btn-primary.btn-lg.btn-block').hide();   
    //$('.form-control.email-field').hide(); 
    //$('.success-text').show();
    //$('.form-group').css("height", "118px");
    //$('.preview-text').hide();
   // postToGoogle();

  });
});
