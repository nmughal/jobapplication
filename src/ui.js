(function uiapp() {

  function blurEvent(eventObj) {
    if (eventObj.target.value.length === 0) {
      eventObj.target.parentNode.parentNode.classList.add('has-error');
    }
  }
  document.querySelector('#full-name').addEventListener('blur', blurEvent);


// When the range input ("experience") is changed, update the text in the figure
// with the correct value from the input. So if I slide the dot to the right 1 step
// the figure should read "6 years".


  function changeEvent(eventObj) {
    console.log(eventObj.target.value);
    console.log(eventObj.target.parentNode.childNodes);
    eventObj.target.parentNode.childNodes[3].innerText = eventObj.target.value + ' years';
  }
  document.querySelector('#exp').addEventListener('change', changeEvent);



})(); // executing my IIFE (called uiapp)
