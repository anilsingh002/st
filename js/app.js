/**
 * Main Application Orchestrator (High Contrast Edition)
 * Vaastu by Shivani Tiwari
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.initVastuCompass) window.initVastuCompass();
  if (window.initVastuCalculator) window.initVastuCalculator();
  if (window.initRoomPlanner) window.initRoomPlanner();

  // Scroll Header Effect
  const navbar = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('bg-[#E8E2D5]/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-amber-900/25');
      navbar?.classList.remove('bg-transparent');
    } else {
      navbar?.classList.remove('bg-[#E8E2D5]/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-amber-900/25');
      navbar?.classList.add('bg-transparent');
    }

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
      if (window.scrollY > 350) {
        backToTop.classList.remove('opacity-0', 'pointer-events-none');
        backToTop.classList.add('opacity-100');
      } else {
        backToTop.classList.add('opacity-0', 'pointer-events-none');
        backToTop.classList.remove('opacity-100');
      }
    }
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-drawer');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });
  }

  if (closeDrawerBtn && mobileMenuDrawer) {
    closeDrawerBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.add('hidden');
    });
  }

  document.querySelectorAll('.drawer-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuDrawer?.classList.add('hidden');
    });
  });
});

// FAQ Accordion Handler
function toggleFaq(index) {
  const answer = document.getElementById(`faq-ans-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  if (!answer) return;

  const isHidden = answer.classList.contains('hidden');
  
  document.querySelectorAll('.faq-answer').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate-180'));

  if (isHidden) {
    answer.classList.remove('hidden');
    icon?.classList.add('rotate-180');
  }
}

// Testimonials Category Filter
function filterTestimonials(category) {
  document.querySelectorAll('.testimonial-tab').forEach(tab => {
    if (tab.getAttribute('data-cat') === category) {
      tab.classList.add('bg-amber-600', 'text-white', 'font-black', 'border-amber-600');
      tab.classList.remove('text-slate-900', 'border-stone-300', 'bg-white');
    } else {
      tab.classList.remove('bg-amber-600', 'text-white', 'font-black', 'border-amber-600');
      tab.classList.add('text-slate-900', 'border-stone-300', 'bg-white');
    }
  });

  document.querySelectorAll('.testimonial-card').forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Remedy Showcase Switcher
function showRemedyTab(tabId) {
  document.querySelectorAll('.remedy-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('border-amber-700', 'bg-amber-100', 'text-amber-950', 'font-black');
      btn.classList.remove('border-stone-300', 'text-slate-900', 'bg-white');
    } else {
      btn.classList.remove('border-amber-700', 'bg-amber-100', 'text-amber-950', 'font-black');
      btn.classList.add('border-stone-300', 'text-slate-900', 'bg-white');
    }
  });

  document.querySelectorAll('.remedy-pane').forEach(pane => {
    if (pane.id === `remedy-pane-${tabId}`) {
      pane.classList.remove('hidden');
    } else {
      pane.classList.add('hidden');
    }
  });
}

// Quick Knowledge Article Reader Modal
const ARTICLES_DATA = {
  mainDoor: {
    title: "Maha Dwara Vastu: The 32 Energy Padas of Main Entrance",
    category: "Vastu Science",
    readTime: "4 min read",
    content: `
      <p class="mb-2">In Classical Vedic Vastu Shastra, the exterior boundary perimeter is divided into 32 angular sectors called <strong>Padas</strong> (Energy Portals). While popular belief considers entire directions as simply 'good' or 'bad', the exact degree pada determines whether an entrance invites boundless wealth or uncontrollable loss.</p>
      <h4 class="text-sm font-black text-amber-950 mt-3 mb-1.5">The Golden Entrance Portals:</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-3 text-slate-900 font-semibold">
        <li><strong>N3 (Mukhya) & N4 (Bhallat):</strong> The gateway of limitless financial opportunities and abundance. Attracts high-paying clients, lucrative career leaps, and family honor.</li>
        <li><strong>E3 (Jayanta) & E4 (Indra):</strong> Grants exceptional social status, government favor, influence over authorities, and charismatic presence.</li>
        <li><strong>W3 (Sugriva) & W4 (Pushpadanta):</strong> Outstanding for business owners, wealth compounding, stock investments, and fulfillment of deep aspirations.</li>
      </ul>
      <h4 class="text-sm font-black text-amber-950 mt-3 mb-1.5">What if Your Door is in an Inauspicious Pada?</h4>
      <p class="mb-2 font-medium">Shivani Tiwari specializes in <strong>100% Non-Demolition Energy Containment</strong>. By installing calibrated metal strips (Brass, Copper, Aluminum, or Lead) flush with the floor threshold, we block the negative vibrational radiation without breaking walls or altering the doorframe.</p>
    `
  },
  kitchenCures: {
    title: "Kitchen in North or North-East? Top Non-Demolition Remedies",
    category: "Elemental Balancing",
    readTime: "5 min read",
    content: `
      <p class="mb-2">The kitchen embodies <strong>Agni Tattva (Fire Element)</strong>. When placed in the North (Water element ruled by Kubera) or North-East (Ishanya, divine water/space), an elemental clash ignites: <em>Water douses Fire, while Fire boils away Water</em>.</p>
      <h4 class="text-sm font-black text-amber-950 mt-3 mb-1.5">Typical Symptoms of North / North-East Kitchens:</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-3 text-slate-900 font-semibold">
        <li>Cash flows in, but evaporates before savings can accumulate.</li>
        <li>Frequent headaches, neurological fatigue, and irritability among family members.</li>
        <li>Women in the household feel perpetually stressed and emotionally ungrounded.</li>
      </ul>
      <h4 class="text-sm font-black text-amber-950 mt-3 mb-1.5">The Scientific Non-Demolition Cure:</h4>
      <p class="mb-2 font-medium">Do not break or dismantle your modular kitchen! We apply the <strong>Theory of Five Elements (Panch Tattva Cycle of Creation)</strong>:</p>
      <ul class="list-disc pl-5 space-y-1.5 mb-3 text-slate-900 font-semibold">
        <li>For a North Kitchen: Install a <strong>Baroda Green Marble Slab</strong> under the cooking burner. Green (Wood/Air element) absorbs water and generates fire, safely buffering the opposing energies.</li>
        <li>For a North-East Kitchen: Place a <strong>Light Yellow Jaisalmer Stone Slab</strong> under the gas stove and activate a consecrated Brass Helix to insulate the divine Ishanya zone.</li>
      </ul>
    `
  },
  bedStability: {
    title: "South-West Master Bedroom: Grounding Your Authority & Relationship",
    category: "Relationship & Sleep",
    readTime: "4 min read",
    content: `
      <p class="mb-2">South-West (Nairuthi) is the kingdom of <strong>Prithvi Tattva (Earth Element)</strong>, governed by Pitrus (ancestors) and Nirriti. Earth provides gravitas, weight, emotional stability, and the capacity to lead.</p>
      <h4 class="text-sm font-black text-amber-950 mt-3 mb-1.5">Why the Family Head Belongs in the South-West:</h4>
      <p class="mb-2 font-medium">When the head of the house sleeps in the South-West, their words carry weight, decisions are respected, and marital bonding remains resilient through crises. It also grants deep, uninterrupted sleep devoid of anxious tossing and turning.</p>
      <h4 class="text-sm font-black text-amber-950 mt-3 mb-1.5">Essential South-West Guidelines:</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-3 text-slate-900 font-semibold">
        <li>Ensure your head points toward the <strong>South</strong> or <strong>East</strong> while sleeping to align with the Earth's geomagnetic lines.</li>
        <li>Never place a mirror directly reflecting the bed. In Vastu, a reflecting mirror creates an energetic third presence that triggers marital discord.</li>
        <li>Keep heavy wardrobes and safes on the South or West walls of this room to anchor the energy.</li>
      </ul>
    `
  }
};

function openArticleModal(articleKey) {
  const data = ARTICLES_DATA[articleKey];
  const modal = document.getElementById('article-modal');
  const titleEl = document.getElementById('article-title');
  const metaEl = document.getElementById('article-meta');
  const contentEl = document.getElementById('article-content');

  if (!data || !modal || !titleEl || !contentEl) return;

  titleEl.textContent = data.title;
  metaEl.innerHTML = `<span class="text-amber-900 font-black">${data.category}</span> • <span class="text-slate-950 font-black">${data.readTime}</span>`;
  contentEl.innerHTML = data.content;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeArticleModal() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

window.toggleFaq = toggleFaq;
window.filterTestimonials = filterTestimonials;
window.showRemedyTab = showRemedyTab;
window.openArticleModal = openArticleModal;
window.closeArticleModal = closeArticleModal;
