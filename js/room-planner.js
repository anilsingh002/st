/**
 * Interactive Floor Plan Zone Checker & Room Placement Simulator (High Contrast Edition)
 * Vaastu by Shivani Tiwari
 */

const ROOM_VASTU_RULES = {
  entrance: {
    name: "Main Entrance (Maha Dwara)",
    description: "The primary mouth of prana energy feeding the entire building.",
    ratings: {
      N: { status: "auspicious", score: 98, badge: "Highly Auspicious (Kuber Dwara)", text: "Attracts massive wealth opportunities, career advancement, and high liquidity.", cure: "Keep threshold well lit with warm golden light, brass swastika." },
      NE: { status: "auspicious", score: 96, badge: "Highly Auspicious (Ishanya Dwara)", text: "Infuses divine clarity, spiritual growth, intelligence and family peace.", cure: "Zero clutter, marble threshold, avoid shoe racks here." },
      E: { status: "auspicious", score: 92, badge: "Highly Auspicious (Indra Dwara)", text: "Exceptional for government contacts, social networking and societal fame.", cure: "Brass Surya emblem at eye level on door." },
      SE: { status: "dosha", score: 45, badge: "Dosha (Agneya Dwara)", text: "Triggers sudden disputes, fire hazards, and aggressive cash outflows.", cure: "Non-demolition copper strip embedded under threshold + copper pyramid." },
      S: { status: "neutral", score: 65, badge: "Neutral / Depends on Pada", text: "Favorable if strictly located in Vitatha (S3) or Grihakshata (S4) padas.", cure: "Use warm red/brown floor mat, brass threshold bar." },
      SW: { status: "critical", score: 15, badge: "Severe Dosha (Nairuthi Dwara)", text: "Creates instability, major debt cycles, health vulnerabilities for family head.", cure: "Lead metal strip in floor + energized brass Rahu/Nairuthi pyramid." },
      W: { status: "auspicious", score: 85, badge: "Auspicious in W3/W4 (Varuna)", text: "Brings strong business profits, high returns on investments and fulfillment.", cure: "White marble threshold, energized zinc strips." },
      NW: { status: "neutral", score: 68, badge: "Neutral (Vayavya Dwara)", text: "Fosters frequent travel, movement, support from banking allies.", cure: "White/silver door paint, white crystal wind chime." }
    }
  },
  kitchen: {
    name: "Kitchen & Cooking Stove (Agni Sthana)",
    description: "Governs internal metabolic fire, cash flow, and digestive health.",
    ratings: {
      N: { status: "critical", score: 20, badge: "Severe Dosha (Water-Fire Clash)", text: "Direct water-fire clash destroys business opportunities and burns cash reserves.", cure: "Place a green Baroda marble slab beneath the gas stove + green tape border." },
      NE: { status: "critical", score: 10, badge: "Critical Dosha (Ishanya Agni)", text: "Severely affects mental peace, creates nervous exhaustion and constant conflict.", cure: "Light yellow stone slab under burner, brass helix and crystal energy balancing." },
      E: { status: "neutral", score: 72, badge: "Acceptable (Vayu supports Agni)", text: "Wood/Air element supports fire. Promotes healthy digestion.", cure: "Green kitchen platform, keep burner away from sink." },
      SE: { status: "auspicious", score: 100, badge: "Ideal Classical Position (Agneya)", text: "Maximum cash flow, prosperity, robust vitality, and harmonious family health.", cure: "Natural perfection. Maintain clean cooking burners facing East." },
      S: { status: "neutral", score: 75, badge: "Good (Fire extension)", text: "Supports energetic momentum and prestige.", cure: "Warm terracotta backsplash tiles." },
      SW: { status: "dosha", score: 35, badge: "Dosha (Earth scorched by Fire)", text: "Disturbs relationship stability, creates domineering tension.", cure: "Yellow jaisalmer stone base under stove + lead wire containment." },
      W: { status: "neutral", score: 60, badge: "Moderate", text: "Burns profits if unchecked. Needs metal balancing.", cure: "Grey or white granite slab under cooking stove." },
      NW: { status: "auspicious", score: 85, badge: "Second Best Alternative (Vayavya)", text: "Air nourishes fire gently. Smooth operations and welcoming hospitality.", cure: "Cream or off-white marble counter." }
    }
  },
  masterBed: {
    name: "Master Bedroom (Head of Family)",
    description: "Controls leadership grounding, marital stability, and restful recuperation.",
    ratings: {
      N: { status: "neutral", score: 65, badge: "Acceptable for Young Professionals", text: "Active wealth thinking; may cause restless sleep for elder family heads.", cure: "Sleep with head towards South, avoid mirrors facing bed." },
      NE: { status: "critical", score: 25, badge: "Severe Dosha (Detachment Zone)", text: "Causes chronic insomnia, headache, marital coldness, and spiritual detachment.", cure: "Shift bedroom if possible; else use warm yellow lighting and brass grounding bells." },
      E: { status: "neutral", score: 70, badge: "Good for Students / Elders", text: "Fosters early waking, alertness, and broad social awareness.", cure: "Head facing East or South." },
      SE: { status: "dosha", score: 40, badge: "Dosha (Fire Zone)", text: "Triggers frequent arguments, high blood pressure, and marital impatience.", cure: "Avoid red/pink bedsheets; use soothing pastel green and ivory decor." },
      S: { status: "auspicious", score: 92, badge: "Highly Auspicious (Yama Sthana)", text: "Deep restorative sleep, dignified authority, and physical vitality.", cure: "Solid wooden headboard, warm earthy colors." },
      SW: { status: "auspicious", score: 100, badge: "The Supreme Zone (Nairuthi)", text: "Unquestioned leadership, marital devotion, unwavering stability and longevity.", cure: "Perfect placement! Keep southwest the heaviest quadrant in the home." },
      W: { status: "auspicious", score: 88, badge: "Auspicious for Business Heads", text: "Promotes profitable strategies, goal accomplishment, and sound slumber.", cure: "White/grey accents, silver metallic frames." },
      NW: { status: "neutral", score: 60, badge: "Best for Guests / Daughters", text: "Movement energy. Can cause restlessness if occupied permanently by family head.", cure: "Keep heavy wardrobe in SW corner of this room." }
    }
  },
  pooja: {
    name: "Pooja Room / Spiritual Sanctuary (Mandir)",
    description: "Cosmic receptor for higher consciousness, family serenity, and blessings.",
    ratings: {
      N: { status: "auspicious", score: 92, badge: "Highly Auspicious (Kubera)", text: "Attracts purity, wealth flow, and noble opportunities.", cure: "Use brass idols and white/light blue flowers." },
      NE: { status: "auspicious", score: 100, badge: "Supreme Classical Location (Ishanya)", text: "Direct cosmic alignment with Brahmasthan and divine consciousness.", cure: "Marble altar, zero heavy storage overhead, pure ghee diya facing East." },
      E: { status: "auspicious", score: 90, badge: "Auspicious (Surya Gateway)", text: "Enhances mental clarity, academic wisdom, and righteous prosperity.", cure: "Wood or marble mandir, brass bells." },
      SE: { status: "dosha", score: 38, badge: "Dosha (Agneya Mandir)", text: "Can provoke angry temperaments and impatience during prayer.", cure: "Brass Swastika, place water bowl with fresh flowers daily." },
      S: { status: "dosha", score: 30, badge: "Inauspicious", text: "Not recommended for residential deities.", cure: "Relocate or shield with wooden partitions." },
      SW: { status: "dosha", score: 25, badge: "Dosha (Nairuthi Pitru Zone)", text: "Heavy ancestral zone; unsuitable for Sattvic temple vibrations.", cure: "Relocate mandir to NE/North/East; keep only ancestral pictures in SW." },
      W: { status: "auspicious", score: 82, badge: "Auspicious (Varuna Mandir)", text: "Fosters fulfillment of material and spiritual ambitions.", cure: "Keep idols elevated, facing East." },
      NW: { status: "neutral", score: 65, badge: "Moderate", text: "Acceptable when NE is constrained.", cure: "White marble altar with silver lamps." }
    }
  },
  toilet: {
    name: "Toilet & Commode (Visarjan Sthana)",
    description: "Disposal energy that must be safely contained to avoid draining life forces.",
    ratings: {
      N: { status: "critical", score: 15, badge: "Severe Dosha (Drains Wealth)", text: "Flushes down money, fresh job offers, and client payments continuously.", cure: "Blue color PVC tape or aluminum metal strip around 3 sides of commode base." },
      NE: { status: "critical", score: 5, badge: "Disastrous Vastu Dosha (Ishanya Shauchalaya)", text: "Causes severe mental confusion, chronic health drains, and neurological blockages.", cure: "Shivani Tiwari's specialized non-demolition zinc strip + energized crystal grid." },
      E: { status: "dosha", score: 30, badge: "Severe Dosha (Drains Social Respect)", text: "Weakens social respect, liver vitality, and government relationships.", cure: "Stainless steel strip embedding + green tape border around pot." },
      SE: { status: "dosha", score: 35, badge: "Dosha (Extinguishes Cash Flow)", text: "Drains liquid cash flow, causes recurring medical expenses for women.", cure: "Red tape or copper strip around WC base." },
      S: { status: "neutral", score: 60, badge: "Manageable", text: "Acceptable if towards SSE/SSW padas.", cure: "Copper wire border." },
      SW: { status: "critical", score: 10, badge: "Severe Dosha (Destroys Stability)", text: "Ruptures relationships, destroys professional authority, and bleeds core savings.", cure: "Yellow tape + 3-inch lead metal strip embedded in floor." },
      W: { status: "neutral", score: 58, badge: "Manageable", text: "Can dilute business margins if not sealed.", cure: "White tape or aluminum boundary." },
      NW: { status: "auspicious", score: 88, badge: "Ideal Zone in WNW / SSW (MahaVastu)", text: "Excellent for safe elimination of physical and psychological waste without side effects.", cure: "Ensure good ventilation, sea salt bowl in ceramic container." }
    }
  }
};

let selectedRoom = "entrance";
let selectedDirection = "NE";

function initRoomPlanner() {
  const container = document.getElementById('room-planner-container');
  if (!container) return;

  renderRoomPlanner();
}

function renderRoomPlanner() {
  const container = document.getElementById('room-planner-container');
  if (!container) return;

  const currentRule = ROOM_VASTU_RULES[selectedRoom];
  const evalData = currentRule.ratings[selectedDirection];

  let badgeColor = "bg-emerald-100 border-emerald-400 text-emerald-950 font-black";
  let scoreColor = "text-emerald-900";
  if (evalData.status === "critical") {
    badgeColor = "bg-rose-100 border-rose-400 text-rose-950 font-black";
    scoreColor = "text-rose-950";
  } else if (evalData.status === "dosha") {
    badgeColor = "bg-orange-100 border-orange-400 text-orange-950 font-black";
    scoreColor = "text-orange-950";
  } else if (evalData.status === "neutral") {
    badgeColor = "bg-amber-100 border-amber-400 text-amber-950 font-black";
    scoreColor = "text-amber-900";
  }

  const directionsList = [
    { code: "N", label: "North" },
    { code: "NE", label: "North-East" },
    { code: "E", label: "East" },
    { code: "SE", label: "South-East" },
    { code: "S", label: "South" },
    { code: "SW", label: "South-West" },
    { code: "W", label: "West" },
    { code: "NW", label: "North-West" }
  ];

  container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
      <!-- Left Controls: Room Selector & Direction Selector -->
      <div class="lg:col-span-6 space-y-4">
        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">1. Choose Room / Area to Test</label>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            ${Object.keys(ROOM_VASTU_RULES).map(k => `
              <button type="button" onclick="setRoomPlannerRoom('${k}')" 
                class="p-2 rounded-xl text-left border-2 text-xs font-black transition-all flex items-center justify-between ${selectedRoom === k ? 'border-amber-700 bg-amber-100 text-amber-950 shadow-sm' : 'border-stone-300 bg-white text-slate-900 hover:border-amber-600'}">
                <span class="truncate">${ROOM_VASTU_RULES[k].name.split(' (')[0]}</span>
                ${selectedRoom === k ? '<span class="text-amber-800 font-black">✓</span>' : ''}
              </button>
            `).join('')}
          </div>
        </div>

        <div>
          <label class="block text-xs font-black uppercase tracking-wider text-slate-950 mb-2">2. Choose Direction on Blueprint</label>
          <div class="grid grid-cols-4 gap-1.5">
            ${directionsList.map(d => `
              <button type="button" onclick="setRoomPlannerDirection('${d.code}')" 
                class="p-2 text-center rounded-xl border-2 text-xs font-black transition-all ${selectedDirection === d.code ? 'border-amber-800 bg-amber-600 text-white shadow-sm' : 'border-stone-300 bg-white text-slate-900 hover:border-amber-600 hover:bg-amber-50'}">
                <div class="text-xs font-black">${d.code}</div>
                <div class="text-[10px] font-bold truncate">${d.label}</div>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 3x3 Architectural Grid Simulator -->
        <div class="p-3.5 rounded-2xl bg-[#E8E2D5] border-2 border-amber-900/20">
          <div class="flex items-center justify-between text-xs text-slate-800 font-bold mb-2">
            <span class="font-black text-slate-950">Visual Blueprint Grid</span>
            <span class="text-[11px] font-bold">Click box to test</span>
          </div>
          <div class="grid grid-cols-3 gap-1.5 text-center text-xs font-black">
            <button onclick="setRoomPlannerDirection('NW')" class="p-2 rounded-lg border-2 ${selectedDirection === 'NW' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">NW (Air)</button>
            <button onclick="setRoomPlannerDirection('N')" class="p-2 rounded-lg border-2 ${selectedDirection === 'N' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">N (Kuber)</button>
            <button onclick="setRoomPlannerDirection('NE')" class="p-2 rounded-lg border-2 ${selectedDirection === 'NE' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">NE (Ishanya)</button>

            <button onclick="setRoomPlannerDirection('W')" class="p-2 rounded-lg border-2 ${selectedDirection === 'W' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">W (Profits)</button>
            <div class="p-2 rounded-lg border-2 border-amber-600 bg-amber-100 text-amber-950 flex items-center justify-center font-serif-luxury text-[10px] font-black">Brahmasthan</div>
            <button onclick="setRoomPlannerDirection('E')" class="p-2 rounded-lg border-2 ${selectedDirection === 'E' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">E (Indra)</button>

            <button onclick="setRoomPlannerDirection('SW')" class="p-2 rounded-lg border-2 ${selectedDirection === 'SW' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">SW (Earth)</button>
            <button onclick="setRoomPlannerDirection('S')" class="p-2 rounded-lg border-2 ${selectedDirection === 'S' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">S (Rest)</button>
            <button onclick="setRoomPlannerDirection('SE')" class="p-2 rounded-lg border-2 ${selectedDirection === 'SE' ? 'border-amber-700 bg-amber-200 text-amber-950' : 'border-stone-300 bg-white text-slate-900 hover:bg-amber-50'}">SE (Agni)</button>
          </div>
        </div>
      </div>

      <!-- Right Result Card: Scientific Analysis & Non-Demolition Cure -->
      <div class="lg:col-span-6 p-4 sm:p-5 rounded-2xl bg-white border-2 border-amber-300 shadow-md">
        <div class="flex items-center justify-between mb-3">
          <span class="text-[10px] uppercase tracking-wider text-slate-950 font-black">Real-Time Evaluation</span>
          <span class="px-2.5 py-0.5 rounded-full text-xs font-black border ${badgeColor}">
            ${evalData.badge}
          </span>
        </div>

        <h4 class="text-lg sm:text-xl font-black font-serif-luxury text-slate-950 mb-0.5">
          ${currentRule.name.split(' (')[0]} in ${selectedDirection}
        </h4>
        <p class="text-xs text-slate-950 font-bold mb-4">${currentRule.description}</p>

        <!-- Compatibility Score Gauge -->
        <div class="p-3 rounded-xl bg-amber-50 border border-amber-300 mb-4 flex items-center justify-between">
          <div>
            <span class="text-[10px] text-slate-950 uppercase font-black block">Vedic Resonance</span>
            <span class="text-xl font-black ${scoreColor}">${evalData.score} / 100</span>
          </div>
          <div class="w-28 bg-stone-300 rounded-full h-2.5 overflow-hidden">
            <div class="h-2.5 rounded-full ${evalData.score > 75 ? 'bg-emerald-600' : (evalData.score > 50 ? 'bg-amber-600' : 'bg-rose-600')}" style="width: ${evalData.score}%"></div>
          </div>
        </div>

        <!-- Energy Impact Analysis -->
        <div class="mb-3">
          <h5 class="text-[11px] font-black uppercase tracking-wider text-slate-950 mb-1 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Spatial Dynamics
          </h5>
          <p class="text-xs text-slate-950 font-bold leading-relaxed bg-[#F5EFE4] p-3 rounded-xl border border-amber-900/15">
            ${evalData.text}
          </p>
        </div>

        <!-- Non-Demolition Solution -->
        <div class="p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 mb-4">
          <div class="flex items-start gap-2">
            <span class="text-emerald-900 text-sm font-black">✓</span>
            <div>
              <span class="text-[10px] font-black uppercase tracking-wider text-emerald-950 block mb-0.5">Shivani Tiwari's Non-Demolition Solution</span>
              <p class="text-xs text-slate-950 font-bold leading-relaxed">${evalData.cure}</p>
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <button onclick="openBookingModal('Blueprint Review for ${currentRule.name.split(' (')[0]} in ${selectedDirection}')" 
          class="w-full btn-gold py-2.5 rounded-xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm">
          <span>Book Complete Blueprint Audit</span>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>
    </div>
  `;
}

function setRoomPlannerRoom(roomKey) {
  selectedRoom = roomKey;
  renderRoomPlanner();
}

function setRoomPlannerDirection(dirCode) {
  selectedDirection = dirCode;
  renderRoomPlanner();
}

window.initRoomPlanner = initRoomPlanner;
window.setRoomPlannerRoom = setRoomPlannerRoom;
window.setRoomPlannerDirection = setRoomPlannerDirection;
