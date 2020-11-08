// ADD NEW ITEM TO END OF LIST
var node = document.createElement('li');
node.appendChild(document.createTextNode("cream"));
document.querySelector('ul').appendChild(node);

// ADD NEW ITEM START OF LIST
var node2 = document.createElement('li');
node2.prepend(document.createTextNode("kale"));
document.querySelector('ul').prepend(node2);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listLength = parseInt(document.getElementsByTagName("LI").length);
for (var i = 0; i < listLength; i++) {
  document.getElementsByTagName("LI")[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var badge = document.createElement("span");
document.getElementsByTagName("H2")[0].appendChild(badge);
badge.textContent = listLength;
