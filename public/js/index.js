$(document).ready(function() {
  $( '#target' ).submit(function() {
    $.ajax({
       url: "https://docs.google.com/a/linksquares.com/forms/d/1BUM2Wa4vJItqCJpBzAb35uuqV5iVdNOGqYAWP7HgnuY/formResponse",
       data: {
        'entry.2107324868': $('.form-control.firstname-field').val(),
        'entry.1274413636': $('.form-control.lastname-field').val(),
        'entry.928505418': $('.form-control.company-field').val(),
        'entry.303352934': $('.form-control.email-field').val(),
        'entry.1960377743': $('.form-control.phone-field').val(),
        'entry.1561108851': $('#select-challenge option:selected').text()
      },
      type: "POST",
      success: function(data) { 
        alert("post success!"); }

    });
  });
});
