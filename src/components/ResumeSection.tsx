/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO, EDUCATION_HISTORY, SKILLS_LIST, INTERNSHIPS, AWARDS, CURRICULAR_ACTIVITIES, getTranslation } from "../data";
import { GraduationCap, Award, Briefcase, Sparkles, BookOpen, User, Languages, Phone, Mail, MapPin, Calendar, CheckSquare } from "lucide-react";

interface ResumeSectionProps {
  lang: "en" | "ms";
}

export default function ResumeSection({ lang }: ResumeSectionProps) {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>("All");

  // De-duplicate on the English string since category in SKILLS_LIST is { en: string, ms: string }
  const skillCategories = ["All", ...Array.from(new Set(SKILLS_LIST.map(s => s.category.en)))];

  const getSkillCategoryLabel = (cat: string) => {
    switch (cat) {
      case "All": return lang === "en" ? "All" : "Semua";
      case "Geospatial": return lang === "en" ? "Geospatial" : "Geospatial";
      case "Drafting": return lang === "en" ? "Drafting" : "Penyusunan Pelan";
      case "3D Modeling": return lang === "en" ? "3D Modeling" : "Pemodelan 3D";
      case "Creative": return lang === "en" ? "Creative Content" : "Kandungan Kreatif";
      case "Office Integration": return lang === "en" ? "Office Integration" : "Integrasi Autocrat Pejabat";
      case "Power Skills": return lang === "en" ? "Power Skills" : "Kemahiran Insaniah";
      case "Town Planning": return lang === "en" ? "Town Planning" : "Perancangan Bandar";
      default: return cat;
    }
  };

  const getSkillNameLabel = (name: string) => {
    switch (name) {
      case "AutoCAD": return "AutoCAD Map 3D";
      case "ArcGIS": return "ArcGIS / QGIS Desktop";
      case "SMARTPLAN / GIS": return "SMARTPLAN Spatial Database";
      case "SketchUp": return "SketchUp / SketchID";
      case "Adobe Creative Suite": return "Adobe Suite (Photoshop/Illustrator)";
      case "Google Sheets Autocrat": return "Autocrat Automation Workflow";
      case "Gemini / AI Workspace": return lang === "en" ? "Office AI Workspace (Gemini)" : "Pejabat AI Workspace (Gemini)";
      case "Spatial Zoning Analysis": return lang === "en" ? "Spatial Zoning Analysis" : "Analisis Pengezonan Spatial";
      case "Public Speaking & Registry": return lang === "en" ? "Public Speaking & Registry" : "Pengucapan Awam & Urus Setia";
      default: return name;
    }
  };

  const filteredSkills = selectedSkillCategory === "All" 
    ? SKILLS_LIST 
    : SKILLS_LIST.filter(s => s.category.en === selectedSkillCategory);

  return (
    <div className="space-y-16">
      
      {/* Bio Overview Header Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile Card (Left column) */}
        <div className="lg:col-span-4 bg-maroon-base border border-maroon-light/25 rounded-2xl p-6 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-maroon-light/5 rounded-full blur-2xl transform translate-x-12 -translate-y-12" />
          
          <div className="flex flex-col items-center text-center">
            {/* Visual Portrait frame */}
            <div className="w-36 h-44 bg-[#25060A] border-2 border-maroon-light p-1.5 rounded shadow-md transform rotate-1 hover:rotate-0 transition-transform duration-300 relative">
              <div className="w-full h-full bg-maroon-dark/55 rounded flex flex-col items-center justify-center relative overflow-hidden">
                {/* SVG portrait placeholder with nice town planner avatar */}
                <svg className="w-20 h-20 text-cream-light/80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-[9px] font-mono uppercase bg-maroon-light text-cream-light px-2 py-0.5 rounded tracking-wide">
                  T&R Planner
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl text-cream-light font-semibold mt-6 leading-tight">
              {PERSONAL_INFO.name}
            </h3>
            <span className="text-xs font-mono text-[#E65C6F] tracking-wide mt-1 uppercase">
              {getTranslation(PERSONAL_INFO.title, lang)}
            </span>

            {/* Divider */}
            <div className="w-12 h-0.5 bg-maroon-light/30 my-5" />

            <div className="space-y-3.5 w-full text-left text-xs text-cream-base/90">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-maroon-dark border border-maroon-light/25 rounded">
                  <Mail className="w-3.5 h-3.5 text-[#E65C6F]" />
                </div>
                <div>
                  <span className="text-[10px] text-cream-dark font-mono block">E-MAIL / EMEL</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-sans font-medium text-cream-light hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-maroon-dark border border-maroon-light/25 rounded">
                  <Phone className="w-3.5 h-3.5 text-[#E65C6F]" />
                </div>
                <div>
                  <span className="text-[10px] text-cream-dark font-mono block">{lang === "en" ? "PHONE" : "TEL"}</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="font-sans font-medium text-cream-light hover:underline">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-maroon-dark border border-maroon-light/25 rounded">
                  <MapPin className="w-3.5 h-3.5 text-[#E65C6F]" />
                </div>
                <div>
                  <span className="text-[10px] text-cream-dark font-mono block">{lang === "en" ? "HOME LOCATION" : "ALAMAT RUMAH"}</span>
                  <span className="font-sans font-medium block leading-tight text-cream-light">
                    Jitra, Kedah
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-maroon-dark border border-maroon-light/25 rounded">
                  <Calendar className="w-3.5 h-3.5 text-[#E65C6F]" />
                </div>
                <div>
                  <span className="text-[10px] text-cream-dark font-mono block">{lang === "en" ? "AGE / BIRTH" : "UMUR / TARIKH LAHIR"}</span>
                  <span className="font-sans font-medium block text-cream-light">
                    {PERSONAL_INFO.age} {lang === "en" ? "Years Old" : "Tahun"} ({getTranslation(PERSONAL_INFO.birthDate, lang)})
                  </span>
                </div>
              </div>
            </div>

            {/* Language blocks */}
            <div className="mt-6 border-t border-maroon-light/20 pt-5 w-full text-left">
              <span className="text-[10px] text-cream-dark font-mono block mb-3 uppercase tracking-wide">
                <Languages className="w-3 h-3 inline mr-1" /> {lang === "en" ? "Languages Spoken" : "Kemahiran Bahasa"}
              </span>
              <div className="flex flex-wrap gap-2">
                {getTranslation(PERSONAL_INFO.languages, lang).split(",").map((langText, index) => (
                  <span 
                    key={index} 
                    className="px-2.5 py-1 bg-maroon-dark border border-maroon-light/25 rounded text-[10px] font-mono text-cream-light"
                  >
                    {langText.trim()}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Biography Statement (8 columns on large) */}
        <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-8 animate-fade-in">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-maroon-light/10 rounded-full border border-maroon-light/25 text-cream-light text-xs font-mono uppercase mb-4">
              <User className="w-3 h-3 text-[#E65C6F]" /> {lang === "en" ? "Planning Philosophy (STATEMENT)" : "Falsafah Perancangan & Pendekatan Kerja"}
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-cream-light font-medium leading-tight mb-4 tracking-tight text-left">
              {lang === "en" ? (
                <>Developing Space, <br />Enriching the Universal Community.</>
              ) : (
                <>Membangun Ruang, <br />Memperkasakan Komuniti Sejagat.</>
              )}
            </h2>
            <p className="font-sans text-cream-base/85 text-sm md:text-base leading-relaxed antialiased text-left">
              {getTranslation(PERSONAL_INFO.bio, lang)}
            </p>
          </div>

          {/* Quick Metrics stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-maroon-light/20">
            <div className="p-4 bg-maroon-base border border-maroon-light/25 rounded-xl text-center shadow-md">
              <span className="font-serif font-black text-2xl text-[#E65C6F] block">2</span>
              <span className="text-[10px] font-mono text-cream-dark uppercase tracking-widest block mt-1">
                {lang === "en" ? "Intern Placements" : "Tempat Amali"}
              </span>
            </div>
            <div className="p-4 bg-maroon-base border border-maroon-light/25 rounded-xl text-center shadow-md">
              <span className="font-serif font-black text-2xl text-[#E65C6F] block">3+</span>
              <span className="text-[10px] font-mono text-cream-dark uppercase tracking-widest block mt-1">
                {lang === "en" ? "Dean's List Awards" : "Anugerah Dekan"}
              </span>
            </div>
            <div className="p-4 bg-maroon-base border border-maroon-light/25 rounded-xl text-center shadow-md">
              <span className="font-serif font-black text-2xl text-[#E65C6F] block">6+</span>
              <span className="text-[10px] font-mono text-cream-dark uppercase tracking-widest block mt-1">
                {lang === "en" ? "Geospatial Skills" : "Pakej Geospatial"}
              </span>
            </div>
            <div className="p-4 bg-maroon-base border border-maroon-light/25 rounded-xl text-center shadow-md">
              <span className="font-serif font-black text-2xl text-[#E65C6F] block">10+</span>
              <span className="text-[10px] font-mono text-cream-dark uppercase tracking-widest block mt-1">
                {lang === "en" ? "Logbook Weeks" : "Minggu Buku Log"}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Dual Internships Timeline */}
      <section className="pt-8 text-left">
        <div className="flex items-center gap-2 mb-6 border-b border-maroon-light/20 pb-4">
          <Briefcase className="w-5 h-5 text-[#E65C6F]" />
          <h3 className="font-serif text-2xl text-cream-light font-medium">
            {lang === "en" ? "Industrial Internship Experience" : "Pengalaman Latihan Industri"}
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INTERNSHIPS.map((intern, index) => (
            <div key={index} className="bg-maroon-base border border-maroon-light/25 p-6 rounded-2xl relative shadow-md hover:border-maroon-light/50 transition-all ml-0 flex flex-col justify-between">
              <div>
                <span className="absolute top-4 right-4 text-[10px] font-mono bg-[#54111D] border border-maroon-light/20 text-cream-light px-2.5 py-1 rounded">
                  {getTranslation(intern.period, lang)}
                </span>
                <span className="text-xs font-mono text-[#E65C6F] block uppercase tracking-wider mb-1">
                  {getTranslation(intern.role, lang)}
                </span>
                <h4 className="font-serif text-xl font-bold text-cream-light leading-tight">
                  {getTranslation(intern.organization, lang)}
                </h4>
                <span className="text-[10px] text-cream-dark font-mono block mt-1">
                  📍 {getTranslation(intern.location, lang)}
                </span>

                <p className="text-cream-base/85 text-xs mt-3 leading-relaxed font-sans border-t border-maroon-light/10 pt-3">
                  {getTranslation(intern.description, lang)}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-maroon-light/10 text-left">
                <span className="text-[10px] font-mono text-cream-dark block uppercase mb-2">
                  {lang === "en" ? "Key Focus Projects:" : "Projek Fokus Utama:"}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {intern.keyProjects.map((proj, pIdx) => (
                    <span key={pIdx} className="px-2 py-0.5 bg-maroon-dark text-cream-light border border-maroon-light/20 rounded text-[10px] font-mono">
                      ✨ {getTranslation(proj, lang)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Curriculum split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        
        {/* Education (7 columns) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="flex items-center gap-2 border-b border-maroon-light/20 pb-4">
            <GraduationCap className="w-5 h-5 text-[#E65C6F]" />
            <h3 className="font-serif text-2xl text-cream-light font-medium">
              {lang === "en" ? "Formal Education" : "Sejarah Pendidikan Formal"}
            </h3>
          </div>

          <div className="relative border-l-2 border-maroon-light/25 pl-6 ml-2 space-y-8">
            {EDUCATION_HISTORY.map((edu, index) => (
              <div key={index} className="relative group text-left">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-maroon-dark border-2 border-maroon-light rounded-full group-hover:bg-maroon-light transition-colors" />
                
                <span className="text-xs font-mono text-[#E65C6F] font-medium block">
                  {getTranslation(edu.period, lang)}
                </span>
                
                <h4 className="font-serif text-lg font-bold text-cream-light leading-tight mt-0.5">
                  {getTranslation(edu.degree, lang)}
                </h4>
                
                <span className="text-xs font-sans text-cream-base block font-medium">
                  {getTranslation(edu.institution, lang)}
                </span>

                {edu.gpa && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 text-[10px] font-mono rounded">
                    {lang === "en" ? "Results:" : "Keputusan:"} CGPA {edu.gpa}
                  </span>
                )}

                <p className="text-xs text-cream-dark leading-relaxed font-sans mt-2">
                  {getTranslation(edu.details, lang)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Curricular activities (5 columns) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="flex items-center gap-2 border-b border-maroon-light/20 pb-4">
            <BookOpen className="w-5 h-5 text-[#E65C6F]" />
            <h3 className="font-serif text-2xl text-cream-light font-medium">
              {lang === "en" ? "Co-curricular Activities" : "Aktiviti Kokurikulum"}
            </h3>
          </div>

          <div className="bg-maroon-base border border-maroon-light/25 p-5 rounded-2xl space-y-4 shadow-md text-left">
            {CURRICULAR_ACTIVITIES.map((activity, index) => (
              <div key={index} className="flex gap-3 text-xs leading-relaxed font-sans text-cream-base/90 border-b border-maroon-light/20 pb-3 last:border-0 last:pb-0">
                <span className="font-mono text-[#E65C6F] font-semibold shrink-0 mt-0.5">{activity.year}</span>
                <div>
                  <p className="font-medium text-cream-light">{getTranslation(activity.activity, lang)}</p>
                  <p className="text-[10px] text-cream-dark font-mono mt-0.5">{getTranslation(activity.organization, lang)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Skills Interactive Panel */}
      <section className="pt-8 bg-maroon-base/60 border border-maroon-light/25 p-6 md:p-8 rounded-2xl shadow-inner animate-fade-in text-left">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-maroon-light/20">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#E65C6F]" />
            <h3 className="font-serif text-2xl text-cream-light font-medium">
              {lang === "en" ? "Technical Toolkits & Professional Skills" : "Rangkaian Perisian & Kemahiran Teknikal"}
            </h3>
          </div>

          <div className="flex flex-wrap gap-1">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedSkillCategory(category)}
                className={`px-3 py-1 text-[10px] font-mono rounded transition-all cursor-pointer ${
                  selectedSkillCategory === category
                    ? "bg-maroon-light text-cream-light font-bold"
                    : "bg-maroon-dark text-cream-dark border border-maroon-light/20 hover:border-cream-dark"
                }`}
              >
                {getSkillCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="space-y-1 bg-maroon-dark border border-maroon-light/25 p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center text-xs">
                <span className="font-serif font-bold text-cream-light flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-[#E65C6F]" />
                  {getSkillNameLabel(skill.name)}
                </span>
                <span className="text-[10px] font-mono text-cream-dark bg-maroon-base px-2 py-0.5 rounded border border-maroon-light/10">
                  {getSkillCategoryLabel(skill.category.en)}
                </span>
              </div>
              
              <div className="flex items-center gap-2 pt-1">
                <div className="flex-1 bg-maroon-base h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.rating}%` }}
                    transition={{ duration: 0.8 }}
                    className="bg-[#E65C6F] h-full rounded-full" 
                  />
                </div>
                <span className="text-[10px] font-mono text-cream-light font-bold w-12 text-right">
                  {skill.rating}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards section */}
      <section className="pt-8 text-left">
        <div className="flex items-center gap-2 mb-6 border-b border-maroon-light/20 pb-4">
          <Award className="w-5 h-5 text-[#E65C6F]" />
          <h3 className="font-serif text-2xl text-cream-light font-medium">
            {lang === "en" ? "Awards & Achievements" : "Pencapaian & Pengiktirafan"}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS.map((award, index) => (
            <div key={index} className="bg-maroon-base border border-maroon-light/25 p-5 rounded-2xl relative shadow-md hover:border-maroon-light/50 transition-all flex flex-col justify-between ml-0">
              <div>
                <div className="w-10 h-10 bg-maroon-light/10 border border-maroon-light/25 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-cream-light" />
                </div>
                <span className="text-[10px] font-mono text-cream-dark block mb-1">
                  {lang === "en" ? "YEAR / TAHUN" : "TAHUN"} {award.year}
                </span>
                <h4 className="font-serif text-sm font-bold text-cream-light leading-tight mb-2">
                  {getTranslation(award.title, lang)}
                </h4>
                <p className="text-[11px] text-cream-base/85 font-sans leading-relaxed">
                  {getTranslation(award.achievement, lang)}
                </p>
              </div>
              
              <div className="mt-4 pt-3 border-t border-maroon-light/20 text-[9px] font-mono text-[#E65C6F] text-left">
                🏆 {getTranslation(award.organization, lang)}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
