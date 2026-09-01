const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("close");


photos.forEach(photo => {

    photo.addEventListener("click", () => {

        lightboxImage.src = photo.src;

        lightbox.classList.add("active");

    });

});


closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});


document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});
