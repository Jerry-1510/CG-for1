for (let i = 0; i < 5; i++) {
  document.writeln("The number is N");
}

document.getElementById("nhap").addEventListener("input", function () {
  let nhap = +document.getElementById("nhap").value;
  let total = document.getElementById("total");
  let count = 0;
  for (let i = 1; i < nhap; i++) {
    count += i;
  }

  total.innerHTML = count;
});
