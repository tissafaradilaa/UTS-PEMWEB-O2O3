var slideIndex = 0;
var slideInterval;

function startSlideshow() {
    slideInterval = setInterval(showSlides, 5000); // Ganti 3000 dengan interval yang diinginkan (dalam milidetik)
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides-fade");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

startSlideshow(); // Memanggil fungsi startSlideshow saat halaman dimuat

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
}

// Menambahkan fungsi untuk slide sebelumnya dan slide berikutnya
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Menangani klik tombol prev dan next
document.getElementById('prevBtn').addEventListener('click', function() {
    plusSlides(-1);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    plusSlides(1);
});
