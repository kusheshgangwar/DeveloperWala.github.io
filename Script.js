document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form submission handler
document.querySelector('#contact form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset(); // Reset the form after submission
});

// Typing animation for the header
const text = "DeveloperWala";
const el = document.getElementById("typing-text");
let idx = 0;
el.textContent = "";
function type() {
  if (idx <= text.length) {
    el.textContent = text.slice(0, idx) + (idx < text.length ? "|" : "");
    idx++;
    setTimeout(type, 120);
  } else {
    el.textContent = text; // Remove cursor at end
  }
}
type();

// Dark/Light mode toggle
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
