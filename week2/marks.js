function calculateResult() {
  // Get marks entered for all 8 subjects (treat empty as 0)
  var sub1 = Number(document.getElementById("sub1").value) || 0;
  var sub2 = Number(document.getElementById("sub2").value) || 0;
  var sub3 = Number(document.getElementById("sub3").value) || 0;
  var sub4 = Number(document.getElementById("sub4").value) || 0;
  var sub5 = Number(document.getElementById("sub5").value) || 0;
  var sub6 = Number(document.getElementById("sub6").value) || 0;
  var sub7 = Number(document.getElementById("sub7").value) || 0;
  var sub8 = Number(document.getElementById("sub8").value) || 0;

  // Total out of 800 (8 subjects x 100 full marks each)
  var total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8;

  var status = "";
  var color = "";

  if (total >= 600) {
    status = "Distinction";
    color = "green";
  } else if (total >= 400) {
    status = "Pass";
    color = "green";
  } else {
    status = "Fail";
    color = "red";
  }

  var resultBox = document.getElementById("result");
  resultBox.innerHTML = "Total Marks: " + total + " / 800 <br> Result: " + status;
  resultBox.style.color = color;
}