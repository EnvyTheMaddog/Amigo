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

function unlock() {

    const input = document.getElementById("password");
    const lockScreen = document.getElementById("lock-screen");
    const error = document.getElementById("error");

    const correctCode = "20061205";

    if (input.value === correctCode) {

        lockScreen.style.opacity = "0";

        setTimeout(() => {
            lockScreen.style.display = "none";
        }, 500);

    } else {

        error.textContent = "Yee chi meddeggvi ym uu ToT";

        input.value = "";

    }
}
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

});
