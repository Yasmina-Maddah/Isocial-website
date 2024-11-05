document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute('href'));
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const learnMoreBtn = document.getElementById('learnMoreBtn');
  learnMoreBtn.addEventListener('click', () => {
    const contactPopup = document.createElement('div');
    contactPopup.classList.add('contact-popup');
    contactPopup.innerHTML = `
      <div class="popup-content">
        <span id="closePopup" class="close-btn">&times;</span>
        <h3>Contact Us</h3>
        <p>Get in touch via <a href="https://wa.me/96171292538">WhatsApp</a> or <a href="#">Instagram</a>.</p>
      </div>`;
    document.body.appendChild(contactPopup);

    document.getElementById('closePopup').addEventListener('click', () => {
        document.body.removeChild(contactPopup);
      });
});
  