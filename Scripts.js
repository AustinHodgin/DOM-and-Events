//With help from: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

function generate_table() {  // get the reference for the body
     
    var body = document.getElementsByTagName("body")[0];   // creates a <table> element and a <tbody> element
     
    var Table     = document.createElement("table"); 
    var Table_Body = document.createElement("tbody");   // creating all cells
     
    for (var i = 1; i < 5; i++) {    // creates a table row
           
        var row = document.createElement("tr");    
        for (var j = 1; j < 5; j++) {      // Create a <td> element and a text node, make the text
                  // node the contents of the <td>, and put the <td> at
                  // the end of the table row
            //if i == 1 it will create the header row.
            if (i == 1) {
                var cell = document.createElement("th");     
                var cellText = document.createTextNode("Header " + j);     
                cell.appendChild(cellText);     
                row.appendChild(cell);
            //else it will create the normal rows
            } else {     
                var cell = document.createElement("td");     
                var cellText = document.createTextNode(i - 1 + " , " + j);     
                cell.appendChild(cellText);     
                row.appendChild(cell);
            }   
        }     // add the row to the end of the table body
           
        Table_Body.appendChild(row); 
    }   // put the <tbody> in the <table>
     
    Table.appendChild(Table_Body);  // appends <table> into <body>
     
    body.appendChild(Table);  // sets the border to 2
     //sets the borderWidth to 1 pixel
    Table.setAttribute("border", "1px");
}

//creates the buttons, up, down, left, right, mark
function generate_buttons() {
    //up button
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Up");
    x.id = "up";
    x.appendChild(t);
    document.body.appendChild(x);


    //down button
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Down");
    x.id = "down";
    x.appendChild(t);
    document.body.appendChild(x);


    //left button
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Left");
    x.id = "left";
    x.appendChild(t);
    document.body.appendChild(x);

    //right button
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Right");
    x.id = "right";
    x.appendChild(t);
    document.body.appendChild(x);

    //mark button
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Mark");
    x.id = "mark";
    x.appendChild(t);
    document.body.appendChild(x);
}


function move_up() {
    current = document.getElementById("selected"); //sets current equal to the slected element
    //if the slected is on the top row it wont move up
    if (current.parentNode.rowIndex <= 1) {

        return;
    }

    var temp = current.cellIndex; //sets a temp veriable to the cell index of the col to be used later
    current.style.borderWidth = "1px"; //sets the border back to normal
    current.removeAttribute("id"); //removes the ID fro m the slected element
    current = current.parentNode;
    current = current.previousElementSibling;
    current = current.firstElementChild;
    //moves the slected over the ammount of spaces over
    for (var i = 0; i < temp; i++) {
        current = current.nextElementSibling;
    }
    current.style.borderWidth = "4px"; //sets the new pixel width of the slected
    current.id = "selected"; //gives that cell the the slected id



}

function move_down() {

    current = document.getElementById("selected");  //sets current equal to the slected element
      //if the slected is on the bottom row it wont move udown
    if (current.parentNode.rowIndex >= 3) {

        return;
    }
    var temp = current.cellIndex; //sets a temp veriable to the cell index of the col to be used later
    current.style.borderWidth = "1px";
    current.removeAttribute("id");
    current = current.parentNode;
    current = current.nextElementSibling;
    current = current.firstElementChild;
    for (var i = 0; i < temp; i++) {
        current = current.nextElementSibling;
    }
    current.style.borderWidth = "4px";
    current.id = "selected";

}

function move_left() {
    current = document.getElementById("selected");
  //if the cell inded is equal to 0 it wont move left anymore
    if (current.cellIndex == 0) {
        return;

    } else {
        current.style.borderWidth = "1px";
        current.removeAttribute("id");
        current = current.previousElementSibling;
        current.style.borderWidth = "4px";
        current.id = "selected";
    }

}

function move_right() {
    current = document.getElementById("selected");
    //if the cell index is equal to 3 it wont move right anymore
    if (current.cellIndex == 3) {
        return;

    }
    current.style.borderWidth = "1px";
    current.removeAttribute("id");
    current = current.nextElementSibling;
    current.style.borderWidth = "4px";
    current.id = "selected";



}


//makrs the passed cell with the color yellow
function mark() {
    var current = document.getElementById("selected");
    current.style.backgroundColor = '#ffff00';
}



//fucntions to crate the table and the buttons
generate_table();
generate_buttons();

//selects the first element in the top left of the

var current = document.getElementsByTagName("td")[0];
current.id = "selected";
current.style.borderWidth = "4px";


//Sets it to look for a click on the button and moves the selected to the
// next correct cell
document.getElementById("up").addEventListener("click", move_up);
document.getElementById("down").addEventListener("click", move_down);
document.getElementById("left").addEventListener("click", move_left);
document.getElementById("right").addEventListener("click", move_right);
document.getElementById("mark").addEventListener("click", mark);
