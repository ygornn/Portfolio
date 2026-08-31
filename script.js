const card = document.getElementById('card');
const btn  = document.getElementById('flipBtn');
let flipped = false;
 
btn.addEventListener('click', () => {
  flipped = !flipped;
  card.classList.toggle('is-flipped', flipped);
  btn.textContent = flipped ? '🔄 Ver Frente' : '🔄 Virar Card';
});

/* ── project slider ── */
const track   = document.getElementById('sliderTrack');
const dots    = Array.from(document.querySelectorAll('.slider-dot'));
const cards   = Array.from(track.querySelectorAll('.project-card'));
let cur = 0;
 
// collect all prev/next buttons (one pair per card)
const prevBtns = Array.from(document.querySelectorAll('#prevBtn, .slider-prev-2'));
const nextBtns = Array.from(document.querySelectorAll('#nextBtn, .slider-next-2'));
 
function updateButtons() {
  prevBtns.forEach(b => b.disabled = cur === 0);
  nextBtns.forEach(b => b.disabled = cur === cards.length - 1);
}
 
function goTo(i) {
  i = Math.max(0, Math.min(i, cards.length - 1));
  track.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach((d, j) => d.classList.toggle('active', j === i));
  cur = i;
  updateButtons();
}
 
prevBtns.forEach(b => b.addEventListener('click', () => goTo(cur - 1)));
nextBtns.forEach(b => b.addEventListener('click', () => goTo(cur + 1)));
dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
 
goTo(0);
 