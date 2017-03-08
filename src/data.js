// IIFE

(function dataModule() {
  console.log('hello from data module');

  window.uiapp = window.uiapp || {};//this namespace needs to be in every js file for the same app

  window.uiapp.submitJobApp = function submitJobApp(jobApplication){
    console.log('applying for a job!', jobApplication);
  };


})(); //executing the dataModule function
