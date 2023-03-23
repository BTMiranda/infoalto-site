function getTimeDifferencePercentage(start, end) {
  const timeDiff = Math.abs(end.getTime() - start.getTime());

  const percentageDiff =
    (timeDiff / Math.max(start.getTime(), end.getTime())) * 100;

  return `${percentageDiff}%`;
}

const overlay = document.getElementById("overlay");
const start = new Date("2023-03-27");
const end = new Date("2023-04-02");
window.onload(() => {
  overlay.style.width = "0%";
  setTimeout(() => {
    overlay.style.width = "100%";
  }, 1000);
});
