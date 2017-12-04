'use strict';

var Polls = require('../models/polls.js');
var ajaxFunctions = require('ajax-functions');


  // Retrieve all polls
function retrievePolls() {
  Polls.find({}, function (err, docs) {
    if (err) return err;
    console.log(docs);
    return 'test';
  })
}
  var pollList = retrievePolls();

function updateView() {
  
  var results = document.querySelector('#results') || null;

  function updateHtmlElement (data, element, userProperty) {
    element.innerHTML = data[userProperty];
  }
    
  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', appUrl, function (data) {
    var userObject = JSON.parse(data);

    if (results !== null) {
       updateHtmlElement(userObject, results, 'pollList');   
    }

  }))
         
}
                        
                        
