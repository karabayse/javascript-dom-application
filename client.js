// We want to add an item, so we will need a submit event
// We know that the form has an id of "addForm"
// Put the form into a variable
let form = document.getElementById('addForm');

// We know that the unordered list has an id of "items"
// Put the list items into a variable
let itemList = document.getElementById('items');  // could use 'querySelector'

// Form submit event
// Take the form variable from above, add an event listener to submit,
// then run the function addItem
form.addEventListener('submit', addItem);

// Function addItem
// Pass in event parameter
function addItem(e) {
  // Prevent initial behavior
  e.preventDefault();
  console.log('in addItem');
  // Get the value of the input
  // The id of the input is "item"
  let newItem = document.getElementById('item').value;
  // Now we want to create a new "li" from the 'newItem'
  let li = document.createElement('li');
  // Add a class to the li
  li.className = 'list-group-item';
  // Check the console to see what the new li looks like
  console.log(li);
  // Now we want to append the text of the new li by passing in the newItem variable
  li.appendChild(document.createTextNode(newItem));
  // Add the delete button to the new element
  let deleteBtn = document.createElement('button');
  // Add classes to the button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Add an 'X' to deleteBtn using createTextNode
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to the li
  li.appendChild(deleteBtn);
  // Append li to list
  itemList.appendChild(li);
}
