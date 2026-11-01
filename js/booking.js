/**
 * Consultation Booking & Pricing Engine (Light & Compact Edition)
 * Vaastu by Shivani Tiwari
 */

const PRICING_DATA = {
  inr: {
    symbol: "₹",
    express: "5,100",
    residential: "11,000",
    commercial: "25,000",
    onsite: "35,000+"
  },
  usd: {
    symbol: "$",
    express: "99",
    residential: "199",
    commercial: "449",
    onsite: "599+"
  }
};

let currentCurrency = 'inr';

function setCurrency(curr) {
  currentCurrency = curr;
  const p = PRICING_DATA[curr];
  
  // Update UI toggles
  document.querySelectorAll('.curr-btn').forEach(btn => {
    if (btn.getAttribute('data-curr') === curr) {
      btn.className = 'curr-btn px-2.5 py-1 rounded-full bg-amber-800 text-white font-black text-xs transition-all shadow-sm';
    } else {
      btn.className = 'curr-btn px-2.5 py-1 rounded-full text-slate-950 hover:text-amber-900 bg-transparent font-black text-xs transition-all';
    }
  });

  // Update price values
  const expressEl = document.getElementById('price-express');
  const resEl = document.getElementById('price-residential');
  const comEl = document.getElementById('price-commercial');
  const onsiteEl = document.getElementById('price-onsite');

  if (expressEl) expressEl.textContent = `${p.symbol}${p.express}`;
  if (resEl) resEl.textContent = `${p.symbol}${p.residential}`;
  if (comEl) comEl.textContent = `${p.symbol}${p.commercial}`;
  if (onsiteEl) onsiteEl.textContent = `${p.symbol}${p.onsite}`;
}

function openBookingModal(defaultService = "General Consultation") {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  const serviceSelect = document.getElementById('book-service-select');
  if (serviceSelect && defaultService) {
    for (let i = 0; i < serviceSelect.options.length; i++) {
      if (serviceSelect.options[i].text.toLowerCase().includes(defaultService.toLowerCase())) {
        serviceSelect.selectedIndex = i;
        break;
      }
    }
  }

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function handleBookingSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const name = form.name?.value || '';
  const phone = form.phone?.value || '';
  const email = form.email?.value || '';
  const service = form.service?.value || 'Comprehensive Vastu Consultation';
  const propertyType = form.propertyType?.value || 'Residential';
  const mode = form.mode?.value || 'Zoom / Video Call';
  const date = form.preferredDate?.value || 'Earliest Available';
  const notes = form.notes?.value || 'None provided';

  const waMessage = `*New Consultation Request - VaastubyShivaniTiwari*
*Client Name:* ${name}
*Phone / WhatsApp:* ${phone}
*Email:* ${email}
*Selected Package:* ${service}
*Property Type:* ${propertyType}
*Preferred Mode:* ${mode}
*Preferred Date:* ${date}
*Specific Queries:* ${notes}

_Sent from VaastubyShivaniTiwari.in_`;

  const waUrl = `https://wa.me/919811223344?text=${encodeURIComponent(waMessage)}`;

  // Show confirmation alert in clean light theme
  const modalBody = document.getElementById('modal-form-content');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="text-center py-6 animate-fadeIn">
        <div class="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-700 flex items-center justify-center mx-auto mb-3">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 class="text-xl font-black font-serif-luxury text-slate-950 mb-1">Request Received!</h3>
        <p class="text-xs text-slate-900 font-semibold max-w-sm mx-auto mb-4">
          Thank you, <strong class="text-amber-900 font-black">${name}</strong>. Shivani Tiwari's team will contact you within 2 hours to confirm your consultation schedule.
        </p>

        <div class="p-3.5 rounded-xl bg-amber-50 border-2 border-amber-300 text-xs text-left max-w-sm mx-auto mb-4 space-y-1.5 font-bold">
          <div class="flex justify-between"><span class="text-slate-950 font-black">Ref ID:</span><span class="font-mono text-amber-900 font-black">#VST-${Math.floor(100000 + Math.random() * 900000)}</span></div>
          <div class="flex justify-between"><span class="text-slate-950 font-black">Service:</span><span class="text-slate-950 font-black">${service}</span></div>
          <div class="flex justify-between"><span class="text-slate-950 font-black">Mode:</span><span class="text-slate-950 font-black">${mode}</span></div>
        </div>

        <div class="flex flex-col sm:flex-row gap-2 justify-center">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" 
            class="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md">
            <span>Connect on WhatsApp Now</span>
          </a>
          <button type="button" onclick="closeBookingModal(); location.reload();" class="px-5 py-2.5 rounded-xl border-2 border-stone-400 text-slate-950 hover:bg-stone-100 text-xs font-black">
            Close
          </button>
        </div>
      </div>
    `;
  }
}

function handleFileSelect(input) {
  const display = document.getElementById('file-upload-status');
  if (input.files && input.files[0] && display) {
    display.textContent = `Attached: ${input.files[0].name} (${(input.files[0].size / 1024 / 1024).toFixed(2)} MB)`;
    display.classList.remove('hidden');
    display.classList.add('text-amber-800');
  }
}

window.setCurrency = setCurrency;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.handleBookingSubmit = handleBookingSubmit;
window.handleFileSelect = handleFileSelect;
