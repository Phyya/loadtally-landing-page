// Hero text carousel
const messages = [
  "Stop Chasing Paperwork. Start Getting Paid Faster.",
  "Track Loads & Tickets Digitally.",
  "Get Real-Time Driver Updates.",
  "Auto-Generate Job Reports for Faster Billing."
];
let index = 0;
const heroText = document.getElementById('heroText');

function showNextMessage() {
  heroText.classList.remove('show');
  setTimeout(() => {
    heroText.textContent = messages[index];
    heroText.classList.add('show');
    index = (index + 1) % messages.length;
  }, 500);
}

// Initialize carousel
heroText.classList.add('show');
setInterval(showNextMessage, 4000);


const demoDateInput = document.getElementById('demoDate');
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
demoDateInput.setAttribute('min', today);


// Force native picker to open when clicking anywhere on input container
document.getElementById('demoDateField').addEventListener('click', () => {
  document.getElementById('demoDate').showPicker?.(); // showPicker() works in modern browsers
});

document.getElementById('demoTimeField').addEventListener('click', () => {
  document.getElementById('demoTime').showPicker?.();
});
const phoneInput = document.getElementById('phone');

// Only allow numbers while typing
phoneInput.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, '');
});
// Form submission
const form = document.getElementById('loadTallyForm');
                  const thankYou = document.getElementById('thankYouMessage');

                  // Date/time picker fix
                  document.getElementById('demoDateField').addEventListener('click', () => {
                    document.getElementById('demoDate').showPicker?.();
                  });
                  document.getElementById('demoTimeField').addEventListener('click', () => {
                    document.getElementById('demoTime').showPicker?.();
                  });

                  form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData.entries());

                    try {
                      // Replace with your actual webhook URL
                      const response = await fetch('https://phyya.app.n8n.cloud/webhook/load-tally/book-demo', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                      });

                      if(response.ok){
                        form.style.display = 'none';       // hide form
                        thankYou.style.display = 'block';   // show thank you
                      } else {
                        alert("Oops! Something went wrong. Try again.");
                      }
                    } catch(err){
                      console.error(err);
                      alert("Network error. Please try again.");
                    }
                  });