/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LOGBOOK_TASKS, getTranslation } from "../data";
import { LogbookTask } from "../types";
import { Calendar, Search, Filter, Briefcase, FileText, CheckCircle2, ChevronRight, BookOpen, AlertCircle } from "lucide-react";

interface LogbookSectionProps {
  lang: "en" | "ms";
}

export default function LogbookSection({ lang }: LogbookSectionProps) {
  const [selectedWeek, setSelectedWeek] = useState<number | "All">("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("All");

  // Extract unique weeks and categories
  const weeks = Array.from(new Set(LOGBOOK_TASKS.map(t => t.week))).sort((a, b) => a - b);
  const categories = ["All", ...Array.from(new Set(LOGBOOK_TASKS.map(t => t.category)))];

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "Draft Review": return lang === "en" ? "Draft Review" : "Semakan Draf";
      case "Coordination": return lang === "en" ? "Coordination" : "Penyelarasan";
      case "Technical Analysis": return lang === "en" ? "Technical Analysis" : "Analisis Teknikal";
      case "Event & AI": return lang === "en" ? "Event & AI" : "Acara & AI";
      case "zoning": return lang === "en" ? "Zoning" : "Pengezonan";
      case "Administration": return lang === "en" ? "Administration" : "Pentadbiran";
      default: return cat;
    }
  };

  // State to track selected log to inspect details
  const [activeTaskDetail, setActiveTaskDetail] = useState<LogbookTask | null>(null);

  // Filtering
  const filteredTasks = LOGBOOK_TASKS.filter(task => {
    const matchesWeek = selectedWeek === "All" || task.week === selectedWeek;
    const matchesCategory = selectedCategory === "All" || task.category === selectedCategory;
    
    const taskDayStr = getTranslation(task.day, lang).toLowerCase();
    const taskDescStr = getTranslation(task.description, lang).toLowerCase();
    const taskRemarksStr = getTranslation(task.remarks, lang).toLowerCase();
    
    const matchesSearch = searchQuery === "All" || searchQuery === "" || 
      taskDescStr.includes(searchQuery.toLowerCase()) ||
      taskRemarksStr.includes(searchQuery.toLowerCase()) ||
      taskDayStr.includes(searchQuery.toLowerCase()) ||
      (task.deliverables && task.deliverables.some(d => getTranslation(d, lang).toLowerCase().includes(searchQuery.toLowerCase())));
    
    return matchesWeek && matchesCategory && matchesSearch;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Draft Review": return "bg-rose-500/10 text-rose-300 border-rose-500/30";
      case "Coordination": return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      case "Technical Analysis": return "bg-sky-500/10 text-sky-300 border-sky-500/30";
      case "Event & AI": return "bg-violet-500/10 text-violet-300 border-violet-500/30";
      case "zoning": return "bg-emerald-500/10 text-emerald-300 border-emerald-500/30";
      default: return "bg-gray-500/10 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <div className="space-y-10">
      
      {/* Intro info box */}
      <div className="bg-[#29050B] border border-maroon-light/25 p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <span className="text-[10px] font-mono text-[#E65C6F] tracking-wide uppercase block">
            {lang === "en" ? "TPR610 COURSE" : "KURSUS TPR610"}
          </span>
          <h3 className="font-serif text-2xl text-cream-light font-semibold">
            {lang === "en" ? "Industrial Internship Logbook" : "Laporan Buku Log Latihan Industri"}
          </h3>
          <p className="text-xs text-cream-base/80 leading-relaxed font-sans mt-1">
            {lang === "en" 
              ? "An interactive timeline of Aini's tasks and reflections during her professional training at the Northern Zone Project Office (PLANMalaysia) from March to July 2026. Key focuses include reviewing the Penang State Structure Plan (RSNPP 2040) draft, resolving zoning objections with SMARTPLAN GIS, and driving workspace automation."
              : "Satu linimasa interaktif memaparkan aktiviti harian, maklum balas, dan refleksi penuh Aini Syafiqah sepanjang latihan industri di PLANMalaysia Pejabat Projek Zon Utara dari Mac hingga Julai 2026. Fokus utama meliputi pembetulan draf Rancangan Struktur Negeri Pulau Pinang 2040 (RSNPP 2040), penyelesaian bantahan zon tanah menggunakan pangkalan data SMARTPLAN GIS, dan automasi urusan pejabat."}
          </p>
        </div>

        {/* Supervisor details card */}
        <div className="bg-maroon-dark border border-maroon-light/25 px-4 py-3 rounded-xl min-w-[240px] text-xs">
          <span className="text-[9px] font-mono text-cream-dark block uppercase mb-1">
            {lang === "en" ? "Industrial Training Supervisor" : "Penyelia Latihan Industri"}
          </span>
          <p className="font-serif font-bold text-cream-light">Nor Azliza Binti Jamian</p>
          <span className="text-[10px] text-cream-dark/80 block">
            {lang === "en" ? "Supervisor-in-Charge, PPZU" : "Pegawai Penyelia Kawasan, PPZU"}
          </span>
          <div className="mt-2 text-[10px] text-[#E65C6F] font-mono flex items-center gap-1">
            🗓️ 30 March 2026 - 17 July 2026
          </div>
        </div>
      </div>

      {/* Control Station (Filters & Search) */}
      <div className="bg-maroon-base border border-maroon-light/25 p-5 rounded-2xl space-y-4 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search bar */}
          <div className="md:col-span-4 relative">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-cream-dark">
              <Search className="w-4 h-4" />
            </span>
            <input 
              type="text" 
              placeholder={lang === "en" ? "Search tasks, deliverables, or keywords..." : "Cari laporan harian, bahan serahan..."}
              value={searchQuery === "All" ? "" : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-maroon-dark border border-maroon-light/35 rounded-xl py-2.5 pl-9 pr-4 text-xs font-sans text-cream-light placeholder-cream-dark/50 focus:outline-none focus:border-cream-base focus:ring-1 focus:ring-cream-base"
            />
          </div>

          {/* Category Dropdown Filter */}
          <div className="md:col-span-4 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#E65C6F] shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-maroon-dark border border-maroon-light/35 rounded-xl py-2.5 px-3 text-xs font-sans text-cream-light focus:outline-none focus:border-cream-base cursor-pointer"
            >
              <option value="All" className="bg-maroon-dark">
                {lang === "en" ? "All Task Categories" : "Semua Kategori Tugasan"}
              </option>
              {categories.slice(1).map(cat => (
                <option key={cat} value={cat} className="bg-maroon-dark">{getCategoryLabel(cat)}</option>
              ))}
            </select>
          </div>

          {/* Custom quick metrics filter info text */}
          <div className="md:col-span-4 text-right">
            <span className="text-xs font-mono text-cream-dark">
              {lang === "en" ? "Found:" : "Jumpa:"} <b className="text-cream-light">{filteredTasks.length}</b> {lang === "en" ? "log sheets" : "catatan harian"}
            </span>
          </div>

        </div>

        {/* Scrollable Horizontal Week filter strip */}
        <div className="border-t border-maroon-light/10 pt-4">
          <span className="text-[10px] text-cream-dark font-mono block mb-2 uppercase tracking-wider">
            {lang === "en" ? "Filter Days by Internship Week" : "Tapis Catatan Mengikut Minggu Latihan"}
          </span>
          
          <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            <button
               onClick={() => setSelectedWeek("All")}
               className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-tight shrink-0 transition-all ${
                 selectedWeek === "All"
                   ? "bg-maroon-light text-cream-light font-bold"
                   : "bg-maroon-dark text-cream-dark border border-maroon-light/20 hover:border-cream-dark"
               }`}
            >
              {lang === "en" ? "All Weeks" : "Semua Minggu"}
            </button>
            {weeks.map((weekNum) => (
              <button
                key={weekNum}
                onClick={() => setSelectedWeek(weekNum)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono shrink-0 transition-all ${
                  selectedWeek === weekNum
                    ? "bg-maroon-light text-cream-light font-bold"
                    : "bg-maroon-dark text-cream-dark border border-maroon-light/20 hover:border-cream-dark"
                }`}
              >
                {lang === "en" ? `Week ${weekNum}` : `Minggu ${weekNum}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Core Timeline List Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main List (8 columns) */}
        <div className="lg:col-span-8 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => {
                const isSelected = activeTaskDetail?.date === task.date;
                const descTranslated = getTranslation(task.description, lang);
                return (
                  <motion.div
                    key={task.date}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
                    onClick={() => setActiveTaskDetail(task)}
                    className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative group flex gap-4 ${
                      isSelected
                        ? "bg-[#54111D] text-cream-light border-maroon-light shadow-md"
                        : "bg-maroon-base/45 text-cream-base border-maroon-light/15 hover:border-maroon-light/30 hover:bg-maroon-base/70"
                    }`}
                  >
                    {/* Week Badge Floating Left */}
                    <div className="hidden sm:flex flex-col items-center justify-center shrink-0 w-16 border-r border-dashed border-maroon-light/20 pr-4">
                      <span className={`text-[10px] font-mono uppercase tracking-widest ${
                        isSelected ? "text-cream-light/75" : "text-[#E65C6F]"
                      }`}>
                        {lang === "en" ? "Week" : "Minggu"}
                      </span>
                      <span className="text-2xl font-serif font-black">{task.week}</span>
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono">
                        <span className={`flex items-center gap-1 font-semibold ${
                          isSelected ? "text-cream-light/95" : "text-cream-light"
                        }`}>
                          <Calendar className="w-3 h-3 text-[#E65C6F]" /> {task.date} ({getTranslation(task.day, lang)})
                        </span>
                        
                        <span className={`px-2 py-0.5 rounded border text-[9px] uppercase ${getCategoryColor(task.category)}`}>
                          {getCategoryLabel(task.category)}
                        </span>
                      </div>

                      <h4 className="font-serif text-base font-bold text-cream-light">
                        {descTranslated.length > 120 
                          ? `${descTranslated.substring(0, 120)}...` 
                          : descTranslated}
                      </h4>

                      {/* Small Deliverable Preview chips */}
                      {task.deliverables && task.deliverables.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {task.deliverables.map((del, dIdx) => (
                            <span 
                              key={dIdx} 
                              className={`text-[9px] px-2 py-0.5 rounded leading-tight font-mono ${
                                isSelected ? "bg-cream-light/15 text-cream-light" : "bg-maroon-dark text-cream-dark border border-maroon-light/20"
                              }`}
                            >
                              📁 {getTranslation(del, lang)}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center shrink-0 text-cream-dark group-hover:text-cream-light">
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                        isSelected ? "text-cream-light rotate-90" : "group-hover:translate-x-1"
                      }`} />
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="bg-[#29050B] border border-maroon-light/25 px-8 py-12 text-center rounded-2xl text-cream-dark space-y-3 shadow-md">
                <AlertCircle className="w-10 h-10 text-[#E65C6F] mx-auto" />
                <p className="font-serif text-lg font-bold text-cream-light">
                  {lang === "en" ? "No Records Found" : "Tiada Rekod Catatan Dijumpai"}
                </p>
                <p className="text-xs max-w-sm mx-auto leading-relaxed">
                  {lang === "en" 
                    ? `No weekly logs match your search criteria "${searchQuery}" or selected week filter. Please try a different query.`
                    : `Tiada catatan buku log sepadan dengan carian "${searchQuery}" atau minggu terpilih anda. Sila cari kata kunci yang lain.`}
                </p>
                <button
                  onClick={() => { setSearchQuery(""); setSelectedWeek("All"); setSelectedCategory("All"); }}
                  className="px-4 py-2 bg-maroon-light hover:bg-[#AD273C] text-cream-light text-[11px] font-mono rounded mt-2 cursor-pointer"
                >
                  {lang === "en" ? "Reset All Filters" : "Set Semula Semua Tapisan"}
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Detailed Viewer Panel Drawer (4 columns) */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            {activeTaskDetail ? (
              <motion.div
                key={activeTaskDetail.date}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-[#29050B] border border-maroon-light/25 rounded-2xl p-6 space-y-6 shadow-lg text-left"
              >
                {/* Header detail */}
                <div className="border-b border-maroon-light/20 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase bg-maroon-light text-cream-light px-2.5 py-0.5 rounded">
                      {lang === "en" ? `Week ${activeTaskDetail.week}` : `Minggu ${activeTaskDetail.week}`}
                    </span>
                    <span className="text-[10px] font-mono text-cream-dark flex items-center gap-1">
                      📅 {activeTaskDetail.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-xl font-bold text-cream-light leading-tight mt-1">
                    {lang === "en" ? "Daily Activity Details" : "Butiran Laporan Harian"}
                  </h4>
                </div>

                {/* Description content */}
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-cream-dark font-mono block mb-1 uppercase tracking-wider">
                      {lang === "en" ? "Full Record:" : "Teks Penuh Harian:"}
                    </span>
                    <p className="text-sm font-sans text-cream-light leading-relaxed bg-maroon-dark/60 p-4 rounded-xl border border-maroon-light/20 italic">
                      "{getTranslation(activeTaskDetail.description, lang)}"
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-cream-dark font-mono block mb-1 uppercase tracking-wider">
                      {lang === "en" ? "Reflection Note (Remarks):" : "Nota Refleksi & Ulasan:"}
                    </span>
                    <p className="text-xs text-amber-200 font-sans leading-relaxed flex gap-2 items-start bg-amber-500/5 p-3 rounded-lg border border-amber-500/15">
                      <BookOpen className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      <span>{getTranslation(activeTaskDetail.remarks, lang)}</span>
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-cream-dark font-mono block mb-1 uppercase tracking-wider">
                      {lang === "en" ? "Spatial Impact/Outcome:" : "Hasil Impak Spatial:"}
                    </span>
                    <p className="text-xs text-emerald-300 font-sans font-medium leading-relaxed flex gap-2 items-start bg-emerald-500/5 p-3 rounded-lg border border-emerald-500/15">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                      <span>{getTranslation(activeTaskDetail.impact, lang)}</span>
                    </p>
                  </div>

                  {activeTaskDetail.deliverables && activeTaskDetail.deliverables.length > 0 && (
                    <div>
                      <span className="text-[10px] text-cream-dark font-mono block mb-2 uppercase tracking-wider">
                        {lang === "en" ? "Evidence & Deliverables:" : "Bahan Serahan & Bukti:"}
                      </span>
                      <div className="space-y-1.5">
                        {activeTaskDetail.deliverables.map((del, dIdx) => (
                          <div 
                            key={dIdx} 
                            className="bg-maroon-dark border border-maroon-light/25 px-3 py-2 rounded-lg flex items-center gap-2 text-xs text-cream-light font-mono"
                          >
                            <FileText className="w-4.5 h-4.5 text-[#E65C6F] shrink-0" />
                            <span className="truncate">{getTranslation(del, lang)}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Dynamic feedback request block */}
                <div className="border-t border-maroon-light/10 pt-4 text-center">
                  <span className="text-[10px] text-cream-dark block font-sans italic">
                    {lang === "en" ? "Verified by the PLANMalaysia Supervisor Office" : "Buku log ini disahkan oleh Penyelia PLANMalaysia PPZU"}
                  </span>
                </div>
              </motion.div>
            ) : (
              <div className="bg-maroon-base border border-maroon-light/20 rounded-2xl p-8 text-center text-cream-dark space-y-4 shadow-md">
                <div className="w-12 h-12 bg-maroon-light/10 border border-maroon-light/20 rounded-full flex items-center justify-center mx-auto">
                  <Briefcase className="w-5 h-5 text-cream-light" />
                </div>
                <h5 className="font-serif text-base font-bold text-cream-light">
                  {lang === "en" ? "Task Detail Viewer" : "Pemerhati Catatan Log"}
                </h5>
                <p className="text-xs font-sans leading-relaxed">
                  {lang === "en"
                    ? "Please click on any activity log on the left to inspect detailed comments, deliverables, and proof of regional standard alignment."
                    : "Sila klik pada mana-mana baris rekod log harian di sebelah kiri untuk melihat catatan penuh, impak spatial, dan fail serahan berkaitan."}
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
