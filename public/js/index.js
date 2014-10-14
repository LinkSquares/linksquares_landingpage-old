$(document).ready(function() {
  $( '.btn.btn-primary.btn-lg.btn-block' ).click(function() {
    $.ajax({
      type: "POST",
      url: "https://docs.google.com/a/linksquares.com/forms/d/1BUM2Wa4vJItqCJpBzAb35uuqV5iVdNOGqYAWP7HgnuY/formResponse",
      data: {
        'entry.2107324868': $('.form-control.firstname-field').val(),
        'entry.1274413636': $('.form-control.lastname-field').val(),
        'entry.928505418': $('.form-control.company-field').val(),
        'entry.303352934': $('.form-control.email-field').val(),
        'entry.1960377743': $('.form-control.phone-field').val()
      }
    });

  $('.form-group.has-success').css("visibility","visible");
  });
});
