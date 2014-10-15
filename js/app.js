/*
    app.js
    application script for the JavaScript and Forms Demo
*/

"use strict";

/* onReady()
* Called when the DOM is loaded and ready for manipulation.
* We need to populate the class standing select based on the standings array
* and add an event listener for the form's submit event
* */
function onReady() {
    var standings = ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Super Senior!', 'Super Super Senior!'];
    // get reference to overall form
    var personForm = document.getElementById('person-form');

    //elements kinda like an array, necessary to append things to the list, points to 'standing' name in the html form
    var standingsSelect = personForm.elements['standing'];
    var idx;
    var option;

    //need loop to go over standings array, able to access each element one at a time
    for (idx=0; idx<standings.length; ++idx) {
        //pass name of element you want to create, such as 'option'
        option = document.createElement('option');
        option.innerHTML = standings[idx];
        // need to give it a value before you append, computer sees 1, 2,3,4,5,6 while user sees freshman, sopho+more
        option.value = idx + 1;
        standingsSelect.appendChild(option);
    }

    personForm.addEventListener('submit', onSubmit);

} //onReady()

/* onSubmit()
 * Called when the user attempts to submit the form
 * The browser will pass an event object as the first parameter and we can use this object
 * to stop the form from being submitted if it is invalid.
 * Also the keyword 'this' will refer to the form that is being submitted while inside this function.
 * */
// evt is the event object, refers to a bunch of stuff, also has handy properties letting us to override default
// behavior of browser and do something else
// validateForm passed parameter, 'this' refers to whatever element raised the event, in this case refers
// to the form element
//if statement returns false or true
// tells browsers of different type to return preventDefault()
 function onSubmit(evt) {
    evt.returnValue = validateForm(this);
    if (!evt.returnValue && evt.preventDefault) {
        evt.preventDefault();
    }
    return evt.returnValue;
} //onSubmit()


/* validateForm()
* This function validates the form's information and returns true if the form is valid or false if the form is invalid.
* It will also let the user know which fields are invalid.
* parameters:
*   form    reference to the form that needs to be validated
* */
function validateForm(form) {
    var requiredFields = ['firstName', 'lastName', 'standing', 'age'];
    // how to test?, must iterate over array and then call validateRequiredField
    var idx;
    var formValid = true;
    for(idx=0; idx<requiredFields.length; ++idx) {
        // requiredFields[idx] tells the computer to pass the current value into validateRequiredFields and
        // then checks to see if true
        // if validateRequiredField is true formValid will be true, if false formValid will flip to false and be returned
        formValid &= validateRequiredField(form.elements[requiredFields[idx]]);
    }

} //validateForm()

/* validateRequiredField()
* This function validates a field that is required. If the field does not have a value, or has only spaces,
* it will mark the field as invalid and return false. Otherwise it will return true.
* */
function validateRequiredField(field) {
    var value = field.value.trim();
    var valid = value.length > 0;
    if (valid) {
        field.className = 'form-control';
    }
    else {
        field.className = 'form-control invalid-field';
    }

    return valid;
    // need to catch cases of no string entrance and a bunch of spaces entered, trim() gets rid of spaces
    // at beginning and end of string

} //validateRequiredField()
// DOMContentLoaded is required to check that the DOM is ready for manipulation, if the page loads too soon it 
// will give us null back
document.addEventListener('DOMContentLoaded', onReady);