// Your code here
// const dodger = document.querySelector("#dodger");
// dodger.style.backgroundColor = "#FF69B4";
// dodger.style.left;
// dodger.style.bottom;
// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);

//     dodger.style.left = `${left - 1}px`;
//   }
// });
const dodger = document.querySelector("#dodger");
// move left
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});
// move right
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});