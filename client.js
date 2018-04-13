// VARIABLES
// We want to add an item, so we will need a submit event
// We know that the form has an id of "addForm"
// Put the form into a variable
let form = document.getElementById('addForm');

// We know that the unordered list has an id of "items"
// Put the list items into a variable
let itemList = document.getElementById('items');  // could use 'querySelector'

// Variable to filter items; Search Items input has an id of "filter"
let filter = document.getElementById('filter');


// EVENT LISTENERS
// Filter Items Event Listener
filter.addEventListener('keyup', filterItems);

// Delete Items
// Take the 'itemList' variable above and add an event listener
itemList.addEventListener('click', removeItem);

// Form submit event
// Take the form variable from above, add an event listener to submit,
// then run the function addItem
form.addEventListener('submit', addItem);


// FUNCTIONS
// Add Items Function
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


// Delete Items Function
function removeItem(e) {
  console.log('in removeItem');
  // if what we're clicking contains a class of "delete"
  if(e.target.classList.contains('delete')) {
    console.log('delete');
    if(confirm('Are You Sure?')) {
      // We are clicking the button, and we want the parent element which is "li"
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


// Filter Items function
function filterItems(e) {
  console.log('in filterItems');
  // Get Filter Text being typed in and convert it to lowercase
  let text = e.target.value.toLowerCase();
  // Grab all lis within itemList
  let items = itemList.getElementsByTagName('li');
  console.log(items);
  // Convert HTMLCollection into an array
  // Use 'forEach()' to loop through
  Array.from(items).forEach(function(item) {
    let itemName = item.firstChild.textContent;
    console.log(itemName);
    // Compare item name to search box text
    // Converted text items to lowercase, therefore need to include in our comparison
    // If it is not a match, it will equal -1
    if(itemName.toLowerCase().indexOf(text) != -1) {
      // If true, display in block form
      item.style.display = 'block';
    } else {
      // If false, do not display
      item.style.display = 'none';
    }
  });
}
