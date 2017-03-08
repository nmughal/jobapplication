(function uiapp() {

function blurEvent(eventObj) {
  if (eventObj.target.value.length === 0) {
    eventObj.target.parentNode.parentNode.classList.add('has-error');
  }
}
document.querySelector('#full-name').addEventListener('blur', blurEvent);


})(); // executing my IIFE (called uiapp)
