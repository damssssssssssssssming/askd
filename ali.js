
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  setTimeout(function() {
    document.getElementById("button").style.display = "block";
}, 7000); 

document.getElementById("button").addEventListener("click", function() {
  window.location.href = "index2.html";
});