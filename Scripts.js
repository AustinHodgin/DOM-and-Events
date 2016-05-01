function generate_table() {  // get the reference for the body
     
    var body = document.getElementsByTagName("body")[0];   // creates a <table> element and a <tbody> element
     
    var Table     = document.createElement("table"); 
    var Table_Body = document.createElement("tbody");   // creating all cells
     
    for (var i = 1; i < 5; i++) {    // creates a table row
           
        var row = document.createElement("tr");    
        for (var j = 1; j < 5; j++) {      // Create a <td> element and a text node, make the text
                  // node the contents of the <td>, and put the <td> at
                  // the end of the table row
            if (i == 1) {
                var cell = document.createElement("th");     
                var cellText = document.createTextNode("Header " + j);     
                cell.appendChild(cellText);     
                row.appendChild(cell);

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
    current = document.getElementById("selected");
    if (current.rowIndex == 1) {
        return;
    }
    var temp = current.cellIndex;
    current.style.borderWidth = "1px";
    current.removeAttribute("id");
    current = current.parentNode;
    current = current.previousElementSibling;
    current = current.firstElementChild;
    for (var i = 0; i < temp; i++) {
        current = current.nextElementSibling;
    }
    current.style.borderWidth = "4px";
    current.id = "selected";



}

function move_down() {

    current = document.getElementById("selected");
    if (current.rowIndex == 1) {
        return;
    }
    var temp = current.cellIndex;
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

//hightlights

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
