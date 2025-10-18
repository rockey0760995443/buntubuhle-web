// Simple JS for navigation toggle and small interactions
document.addEventListener('DOMContentLoaded', function(){
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const nav = document.getElementById('mainNav');
  const btn = document.getElementById('navToggle');
  btn.addEventListener('click', ()=>{
    nav.classList.toggle('show');
  });

  // Basic form validation to ensure fields are filled before mailto is triggered
  const form = document.getElementById('frmContact');
  form.addEventListener('submit', function(e){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      e.preventDefault();
      alert('Please complete all fields before sending.');
      return false;
    }
    // For mailto: we construct a subject and body to help the recipient.
    const subject = encodeURIComponent('Website Contact from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    // Update form action to include subject and body
    form.action = 'mailto:buntubuhleva@gmail.com' + '?subject=' + subject + '&body=' + body;
    // Allow default behavior (opens email client)
    return true;
  });
});


// ====== Hamburger Menu Toggle ======
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
});
