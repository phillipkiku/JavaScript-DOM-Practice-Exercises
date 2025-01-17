
// Declare variables
 

let input = document.getElementById("myInput");
let table = document.getElementById("myTable");
let tr = table.getElementsByTagName("tr");

 input.addEventListener("onkeyup", myInput);

// Function to filter Rows
function filterRow() {
 let filter = input.value.toUpperCase();

  // loop to seive through the rows and display the filtered row
  for (i = 0; i < tr.length; i++) {
   let td = tr[i].getElementsByTagName("td")[0];
    if (td) {
   let   typedText = td.textContent || td.innerText;
      if (typedText.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  
}
