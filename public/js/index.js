$(document).ready(function() {
  function verifyCheckboxes() {
    return $("#challenges-checkbox input:checked").length > 0;
  }

  function collectCheckboxData() {
    var checkboxData = [];
    
    $("label.checkbox input:checked").each(function(index,value) {
      checkboxData.push($(this).parent().text().trim());
    });

    return checkboxData.join();
  }

  function postToGoogle() {
    var data = {
        'entry.1990565088': $('.form-control.firstname-field').val(),
        'entry.1194990171': $('.form-control.lastname-field').val(),
        'entry.86532129'  : $('.form-control.company-field').val(),
        'entry.1434316936': $('.form-control.email-field').val(),
        'entry.1418496140': collectCheckboxData()
      }

      $.post("https://docs.google.com/a/linksquares.com/forms/d/12bhQUzEBk8L55nwZdPMxniYWI5wqPCD0nc5suHgPb8w/formResponse", data);
      
      // Modify the DOM to show success (e.g. show hidden div with success message).

      $('.form-group.has-success').show();
      $('.form-group.has-error').hide();

      return false;
  }

  $('#target').submit(function(event) {
    event.preventDefault();

    if (verifyCheckboxes()) {
      postToGoogle();
    } else {
      $('.form-group.has-success').hide();
      $('.form-group.has-error').show();
    }
  });
});
