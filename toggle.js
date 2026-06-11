//Toggle between light and dark mode
const togglebtn = document.getElementById("togglebtn");

//Function to switch modes
function toggleMode() {
    document.body.classList.toggle("dark-mode")

//Change button text depending on mode
if (document.body.classList.contains("dark-mode")){
    togglebtn.textContent = "Switch to Light Mode";

} else  {
  togglebtn.textContent = "Switch to Dark Mode";

   }

}

//Event listener for button click
togglebtn.addEventListener("click", toggleMode);
