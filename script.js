/*slideshow*/

    // JavaScript for slideshow
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }

/*message box*/

   function toggleMessage() {
            var messageBox = document.getElementById("messageBox");
            if (messageBox.style.display === "none") {
                messageBox.style.display = "block";
            } else {
                messageBox.style.display = "none";
            }
        }

/*infobox*/
  function toggleInfo() {
            var infoBox = document.getElementById("infoBox");
            infoBox.classList.toggle("show");
        }

