var bott = document.getElementById("bot");

bott.onclick = function () {
  console.log("click me");
  toggleNightMode();
};

function toggleNightMode() {
  // Add your night mode toggle logic here
  // For example, you can toggle classes on the body element
  document.body.classList.toggle("dark-theme");
}
