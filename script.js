function insert_Row() {
  const col1 = document.createElement("td");
  const col2 = document.createElement("td");

  col1.innerHTML = "New Cell1";
  col2.innerHTML = "New Cell2";

  const table = document.getElementById("sampleTable");

  const newRow = document.createElement("tr");
  newRow.appendChild(col1);
  newRow.appendChild(col2);

  // Insert the new row at the top of the table
  if (table.firstChild) {
    table.insertBefore(newRow, table.firstChild);
  } else {
    table.appendChild(newRow);
  }
}

