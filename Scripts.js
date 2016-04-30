function generate_table() {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 1; i < 5; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 1; j < 5; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      if( i == 1 ){
     	var cell = document.createElement("th");
      var cellText = document.createTextNode("Header "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);

      }
      else{
      var cell = document.createElement("td");
      var cellText = document.createTextNode( i - 1 + " , " + j  );
      cell.appendChild(cellText);
      row.appendChild(cell);
     }
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}

generate_table();
