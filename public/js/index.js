$(document).ready(function() {
  
  //Verifies that Challenges question checkbox has atleast 1 checkbox checked
  function verifyChallengesCheckbox() {
    return $("#challenges-checkbox input:checked").length > 0;
  }

  //Collects the checked Challenges question checkboxes
  function collectChallengesCheckboxData() {
    var checkboxChallengesData = [];
    
    $("#challenges-checkbox > label.checkbox input:checked").each(function(index,value) {
      checkboxChallengesData.push($(this).parent().text().trim());
    });

    return checkboxChallengesData.join();
  }

  //Verifies that Interest question checkbox has atleast 1 checkbox checked
  function verifyInterestCheckbox() {
    return $("#interested-checkbox input:checked").length > 0;
  }
  
  //Collects the checked Interest question checkboxes
  function collectInterestCheckboxData() {
    var checkboxInterestData = [];
    
    $("#interested-checkbox > label.checkbox input:checked").each(function(index,value) {
      checkboxInterestData.push($(this).parent().text().trim());
    });

    return checkboxInterestData.join();
  }

  function postToGoogle() {
    var data = {
        'entry.1990565088': $('.form-control.firstname-field').val(),
        'entry.1194990171': $('.form-control.lastname-field').val(),
        'entry.86532129'  : $('.form-control.company-field').val(),
        'entry.1434316936': $('.form-control.email-field').val(),
        'entry.1418496140': collectChallengesCheckboxData(),
        'entry.1648773653': collectInterestCheckboxData(),
        'entry.1722671787': $('.form-control.questions-textarea').val()
      }

      $.post("https://docs.google.com/a/linksquares.com/forms/d/12bhQUzEBk8L55nwZdPMxniYWI5wqPCD0nc5suHgPb8w/formResponse", data);
      
      // Modify the DOM to show success (e.g. show hidden div with success message).

      $('.form-group.has-success').show();
      $('.form-group.has-error').hide();

      return false;
  }

  //When the form is submitted, validate the checkboxes are okay, then post to Google
  $('#target').submit(function(event) {
    event.preventDefault();

    if (verifyChallengesCheckbox() && verifyInterestCheckbox())  {
      console.log("PASS")
      postToGoogle();
    } else {
      console.log("FAIL")
      $('.form-group.has-success').hide();
      $('.form-group.has-error').show();
    }
  });
});
