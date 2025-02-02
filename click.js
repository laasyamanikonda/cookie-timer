let images = document.querySelectorAll(".img");

images.forEach(function(img) {
    img.addEventListener("mousedown", function() {
        let currentWidth = img.offsetWidth; 
        img.style.width = (currentWidth - 25) + "px"; 
    });

    img.addEventListener("mouseup", function() {
        let currentWidth = img.offsetWidth; 
        img.style.width = (currentWidth + 25) + "px"; 
    });
});
