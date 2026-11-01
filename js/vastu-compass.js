/**
 * 16-Zone Classical MahaVastu Compass Engine (High Contrast Edition)
 * Vaastu by Shivani Tiwari
 */

const VASTU_ZONES = [
  {
    id: "N",
    name: "North (Uttara)",
    sanskrit: "उत्तर",
    degrees: "348.75° - 11.25°",
    element: "Water (Jala)",
    elementClass: "text-blue-950 bg-blue-100 border-blue-400 font-bold",
    deity: "Lord Kubera (God of Wealth)",
    aspects: "Treasury, Career Growth, New Opportunities, Inflow of Wealth, Client Acquisitions",
    ideal: ["Main Entrance (N3, N4)", "Cash Locker / Safe", "Home Office / Accounts Desk", "Living Room", "Underground Water Tank"],
    dosha: ["Kitchen / Fire in North (Destroys opportunities)", "Toilet in North (Financial drain)", "Overhead heavy water tank (Suppresses growth)", "Clutter / Red & Pink colors"],
    remedy: "Place a brass Kuber Yantra, use Blue or Green color strips under skirting, non-demolition zinc/aluminum floor strip, or a bubbling water fountain.",
    fill: "#BAE6FD",
    stroke: "#0369A1",
    angle: 0
  },
  {
    id: "NNE",
    name: "North-North-East",
    sanskrit: "उत्तर-ईशान",
    degrees: "11.25° - 33.75°",
    element: "Water (Jala)",
    elementClass: "text-cyan-950 bg-cyan-100 border-cyan-400 font-bold",
    deity: "Lord Dhanvantari (Celestial Physician)",
    aspects: "Immunity, Physical Health, Rejuvenation, Vitality, Healing Energy",
    ideal: ["Medicine Storage", "Health & Wellness Zone", "Rest Area", "Pooja Altar", "Yoga & Meditation"],
    dosha: ["Toilet (Chronic sickness, weakened immunity)", "Trash cans / Dustbins", "Kitchen (Generates high blood pressure / agitation)"],
    remedy: "Keep pure Ganga Jal in brass vessel, Dhanvantari photo or energized brass sun, keep zero clutter.",
    fill: "#A5F3FC",
    stroke: "#0E7490",
    angle: 22.5
  },
  {
    id: "NE",
    name: "North-East (Ishanya)",
    sanskrit: "ईशान कोण",
    degrees: "33.75° - 56.25°",
    element: "Water & Space (Pavitra Sthana)",
    elementClass: "text-sky-950 bg-sky-100 border-sky-400 font-bold",
    deity: "Lord Shiva & Lord Ishanya (Spiritual Guidance)",
    aspects: "Mental Clarity, Intuition, Vision, Spiritual Awakening, Peaceful Mind",
    ideal: ["Pooja Mandir", "Meditation Sanctuary", "Study Corner for Students", "Open Lawns / Porch", "Underground Water Reservoir"],
    dosha: ["Toilet in NE (Severe Vastu Dosha - mental confusion, chronic issues)", "Kitchen in NE (Fire destroys clarity)", "Master Bedroom (Causes perpetual restlessness)", "Heavy staircase"],
    remedy: "Non-structural energetic correction with copper helix, energized white quartz crystal grid, brass Swastika, and sacred Sri Yantra on marble plinth.",
    fill: "#7DD3FC",
    stroke: "#0284C7",
    angle: 45
  },
  {
    id: "ENE",
    name: "East-North-East",
    sanskrit: "पूर्व-ईशान",
    degrees: "56.25° - 78.75°",
    element: "Air / Wood (Vayu)",
    elementClass: "text-emerald-950 bg-emerald-100 border-emerald-400 font-bold",
    deity: "Parjanya (God of Rain & Rejuvenation)",
    aspects: "Joy, Recreation, Refreshment, Celebration, Creative Hobbies",
    ideal: ["Family Lounge", "Music / Art Room", "Tea Lounge", "Indoor Plants"],
    dosha: ["Toilet (Depressive thoughts, joylessness)", "Heavy storage / Clutter (Life feels like pure work without enjoyment)"],
    remedy: "Green lush indoor plants (Bamboo/Money plant), wooden flute, brass deer, or light green pastel accents.",
    fill: "#A7F3D0",
    stroke: "#047857",
    angle: 67.5
  },
  {
    id: "E",
    name: "East (Purva)",
    sanskrit: "पूर्व",
    degrees: "78.75° - 101.25°",
    element: "Air / Wood (Vayu)",
    elementClass: "text-green-950 bg-green-100 border-green-400 font-bold",
    deity: "Lord Indra (God of Connections & Governance)",
    aspects: "Social Connectivity, Government Associations, Influence, Public Recognition, Networking",
    ideal: ["Main Entrance (E3, E4)", "Living Room", "Meeting Room", "Large Windows / Balcony for Morning Sun"],
    dosha: ["Toilet in East (Social isolation, disputes with authority, loss of prestige)", "Kitchen (Burned contacts)", "Dark closed walls without ventilation"],
    remedy: "Install an Energized Brass Surya (Sun) at 7 feet height, green plants, wooden artifacts, and copper floor energy partition.",
    fill: "#86EFAC",
    stroke: "#15803D",
    angle: 90
  },
  {
    id: "ESE",
    name: "East-South-East",
    sanskrit: "पूर्व-आग्नेय",
    degrees: "101.25° - 123.75°",
    element: "Air / Wood (Vayu)",
    elementClass: "text-lime-950 bg-lime-100 border-lime-400 font-bold",
    deity: "Poosha (God of Churning & Analysis)",
    aspects: "Analytical Mind, Deep Thinking, Decision Making, Churning of Plans",
    ideal: ["Washing Machine / Laundry", "Mixer-Grinder Zone", "Research & Analytical Desk", "Toilet (acceptable placement)"],
    dosha: ["Master Bedroom (Constant overthinking, marital anxiety, insomnia)", "Mandir / Pooja (Agitated devotion)"],
    remedy: "Stainless steel strip partition, brass eagle sculpture, cream and off-white color palette to calm excessive mental churning.",
    fill: "#D9F99D",
    stroke: "#4D7C0F",
    angle: 112.5
  },
  {
    id: "SE",
    name: "South-East (Agneya)",
    sanskrit: "आग्नेय कोण",
    degrees: "123.75° - 146.25°",
    element: "Fire (Agni)",
    elementClass: "text-amber-950 bg-amber-100 border-amber-400 font-bold",
    deity: "Lord Agni (God of Fire & Spark of Life)",
    aspects: "Liquid Cash Flow, Daily Liquidity, Vital Energy, Passion, Women's Well-being",
    ideal: ["Kitchen (The Ideal Zone for Gas Stove)", "Electrical Panels / Inverters / Geysers", "Cash Register for Retail Shops"],
    dosha: ["Water tank or Boring in SE (Extinguishes cash flow, accidents, reproductive health problems)", "Blue/Black colors", "Master Bedroom (Causes anger and marital friction)"],
    remedy: "Red jasper crystals, copper pyramid strips around kitchen counters, copper swastika on entrance if facing SE, green marble base under stove if kitchen displaced.",
    fill: "#FDE68A",
    stroke: "#B45309",
    angle: 135
  },
  {
    id: "SSE",
    name: "South-South-East",
    sanskrit: "दक्षिण-आग्नेय",
    degrees: "146.25° - 168.75°",
    element: "Fire (Agni)",
    elementClass: "text-orange-950 bg-orange-100 border-orange-400 font-bold",
    deity: "Bhrisha (God of Vitality & Confidence)",
    aspects: "Physical Strength, Internal Confidence, Willpower, Fearlessness",
    ideal: ["Gymnasium / Exercise Room", "Security Office", "Kitchen Extension", "Active Workspace"],
    dosha: ["Toilet (Lethargy, constant low self-esteem, hesitation in deals)", "Water body / Pool"],
    remedy: "Red horse figurine, warm 2700K lighting, red or warm peach accents, energized copper rod.",
    fill: "#FED7AA",
    stroke: "#C2410C",
    angle: 157.5
  },
  {
    id: "S",
    name: "South (Dakshina)",
    sanskrit: "दक्षिण",
    degrees: "168.75° - 191.25°",
    element: "Fire & Earth (Agni / Prithvi)",
    elementClass: "text-rose-950 bg-rose-100 border-rose-400 font-bold",
    deity: "Lord Yama (God of Dharma & Restful Order)",
    aspects: "Fame, Brand Reputation, Deep Sleep, Rest, Unshakable Authority",
    ideal: ["Master Bedroom", "CEO Cabin", "Relaxation Room", "Heavy Wardrobes"],
    dosha: ["Underground water boring (Loss of fame, legal notices, insomnia)", "Blue colors / Mirrors reflecting bed"],
    remedy: "Energized Mars/Yama Yantra, warm earth tones, brass tortoise, lead boundary grounding rods.",
    fill: "#FECDD3",
    stroke: "#BE123C",
    angle: 180
  },
  {
    id: "SSW",
    name: "South-South-West",
    sanskrit: "दक्षिण-नैऋत्य",
    degrees: "191.25° - 213.75°",
    element: "Earth (Prithvi)",
    elementClass: "text-stone-950 bg-stone-200 border-stone-400 font-bold",
    deity: "Gandharva & Mriga (Disposal & Waste Elimination)",
    aspects: "Expenditure Control, Waste Elimination, Cleansing, Detoxification",
    ideal: ["Toilet / Powder Room (Ideal MahaVastu Zone)", "Trash & Drainage", "Septic Tank", "Scrap Room"],
    dosha: ["Master Bedroom (Health drainage, financial drain)", "Pooja Room (All spiritual merit feels depleted)", "Study Room (Zero retention)"],
    remedy: "Yellow tape or brass strip around toilet commode base, heavy yellow earth pottery, do not place valuables here.",
    fill: "#E7E5E4",
    stroke: "#57534E",
    angle: 202.5
  },
  {
    id: "SW",
    name: "South-West (Nairuthi)",
    sanskrit: "नैऋत्य कोण",
    degrees: "213.75° - 236.25°",
    element: "Earth (Prithvi)",
    elementClass: "text-amber-950 bg-yellow-200 border-yellow-500 font-bold",
    deity: "Nirriti & Pitru (Ancestral Grounding & Skill)",
    aspects: "Stability, Relationship Harmony, Family Bonding, Skill Mastery, Longevity",
    ideal: ["Master Bedroom of House Head / Founder", "Heavy Overhead Water Tank", "Heavy Structural Load", "Family Ancestral Photos"],
    dosha: ["Toilet in SW (Major relationship splits, skill obsolescence, business instability)", "Underground water tank/Boring (Severe Pitru dosha)", "Main Cut/Balcony in SW"],
    remedy: "Heavy brass pyramid, yellow paint band, lead metal strip embedding along baseboards, picture of ancestors in golden frames.",
    fill: "#FDE047",
    stroke: "#A16207",
    angle: 225
  },
  {
    id: "WSW",
    name: "West-South-West",
    sanskrit: "पश्चिम-नैऋत्य",
    degrees: "236.25° - 258.75°",
    element: "Space / Metal (Akasha)",
    elementClass: "text-amber-950 bg-amber-100 border-amber-400 font-bold",
    deity: "Dauvarika (Knowledge & Education)",
    aspects: "Studies, Knowledge Retention, Savings, Financial Compounding",
    ideal: ["Study Table & Library", "Children's Study Desk", "Savings Documents & Fixed Deposit Locker", "Skill Training"],
    dosha: ["Toilet (Poor academic grades, constant loss of savings)", "Kitchen / Gas Burner (Mental fatigue during exams)"],
    remedy: "Yellow or white study lamp, Saraswati Yantra, energized glass paperweight, pen stand with brass pens.",
    fill: "#FEF08A",
    stroke: "#854D0E",
    angle: 247.5
  },
  {
    id: "W",
    name: "West (Pashchima)",
    sanskrit: "पश्चिम",
    degrees: "258.75° - 281.25°",
    element: "Space / Metal (Akasha)",
    elementClass: "text-slate-950 bg-slate-200 border-slate-400 font-bold",
    deity: "Lord Varuna (God of Rain, Wealth & Business Profits)",
    aspects: "Profits, Commercial Gains, Fulfillment of Desires, ROI, Sales Conversions",
    ideal: ["Sales & Marketing Cabin", "Dining Room", "Master Bedroom", "Safe Box / Profit Accounts Desk"],
    dosha: ["Kitchen in West (Eats away business profits)", "Extension or huge cut in West", "Green plants / Air element (Weakens Space element)"],
    remedy: "White or silver metallic accents, energized brass camel / cow, round mirrors, non-invasive zinc partition wire.",
    fill: "#CBD5E1",
    stroke: "#475569",
    angle: 270
  },
  {
    id: "WNW",
    name: "West-North-West",
    sanskrit: "पश्चिम-वायव्य",
    degrees: "281.25° - 303.75°",
    element: "Space / Metal (Akasha)",
    elementClass: "text-indigo-950 bg-indigo-100 border-indigo-400 font-bold",
    deity: "Roga / Shosha (Release of Grief & Emotional Burden)",
    aspects: "Emotional Detoxification, Depression Relief, Letting Go of Past Grudges",
    ideal: ["Toilet / Drainage (Good placement)", "Counseling Room", "Store for Old Unused Goods"],
    dosha: ["Master Bedroom (Perpetual depressive thoughts, crying tendencies)", "Pooja Room (Unresolved sadness)"],
    remedy: "Round brass or white ceramic bowl, blue or white lights, space clearing with camphor lamps.",
    fill: "#C7D2FE",
    stroke: "#3730A3",
    angle: 292.5
  },
  {
    id: "NW",
    name: "North-West (Vayavya)",
    sanskrit: "वायव्य कोण",
    degrees: "303.75° - 326.25°",
    element: "Space / Air (Vayu / Akasha)",
    elementClass: "text-purple-950 bg-purple-100 border-purple-400 font-bold",
    deity: "Lord Vayu (God of Movement, Wind & Allies)",
    aspects: "Banking Support, Loan Approvals, Helpful Mentors, Legal Support, Movement of Finished Goods",
    ideal: ["Guest Bedroom", "Finished Goods Storage", "Support Staff Cabins", "Bank Loan Files / Legal Documents"],
    dosha: ["Cut in NW (Lack of support from banks & relatives in crisis)", "Fire/Kitchen (Litigation and disputes with partners)"],
    remedy: "Brass pair of running white horses, energized Vayu Yantra, silver wind chimes (5 or 6 rods), creamy white shades.",
    fill: "#E9D5FF",
    stroke: "#7E22CE",
    angle: 315
  },
  {
    id: "NNW",
    name: "North-North-West",
    sanskrit: "उत्तर-वायव्य",
    degrees: "326.25° - 348.75°",
    element: "Water (Jala)",
    elementClass: "text-teal-950 bg-teal-100 border-teal-400 font-bold",
    deity: "Soma & Gandharva (Attraction & Sensual Harmony)",
    aspects: "Attraction, Romantic Magnetism, Charm, Passion, Marital Fulfillment",
    ideal: ["Couple Bedroom", "Dressing Room", "Cosmetics Display", "Perfumes & Aromatherapy"],
    dosha: ["Toilet (Loss of charm, dull relationship, frigidity)", "Clutter or heavy junk"],
    remedy: "Love bird figurine pair, rose quartz crystals, floral scents, soft warm illumination.",
    fill: "#99F6E4",
    stroke: "#0F766E",
    angle: 337.5
  }
];

function initVastuCompass() {
  const compassContainer = document.getElementById('compass-container');
  const detailsContainer = document.getElementById('zone-details-card');
  const quickFilterContainer = document.getElementById('compass-filter-pills');
  
  if (!compassContainer || !detailsContainer) return;

  if (quickFilterContainer) {
    const majorZones = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    quickFilterContainer.innerHTML = majorZones.map(id => {
      const z = VASTU_ZONES.find(item => item.id === id);
      return `<button type="button" onclick="selectVastuZone('${z.id}')" 
        class="nav-btn-pill text-xs font-black hover:border-amber-700 shadow-sm">
        <span class="w-2.5 h-2.5 rounded-full" style="background:${z.stroke}"></span>
        <span>${z.id} - ${z.name.split(' ')[0]}</span>
      </button>`;
    }).join('');
  }

  const svg = createCompassSVG();
  compassContainer.innerHTML = svg;

  const wedges = document.querySelectorAll('.zone-wedge');
  wedges.forEach(wedge => {
    wedge.addEventListener('click', () => {
      const zoneId = wedge.getAttribute('data-zone');
      selectVastuZone(zoneId);
    });
  });

  selectVastuZone("NE");
}

function createCompassSVG() {
  const size = 350;
  const center = size / 2;
  const outerRadius = 158;
  const innerRadius = 68;

  let paths = '';

  VASTU_ZONES.forEach((zone) => {
    const startAngle = (zone.angle - 11.25 - 90) * (Math.PI / 180);
    const endAngle = (zone.angle + 11.25 - 90) * (Math.PI / 180);

    const x1 = center + outerRadius * Math.cos(startAngle);
    const y1 = center + outerRadius * Math.sin(startAngle);
    const x2 = center + outerRadius * Math.cos(endAngle);
    const y2 = center + outerRadius * Math.sin(endAngle);

    const x3 = center + innerRadius * Math.cos(endAngle);
    const y3 = center + innerRadius * Math.sin(endAngle);
    const x4 = center + innerRadius * Math.cos(startAngle);
    const y4 = center + innerRadius * Math.sin(startAngle);

    const pathData = `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`;

    const labelAngle = (zone.angle - 90) * (Math.PI / 180);
    const labelRadius = (outerRadius + innerRadius) / 2;
    const lx = center + labelRadius * Math.cos(labelAngle);
    const ly = center + labelRadius * Math.sin(labelAngle);

    const isMajor = ["N", "E", "S", "W", "NE", "SE", "SW", "NW"].includes(zone.id);

    paths += `
      <g class="zone-wedge" data-zone="${zone.id}" id="wedge-${zone.id}">
        <path d="${pathData}" fill="${zone.fill}" stroke="${zone.stroke}" stroke-width="${isMajor ? '1.8' : '1.0'}" />
        <text x="${lx}" y="${ly}" fill="#0A0F1D" font-size="${isMajor ? '10' : '8.5'}" font-weight="900" text-anchor="middle" dominant-baseline="central" class="pointer-events-none select-none">
          ${zone.id}
        </text>
      </g>
    `;
  });

  return `
    <div class="relative w-full max-w-[340px] mx-auto aspect-square flex items-center justify-center">
      <svg viewBox="0 0 ${size} ${size}" class="w-full h-full relative z-10 drop-shadow-md">
        <!-- Outer Golden Degree Ring -->
        <circle cx="${center}" cy="${center}" r="${outerRadius + 6}" fill="none" stroke="#B45309" stroke-width="1.5" stroke-dasharray="3,2"/>
        <circle cx="${center}" cy="${center}" r="${outerRadius}" fill="#E8E2D5" stroke="#78350F" stroke-width="2.2"/>
        
        <!-- All 16 Zone Wedges -->
        ${paths}

        <!-- Center Sacred Purusha / Sri Yantra Hub -->
        <circle cx="${center}" cy="${center}" r="${innerRadius}" fill="#FFFFFF" stroke="#78350F" stroke-width="2.5" />
        <circle cx="${center}" cy="${center}" r="${innerRadius - 6}" fill="#F5EFE4" stroke="rgba(120, 53, 15, 0.4)" stroke-width="1.2"/>
        
        <!-- Sacred Geometry Center Motif -->
        <polygon points="${center},${center-26} ${center+22},${center+14} ${center-22},${center+14}" fill="none" stroke="#B45309" stroke-width="1.5"/>
        <polygon points="${center},${center+26} ${center+22},${center-14} ${center-22},${center-14}" fill="none" stroke="#B45309" stroke-width="1.5"/>
        <circle cx="${center}" cy="${center}" r="10" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/>
        <circle cx="${center}" cy="${center}" r="3.5" fill="#78350F" />

        <text x="${center}" y="${center + 38}" fill="#78350F" font-size="7.5" font-family="'Cinzel', serif" font-weight="900" text-anchor="middle" letter-spacing="1">BRAHMASTHAN</text>
      </svg>
    </div>
  `;
}

function selectVastuZone(zoneId) {
  const zone = VASTU_ZONES.find(z => z.id === zoneId);
  if (!zone) return;

  document.querySelectorAll('.zone-wedge').forEach(w => {
    w.classList.remove('active');
    const path = w.querySelector('path');
    if (path) path.style.filter = '';
  });

  const activeWedge = document.getElementById(`wedge-${zone.id}`);
  if (activeWedge) {
    activeWedge.classList.add('active');
    const path = activeWedge.querySelector('path');
    if (path) path.style.filter = 'drop-shadow(0 0 6px rgba(120, 53, 15, 0.7))';
  }

  const detailsContainer = document.getElementById('zone-details-card');
  if (!detailsContainer) return;

  detailsContainer.innerHTML = `
    <div class="animate-fadeIn">
      <!-- Zone Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/20 pb-3 mb-3">
        <div>
          <span class="inline-block px-2.5 py-0.5 text-xs font-black rounded-full ${zone.elementClass} mb-1 border">
            ${zone.element}
          </span>
          <h3 class="text-xl font-black font-serif-luxury text-slate-950 flex items-center gap-2">
            ${zone.name}
            <span class="text-amber-900 font-sans text-xs font-black">(${zone.sanskrit})</span>
          </h3>
          <p class="text-xs text-slate-800 font-bold">Span: <span class="text-amber-950 font-mono font-black">${zone.degrees}</span> | Deity: <strong class="text-slate-950 font-black">${zone.deity}</strong></p>
        </div>
        <div class="text-right">
          <span class="text-[10px] uppercase text-slate-950 tracking-wider block font-black">Resonance</span>
          <span class="text-xs font-black text-emerald-950 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-400">100% Harmonic Flow</span>
        </div>
      </div>

      <!-- Life Aspect Governed -->
      <div class="mb-3 bg-amber-100/70 border border-amber-300 rounded-xl p-3">
        <h4 class="text-xs font-black uppercase tracking-wider text-amber-950 mb-1 flex items-center gap-1.5">
          <svg class="w-3.5 h-3.5 text-amber-800" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          Life Attributes & Energy Impact
        </h4>
        <p class="text-xs sm:text-sm text-slate-900 leading-relaxed font-bold">${zone.aspects}</p>
      </div>

      <!-- 2-Column Ideal vs Dosha Placements -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <!-- Ideal -->
        <div class="p-3 rounded-xl bg-emerald-100/70 border border-emerald-300">
          <h4 class="text-[11px] font-black uppercase tracking-wider text-emerald-950 mb-1.5 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
            Auspicious / Best Placements
          </h4>
          <ul class="text-xs text-slate-900 font-bold space-y-1">
            ${zone.ideal.map(item => `<li class="flex items-start gap-1"><span class="text-emerald-700 font-black">•</span><span>${item}</span></li>`).join('')}
          </ul>
        </div>

        <!-- Severe Doshas -->
        <div class="p-3 rounded-xl bg-rose-100/70 border border-rose-300">
          <h4 class="text-[11px] font-black uppercase tracking-wider text-rose-950 mb-1.5 flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-rose-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            Dosha Triggers (Avoid Here)
          </h4>
          <ul class="text-xs text-slate-900 font-bold space-y-1">
            ${zone.dosha.map(item => `<li class="flex items-start gap-1"><span class="text-rose-700 font-black">•</span><span>${item}</span></li>`).join('')}
          </ul>
        </div>
      </div>

      <!-- Shivani Tiwari's Non-Demolition Remedy -->
      <div class="p-3.5 rounded-xl bg-amber-100 border border-amber-300">
        <div class="flex items-start gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-amber-200 flex items-center justify-center shrink-0 text-amber-950 font-black text-xs">
            ⚡
          </div>
          <div>
            <span class="text-[11px] font-black uppercase tracking-wider text-amber-950 block mb-0.5">Shivani Tiwari's Non-Demolition Cure</span>
            <p class="text-xs text-slate-900 font-bold leading-relaxed">${zone.remedy}</p>
          </div>
        </div>
      </div>

      <!-- Quick Action CTA -->
      <div class="mt-3 pt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs border-t border-amber-900/15">
        <span class="text-slate-950 text-xs font-black">Suspect a directional defect in this sector?</span>
        <button onclick="openBookingModal('Audit for Zone: ${zone.name}')" class="btn-gold px-3.5 py-1.5 rounded-lg text-xs font-black flex items-center gap-1 shadow-sm">
          <span>Get Layout Audit For This Zone</span>
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  `;
}

window.initVastuCompass = initVastuCompass;
window.selectVastuZone = selectVastuZone;
