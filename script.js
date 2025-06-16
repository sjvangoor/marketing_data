const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
});

// observe elements
['.main-nav', '.headline', '.subheadline', '.hero-image', '.phone-mockup', '.card', '.use-cases li', '.testimonials blockquote'].forEach(sel => {
  document.querySelectorAll(sel).forEach(el => observer.observe(el));
});

document.getElementById('emailForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('email');
  if (!email.checkValidity()) return;
  document.getElementById('thanks').classList.remove('hidden');
  confetti();
});

function confetti() {
  for (let i=0; i<30; i++) {
    const span = document.createElement('span');
    span.className = 'confetti';
    span.style.position = 'fixed';
    span.style.left = Math.random()*100 + '%';
    span.style.top = '-20px';
    span.style.background = `hsl(${Math.random()*360},70%,60%)`;
    span.style.width = span.style.height = '6px';
    span.style.borderRadius = '50%';
    span.style.opacity = '0.8';
    span.style.pointerEvents = 'none';
    span.style.transition = 'transform 2s ease, opacity 2s';
    document.body.appendChild(span);
    requestAnimationFrame(()=>{
      span.style.transform = `translateY(${window.innerHeight}px)`;
      span.style.opacity = '0';
    });
    setTimeout(()=>span.remove(), 2000);
  }
}

// sticky CTA bounce pause
let timeout;
window.addEventListener('scroll', () => {
  const cta = document.getElementById('cta');
  cta.classList.remove('pause');
  clearTimeout(timeout);
  timeout = setTimeout(() => cta.classList.add('pause'), 100);
});

// light/dark mode toggle
const toggle = document.getElementById('modeToggle');
const body = document.body;
let dark = false;
toggle.addEventListener('click', () => {
  dark = !dark;
  body.classList.toggle('dark', dark);
  toggle.textContent = dark ? '☀️' : '🌙';
});

// countdown demo (home page)
const timerEl = document.getElementById('timer');
if (timerEl) {
  let time = 15;
  function tick() {
    timerEl.textContent = time;
    if (time === 0) {
      clearInterval(countdown);
    }
    time--;
  }
  const countdown = setInterval(tick, 1000);
}

// nav scroll effect
const nav = document.querySelector('.main-nav');
window.addEventListener('scroll', () => {
  if (!nav) return;
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
