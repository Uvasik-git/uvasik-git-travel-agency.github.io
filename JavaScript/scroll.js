const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');   // добавили
const nextBtn = document.querySelector('.next-btn');

function scrollRight() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    
    if (track.scrollLeft >= maxScroll - 5) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: 320, behavior: 'smooth' });
    }
}

function scrollLeft() {
    // Если в начале (с погрешностью 5px) — прыгаем в конец
    if (track.scrollLeft <= 5) {
        const maxScroll = track.scrollWidth - track.clientWidth;
        track.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: -320, behavior: 'smooth' });
    }
}

nextBtn.addEventListener('click', scrollRight);
prevBtn.addEventListener('click', scrollLeft);
setInterval(scrollRight, 3000);