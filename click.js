let images = document.querySelectorAll(".img");

images.forEach(function(img) {
    img.addEventListener("mousedown", function() {
      img.style.width = "150px"; // Shrink the image
    });
  
    img.addEventListener("mouseup", function() {
      img.style.width = "200px"; // Restore to original size
    });
  
    img.addEventListener("mouseleave", function() {
      img.style.width = "200px"; // Restore to original size
    });
  });
