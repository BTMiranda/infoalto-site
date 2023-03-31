function getDateDiffPercent() {
  // set the dates
  const date1 = new Date("2023-03-27");
  const date2 = new Date("2023-04-02");

  // calculate the difference in milliseconds
  const diffMs = Math.abs(date2 - date1);

  // calculate the difference as a percentage of the total number of milliseconds in a week (604800000)
  const diffPercent = (diffMs / 604800000) * 100;

  // return the result as a string with two decimal places
  return diffPercent.toFixed(2) + "%";
}

const overlay = document.getElementById("overlay");

window.onload = function () {
  overlay.style.width = "0%";
  setTimeout(() => {
    overlay.style.width = getDateDiffPercent();
  }, 1000);
};
