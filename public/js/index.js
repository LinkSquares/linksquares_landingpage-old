$(document).ready(function() {

  function postToGoogle() {
    var data = {
        'entry.921313200': $('.email-input').val()
      }

      $.post("https://docs.google.com/a/linksquares.com/forms/d/19J9SD8mB8nqXDPIf6Ds1ECuuT09fFF5Tn7XdEd_UbEM/formResponse", data);
      
      // Modify the DOM to show success (e.g. show hidden div with success message).

      //$('.form-group.has-success').show();
      //$('.form-group.has-error').hide();

      return false;
  }

  //When the form is submitted, validate the checkboxes are okay, then post to Google
  $('#submit-button').click(function(event) {
    event.preventDefault();
    console.log("PASS")
      postToGoogle();

  });
});
