(function uiapp() {

  function blurEvent(eventObj) {
    if (eventObj.target.value.length === 0) {
      eventObj.target.parentNode.parentNode.classList.add('has-error');
    }
  }
  document.querySelector('#full-name').addEventListener('blur', blurEvent);


  function changeEvent(eventObj) {
    console.log(eventObj.target.value);
    console.log(eventObj.target.parentNode.childNodes);
    eventObj.target.parentNode.childNodes[3].innerText = eventObj.target.value + ' years';
  }
  document.querySelector('#exp').addEventListener('change', changeEvent);


  function clickEvent(eventObj) {
    console.log();
    document.querySelector('#checkbox-inline-figure').innerText = countChecks(checkBoxArray) + ' languages';
  }
  let checkBoxArray = document.querySelectorAll('.checkbox-inline');
    document.querySelectorAll('.checkbox-inline').forEach(function chooseCheckbox(checkBox){
    checkBox.addEventListener('click', clickEvent);

  });
  //this function counts the checks in the array it's given//
  function countChecks(checkBoxArray) {
    let checkBoxCount = 0;
    checkBoxArray.forEach(function checkCount(each) {
      if (each.childNodes[1].checked ) {
        checkBoxCount++;
      }
    });
    return checkBoxCount;
  }

  countChecks(document.querySelectorAll('.checkbox-inline'));


})(); // executing my IIFE (called uiapp)
