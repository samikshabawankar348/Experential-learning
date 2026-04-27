function sendMessage(e) {
    e.preventDefault();
    alert("Message sent successfully!");
}
let slides = document.querySelectorAll(".slide");
let index = 0;

function changeSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(changeSlide, 3000);
allow read, write: if true;