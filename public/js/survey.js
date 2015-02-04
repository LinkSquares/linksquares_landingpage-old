$(document).ready(function() {

  function postToGoogle() {
    var data = {
        'entry.2134126697': $('.form-control.fullname-field').val(),
        
      }

      $.post("https://docs.google.com/forms/d/1bjhxTMJfChy-Z0rjxTfuDhf09icjJukD7MpxQTDdVNI/formResponse", data);

      return false;
  }

  $('#target').submit(function(event) {
    event.preventDefault();
    postToGoogle();

  });
});



/*entry.2134126697:
entry.575073340:Email
entry.952718322:email service
entry.1109339131:hardest part
entry.2003739538:understanding 
entry.241449062:save time
entry.976363206:locate links and docs
entry.877269600:more productive
entry.1866511601:manage your work email
entry.620199057:phone interview
entry.1374350073:phone number*/
