/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { ShieldCheck, Info, CheckCircle2, AlertTriangle, RefreshCw, Layers, FileText } from "lucide-react";

interface Choice {
  textEn: string;
  textMs: string;
  decision: "Approve" | "Refuse" | "Conditional Approve";
  feedbackEn: string;
  feedbackMs: string;
  impact: { community: number; environment: number; economy: number };
}

interface DecisionScenario {
  id: string;
  titleEn: string;
  titleMs: string;
  difficultyEn: "Easy" | "Medium" | "Expert";
  difficultyMs: "Mudah" | "Sederhana" | "Ekspert";
  contextEn: string;
  contextMs: string;
  locationEn: string;
  locationMs: string;
  objectionEn: string;
  objectionMs: string;
  choices: Choice[];
}

const SCENARIOS: DecisionScenario[] = [
  {
    id: "scen-1",
    titleEn: "Industrial Zone Boundary Near Residential Area",
    titleMs: "Sempadan Zon Industri Berhampiran Kawasan Kediaman",
    difficultyEn: "Medium",
    difficultyMs: "Sederhana",
    locationEn: "Bayan Lepas Light Industrial Zone, RSNPP 2040",
    locationMs: "Zon Perindustrian Ringan Bayan Lepas, RSNPP 2040",
    contextEn: "An electronics factory wishes to expand its production zone by 1.5 acres. However, the RSNPP 2040 draft indicates that this plot directly borders the Taman Sri Nibong residential area. Residents have submitted a public objection (Objection 14) raising concerns over noise and air pollution.",
    contextMs: "Sebuah kilang elektronik berhasrat memperluaskan zon pengeluaran sebanyak 1.5 ekar. Walau bagaimanapun, draf RSNPP 2040 menunjukkan plot ini bersempadan langsung dengan kawasan perumahan Taman Sri Nibong. Penduduk telah mengemukakan bantahan awam (Bantahan 14).",
    objectionEn: "Residents demand a green buffer zone of at least 50 meters and a robust noise mitigation plan before any expansion permit is issued.",
    objectionMs: "Penduduk menuntut zon penampan hijau sekurang-kurangnya 50 meter dan pelan tebatan hingar yang teguh sebelum sebarang permit pembesaran diluluskan.",
    choices: [
      {
        textEn: "UNCONDITIONAL APPROVAL: Considering the high-value economic investment (RM25 Million) from the factory, aligning with the TP2 Competitive Economy core pillar.",
        textMs: "KELULUSAN TANPA SYARAT: Mempertimbangkan pelaburan ekonomi bernilai tinggi (RM25 Juta) daripada kilang, menyokong teras ekonomi TP2.",
        decision: "Approve",
        feedbackEn: "This decision favors the economy but sparks a major public relations crisis among residents and violates National Land Use Planning Guidelines.",
        feedbackMs: "Keputusan ini memihak kepada ekonomi tetapi mencetuskan bantahan awam yang hebat daripada komuniti dan melanggar Garis Panduan Perancangan Guna Tanah Negara.",
        impact: { community: -30, environment: -10, economy: 40 }
      },
      {
        textEn: "CONDITIONAL APPROVAL: Approve with strict conditions requiring a 50-meter-wide green buffer zone planted with dense vegetation, alongside restricted night-time operating hours.",
        textMs: "KELULUSAN BERSYARAT: Meluluskan dengan syarat ketat yang memerlukan zon penampan hijau selebar 50 meter ditanam tumbuhan padat, berserta had waktu operasi malam.",
        decision: "Conditional Approve",
        feedbackEn: "Excellent! This is a sustainable urban planning approach. It balances economic growth (TP2) while comprehensively addressing local public concerns.",
        feedbackMs: "Sangat baik! Ini adalah pendekatan perancangan bandar yang lestari. Ia mengimbangkan pertumbuhan ekonomi (TP2) sambil menangani aduan tempatan.",
        impact: { community: 25, environment: 20, economy: 15 }
      },
      {
        textEn: "TOTAL REFUSAL: Prioritize resident objections immediately and fully preserve the existing green buffer zone without any industrial expansions.",
        textMs: "PENOLAKAN PENUH: Mengutamakan bantahan penduduk merta-merta dan mengekalkan zon penampan hijau sepenuhnya tanpa pembesaran industri.",
        decision: "Refuse",
        feedbackEn: "Very safe for the community, but it might deter future strategic manufacturing investments in the northern region.",
        feedbackMs: "Sangat selamat untuk masyarakat, tetapi mungkin menjejaskan potensi pelaburan pembuatan strategik masa hadapan di zon utara.",
        impact: { community: 20, environment: 15, economy: -25 }
      }
    ]
  },
  {
    id: "scen-2",
    titleEn: "UNESCO George Town Historic Site & View Corridor",
    titleMs: "Tapak Warisan George Town & Koridor Pandangan",
    difficultyEn: "Expert",
    difficultyMs: "Ekspert",
    locationEn: "George Town Heritage Site Boundary, Penang",
    locationMs: "Sempadan Tapak Warisan George Town, Pulau Pinang",
    contextEn: "A developer proposes a 30-story hybrid mixed-use tower situated just outside the official UNESCO heritage buffer zone. However, a SMARTPLAN analysis reveals the tower's height will obstruct the protected historical view corridor of colonial shophouses seen from the sea.",
    contextMs: "Pemaju mencadangkan menara bercampur 30 tingkat tepat di luar zon penampan warisan UNESCO. Walau bagaimanapun, analisis SMARTPLAN menunjukkan menara tinggi ini akan menghalang koridor pandangan bersejarah bangunan kolonial dari arah laut.",
    objectionEn: "The Heritage Association has logged an official objection claiming the development will permanently ruin the visual integrity of the protected heritage landscape.",
    objectionMs: "Persatuan Warisan mendaftarkan aduan rasmi mendakwa pembangunan itu memusnahkan integriti visual landskap warisan yang dilindungi.",
    choices: [
      {
        textEn: "POSTPONE & REDUCE HEIGHT: Instruct the developer to reduce the building height to a maximum of 12 stories to preserve the view corridor, despite resulting in lower development yields.",
        textMs: "TANGGUH & KURANGKAN KETINGGIAN: Mengarahkan pemaju mengurangkan ketinggian bangunan ke maksimum 12 tingkat demi koridor pandangan warisan, walaupun mengurangkan hasil pulangan pemaju.",
        decision: "Conditional Approve",
        feedbackEn: "Spot on! This mature choice preserves George Town's prestigious UNESCO World Heritage status while facilitating structured development.",
        feedbackMs: "Keputusan yang tepat! Langkah matang ini memelihara status Tapak Warisan Dunia UNESCO George Town yang berprestij sambil membenarkan pembangunan berstruktur.",
        impact: { community: 30, environment: 10, economy: -10 }
      },
      {
        textEn: "FULL APPROVAL: Approved as requested since the tower layout sits strictly outside the official boundaries of the heritage buffer zone.",
        textMs: "KELULUSAN PENUH: Meluluskan seperti yang dimohon kerana tapak menara berada di luar zon penampan warisan rasmi.",
        decision: "Approve",
        feedbackEn: "High risk! This approval could trigger warnings from the UNESCO committee and threaten the state's heritage tourism branding.",
        feedbackMs: "Penuh risiko! Kelulusan ini boleh mencetuskan amaran daripada jawatankuasa UNESCO dan mengancam pengiktirafan pelancongan warisan negeri.",
        impact: { community: -25, environment: -15, economy: 30 }
      },
      {
        textEn: "TOTAL REFUSAL: Reject the development permit entirely due to severe visual intrusion of the historical landscape.",
        textMs: "PENOLAKAN PENUH: Menolak permit pembangunan sepenuhnya akibat gangguan visual yang teruk ke atas landskap bersejarah.",
        decision: "Refuse",
        feedbackEn: "Preserves historical values perfectly, but could trigger legal disputes and compensation claims from a developer who acquired premium private land.",
        feedbackMs: "Memelihara nilai sejarah dengan sempurna, tetapi boleh mencetuskan pertikaian undang-undang dan tuntutan ganti rugi daripada pemaju.",
        impact: { community: 15, environment: 5, economy: -30 }
      }
    ]
  },
  {
    id: "scen-3",
    titleEn: "Land Use Development & Mangrove Preservation",
    titleMs: "Pembangunan Guna Tanah & Pemeliharaan Bakau",
    difficultyEn: "Easy",
    difficultyMs: "Mudah",
    locationEn: "Seberang Perai Coastal Zone, RSNPP 2040",
    locationMs: "Zon Pesisir Pantai Seberang Perai, RSNPP 2040",
    contextEn: "An application is submitted for a 10-hectare commercial aquaculture project within a mangrove forest classified as an Environmentally Sensitive Area (ESA) under the RSNPP draft. The applicant claims it will bolster local food security.",
    contextMs: "Permohonan dikemukakan bagi projek akuakultur komersial 10 hektar di dalam kawasan hutan bakau yang diklasifikasikan sebagai Kawasan Sensitif Alam Sekitar (KSAS). Pemohon mendakwa ia meningkatkan keterjaminan makanan.",
    objectionEn: "The Forestry Agency objects, noting that clearing the mangrove will destroy natural breakwater ecosystems protecting the coastline from wave erosion.",
    objectionMs: "Jabatan Perhutanan membantah keras, menekankan pembersihan hutan bakau memusnahkan ekosistem pemecah ombak semula jadi pesisir pantai.",
    choices: [
      {
        textEn: "REFUSE FOR PRESERVATION: Reject the aquaculture proposal and gazette the site as a fully protected Permanent Forest Reserve.",
        textMs: "TOLAK DEMI PEMELIHARAAN: Menolak cadangan akuakultur dan mewartakan tapak sebagai Hutan Simpan Kekal yang dilindungi sepenuhnya.",
        decision: "Refuse",
        feedbackEn: "High-impact environmental preservation decision! This directly supports the TP1 core pillar (Integrated and Managed Spatial Development) in the state draft.",
        feedbackMs: "Keputusan pemeliharaan alam sekitar berimpak tinggi! Ini menyokong terus Teras TP1 (Pembangunan Spatial Bersepadu dan Terurus) draf negeri.",
        impact: { community: 15, environment: 40, economy: -15 }
      },
      {
        textEn: "CONDITIONAL APPROVAL: Reduce layout size to 3 hectares, require a 100-meter buffer from the shoreline, and mandate triple mangrove replanting rates.",
        textMs: "KELULUSAN BERSYARAT: Mengecilkan had susun atur ke 3 hektar, mewajibkan penampan 100 meter dari pantai, dan mensyaratkan kadar penanaman semula bakau tiga kali lipat.",
        decision: "Conditional Approve",
        feedbackEn: "A very balanced choice. It allows small local operators to secure livelihoods while maintaining a robust coastal protection buffer.",
        feedbackMs: "Pilihan yang sangat seimbang. Ia membolehkan pengusaha tempatan menjana pendapatan sambil mengekalkan perlindungan pesisir pantai.",
        impact: { community: 20, environment: 15, economy: 15 }
      },
      {
        textEn: "FULL APPROVAL: Prioritize local self-sufficiency food production metrics without zoning restrictions.",
        textMs: "KELULUSAN PENUH: Mengutamakan pengeluaran makanan sara diri tempatan tanpa sebarang sekatan zon tanah.",
        decision: "Approve",
        feedbackEn: "Extremely dangerous. Mass clearing of mangroves exposes the Seberang Perai coastline to storm surges and severe long-term erosion.",
        feedbackMs: "Sangat berbahaya. Pembersihan bakau mendedahkan pesisir pantai Seberang Perai kepada limpahan ombak besar dan hakisan jangka panjang.",
        impact: { community: -10, environment: -40, economy: 20 }
      }
    ]
  }
];

interface InteractivePlannerProps {
  lang: "en" | "ms";
}

export default function InteractivePlanner({ lang }: InteractivePlannerProps) {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [scores, setScores] = useState({ community: 50, environment: 50, economy: 50 });
  const [history, setHistory] = useState<{ title: string; decision: string; result: string }[]>([]);
  const [showCertificate, setShowCertificate] = useState(false);

  const scenario = SCENARIOS[currentScenarioIndex];

  const handleChoiceSelect = (choiceIndex: number) => {
    if (selectedChoice !== null) return;
    setSelectedChoice(choiceIndex);

    const choice = scenario.choices[choiceIndex];
    
    // Update scores with constraints (between 0 and 100)
    setScores(prev => ({
      community: Math.max(0, Math.min(100, prev.community + choice.impact.community)),
      environment: Math.max(0, Math.min(100, prev.environment + choice.impact.environment)),
      economy: Math.max(0, Math.min(100, prev.economy + choice.impact.economy)),
    }));

    // Save history
    setHistory(prev => [
      ...prev,
      {
        title: lang === "en" ? scenario.titleEn : scenario.titleMs,
        decision: choice.decision,
        result: lang === "en" ? choice.feedbackEn : choice.feedbackMs
      }
    ]);
  };

  const handleNext = () => {
    setSelectedChoice(null);
    if (currentScenarioIndex < SCENARIOS.length - 1) {
      setCurrentScenarioIndex(prev => prev + 1);
    } else {
      setShowCertificate(true);
    }
  };

  const handleReset = () => {
    setCurrentScenarioIndex(0);
    setSelectedChoice(null);
    setScores({ community: 50, environment: 50, economy: 50 });
    setHistory([]);
    setShowCertificate(false);
  };

  const getRating = () => {
    const avg = (scores.community + scores.environment + scores.economy) / 3;
    if (avg >= 65) {
      return { 
        text: lang === "en" ? "Outstanding Sustainable Town Planner" : "Perancang Bandar Lestari Cemerlang", 
        desc: lang === "en" 
          ? "You possess remarkable foresight in balancing citizen welfare, green ecology, and economic prosperity." 
          : "Anda mempunyai pandangan jauh yang luar biasa dalam mengimbangkan kebajikan penduduk, ekologi hijau, dan kemakmuran ekonomi.", 
        rank: lang === "en" ? "Gold Planner" : "Perancang Emas" 
      };
    }
    if (avg >= 45) {
      return { 
        text: lang === "en" ? "Pragmatic Interim Planner" : "Perancang Interim Pragmatik", 
        desc: lang === "en" 
          ? "You make careful, calculated decisions, though there is room to strengthen ecological preservation." 
          : "Anda membuat keputusan berhati-hati dan berkira-kira, walaupun terdapat ruang untuk memperkukuh pemeliharaan ekologi.", 
        rank: lang === "en" ? "Silver Planner" : "Perancang Perak" 
      };
    }
    return { 
      text: lang === "en" ? "Inconsistent Land Use Planner" : "Perancang Guna Tanah Kurang Konsisten", 
      desc: lang === "en" 
        ? "Your planning interventions were too extreme in some sectors, disrupting regional socio-ecological stability." 
        : "Keputusan perancangan anda terlalu ekstrem dalam sesetengah sektor, mengganggu kestabilan sosio-ekologi serantau.", 
      rank: lang === "en" ? "Apprentice Planner" : "Perancang Perantis" 
    };
  };

  return (
    <div id="interactive-planner" className="border border-maroon-light/20 bg-maroon-dark/95 p-6 md:p-10 rounded-2xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-maroon-light/20 pb-6 mb-8 gap-4 text-left">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#E65C6F] uppercase flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> SMARTPLAN Simplex Beta
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-cream-light mt-1 font-semibold">
              {lang === "en" ? "Zoning Objection & Planning Simulator" : "Simulator Pengezonan & Aduan Guna Tanah"}
            </h3>
            <p className="text-xs text-cream-base/80 font-sans mt-1">
              {lang === "en"
                ? "Experience the day-to-day challenges of Aini Syafiqah's planning internship at PLANMalaysia, resolving active public objections on the RSNPP 2040 draft."
                : "Alami cabaran membuat keputusan harian latihan praktikal perancang Aini Syafiqah di PLANMalaysia, menyelesaikan bantahan awam draf RSNPP 2040."}
            </p>
          </div>
          <button 
            onClick={handleReset}
            className="flex items-center gap-1 text-xs font-mono text-cream-light hover:text-cream-base border border-maroon-light/35 px-3 py-1.5 rounded bg-maroon-base hover:bg-maroon-light/30 transition-colors cursor-pointer shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" /> {lang === "en" ? "Reset Simulator" : "Set Semula"}
          </button>
        </div>

        {!showCertificate ? (
          <div>
            {/* Health indicators / Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-maroon-base border border-maroon-light/25 p-3 rounded-xl text-center shadow-md">
                <span className="text-[10px] md:text-xs font-mono text-cream-dark uppercase block">
                  {lang === "en" ? "👥 Community" : "👥 Komuniti"}
                </span>
                <div className="text-lg md:text-xl font-serif font-bold text-cream-light mt-1">{scores.community}%</div>
                <div className="w-full bg-maroon-dark h-1.5 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="bg-[#E65C6F] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${scores.community}%` }} 
                  />
                </div>
              </div>
              
              <div className="bg-maroon-base border border-maroon-light/25 p-3 rounded-xl text-center shadow-md">
                <span className="text-[10px] md:text-xs font-mono text-cream-dark uppercase block">
                  {lang === "en" ? "🌳 Ecology" : "🌳 Ekologi"}
                </span>
                <div className="text-lg md:text-xl font-serif font-bold text-emerald-300 mt-1">{scores.environment}%</div>
                <div className="w-full bg-maroon-dark h-1.5 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="bg-emerald-400 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${scores.environment}%` }} 
                  />
                </div>
              </div>

              <div className="bg-maroon-base border border-maroon-light/25 p-3 rounded-xl text-center shadow-md">
                <span className="text-[10px] md:text-xs font-mono text-cream-dark uppercase block">
                  {lang === "en" ? "📈 Economy" : "📈 Ekonomi"}
                </span>
                <div className="text-lg md:text-xl font-serif font-bold text-amber-300 mt-1">{scores.economy}%</div>
                <div className="w-full bg-maroon-dark h-1.5 rounded-full mt-2 overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full rounded-full transition-all duration-500" 
                    style={{ width: `${scores.economy}%` }} 
                  />
                </div>
              </div>
            </div>

            {/* Main Interactive Stage */}
            <div className="bg-maroon-base border border-maroon-light/25 p-5 md:p-8 rounded-xl mb-6 shadow text-left">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-maroon-dark text-cream-light rounded-full uppercase border border-maroon-light/25">
                  {lang === "en" ? `Case ${currentScenarioIndex + 1} of ${SCENARIOS.length}` : `Kes ${currentScenarioIndex + 1} drpd ${SCENARIOS.length}`}
                </span>
                <span className={`text-xs font-mono px-3 py-1 rounded-full uppercase border ${
                  scenario.difficultyEn === "Easy" ? "border-emerald-500/25 text-emerald-300" :
                  scenario.difficultyEn === "Medium" ? "border-amber-500/25 text-amber-300" :
                  "border-rose-500/25 text-rose-300"
                }`}>
                  {lang === "en" ? `Difficulty: ${scenario.difficultyEn}` : `Tahap: ${scenario.difficultyMs}`}
                </span>
              </div>

              <h4 className="font-serif text-xl text-cream-light font-medium mb-2">
                {lang === "en" ? scenario.titleEn : scenario.titleMs}
              </h4>
              
              {/* Location Tag */}
              <div className="text-xs text-cream-dark font-mono mb-4 flex items-center gap-1">
                📍 {lang === "en" ? scenario.locationEn : scenario.locationMs}
              </div>

              {/* Context Block */}
              <div className="space-y-3 text-sm text-cream-light mb-6 leading-relaxed">
                <p className="bg-maroon-dark border-l-2 border-maroon-light p-3 rounded-r italic text-cream-light font-sans">
                  {lang === "en" ? scenario.contextEn : scenario.contextMs}
                </p>
                <div className="flex gap-2 items-start bg-amber-500/5 border border-amber-500/20 p-3.5 rounded-lg text-amber-200 text-xs text-left">
                  <Info className="w-4.5 h-4.5 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-sans mb-0.5">
                      {lang === "en" ? "Official Public Objection (Logged Case):" : "Bantahan Awam Berdaftar (Kes Rasmi):"}
                    </strong>
                    {lang === "en" ? scenario.objectionEn : scenario.objectionMs}
                  </div>
                </div>
              </div>

              {/* Choices list */}
              <div className="space-y-3">
                <span className="text-xs font-mono text-cream-dark block text-left uppercase tracking-wide">
                  {lang === "en" ? "Please select your planning action plan:" : "Sila pilih pelan tindakan keputusan anda:"}
                </span>
                {scenario.choices.map((choice, index) => {
                  const isSelected = selectedChoice === index;
                  const isDisabled = selectedChoice !== null;
                  const choiceText = lang === "en" ? choice.textEn : choice.textMs;
                  return (
                    <button
                      key={index}
                      onClick={() => handleChoiceSelect(index)}
                      disabled={isDisabled}
                      className={`w-full text-left p-4 rounded-lg border text-sm font-sans transition-all duration-300 flex items-start justify-between gap-3 ${
                        isSelected 
                          ? "bg-[#54111D] text-cream-light border-maroon-light shadow-md scale-[1.01]" 
                          : isDisabled 
                            ? "bg-maroon-dark/40 text-cream-dark border-maroon-light/10 cursor-not-allowed" 
                            : "bg-maroon-dark text-cream-base border-maroon-light/20 hover:border-[#E65C6F] hover:bg-[#3E0911] cursor-pointer"
                      }`}
                    >
                      <span>{choiceText}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-cream-light shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Choice Feedback block */}
              {selectedChoice !== null && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 border-t border-maroon-light/20 pt-5 text-sm"
                >
                  <div className="flex items-start gap-3 bg-maroon-dark border border-maroon-light/25 p-4 rounded-xl shadow-inner text-left">
                    <ShieldCheck className="w-5 h-5 text-[#E65C6F] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-serif font-bold text-cream-light mb-1">
                        {lang === "en" ? "GIS Boundary Solution & Review Feedback:" : "Penyelesaian Sempadan GIS & Maklum Balas Semakan:"}
                      </h5>
                      <p className="text-cream-base/90 leading-relaxed font-sans text-xs">
                        {lang === "en" ? scenario.choices[selectedChoice].feedbackEn : scenario.choices[selectedChoice].feedbackMs}
                      </p>
                      
                      {/* Metric shifts */}
                      <div className="flex gap-4 mt-3 text-xs font-mono">
                        <span className={scenario.choices[selectedChoice].impact.community >= 0 ? "text-emerald-300" : "text-[#E65C6F]"}>
                          👥 {lang === "en" ? "Community" : "Komuniti"}: {scenario.choices[selectedChoice].impact.community >= 0 ? "+" : ""}{scenario.choices[selectedChoice].impact.community}
                        </span>
                        <span className={scenario.choices[selectedChoice].impact.environment >= 0 ? "text-emerald-300" : "text-[#E65C6F]"}>
                          🌳 {lang === "en" ? "Ecology" : "Ekologi"}: {scenario.choices[selectedChoice].impact.environment >= 0 ? "+" : ""}{scenario.choices[selectedChoice].impact.environment}
                        </span>
                        <span className={scenario.choices[selectedChoice].impact.economy >= 0 ? "text-[#fde047]" : "text-[#E65C6F]"}>
                          📈 {lang === "en" ? "Economy" : "Ekonomi"}: {scenario.choices[selectedChoice].impact.economy >= 0 ? "+" : ""}{scenario.choices[selectedChoice].impact.economy}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-5">
                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 bg-maroon-light hover:bg-[#AD273C] text-cream-light rounded-lg text-xs font-mono transition-colors shadow-md cursor-pointer"
                    >
                      {currentScenarioIndex < SCENARIOS.length - 1 
                        ? (lang === "en" ? "Next Case" : "Kes Seterusnya") 
                        : (lang === "en" ? "View Final Evaluation" : "Lihat Keputusan Akhir")} →
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-[#29050B] border border-maroon-light/25 p-8 md:p-12 rounded-xl border-dashed relative overflow-hidden shadow-2xl"
          >
            {/* Watermark badge */}
            <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none transform rotate-12">
              <FileText className="w-64 h-64 text-maroon-light/10" />
            </div>

            <span className="text-xs font-mono tracking-widest text-[#E65C6F] uppercase block mb-2">
              {lang === "en" ? "MASTERPLAN 2040 SIMULATION EVALUATION" : "PENILAIAN SIMULASI PELAN INDUK RSNPP 2040"}
            </span>
            <h4 className="font-serif text-3xl text-cream-light font-semibold mb-4">
              {lang === "en" ? "Certificate of Achievement" : "Sijil Pencapaian Pintar"}
            </h4>

            <div className="max-w-md mx-auto border-t-2 border-b-2 border-maroon-light/35 py-6 my-6">
              <span className="text-cream-dark font-sans text-xs italic block">
                {lang === "en" ? "Awarded to the simulation policy planner:" : "Dianugerahkan kepada perancang polisi simulasi:"}
              </span>
              <p className="font-serif text-xl tracking-tight text-cream-light font-medium mt-3">
                {lang === "en" ? "Aini Syafiqah's Portfolio Visitor" : "Pelawat Portfolio Aini Syafiqah"}
              </p>
              
              <div className="inline-block mt-4 px-4 py-1 bg-maroon-dark text-cream-light border border-maroon-light/25 text-xs font-mono rounded">
                {lang === "en" ? "Rank:" : "Pangkat:"} {getRating().rank}
              </div>

              <div className="text-sm font-bold text-cream-light font-serif mt-5">
                {getRating().text}
              </div>
              <p className="text-xs text-cream-base/80 mt-2 font-sans px-4 leading-relaxed">
                {getRating().desc}
              </p>
            </div>

            {/* Score Summary */}
            <div className="flex justify-center gap-6 text-sm font-mono mb-8">
              <div>
                <span className="text-cream-dark text-xs block">{lang === "en" ? "👥 Community:" : "👥 Komuniti:"}</span>
                <span className="font-serif font-bold text-cream-light text-lg">{scores.community}%</span>
              </div>
              <div>
                <span className="text-cream-dark text-xs block">{lang === "en" ? "🌳 Ecology:" : "🌳 Ekologi:"}</span>
                <span className="font-serif font-bold text-emerald-300 text-lg">{scores.environment}%</span>
              </div>
              <div>
                <span className="text-cream-dark text-xs block">{lang === "en" ? "📈 Economy:" : "📈 Ekonomi:"}</span>
                <span className="font-serif font-bold text-amber-300 text-lg">{scores.economy}%</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-maroon-light hover:bg-[#AD273C] text-cream-light text-xs font-mono rounded-lg transition-colors shadow-md cursor-pointer"
              >
                {lang === "en" ? "Try Again" : "Cuba Lagi"}
              </button>
              <a
                href="#contacts"
                className="px-6 py-3 border border-maroon-light/25 hover:border-cream-dark text-cream-light bg-maroon-dark text-xs font-mono rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {lang === "en" ? "Connect with Aini Syafiqah" : "Hubungi Aini Syafiqah"}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
