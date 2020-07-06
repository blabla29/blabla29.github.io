window.onload = (event) => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none"; 
    }, 1500);    
  };

$(".toggle-menu").click(function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
});
