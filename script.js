// 1. Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// 2. Custom Music Player Logic
const audio = document.getElementById('global-player');
function playAudio(file) {
    if (audio.src.includes(file) && !audio.paused) {
        audio.pause();
    } else {
        audio.src = file;
        audio.play();
    }
}

// 3. Image Gallery Zoom (Modal)
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.zoomable').forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initial check on load
reveal();
