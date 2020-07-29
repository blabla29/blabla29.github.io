window.onload = (event) => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none"; 
    }, 1500);    
  };

  document.getElementById("User").addEventListener("click", open,);

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
