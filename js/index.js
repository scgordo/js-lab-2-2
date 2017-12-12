var table_value = 5;       // Unit of table to calculate from
// var operator = 'addition'; // Type of calculation
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var additionMsg = "Let's learn to add by the number 5:" + "<br><br>";              // Initialize Addition Message
var multiplicationMsg = "Let's learn to multiply by the number 5:" + "<br><br>";              // Initialize Multiplication Message

if (operator === 'addition') {
  // Do addition
  while (i < 21) {
    additionMsg += i + ' + ' + table_value + ' = ' + (i + table_value) + '<br />'; // Append to the msg variable    
    i++;
  }
}
  // Write the multiplication code here following the addition code as an example
  
  else if (operator === 'multiplication') {
    while (i < 21) {
      multiplicationMsg += i + ' * ' + table_value + ' = ' + (i * table_value) + '<br>'; // Append to the msg variable
      i++
    }
  }

// Write the message into the page
var el = document.getElementById('blackboard');
if (operator === 'addition') {
  el.innerHTML = additionMsg; // Change the html id blackboard to the whole appended msg 
}
else if (operator === 'multiplication') {
  el.innerHTML = multiplicationMsg;
}