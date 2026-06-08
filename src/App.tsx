/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import ResumeSection from "./components/ResumeSection";
import LogbookSection from "./components/LogbookSection";
import InteractivePlanner from "./components/InteractivePlanner";
import { PERSONAL_INFO, getTranslation } from "./data";
import { 
  Compass, 
  Map, 
  FileText, 
  Cpu, 
  Layers, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Users, 
  ChevronRight, 
  Linkedin, 
  Globe 
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");
  const [lang, setLang] = useState<"en" | "ms">("ms"); // Defaults to Malay as requested ("mcm contoh saya bagi", which was in Malay)

  // Contact form simple state
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-maroon-dark text-cream-base font-sans selection:bg-maroon-light selection:text-cream-light flex flex-col">
      
      {/* Top Banner indicating current state */}
      <div className="bg-maroon-dark text-cream-light text-[10px] font-mono py-1.5 px-4 text-center tracking-widest uppercase border-b border-maroon-light/20">
        🏛️ {lang === "en" ? "UiTM Perak Branch • TPR610 Industrial Training Portfolio • 2026" : "UiTM Cawangan Perak • Portfolio Latihan Industri TPR610 • 2026"}
      </div>

      {/* Styled Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} lang={lang} setLang={setLang} />

      {/* Dynamic Content Main area */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-10">
        
        {/* TAB 1: HOME PORTAL */}
        {activeTab === "home" && (
          <div className="space-y-16">
            
            {/* HERO SECTION / Elegant Editorial Design */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-maroon-light/20 pb-16 text-left">
              
              <div className="lg:col-span-8 space-y-6">
                <span className="text-xs font-mono tracking-widest text-[#E65C6F] uppercase flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5" /> {lang === "en" ? "PLANMalaysia Northern Zone Project Office" : "PLANMalaysia Pejabat Projek Zon Utara"}
                </span>
                
                <h1 className="font-serif text-5xl md:text-7xl text-cream-light tracking-tight font-black leading-none uppercase">
                  {lang === "en" ? (
                    <>INTERNSHIP <br />
                    <span className="text-[#EC4E63]">JOURNEY</span> <br />
                    PORTFOLIO.</>
                  ) : (
                    <>PORTFOLIO <br />
                    <span className="text-[#EC4E63]">LAT. INDUSTRI</span> <br />
                    KAMI.</>
                  )}
                </h1>
                
                <p className="font-serif text-lg md:text-xl text-cream-base/80 italic max-w-xl font-light">
                  "{getTranslation(PERSONAL_INFO.bio, lang).substring(0, 140)}..."
                </p>

                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={() => setActiveTab("journey")}
                    className="px-6 py-3 bg-maroon-light hover:bg-[#AD273C] text-cream-light text-xs font-mono uppercase tracking-widest transition-colors rounded shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    {lang === "en" ? "View Weekly Logbook" : "Lihat Laporan Buku Log"} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setActiveTab("simulator")}
                    className="px-6 py-3 border border-maroon-light/35 hover:border-maroon-light bg-maroon-base text-cream-light text-xs font-mono uppercase tracking-widest transition-all rounded flex items-center gap-1.5 cursor-pointer"
                  >
                    {lang === "en" ? "Test Zoning Simulator" : "Uji Simulator Pengezonan"}
                  </button>
                </div>
              </div>

              {/* Styled Right-Side Vintage Map Frame */}
              <div className="lg:col-span-4 bg-maroon-base border border-maroon-light/25 rounded-2xl p-6 relative overflow-hidden aspect-[4/5] flex flex-col justify-between shadow-sm text-left">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#942031_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-15" />
                
                <div className="relative">
                  <span className="text-[10px] font-mono text-[#D43D51] tracking-widest uppercase block">
                    {lang === "en" ? "BRIEF PROFILE" : "PROFIL RINGKAS"}
                  </span>
                  <div className="w-10 h-1 bg-maroon-light my-2" />
                  <p className="font-serif text-lg text-cream-light font-bold leading-tight">
                    {PERSONAL_INFO.name}
                  </p>
                  <span className="text-xs text-cream-dark font-sans block mt-1">
                    {lang === "en" ? "B.Sc (Hons) in Town & Regional Planning Graduate (UiTM Perak)" : "Graduan Sarjana Muda Perancangan Bandar & Wilayah (Kepujian) (UiTM Perak)"}
                  </span>
                </div>

                <div className="bg-maroon-dark/60 backdrop-blur-sm border border-maroon-light/20 p-4 rounded-xl relative space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-cream-dark font-mono">{lang === "en" ? "TRAINING:" : "LATIHAN:"}</span>
                    <span className="font-mono text-cream-light font-bold">PLANMalaysia</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream-dark font-mono">{lang === "en" ? "SUPERVISOR:" : "PENYELIA:"}</span>
                    <span className="font-sans font-medium text-cream-base">Mrs. Nor Azliza Jamian</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream-dark font-mono">{lang === "en" ? "PROJECT:" : "PROJEK:"}</span>
                    <span className="font-mono text-cream-light font-bold text-[10px]">RSNPP 2040 Master Plan</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-cream-dark text-center leading-relaxed">
                  © 2026 Aini Syafiqah • Jitra, Kedah
                </div>
              </div>

            </div>

            {/* SECTION 2: THE THREE PILLARS OF HER INTERNSHIP (Visual cards) */}
            <div className="space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-[10px] font-mono text-[#E65C6F] tracking-widest uppercase">
                  {lang === "en" ? "CORE PILLARS" : "TERAS UTAMA"}
                </span>
                <h3 className="font-serif text-3xl text-cream-light font-semibold">
                  {lang === "en" ? "Key Focus Areas" : "Kawasan Fokus Utama"}
                </h3>
                <p className="text-xs text-cream-dark font-sans">
                  {lang === "en" 
                    ? "Three core focus areas assigned to Aini Syafiqah at PLANMalaysia during her regional spatial planning development tenure." 
                    : "Tiga teras fokus utama yang diamanahkan kepada Aini Syafiqah di PLANMalaysia sepanjang tempoh latihan perancangan spatial beliau."}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                
                {/* Pillar 1 */}
                <div className="bg-maroon-base/50 border border-maroon-light/25 p-6 rounded-2xl relative space-y-4 shadow-sm hover:border-[#D43D51]/30 transition-all">
                  <div className="w-10 h-10 bg-maroon-light/10 border border-maroon-light/25 rounded-full flex items-center justify-center">
                    <Layers className="w-5 h-5 text-cream-light" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-cream-light leading-snug">
                     {lang === "en" ? "Check & Review Penang RSNPP 2040" : "Semakan & Pemurnian RSNPP 2040 Pulau Pinang"}
                  </h4>
                  <p className="text-xs text-cream-base/80 leading-relaxed font-sans">
                    {lang === "en"
                      ? "Coordinated and copyedited the draft state structure plan, meticulously auditing Chapter 6 (Infrastructure) and Chapter 7 (Land Use) against the official MyGeoName geographical databases to resolve administrative spelling errors."
                      : "Menyelaras dan menyunting draf rancangan struktur negeri, meneliti Bab 6 (Infrastruktur) dan Bab 7 (Guna Tanah) berpandukan pangkalan data geografi rasmi MyGeoName bagi membetulkan kesilapan ejaan pentadbiran."}
                  </p>
                  <p className="text-[10px] font-mono text-[#E65C6F] pt-2">
                    {lang === "en" ? "✓ 30+ Draft Chapters Handled" : "✓ 30+ Bab Draf Diuruskan"}
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="bg-maroon-base/50 border border-maroon-light/25 p-6 rounded-2xl relative space-y-4 shadow-sm hover:border-[#D43D51]/30 transition-all">
                  <div className="w-10 h-10 bg-maroon-light/10 border border-maroon-light/25 rounded-full flex items-center justify-center">
                    <Map className="w-5 h-5 text-cream-light" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-cream-light leading-snug">
                    {lang === "en" ? "Zoning Objections & SMARTPLAN GIS" : "Aduan Pengezonan & SMARTPLAN GIS"}
                  </h4>
                  <p className="text-xs text-cream-base/80 leading-relaxed font-sans">
                     {lang === "en"
                       ? "Navigated the SMARTPLAN database to map public zoning objections, benchmark local disputes using live satellite layers, generate GIS coordinate registries, and prepare executive review slide decks."
                       : "Melayari pangkalan data SMARTPLAN untuk memetakan bantahan pengezonan awam, menilai pertikaian tempatan menggunakan lapisan satelit langsung, menghasilkan koordinat GIS, dan menyediakan slaid perbentangan eksekutif."}
                  </p>
                  <p className="text-[10px] font-mono text-[#E65C6F] pt-2">
                    {lang === "en" ? "✓ 22+ Logged Objections Handled" : "✓ 22+ Bantahan Berdaftar Diuruskan"}
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="bg-maroon-base/50 border border-maroon-light/25 p-6 rounded-2xl relative space-y-4 shadow-sm hover:border-[#D43D51]/30 transition-all">
                  <div className="w-10 h-10 bg-maroon-light/10 border border-maroon-light/25 rounded-full flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-cream-light" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-cream-light leading-snug">
                    {lang === "en" ? "AI Office Automation & Event Coordination" : "Automasi Pejabat AI & Koordinasi Acara"}
                  </h4>
                  <p className="text-xs text-cream-base/80 leading-relaxed font-sans">
                    {lang === "en"
                      ? "Spearheaded technical setup and registry management for the 'Hands-On AI in Office Administration' seminar at Kedah Digital Library, deploying Google Sheets Autocrat workflows to automate bulk cert generation."
                      : "Menerajui penyediaan teknikal dan pengurusan pendaftaran bagi seminar 'Hands-On AI in Office Administration' di Perpustakaan Digital Kedah, melaksanakan aliran kerja Autocrat Google Sheets untuk mengautomasikan pengeluaran sijil pukal."}
                  </p>
                  <p className="text-[10px] font-mono text-[#E65C6F] pt-2">
                    {lang === "en" ? "✓ 60+ Regional Municipal Officers" : "✓ 60+ Pegawai Perbandaran Serantau"}
                  </p>
                </div>

              </div>
            </div>

            {/* QUICK INTERVIEW SECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#29050B] border border-maroon-light/20 p-6 md:p-10 rounded-3xl shrink-0 text-left">
              <div className="lg:col-span-4 max-w-xs space-y-2">
                <span className="text-[10px] font-mono text-[#E65C6F] tracking-widest uppercase">
                  {lang === "en" ? "REFLECTIVE INSIGHT" : "REFLEKSI PENUH INTEGRITI"}
                </span>
                <h3 className="font-serif text-3xl text-cream-light font-semibold leading-tight">
                  {lang === "en" ? "The Crucial Lesson" : "Aspek Integriti Data"}
                </h3>
                <p className="text-xs text-cream-dark font-sans">
                  {lang === "en" 
                    ? "How hands-on execution at PLANMalaysia cultivates meticulous professional integrity."
                    : "Bagaimana amalan praktikal di PLANMalaysia menekankan betapa kritikalnya kejituan data perancangan bandar."}
                </p>
              </div>

              <div className="lg:col-span-8 border-l border-dashed border-maroon-light/20 pl-4 sm:pl-8 space-y-4 text-sm text-cream-base">
                <p className="font-serif text-lg text-[#FCFBF7] italic font-medium leading-relaxed">
                  {lang === "en"
                    ? "\"Reviewing regional geographical datasets for state-level masterplans demands absolute integrity. A simple spelling mistake in a village name or a slight coordinate misalignment on a zoning map can instantly compromise land classifications and trigger severe public disputes. Operating within the MyGeoName registry taught me that urban planning is built upon the precision of digital parameters.\""
                    : "\"Menyemak dataset geografi serantau untuk rancangan struktur peringkat negeri menuntut integriti yang tinggi. Kesilapan ejaan nama kampung atau sedikit ketidakselarasan koordinat pada peta zoning boleh menjejaskan klasifikasi tanah dan mencetuskan pertikaian awam yang parah. Beroperasi dalam pautan MyGeoName mengajar saya bahawa perancangan bandar dibina atas kejituan parameter digital.\""}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-maroon-light flex items-center justify-center font-bold text-xs text-cream-light font-serif">
                    AS
                  </div>
                  <div>
                    <span className="font-sans font-bold text-[#FCFBF7] block text-xs">Aini Syafiqah Mahyuddin</span>
                    <span className="text-[9px] font-mono text-cream-dark block uppercase">
                      {lang === "en" ? "Industrial Intern, TPR610" : "Pelatih Industri, TPR610"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION HUB CARD */}
            <div className="bg-maroon-base text-cream-light p-8 md:p-12 rounded-3xl relative overflow-hidden text-center border border-maroon-light/20 space-y-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-maroon-light/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-maroon-light/5 rounded-full blur-3xl" />
              
              <div className="max-w-xl mx-auto space-y-4">
                <span className="text-xs font-mono tracking-widest text-cream-base uppercase block">
                  {lang === "en" ? "DISCOVER MORE" : "LOKASI RUGI MAKLUMAT"}
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-black uppercase">
                  {lang === "en" ? "Explore My Logs & Simulator" : "Teroka Laporan & Simulasi"}
                </h2>
                <p className="text-xs md:text-sm text-cream-base/80 leading-relaxed font-sans">
                  {lang === "en"
                    ? "Embark on an interactive journey through my internship weeks, review my resume showcasing consecutive academic honors, or test your urban development skills in our bespoke zoning simulator."
                    : "Terokai linimasa interaktif latihan industri penuh saya, semak resume akademik dengan pencapaian cemerlang berturut-turut, atau uji kemahiran anda dalam menyelesaikan pertikaian dasar perancangan."}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setActiveTab("journey")}
                  className="px-6 py-3 bg-cream-light hover:bg-cream-base text-maroon-dark text-xs font-mono uppercase tracking-widest font-bold rounded shadow-md transition-colors cursor-pointer"
                >
                  {lang === "en" ? "Open Logbook" : "Buka Buku Log"}
                </button>
                <button
                  onClick={() => setActiveTab("resume")}
                  className="px-6 py-3 border border-cream-dark/30 hover:border-cream-light text-[#FAF7F0] text-xs font-mono uppercase tracking-widest rounded transition-all cursor-pointer"
                >
                  {lang === "en" ? "Open Resume" : "Buka Resume"}
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: JOURNEY / LOGBOOK SECTION */}
        {activeTab === "journey" && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="border-b border-maroon-light/20 pb-6 mb-8 text-left">
              <span className="text-xs font-mono tracking-widest text-[#E65C6F] uppercase">
                {lang === "en" ? "LOGBOOK PORTFOLIO" : "PORTFOLIO BUKU LOG"}
              </span>
              <h2 className="font-serif text-4xl text-cream-light font-semibold mt-1">
                {lang === "en" ? "Daily Activity & Logbook Reports" : "Laporan Aktiviti Harian & Buku Log"}
              </h2>
              <p className="text-xs text-cream-dark mt-1">
                {lang === "en" 
                  ? "Follow Aini's active involvement in the Penang RSNPP 2040 master plan refinement." 
                  : "Ikuti penglibatan aktif Aini Syafiqah dalam pemurnian dokumen draf akhir RSNPP 2040 Pulau Pinang."}
              </p>
            </div>
            <LogbookSection lang={lang} />
          </motion.div>
        )}

        {/* TAB 3: RESUME SECTION */}
        {activeTab === "resume" && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="border-b border-maroon-light/20 pb-6 mb-8 text-left">
              <span className="text-xs font-mono tracking-widest text-[#E65C6F] uppercase">
                {lang === "en" ? "FULL PROFILE & RESUME" : "PROFIL PENUH & RESUME"}
              </span>
              <h2 className="font-serif text-4xl text-cream-light font-semibold mt-1">
                {lang === "en" ? "Qualifications & Academic Resume" : "Kelayakan Akademik & Resume Profil"}
              </h2>
              <p className="text-xs text-[#FCFBF7] mt-1">
                {lang === "en"
                  ? "Complete record of education history, technical software tool ratings, and academic accolades."
                  : "Rekod penuh sejarah pendidikan, penilaian kemahiran perisian perancang bandar, dan anugerah cemerlang."}
              </p>
            </div>
            <ResumeSection lang={lang} />
          </motion.div>
        )}

        {/* TAB 4: SIMULATOR */}
        {activeTab === "simulator" && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="border-b border-maroon-light/20 pb-6 mb-8 text-left">
              <span className="text-xs font-mono tracking-widest text-[#E65C6F] uppercase">
                {lang === "en" ? "INTERACTIVE SIMULATION" : "SIMULASI INTERAKTIF"}
              </span>
              <h2 className="font-serif text-4xl text-cream-light font-semibold mt-1">
                {lang === "en" ? "Urban Policy & Zoning Dispute Simulator" : "Simulator Kebijakan & Pertikaian Pengezonan"}
              </h2>
              <p className="text-xs text-cream-dark mt-1">
                {lang === "en"
                  ? "Test your spatial analysis decision skills on complex regional zoning disputes in Penang and Kedah."
                  : "Uji kecekapan membuat keputusan dasar perancangan spatial anda dalam pertikaian sempadan dan zon wilayah Kedah & Pulau Pinang."}
              </p>
            </div>
            <InteractivePlanner lang={lang} />
          </motion.div>
        )}

      </main>

      {/* CONTACT / CONCIERGE REFERENCES SECTION */}
      <section id="contacts" className="bg-maroon-base/40 border-t border-maroon-light/25 py-16 px-4 md:px-8 text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Reference Contacts info (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono tracking-widest text-[#E65C6F] uppercase block">
              {lang === "en" ? "ACADEMIC & PROFESSIONAL REFERENCES" : "RUJUKAN AKADEMIK & PROFESIONAL"}
            </span>
            <h3 className="font-serif text-3xl text-cream-light font-medium leading-none">
              {lang === "en" ? "Acclaimed Referents" : "Senarai Referis Akademik"}
            </h3>
            <p className="text-xs text-cream-dark leading-relaxed font-sans">
              {lang === "en"
                ? "For verification of academic and internship standings, you are welcome to contact my senior university referents:"
                : "Untuk rujukan dan pengesahan status akademik atau maklumat lanjut latihan amali, anda dialu-alukan menghubungi pensyarah rujukan saya:"}
            </p>

            {/* Academic Reference Card */}
            <div className="bg-maroon-base border border-maroon-light/25 p-5 rounded-2xl relative shadow-md">
              <span className="text-[9px] font-mono bg-maroon-light text-cream-light px-2 py-0.5 rounded absolute top-4 right-4 uppercase">
                {lang === "en" ? "Primary Lecturer" : "Pensyarah Utama"}
              </span>
              <p className="font-serif font-bold text-cream-light uppercase">DR HAJAH SALBIAH BINTI MOKHTAR</p>
              <p className="text-xs text-cream-dark">{lang === "en" ? "Senior Lecturer" : "Pensyarah Kanan"}</p>
              <p className="text-[10px] text-cream-dark/60 font-mono mt-0.5">
                {lang === "en" ? "Faculty of Architecture, Planning & Surveying, UiTM Perak Branch" : "Fakulti Seni Bina, Perancangan & Ukur, UiTM Cawangan Perak"}
              </p>
              
              <div className="mt-4 pt-3 border-t border-maroon-light/10 space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-cream-dark font-mono">{lang === "en" ? "PHONE:" : "TEL:"}</span>
                  <a href="tel:05-3742790" className="font-mono text-cream-light hover:underline">05-3742790</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-cream-dark font-mono">EMAIL:</span>
                  <a href="mailto:salbi694@uitm.edu.my" className="font-mono text-cream-light hover:underline">salbi694@uitm.edu.my</a>
                </div>
              </div>
            </div>

            {/* General Contacts */}
            <div className="space-y-3.5 pt-4 text-xs text-cream-base/90">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E65C6F] shrink-0" />
                <span>{lang === "en" ? "Aini's Email:" : "E-mel Aini:"} <a href={`mailto:${PERSONAL_INFO.email}`} className="font-bold text-[#FCFBF7] hover:underline">{PERSONAL_INFO.email}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E65C6F] shrink-0" />
                <span>{lang === "en" ? "Phone Num:" : "No. Telefon:"} <a href={`tel:${PERSONAL_INFO.phone}`} className="font-bold text-[#FCFBF7] hover:underline">{PERSONAL_INFO.phone}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E65C6F] shrink-0" />
                <span>{lang === "en" ? "Permanent Residential Address: No.18, Kampung Lahar, Mukim Malau, 06000, Jitra, Kedah, Malaysia." : "Alamat Kediaman Tetap: No.18, Kampung Lahar, Mukim Malau, 06000, Jitra, Kedah, Malaysia."}</span>
              </div>
            </div>
          </div>

          {/* Interactive messaging form (7 columns) */}
          <div className="lg:col-span-7 bg-maroon-base border border-maroon-light/25 p-6 md:p-8 rounded-2xl shadow-lg">
            <h4 className="font-serif text-xl font-bold text-cream-light mb-2">
              {lang === "en" ? "Send an Inquiry or Feedback" : "Hantar Pertanyaan atau Maklum Balas"}
            </h4>
            <p className="text-xs text-cream-dark font-sans mb-6">
              {lang === "en" 
                ? "Submit professional inquiries, internship reviews, career opportunities, or simulation feedback directly below."
                : "Hantar mesej, tawaran peluang pekerjaan, ulasan latihan amali, atau komen maklum balas simulator di bawah."}
            </p>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-500/10 border border-emerald-500/35 text-emerald-300 p-6 rounded-xl text-center space-y-2"
              >
                <span className="text-2xl">✉️</span>
                <p className="font-serif font-bold text-base">
                  {lang === "en" ? "Message Sent Successfully!" : "Mesej Berjaya Dihantar!"}
                </p>
                <p className="text-xs font-sans">
                  {lang === "en" 
                    ? "Thank you for visiting Aini Syafiqah's portfolio. She will be in touch with you shortly." 
                    : "Terima kasih kerana melawat portfolio Aini Syafiqah. Beliau akan menghubungi anda dengan pantas."}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-cream-dark uppercase block">
                      {lang === "en" ? "Your Name" : "Nama Anda"}
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder={lang === "en" ? "e.g., Dr. Halim" : "Cth: Dr. Halim"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-maroon-dark border border-maroon-light/35 rounded-lg p-2.5 text-xs font-sans text-cream-light placeholder-cream-dark/50 focus:outline-none focus:border-cream-base"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-cream-dark uppercase block">
                      {lang === "en" ? "Contact Email Address" : "Alamat E-mel"}
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder={lang === "en" ? "e.g., halim@planning.gov.my" : "Cth: halim@planning.gov.my"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-maroon-dark border border-maroon-light/35 rounded-lg p-2.5 text-xs font-sans text-cream-light placeholder-cream-dark/50 focus:outline-none focus:border-cream-base"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-cream-dark uppercase block">
                    {lang === "en" ? "Inquiry / Message Content" : "Pertanyaan / Kandungan Mesej"}
                  </label>
                  <textarea 
                    rows={4}
                    required
                    placeholder={lang === "en" ? "Please share your thoughts, interview invitations, or regional planning questions here..." : "Sila kongsi pandangan, jemputan temuduga, atau ulasan perancangan di sini..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#180306] border border-maroon-light/35 rounded-lg p-2.5 text-xs font-sans text-cream-light placeholder-cream-dark/50 focus:outline-none focus:border-cream-base"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-maroon-light hover:bg-[#AD273C] text-cream-light p-3 text-xs font-mono uppercase tracking-widest rounded transition-colors shadow-sm cursor-pointer"
                >
                  {lang === "en" ? "Submit Message" : "Hantar Mesej"}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-maroon-dark text-cream-base py-8 px-4 text-center border-t border-maroon-light/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-xs font-serif font-black tracking-widest text-[#FCFBF7] block text-left">A_S</span>
            <span className="text-[10px] text-cream-dark font-mono block text-left">
              {lang === "en" 
                ? "T&R PLANNER DETAILED INTERNSHIP PORTFOLIO • CLASSIC CREATIVE STYLE" 
                : "PORTFOLIO SULUNG LATIHAN INDUSTRI PERANCANG BANDAR • TEMA KLASIK KREATIF"}
            </span>
          </div>

          <div className="flex gap-4 text-xs font-mono text-cream-dark font-medium">
            <button onClick={() => setActiveTab("home")} className="hover:text-cream-light cursor-pointer">
              {lang === "en" ? "Home" : "Laman Utama"}
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab("journey")} className="hover:text-cream-light cursor-pointer">
              {lang === "en" ? "Logbook" : "Laporan Buku Log"}
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab("resume")} className="hover:text-cream-light cursor-pointer">
              {lang === "en" ? "Resume" : "Resume Akademik"}
            </button>
            <span>•</span>
            <button onClick={() => setActiveTab("simulator")} className="hover:text-cream-light cursor-pointer">
              SMARTPLAN
            </button>
          </div>

          <div className="text-[10px] font-mono text-cream-dark">
            {lang === "en" 
              ? "Painstandingly compiled based on TPR610 official internship logs. © 2026." 
              : "Dikompilasi dengan penuh kepedulian berpandukan laporan log rasmi TPR610. © 2026."}
          </div>
        </div>
      </footer>

    </div>
  );
}
