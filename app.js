const calculator = document.querySelector(".calculator");
const result = document.querySelector(".result");
const operators = ["/", "x", "-", "+"];
calculator.addEventListener("click", function (e) {
  let resultSpan = result.querySelector("span");
  let clickSpan = e.target.tagName === 'DIV' ? e.target.querySelector("span") : e.target; //pilih span (cek yang ke-klik)
  let last = resultSpan.innerHTML[resultSpan.innerHTML.length - 1];
  if (operators.indexOf(clickSpan.innerHTML) < 0) { //angka yang dipencet, atau C dan =
    resultSpan.innerHTML += clickSpan.innerHTML; //tambahin string di belakang result
    if (clickSpan.innerHTML === '=' && operators.indexOf(last) < 0) {
      resultSpan.innerHTML = resultSpan.innerHTML.substring(0, resultSpan.innerHTML.length - 1); //kurangin angka plg belakang
      resultSpan.innerHTML = resultSpan.innerHTML.replace("x", "*"); //replace x dengan *
      resultSpan.innerHTML = eval(resultSpan.innerHTML).toFixed(2); //hitung sampai 2 angka dibelakang koma
    }
    if (clickSpan.innerHTML === 'C') {
      resultSpan.innerHTML = ''; //clear
    }
  } else {
    if (operators.indexOf(last) > -1) {
      resultSpan.innerHTML = resultSpan.innerHTML.substring(0, resultSpan.innerHTML.length - 1); //kurangin angka plg belakang
    }
    resultSpan.innerHTML += clickSpan.innerHTML; //tambahin string di belakang
  }
});