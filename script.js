const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('bookingForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = new FormData(e.currentTarget);
  const name = form.get('name');
  const dates = form.get('dates');
  const guests = form.get('guests');
  const message = form.get('message') || 'No additional message.';
  const text = `Hello PJ's Cozzy Homes. I would like to request availability.%0A%0AName: ${encodeURIComponent(name)}%0APreferred dates: ${encodeURIComponent(dates)}%0AGuests: ${encodeURIComponent(guests)}%0AMessage: ${encodeURIComponent(message)}`;
  const status = document.getElementById('formStatus');
  status.innerHTML = `Your request is ready. <a href="https://wa.me/254714417226?text=${text}" target="_blank" rel="noopener">Send it on WhatsApp →</a>`;
});
