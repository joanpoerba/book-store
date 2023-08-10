let num = document.querySelector(".num");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const stok = document.querySelector(".stok");

let count = 0;
let stokCount = parseInt(stok.textContent);

function updateCountDisplay() {
  num.textContent = count;
}

function updateStokCountDisplay() {
  stok.textContent = stokCount;
}

plus.addEventListener("click", () => {
  count++;
  stokCount--;
  updateStokCountDisplay();
  updateCountDisplay();
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    stokCount++;
    updateStokCountDisplay();
    updateCountDisplay();
  }
});
