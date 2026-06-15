const card = document.getElementById('card');
const btn  = document.getElementById('flipBtn');
let flipped = false;
 
btn.addEventListener('click', () => {
  flipped = !flipped;
  card.classList.toggle('is-flipped', flipped);
  btn.textContent = flipped ? '🔄 Ver Frente' : '🔄 Virar Card';
});
 