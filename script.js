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


// PASSWORD / LOGIN

const form = document.getElementById("login-form");
const input = document.getElementById("password");
const lockScreen = document.getElementById("lock-screen");
const error = document.getElementById("error");

const correctCode = "20061205"; // CHANGE THIS TO HER BIRTHDAY


form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (input.value.trim() === correctCode) {

        lockScreen.style.transition = "opacity 0.5s ease";
        lockScreen.style.opacity = "0";

        setTimeout(() => {
            lockScreen.style.display = "none";
        }, 500);

    } else {

        error.textContent = "Hmm... that's not it ♡";

        input.value = "";
        input.focus();

    }

});
