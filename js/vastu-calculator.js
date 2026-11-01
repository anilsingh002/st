/**
 * Interactive Vastu Dosha & Energy Health Calculator Engine (High Contrast Edition)
 * Vaastu by Shivani Tiwari
 */

const QUIZ_QUESTIONS = [
  {
    id: "propertyType",
    question: "1. What is the nature of your property?",
    description: "Spatial energy dynamics differ across dwelling and commercial setups.",
    options: [
      { label: "Apartment / High-rise Flat", icon: "🏢", value: "apartment", weight: 0 },
      { label: "Independent Villa / Kothi / Row House", icon: "🏡", value: "villa", weight: 0 },
      { label: "Commercial Office / Corporate Cabin", icon: "💼", value: "office", weight: 0 },
      { label: "Industrial Factory / Warehouse", icon: "🏭", value: "factory", weight: 0 }
    ]
  },
  {
    id: "entrance",
    question: "2. Direction of your Main Entrance (Facing when standing inside looking out)?",
    description: "The main door is the Prana (Cosmic Life Force) portal of any building.",
    options: [
      { label: "North (Kubera / Opportunities)", icon: "🧭", score: 25, status: "auspicious", note: "Highly auspicious for wealth inflow & opportunities." },
      { label: "North-East (Ishanya / Divine Gateway)", icon: "✨", score: 25, status: "auspicious", note: "Maximum spiritual clarity and good fortune." },
      { label: "East (Indra / Social Networking)", icon: "🌅", score: 20, status: "auspicious", note: "Brings strong social and government connections." },
      { label: "North-West (Vayavya / Movement)", icon: "🌬️", score: 12, status: "neutral", note: "Moderate; needs white light and silver energizer." },
      { label: "West (Varuna / Business Profits)", icon: "🪙", score: 15, status: "neutral", note: "Good for business gains if in W3/W4 zones." },
      { label: "South-East (Agneya / Fire Gate)", icon: "🔥", score: 8, status: "dosha", note: "May spark sudden expenditures and stress." },
      { label: "South (Yama / Dharma)", icon: "⚖️", score: 10, status: "neutral", note: "Can be stabilizing if positioned precisely in S3/S4." },
      { label: "South-West (Nairuthi / Pitru)", icon: "⚠️", score: 2, status: "critical", note: "Severe Dosha: causes instability, health drops and delays." }
    ]
  },
  {
    id: "kitchen",
    question: "3. Where is your Cooking Stove / Kitchen located?",
    description: "Agni Tattva (Fire Element) controls cash flow, digestion, and female health.",
    options: [
      { label: "South-East (Agneya - Agni Corner)", icon: "🔥", score: 25, status: "auspicious", note: "The supreme classical location for digestive health and wealth." },
      { label: "North-West (Vayavya - Air Corner)", icon: "🌬️", score: 18, status: "neutral", note: "Second best alternative; ensures steady progress." },
      { label: "East / South (Adjacent zones)", icon: "🌿", score: 15, status: "neutral", note: "Manageable with correct wall color harmonics." },
      { label: "West (Metal Zone)", icon: "🪙", score: 8, status: "dosha", note: "Eats into business profits and returns on capital." },
      { label: "North (Water Zone / Kubera)", icon: "💧", score: 4, status: "critical", note: "Water-Fire clash: burns cash reserves and new projects." },
      { label: "North-East (Ishanya - Divine Zone)", icon: "❌", score: 2, status: "critical", note: "High Dosha: creates family disputes, neurological fatigue." },
      { label: "South-West (Earth Zone)", icon: "⚠️", score: 5, status: "critical", note: "Creates friction in marital bonding and stability." }
    ]
  },
  {
    id: "masterBedroom",
    question: "4. Where is the Master Bedroom (Owner/Earning Member) situated?",
    description: "Prithvi Tattva (Earth Element) grants grounding, leadership, and emotional stability.",
    options: [
      { label: "South-West (Nairuthi - Supreme Grounding)", icon: "👑", score: 20, status: "auspicious", note: "Unshakable authority, heavy restful sleep, and family respect." },
      { label: "South (Yama - Deep Sleep & Rest)", icon: "🛏️", score: 17, status: "auspicious", note: "Great for restful rejuvenation and high prestige." },
      { label: "West (Varuna - Financial Realization)", icon: "💰", score: 15, status: "neutral", note: "Good for business owners seeking revenue compounding." },
      { label: "North-West (Air - Mobility)", icon: "✈️", score: 10, status: "neutral", note: "Acceptable for guests or frequent travelers." },
      { label: "South-East (Fire Corner)", icon: "⚡", score: 6, status: "dosha", note: "Short temper, hypertension, and marital disagreements." },
      { label: "North-East (Ishanya)", icon: "🌀", score: 4, status: "critical", note: "Causes chronic insomnia, overactive mind, and spiritual detachment." }
    ]
  },
  {
    id: "poojaRoom",
    question: "5. Where is your Pooja Mandir / Spiritual Altar located?",
    description: "Ishanya Sthana radiates celestial blessings, serenity, and mental focus.",
    options: [
      { label: "North-East (Ishanya - Divine Abode)", icon: "🪔", score: 15, status: "auspicious", note: "The highest vibration zone for temple and meditation." },
      { label: "North (Kubera - Wealth Blessing)", icon: "🕉️", score: 13, status: "auspicious", note: "Attracts abundance, clarity, and ethical success." },
      { label: "East (Surya - Spiritual Awakening)", icon: "☀️", score: 12, status: "auspicious", note: "Brings wisdom, focus for children, and social grace." },
      { label: "West (Acceptable Alternative)", icon: "📿", score: 8, status: "neutral", note: "Acceptable for certain deities." },
      { label: "South-West (Heavy Earth Zone)", icon: "⚠️", score: 3, status: "dosha", note: "Devotion feels heavy; slows spiritual momentum." },
      { label: "Under Staircase / Beside Toilet Wall", icon: "🚫", score: 0, status: "critical", note: "Major energy pollution; dampens peace and health." }
    ]
  },
  {
    id: "waterPlacement",
    question: "6. Where is your Overhead or Underground Water Tank / Boring?",
    description: "Water controls cash flow, brain health, and the flow of opportunities.",
    options: [
      { label: "Underground Tank in North or North-East", icon: "💧", score: 15, status: "auspicious", note: "Amplifies prosperity, sharp vision, and harmony." },
      { label: "Overhead Tank in South-West / West", icon: "🏗️", score: 15, status: "auspicious", note: "Ideal heavy load on highest elevated quadrant." },
      { label: "Overhead Tank in North-East (Ishanya)", icon: "❌", score: 2, status: "critical", note: "Heavy load in Ishanya causes severe mental stress & financial blockages." },
      { label: "Underground Tank / Well in South-West", icon: "⚠️", score: 1, status: "critical", note: "Creates severe instability, health drain for the family head." },
      { label: "Water Tank in South-East (Fire zone)", icon: "🔥", score: 3, status: "critical", note: "Fire-water confrontation triggers sudden financial expenses." },
      { label: "I am in an apartment (Centralized Building Water)", icon: "🏢", score: 12, status: "neutral", note: "Neutral baseline; apartment layout takes precedence." }
    ]
  }
];

let currentQuizStep = 0;
let quizAnswers = {};

function initVastuCalculator() {
  const container = document.getElementById('vastu-quiz-container');
  if (!container) return;

  renderQuizStep(0);
}

function renderQuizStep(stepIndex) {
  const container = document.getElementById('vastu-quiz-container');
  if (!container) return;

  currentQuizStep = stepIndex;
  const q = QUIZ_QUESTIONS[stepIndex];
  const total = QUIZ_QUESTIONS.length;
  const progressPercent = Math.round(((stepIndex) / total) * 100);

  container.innerHTML = `
    <div class="animate-fadeIn">
      <!-- High Contrast Progress Bar -->
      <div class="mb-4">
        <div class="flex justify-between text-xs text-slate-800 mb-1.5 font-bold">
          <span class="text-amber-900 font-extrabold">Step ${stepIndex + 1} of ${total}</span>
          <span>${progressPercent}% Complete</span>
        </div>
        <div class="w-full bg-stone-300 rounded-full h-2.5 overflow-hidden border border-amber-900/20">
          <div class="bg-gradient-to-r from-amber-600 to-amber-700 h-2.5 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
        </div>
      </div>

      <!-- Question Title -->
      <h3 class="text-lg sm:text-xl font-black font-serif-luxury text-slate-950 mb-1 leading-snug">${q.question}</h3>
      <p class="text-xs text-slate-800 font-bold mb-4">${q.description}</p>

      <!-- Options Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
        ${q.options.map((opt, idx) => `
          <button type="button" onclick="selectQuizAnswer('${q.id}', ${idx})" 
            class="quiz-option-btn text-left p-3 rounded-xl border-2 border-stone-300 bg-white hover:bg-amber-100 hover:border-amber-700 transition-all flex items-start gap-3 group shadow-sm hover:shadow">
            <span class="text-xl group-hover:scale-110 transition-transform shrink-0">${opt.icon}</span>
            <div>
              <div class="text-xs sm:text-sm font-black text-slate-950 group-hover:text-amber-950 transition-colors">${opt.label}</div>
              ${opt.note ? `<div class="text-[11px] text-slate-900 font-bold mt-0.5 line-clamp-1">${opt.note}</div>` : ''}
            </div>
          </button>
        `).join('')}
      </div>

      <!-- Navigation Footer -->
      <div class="flex items-center justify-between pt-3 border-t border-amber-900/20 text-xs">
        ${stepIndex > 0 ? `
          <button type="button" onclick="renderQuizStep(${stepIndex - 1})" class="text-slate-900 hover:text-black flex items-center gap-1 py-1.5 px-3 rounded-lg border-2 border-stone-300 bg-white font-extrabold shadow-sm">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg>
            Back
          </button>
        ` : '<div></div>'}
        <span class="text-slate-950 font-black italic text-xs">Scientific Assessment by Shivani Tiwari</span>
      </div>
    </div>
  `;
}

function selectQuizAnswer(questionId, optionIndex) {
  const q = QUIZ_QUESTIONS[currentQuizStep];
  quizAnswers[questionId] = q.options[optionIndex];

  if (currentQuizStep + 1 < QUIZ_QUESTIONS.length) {
    renderQuizStep(currentQuizStep + 1);
  } else {
    calculateAndShowResult();
  }
}

function calculateAndShowResult() {
  const container = document.getElementById('vastu-quiz-container');
  if (!container) return;

  let totalScore = 0;
  let criticalDoshas = [];
  let goodPlacements = [];

  ["entrance", "kitchen", "masterBedroom", "poojaRoom", "waterPlacement"].forEach(key => {
    const ans = quizAnswers[key];
    if (ans) {
      totalScore += ans.score || 0;
      if (ans.status === "critical" || ans.status === "dosha") {
        criticalDoshas.push({ area: key, label: ans.label, note: ans.note });
      } else if (ans.status === "auspicious") {
        goodPlacements.push({ area: key, label: ans.label, note: ans.note });
      }
    }
  });

  const finalPercentage = Math.min(100, Math.max(10, totalScore));

  let ratingTitle = "";
  let ratingColor = "";
  let ratingBadge = "";
  let actionAdvice = "";

  if (finalPercentage >= 80) {
    ratingTitle = "Highly Auspicious Energy Flow (Sthira Lakshmi)";
    ratingColor = "text-emerald-900";
    ratingBadge = "bg-emerald-100 border-emerald-400 text-emerald-950 font-black";
    actionAdvice = "Your property possesses strong natural cosmic balance. Fine-tuning with subtle energetic harmonizers will accelerate your wealth and family serenity.";
  } else if (finalPercentage >= 60) {
    ratingTitle = "Moderate Vastu Harmony (Madhyam Bal)";
    ratingColor = "text-amber-900";
    ratingBadge = "bg-amber-100 border-amber-400 text-amber-950 font-black";
    actionAdvice = "Noticeable energy leaks detected. Certain non-demolition color and metal tape remedies are recommended to prevent unnecessary expenses and fatigue.";
  } else {
    ratingTitle = "Significant Vastu Dosha Detected (Chikitsa Required)";
    ratingColor = "text-rose-950";
    ratingBadge = "bg-rose-100 border-rose-400 text-rose-950 font-black";
    actionAdvice = "Critical directional clashes are causing friction in cash flow, health, or stability. Immediate non-demolition remediation by Shivani Tiwari is strongly recommended.";
  }

  const waText = encodeURIComponent(`Hello Shivani Tiwari Ji, I just completed the Vastu Energy Assessment on your website.
My Property Type: ${quizAnswers.propertyType?.label || 'Residential'}
Vastu Energy Score: ${finalPercentage}% (${ratingTitle})
Critical Areas: ${criticalDoshas.map(d => d.label).join(', ') || 'None'}
I would like to consult with you for non-demolition remedies.`);

  container.innerHTML = `
    <div class="animate-fadeIn">
      <!-- Score Banner -->
      <div class="text-center p-5 rounded-2xl bg-amber-100/80 border-2 border-amber-400 mb-4">
        <div class="inline-block px-3 py-0.5 rounded-full text-[10px] uppercase tracking-wider mb-2 border ${ratingBadge}">
          Energy Diagnostic Result
        </div>
        <div class="flex items-center justify-center gap-3 my-1">
          <div class="text-4xl sm:text-5xl font-black font-serif-luxury ${ratingColor}">
            ${finalPercentage}%
          </div>
          <div class="text-left">
            <span class="text-[10px] uppercase tracking-wider text-slate-950 block font-black">Vastu Vitality</span>
            <span class="text-base font-black text-slate-950 leading-tight block">Harmony Score</span>
          </div>
        </div>
        <h4 class="text-sm sm:text-base font-black ${ratingColor} mb-1">${ratingTitle}</h4>
        <p class="text-xs text-slate-950 font-bold max-w-lg mx-auto leading-relaxed">${actionAdvice}</p>
      </div>

      <!-- 2-Column Findings -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        <!-- Doshas Flagged -->
        <div class="p-3.5 rounded-xl bg-rose-100/80 border-2 border-rose-300">
          <h5 class="text-[11px] font-black uppercase tracking-wider text-rose-950 mb-2 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-rose-700" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
            Critical Doshas Requiring Balancing (${criticalDoshas.length})
          </h5>
          ${criticalDoshas.length > 0 ? `
            <ul class="text-xs text-slate-950 space-y-1.5">
              ${criticalDoshas.map(d => `
                <li class="p-2 rounded-lg bg-white border border-rose-300">
                  <span class="font-black text-rose-950">${d.label}</span>
                  <p class="text-[10px] text-slate-950 font-bold mt-0.5">${d.note}</p>
                </li>
              `).join('')}
            </ul>
          ` : `
            <p class="text-xs text-slate-950 font-black italic">No severe directional conflicts detected!</p>
          `}
        </div>

        <!-- Positive Zones -->
        <div class="p-3.5 rounded-xl bg-emerald-100/80 border-2 border-emerald-300">
          <h5 class="text-[11px] font-black uppercase tracking-wider text-emerald-950 mb-2 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-emerald-700" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            Supportive Planetary Zones (${goodPlacements.length})
          </h5>
          <ul class="text-xs text-slate-950 space-y-1.5">
            ${goodPlacements.map(g => `
              <li class="p-2 rounded-lg bg-white border border-emerald-300">
                <span class="font-black text-emerald-950">${g.label}</span>
                <p class="text-[10px] text-slate-950 font-bold mt-0.5">${g.note}</p>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <!-- Next Steps & Direct WhatsApp Review -->
      <div class="p-4 rounded-xl bg-white border-2 border-amber-400 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <h5 class="text-xs sm:text-sm font-black text-slate-950 mb-0.5">Get Shivani Tiwari's Non-Demolition Remedial Plan</h5>
          <p class="text-[11px] text-slate-950 font-bold">Share your score directly with Shivani Tiwari on WhatsApp for a preliminary roadmap.</p>
        </div>
        <div class="flex flex-wrap gap-2 w-full sm:w-auto">
          <a href="https://wa.me/919811223344?text=${waText}" target="_blank" rel="noopener noreferrer" 
            class="w-full sm:w-auto px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm">
            <span>WhatsApp Score to Shivani</span>
          </a>
          <button type="button" onclick="renderQuizStep(0)" class="w-full sm:w-auto px-3 py-2 rounded-lg border-2 border-stone-300 hover:border-stone-500 text-slate-900 font-black text-xs transition-all bg-slate-100">
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  `;
}

window.initVastuCalculator = initVastuCalculator;
window.renderQuizStep = renderQuizStep;
window.selectQuizAnswer = selectQuizAnswer;
