 // Smooth scroll for nav links
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
