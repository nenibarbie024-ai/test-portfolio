/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Compass, BookOpen, User, Sparkles, MapPin, Languages } from "lucide-react";


interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  lang: "en" | "ms";
  setLang: (lang: "en" | "ms") => void;
}

export default function Navbar({ activeTab, setActiveTab, lang, setLang }: NavbarProps) {
  const tabs = [
    { id: "home", labelEn: "Home", labelMs: "Utama", icon: Compass },
    { id: "journey", labelEn: "Practical Logbook", labelMs: "Buku Log", icon: BookOpen },
    { id: "resume", labelEn: "Biodata & Resume", labelMs: "Resume & Profil", icon: User },
    { id: "simulator", labelEn: "Planner Simulator", labelMs: "Simulator", icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 bg-maroon-dark/85 backdrop-blur-md border-b border-maroon-light/20 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo/Title block */}
        <div className="flex items-center gap-2.5 self-start md:self-auto">
          <div className="w-9 h-9 bg-maroon-light rounded-lg flex items-center justify-center shadow-inner shrink-0">
            <span className="text-cream-light font-serif font-bold text-lg">A</span>
          </div>
          <div>
            <h1 className="font-serif text-[15px] sm:text-lg tracking-tight font-semibold text-cream-light">
              AINI SYAFIQAH MAHYUDDIN
            </h1>
            <span className="text-[10px] font-mono tracking-widest text-[#E65C6F] uppercase flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-[#E65C6F]" /> {lang === "en" ? "Town & Regional Planning Portfolio" : "Portfolio Perancangan Bandar & Wilayah"}
            </span>
          </div>
        </div>

        {/* Action group on navbar (tabs + switcher) */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">
          
          {/* Tab switcher */}
          <nav className="flex items-center bg-maroon-base/70 p-1 rounded-xl border border-maroon-light/20 overflow-x-auto max-w-full">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const currentLabel = lang === "en" ? tab.labelEn : tab.labelMs;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors flex items-center gap-1.5 shrink-0 ${
                    isActive 
                      ? "text-cream-light font-semibold" 
                      : "text-cream-dark hover:text-cream-light"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-tab-nav"
                      className="absolute inset-0 bg-maroon-light rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{currentLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Bilingual Switcher Pill */}
          <div className="flex items-center bg-maroon-base/70 p-1 rounded-xl border border-maroon-light/20 gap-1">
            <Languages className="w-3 h-3 text-[#E65C6F] ml-1 shrink-0" />
            <button
              onClick={() => setLang("ms")}
              title="Bahasa Melayu"
              className={`px-2 py-1 text-[10px] font-mono rounded-lg transition-all cursor-pointer ${
                lang === "ms"
                  ? "bg-maroon-light text-cream-light font-bold"
                  : "text-cream-dark hover:text-cream-light"
              }`}
            >
              MS
            </button>
            <button
              onClick={() => setLang("en")}
              title="English"
              className={`px-2 py-1 text-[10px] font-mono rounded-lg transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-maroon-light text-cream-light font-bold"
                  : "text-cream-dark hover:text-cream-light"
              }`}
            >
              EN
            </button>
          </div>

          {/* Contact Anchor */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contacts"
              className="px-4 py-2 bg-maroon-light text-cream-light hover:bg-[#AD273C] border border-maroon-light/35 text-xs font-mono rounded transition-colors shadow-sm uppercase tracking-wider cursor-pointer"
            >
              {lang === "en" ? "Contact" : "Hubungi"}
            </a>
          </div>

        </div>

      </div>
    </header>
  );
}

