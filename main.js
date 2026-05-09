/* ============================================================
   EZIO AUTOMATION — main.js
   Handles: Nav scroll, hamburger, reveal animations,
            counter animation, product/project filters,
            EmailJS form submission, localStorage save
   ============================================================ */

// ── NAV SCROLL BEHAVIOUR ──────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);

  // Active nav highlight
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });


// ── HAMBURGER / MOBILE MENU ───────────────────────────────────
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobileMenu');

function toggleMenu() {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
}
function closeMenu() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', toggleMenu);
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));


// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.10 });

document.querySelectorAll('.reveal, .reveal-l, .reveal-r')
  .forEach(el => revealObs.observe(el));


// ── COUNTER ANIMATION ─────────────────────────────────────────
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el     = e.target;
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '+';
    let   cur    = 0;
    const step   = Math.max(1, Math.ceil(target / 55));

    const tick = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = cur.toLocaleString() + suffix;
      if (cur >= target) clearInterval(tick);
    }, 22);

    counterObs.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));


// ── PRODUCT FILTER ────────────────────────────────────────────
function filterProds(btn, cat) {
  document.querySelectorAll('.p-filt').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.prod-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
  });
}


// ── PROJECT FILTER ────────────────────────────────────────────
function filterProj(btn, cat) {
  document.querySelectorAll('.proj-filt').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.proj-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.pcat === cat) ? '' : 'none';
  });
}


// ── EMAILJS FORM SUBMISSION ───────────────────────────────────
/*
  SETUP STEPS:
  ────────────────────────────────────────────────────────────
  1. Go to https://emailjs.com → Create free account
  2. Add Email Service (Gmail) → copy SERVICE_ID
  3. Create Email Template with these variables:
       {{from_name}}, {{from_email}}, {{from_phone}},
       {{company}}, {{service}}, {{message}}, {{to_name}}
  4. Copy TEMPLATE_ID and PUBLIC_KEY
  5. Replace the three YOUR_... strings below:
  ────────────────────────────────────────────────────────────
*/
const EMAILJS_PUBLIC_KEY  = 'j6yyoxAzFi6HkzPlG';
const EMAILJS_SERVICE_ID  = 'service_m9fs1el';
const EMAILJS_TEMPLATE_ID = 'template_zuveuhk';

// Initialise EmailJS
if (typeof emailjs !== 'undefined') {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

async function sendEnquiry(e) {
  e.preventDefault();

  const form      = document.getElementById('enquiryForm');
  const btn       = document.getElementById('submitBtn');
  const msgEl     = document.getElementById('formMsg');

  btn.disabled    = true;
  btn.textContent = 'Sending…';
  msgEl.style.display = 'none';
  msgEl.className = 'form-msg';

  const params = {
    from_name  : form.from_name.value.trim(),
    from_email : form.from_email.value.trim(),
    from_phone : form.from_phone.value.trim() || 'Not provided',
    company    : form.company.value.trim()    || 'Not provided',
    service    : form.service.value,
    message    : form.message.value.trim(),
    to_name    : 'Ezio Automation Team',
  };

  try {
    if (typeof emailjs === 'undefined') throw new Error('EmailJS not loaded');
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);

    // ── Save to localStorage for admin.html dashboard ──
    const store = JSON.parse(localStorage.getItem('ezio_enquiries') || '[]');
    store.push({
      id        : 'ENQ-' + String(store.length + 1).padStart(3, '0'),
      timestamp : new Date().toISOString(),
      name      : params.from_name,
      email     : params.from_email,
      phone     : params.from_phone,
      company   : params.company,
      service   : params.service,
      message   : params.message,
      status    : 'new',
    });
    localStorage.setItem('ezio_enquiries', JSON.stringify(store));

    msgEl.className     = 'form-msg success';
    msgEl.textContent   = '✓  Enquiry sent! We will get back to you within 24 hours.';
    msgEl.style.display = 'block';
    form.reset();

  } catch (err) {
    msgEl.className     = 'form-msg error';
    msgEl.textContent   = '✗  Could not send. Please email or WhatsApp us directly.';
    msgEl.style.display = 'block';
    console.error('EmailJS error:', err);
  }

  btn.disabled    = false;
  btn.textContent = 'Send Enquiry';
}