document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this[0].value;
  const email = this[1].value;
  const message = this[2].value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  this.reset();
});
