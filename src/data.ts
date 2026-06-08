/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LogbookTask, Internship, Education, Award, CurricularActivity, BilingualText } from "./types";

export function getTranslation(value: any, lang: "en" | "ms"): string {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    if (value.en !== undefined || value.ms !== undefined) {
      return value[lang] || value.ms || value.en || "";
    }
  }
  return String(value);
}

export const PERSONAL_INFO = {
  name: "Aini Syafiqah Binti Mahyuddin",
  title: {
    en: "Town & Regional Planner",
    ms: "Perancang Bandar & Wilayah"
  },
  age: 24,
  birthDate: {
    en: "04 January 2002",
    ms: "04 Januari 2002"
  },
  phone: "011-11553081",
  email: "ainisyfiqah21@gmail.com",
  address: "No.18, Kampung Lahar, Mukim Malau, 06000, Jitra, Kedah, Malaysia",
  bio: {
    en: "A highly motivated Town and Regional Planning graduate from Universiti Teknologi MARA (UiTM). Passionate about sustainable urban development, geospatial analysis (GIS), and community-centric zoning guidelines. Bringing dual industrial training experience at Alor Setar City Council (MBAS) and PLANMalaysia (Northern Zone Project Office), with practical expertise in reviewing State Structure Plans (RSN), municipal planning approvals, and utilizing advanced geospatial mapping technologies.",
    ms: "Seorang graduan Perancangan Bandar dan Wilayah yang sangat bermotivasi dari Universiti Teknologi MARA (UiTM) Cawangan Perak. Bersemangat tentang pembangunan bandar lestari, analisis geospatial (GIS), dan garis panduan pengezonan berpusatkan komuniti. Membawa pengalaman latihan industri berganda di Majlis Bandaraya Alor Setar (MBAS) dan PLANMalaysia (Pejabat Projek Zon Utara), dengan kepakaran praktikal dalam menyemak Rancangan Struktur Negeri (RSN), kelulusan perancangan perbandaran, dan menggunakan teknologi pemetaan geospatial termaju."
  },
  languages: {
    en: ["Malay (Native)", "English (Professional)", "Mandarin (Basic)"],
    ms: ["Bahasa Melayu (Ibu Kandung)", "Bahasa Inggeris (Profesional)", "Mandarin (Asas)"]
  }
};

export const EDUCATION_HISTORY: Education[] = [
  {
    institution: {
      en: "Universiti Teknologi MARA (UiTM) Perak Branch",
      ms: "Universiti Teknologi MARA (UiTM) Cawangan Perak"
    },
    degree: {
      en: "Bachelor in Town and Regional Planning",
      ms: "Sarjana Muda Perancangan Bandar dan Wilayah (Kepujian)"
    },
    period: "2024 - Current",
    details: {
      en: "Focusing on advanced urban planning theories, regional development policies, and spatial design. Consistently achieving academic excellence with top-tier project delivery and consecutive Dean's List honors.",
      ms: "Memfokuskan kepada teori perancangan bandar termaju, dasar pembangunan wilayah, dan reka bentuk spatial. Sentiasa mencapai kecemerlangan akademik dengan penyampaian projek terbaik dan pengiktirafan Anugerah Dekan berturut-turut."
    }
  },
  {
    institution: {
      en: "Politeknik Sultan Abdul Halim Muadzam Shah (POLIMAS)",
      ms: "Politeknik Sultan Abdul Halim Muadzam Shah (POLIMAS)"
    },
    degree: {
      en: "Diploma in Town and Regional Planning",
      ms: "Diploma Perancangan Bandar dan Wilayah"
    },
    period: "2020 - 2023",
    gpa: "3.39",
    details: {
      en: "Graduated with consecutive Dean's List recognition. Developed solid technical skills in spatial layout drawing, zoning regulations, and physical terrain surveying.",
      ms: "Menerima pengiktirafan Senarai Dekan berturut-turut. Membina kemahiran teknikal yang mantap dalam lukisan susun atur spatial, peraturan pengezonan, dan tinjauan bentuk bumi fizikal."
    }
  },
  {
    institution: {
      en: "Maktab Mahmud Pokok Sena",
      ms: "Maktab Mahmud Pokok Sena"
    },
    degree: {
      en: "Sijil Pelajaran Malaysia (SPM)",
      ms: "Sijil Pelajaran Malaysia (SPM)"
    },
    period: "2015 - 2019",
    details: {
      en: "Achieved strong academic results (2A 3B final grades) with active leadership in public speaking clubs and regional athletics.",
      ms: "Mencapai keputusan akademik yang baik (gred akhir 2A 3B) dengan kepimpinan aktif dalam kelab pengucapan awam dan olahraga serantau."
    }
  }
];

export const SKILLS_LIST = [
  { name: "ArcGIS", rating: 90, category: { en: "Geospatial", ms: "Geospatial" } },
  { name: "SMARTPLAN / GIS", rating: 85, category: { en: "Geospatial", ms: "Geospatial" } },
  { name: "AutoCAD", rating: 85, category: { en: "Drafting", ms: "Pelan Susun Atur" } },
  { name: "SketchUp", rating: 80, category: { en: "3D Modeling", ms: "Pemodelan 3D" } },
  { name: "Canva", rating: 90, category: { en: "Creative", ms: "Kreatif" } },
  { name: "Microsoft Word", rating: 95, category: { en: "Office Integration", ms: "Automasi Integrasi Pejabat" } },
  { name: "Microsoft PowerPoint", rating: 95, category: { en: "Office Integration", ms: "Automasi Integrasi Pejabat" } },
  { name: "Public Speaking / Pengucapan Awam", rating: 88, category: { en: "Power Skills", ms: "Kemahiran Insaniah" } },
  { name: "Zoning Objection / Mitigasi Bantahan Awam", rating: 92, category: { en: "Town Planning", ms: "Perancangan Bandar" } }
];

export const INTERNSHIPS: Internship[] = [
  {
    organization: {
      en: "Pejabat Projek Zon Utara (PLANMalaysia)",
      ms: "Pejabat Projek Zon Utara (PLANMalaysia)"
    },
    role: {
      en: "Industrial Training Intern (TPR610)",
      ms: "Pelatih Latihan Industri (TPR610)"
    },
    period: {
      en: "30 March 2026 - 17 July 2026",
      ms: "30 Mac 2026 - 17 Julai 2026"
    },
    location: {
      en: "Levels 4 & 5, Wisma Perkeso, Jalan Telok Wan Jah, 05646 Alor Setar, Kedah",
      ms: "Tingkat 4 & 5, Wisma Perkeso, Jalan Telok Wan Jah, 05646 Alor Setar, Kedah"
    },
    supervisor: {
      en: "Nor Azliza Binti Jamian",
      ms: "Nor Azliza Binti Jamian"
    },
    description: {
      en: "Actively involved in reviewing and refining the Penang State Structure Plan (Rancangan Struktur Negeri Pulau Pinang 2040 - RSNPP 2040). Addressed public zoning objections using the SMARTPLAN satellite imaging system, prepared official statutory correspondence for municipal councils, and collaborated in administrative and AI-supported workspace optimizations.",
      ms: "Terlibat secara aktif dalam menyemak dan memurnikan draf Rancangan Struktur Negeri Pulau Pinang 2040 (RSNPP 2040). Menyelesaikan bantahan pengezonan awam menggunakan sistem pengimejan satelit SMARTPLAN, menyediakan surat-menyurat berkanun rasmi untuk majlis perbandaran, dan bekerjasama dalam pengoptimuman ruang kerja yang disokong AI."
    },
    keyProjects: [
      {
        en: "Review & Refinement of RSNPP 2040 (Penang State Structure Plan)",
        ms: "Semakan & Pemurnian RSNPP 2040 (Rancangan Struktur Negeri Pulau Pinang)"
      },
      {
        en: "Zoning Public Objections Mitigation with SMARTPLAN",
        ms: "Mitigasi Bantahan Awam Pengezonan dengan SMARTPLAN"
      },
      {
        en: "PPZU AI Hands-On Workshop Administration",
        ms: "Pentadbiran Bengkel Hands-On AI PPZU"
      }
    ]
  },
  {
    organization: {
      en: "Majlis Bandaraya Alor Setar (MBAS)",
      ms: "Majlis Bandaraya Alor Setar (MBAS)"
    },
    role: {
      en: "Industrial Training Intern",
      ms: "Pelatih Latihan Industri"
    },
    period: {
      en: "Aug 2023 - Jan 2024",
      ms: "Ogos 2023 - Jan 2024"
    },
    location: "Alor Setar, Kedah",
    supervisor: {
      en: "Senior Planning Officer, MBAS",
      ms: "Pegawai Perancang Kanan, MBAS"
    },
    description: {
      en: "Contributed to local municipal physical plans and zoning layout drawings, conducted physical site visits for land development evaluations, and drafted planning permission assessment reports.",
      ms: "Menyumbang kepada pelan fizikal perbadaran tempatan dan lukisan susun atur pengezonan, menjalankan lawatan tapak fizikal untuk penilaian pembangunan tanah, dan merangka laporan penilaian kebenaran merancang."
    },
    keyProjects: [
      { en: "Municipal Layout Drawing & Review", ms: "Penyediaan & Semakan Lukisan Susun Atur Perbandaran" },
      { en: "Field Surveys and Development Site Visits", ms: "Tinjauan Lapangan & Lawatan Tapak Pembangunan" },
      { en: "Development Report Preparation", ms: "Penyediaan Laporan Cadangan Pemajuan (LCP)" }
    ]
  }
];

export const AWARDS: Award[] = [
  {
    title: { en: "Silver Medal", ms: "Pingat Perak" },
    organization: {
      en: "International Innovation and Invention Competition Through Exhibition",
      ms: "Pertandingan Inovasi dan Reka Cipta Antarabangsa Melalui Pameran"
    },
    year: "2023",
    achievement: {
      en: "Awarded for exceptional team innovation projecting green infrastructure solutions within regional boundaries.",
      ms: "Dianugerahkan atas inovasi kumpulan yang luar biasa dalam mengunjurkan penyelesaian infrastruktur hijau dalam sempadan wilayah."
    }
  },
  {
    title: { en: "Dean's List Award", ms: "Anugerah Senarai Dekan" },
    organization: {
      en: "UiTM Perak Branch (Session Oct - Feb 2025/2026)",
      ms: "UiTM Cawangan Perak (Sesi Okt - Feb 2025/2026)"
    },
    year: "2026",
    achievement: { en: "Academic Excellence recognition.", ms: "Pengiktirafan Kecemerlangan Akademik." }
  },
  {
    title: { en: "Dean's List Award", ms: "Anugerah Senarai Dekan" },
    organization: {
      en: "UiTM Perak Branch (Session Oct - Feb 2024/2025)",
      ms: "UiTM Cawangan Perak (Sesi Okt - Feb 2024/2025)"
    },
    year: "2025",
    achievement: { en: "Academic Excellence recognition.", ms: "Pengiktirafan Kecemerlangan Akademik." }
  },
  {
    title: { en: "Dean's List Award", ms: "Anugerah Senarai Dekan" },
    organization: {
      en: "POLIMAS (Session 1 2021/2022)",
      ms: "POLIMAS (Sesi 1 2021/2022)"
    },
    year: "2022",
    achievement: { en: "Academic Excellence recognition.", ms: "Pengiktirafan Kecemerlangan Akademik." }
  }
];

export const CURRICULAR_ACTIVITIES: CurricularActivity[] = [
  {
    activity: {
      en: "Participated in International Innovation and Invention Competition",
      ms: "Penyertaan dalam Pertandingan Inovasi dan Reka Cipta Antarabangsa"
    },
    organization: "Exhibition Panel",
    year: "2023"
  },
  {
    activity: {
      en: "Participated in Entrepreneur Club",
      ms: "Ahli Kelab Keusahawanan"
    },
    organization: "POLIMAS",
    year: "2023"
  },
  {
    activity: {
      en: "Member of Civil Defence Force (APM)",
      ms: "Ahli Angkatan Pertahanan Awam Malaysia (APM)"
    },
    organization: "POLIMAS",
    year: "2021"
  },
  {
    activity: {
      en: "Student Leadership & Peer Mentor",
      ms: "Kepimpinan Pelajar & Mentor Rakan Sebaya"
    },
    organization: "Maktab Mahmud Pokok Sena",
    year: "2018 - 2019"
  },
  {
    activity: {
      en: "Represented School in Athletics",
      ms: "Mewakili Sekolah dalam Olahraga"
    },
    organization: "Maktab Mahmud Pokok Sena",
    year: "2017"
  }
];

export const LOGBOOK_TASKS: LogbookTask[] = [
  {
    date: "30/03/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 1,
    description: {
      en: "Reported for duty at PPZU (PLANMalaysia). Ice-breaking and orientation session with staff. Subsequently undertook initial reading of the final draft Penang State Structure Plan 2040 (RSNPP 2040) ahead of public publicity in June 2026.",
      ms: "Melapor diri untuk bertugas di PPZU (PLANMalaysia). Sesi suai kenal bersama kakitangan. Seterusnya melakukan bacaan awal draf akhir Rancangan Struktur Negeri Pulau Pinang 2040 (RSNPP 2040) sebelum publisiti awam pada Jun 2026."
    },
    remarks: {
      en: "Orientation on the organizational setup and comprehension of the state planning structure.",
      ms: "Taklimat mengenai struktur organisasi dan kefahaman struktur perancangan negeri."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Established critical background knowledge regarding Penang state-level spatial strategies.",
      ms: "Membina pengetahuan latar belakang yang kritikal mengenai strategi spatial peringkat negeri Pulau Pinang."
    },
    deliverables: [
      { en: "Review of initial RSNPP 2040 draft documents", ms: "Semakan dokumen draf awal RSNPP 2040" }
    ]
  },
  {
    date: "31/03/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 1,
    description: {
      en: "Tasked by TPr Rosmadi Azizi to draft feedback letters for the RSNPP 2040 Review Meeting addressed to Penang Island City Council (MBPP) and PLANMalaysia@Penang regarding the upcoming April 3rd meeting.",
      ms: "Diarahkan oleh TPr Rosmadi Azizi untuk merangka surat maklum balas Mesyuarat Kajian Semula RSNPP 2040 yang dialamatkan kepada Majlis Bandaraya Pulau Pinang (MBPP) dan PLANMalaysia@Pulau Pinang mengenai mesyuarat 3 April ini."
    },
    remarks: {
      en: "Practice in drafting official departmental correspondence.",
      ms: "Latihan merangka surat-menyurat rasmi jabatan kerajaan."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Ensured seamless inter-departmental collaboration for the upcoming RSNPP coordination meetings.",
      ms: "Memastikan kerjasama lancar antara jabatan untuk mesyuarat penyelarasan RSNPP yang akan datang."
    },
    deliverables: [
      { en: "Draft coordination letters to MBPP", ms: "Merangka draf surat penyelarasan kepada MBPP" }
    ]
  },
  {
    date: "01/04/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 1,
    description: {
      en: "Conducted a detailed review and corrections of the RSNPP 2040 Survey Report in preparation for next week's meeting with the consultant panel.",
      ms: "Menjalankan semakan terperinci dan pembetulan Laporan Tinjauan RSNPP 2040 bagi persediaan mesyuarat bersama panel perunding minggu depan."
    },
    remarks: {
      en: "Focus on regional statistical precision.",
      ms: "Fokus kepada kejituan statistik serantau."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Polished crucial municipal metrics in the Survey Report prior to consultant review sessions.",
      ms: "Memurnikan metrik perbandaran penting dalam Laporan Tinjauan sebelum sesi semakan perunding."
    },
    deliverables: [
      { en: "First compilation of Survey Report feedback", ms: "Kompilasi pertama maklum balas Laporan Tinjauan" }
    ]
  },
  {
    date: "02/04/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 1,
    description: {
      en: "Continued final review and formatting corrections of the RSNPP 2040 Survey Report to ensure a smooth panel discussion process.",
      ms: "Meneruskan semakan akhir dan pembetulan format Laporan Tinjauan RSNPP 2040 bagi memastikan kelancaran panel perbincangan."
    },
    remarks: {
      en: "Spatial data update.",
      ms: "Kemas kini data spatial."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Completed editing of the Survey Report to meet high state standards.",
      ms: "Menyiapkan penyuntingan Laporan Tinjauan untuk memenuhi piawaian tinggi negeri."
    },
    deliverables: [
      { en: "Finalized RSNPP 2040 Survey Report corrections", ms: "Memuktamadkan pembetulan Laporan Tinjauan RSNPP 2040" }
    ]
  },
  {
    date: "05/04/2026",
    day: { en: "Sunday", ms: "Ahad" },
    week: 2,
    description: {
      en: "Continued reviewing the report, focusing on content accuracy and consistency of spatial info to ensure standardized datasets.",
      ms: "Menyambung kerja menyemak laporan, dengan tumpuan kepada ketepatan kandungan dan konsistensi maklumat spatial untuk memastikan dataset yang seragam."
    },
    remarks: {
      en: "Meticulousness in drafting technical planning reports.",
      ms: "Ketelitian dalam merangka laporan perancangan teknikal."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Guaranteed consistency across multi-chapter text-bound plans and actual drawn boundaries.",
      ms: "Menjamin konsistensi antara teks pelan merentasi pelbagai bab dengan sempadan yang dilukis."
    },
    deliverables: [
      { en: "Consistency analysis spreadsheet", ms: "Lembaran hamparan analisis konsistensi" }
    ]
  },
  {
    date: "06/04/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 2,
    description: {
      en: "Concluded the entire review process of the survey report and attended a meeting with Planning Unit URP 5 for a final draft briefing and review of associated plans.",
      ms: "Menamatkan keseluruhan proses semakan laporan tinjauan dan menghadiri mesyuarat bersama Unit Perancang URP 5 untuk taklimat draf akhir dan semakan pelan berkaitan."
    },
    remarks: {
      en: "Involving exposure to physical zoning blueprints.",
      ms: "Melibatkan pendedahan kepada pelan tindakan fizikal zon pembangunan."
    },
    category: "Technical Analysis",
    categoryLabel: { en: "Technical Analysis", ms: "Analisis Teknikal" },
    impact: {
      en: "Structured task distribution for physical blueprints of core Penang development sectors.",
      ms: "Menyusun pembahagian tugas untuk pelan cetak fizikal sektor pembangunan teras Pulau Pinang."
    },
    deliverables: [
      { en: "URP 5 task list", ms: "Senarai tugas Unit Perancang URP 5" },
      { en: "Zoning boundary drafts reviewed", ms: "Draf sempadan pengezonan yang disemak" }
    ]
  },
  {
    date: "07/04/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 2,
    description: {
      en: "Attended the Technical Committee Meeting at PPZU. Drafted suggestions for improvement and reviewed feedback on amendments from the previous meeting.",
      ms: "Menghadiri Mesyuarat Jawatankuasa Teknikal di PPZU. Merangka cadangan penambahbaikan dan menyemak maklum balas pindaan daripada mesyuarat terdahulu."
    },
    remarks: {
      en: "Comprehending bureaucratic processes and technical review mechanisms.",
      ms: "Memahami proses birokrasi dan mekanisme semakan teknikal."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Audited action items from prior tech meetings to ensure compliance of planning revisions.",
      ms: "Mengaudit item tindakan daripada mesyuarat teknikal terdahulu untuk memastikan kepatuhan semakan perancangan."
    },
    deliverables: [
      { en: "Audited compliance matrix of structural edits", ms: "Matriks kepatuhan teraudit bagi suntingan struktur" }
    ]
  },
  {
    date: "08/04/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 2,
    description: {
      en: "While attending the Technical Committee Meeting, received the revised final draft amended by consultant ANZ Planners, subsequently reviewing Chapter 6 (Infrastructure) & Chapter 7 (Land Use) in depth.",
      ms: "Semasa menghadiri Mesyuarat Jawatankuasa Teknikal, menerima draf akhir disemak yang dipinda oleh perunding ANZ Planners, seterusnya menyemak Bab 6 (Infrastruktur) & Bab 7 (Guna Tanah) secara mendalam."
    },
    remarks: {
      en: "Focusing on industrial and housing zones.",
      ms: "Fokus kepada zon perindustrian dan perumahan."
    },
    category: "Technical Analysis",
    categoryLabel: { en: "Technical Analysis", ms: "Analisis Teknikal" },
    impact: {
      en: "Reviewed master guidelines for structural zoning and major utilities for ANZ Planners' submission.",
      ms: "Menyemak garis panduan induk untuk pengezonan struktur dan utiliti utama bagi serahan ANZ Planners."
    },
    deliverables: [
      { en: "Chapter 6 & 7 checklist reports", ms: "Laporan senarai semak Bab 6 & 7" }
    ]
  },
  {
    date: "09/04/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 2,
    description: {
      en: "Conducted a detailed audit of the official spelling of villages and sub-districts in Penang based on the national MyGeoName database. Attended the PPZU multimedia and video planning meeting.",
      ms: "Menjalankan audit terperinci ejaan rasmi kampung dan mukim di Pulau Pinang berdasarkan pangkalan data kebangsaan MyGeoName. Menghadiri mesyuarat perancangan multimedia dan video PPZU."
    },
    remarks: {
      en: "Enhancing visual layout design skills and regional geography knowledge.",
      ms: "Meningkatkan kemahiran reka bentuk susun atur visual dan pengetahuan geografi serantau."
    },
    category: "Technical Analysis",
    categoryLabel: { en: "Technical Analysis", ms: "Analisis Teknikal" },
    impact: {
      en: "Standardized official names on the state map, removing orthographical errors that could cause legal disputes.",
      ms: "Menyeragamkan nama rasmi pada peta negeri, menghapuskan kesilapan ortografi yang boleh menyebabkan pertikaian undang-undang."
    },
    deliverables: [
      { en: "MyGeoName spelling correction index", ms: "Indeks pembetulan ejaan database MyGeoName" }
    ]
  },
  {
    date: "12/04/2026",
    day: { en: "Sunday", ms: "Ahad" },
    week: 3,
    description: {
      en: "Attended a retirement and staff redeployment ceremony. Subsequently resumed spelling audits of RSNPP 2040 utilizing the official MyGeoName database.",
      ms: "Menghadiri majlis persaraan dan pertukaran kakitangan. Seterusnya menyambung audit ejaan RSNPP 2040 menggunakan pangkalan data rasmi MyGeoName."
    },
    remarks: {
      en: "Emphasis on social integration within the organization.",
      ms: "Penekanan kepada integrasi sosial dalam organisasi kerja."
    },
    category: "Administration",
    categoryLabel: { en: "Administration", ms: "Pentadbiran" },
    impact: {
      en: "Maintained accurate and localized demographic identifiers on spatial blueprints.",
      ms: "Mengekalkan pengecam demografi yang tepat dan setempat pada pelan tindakan ruang."
    },
    deliverables: [
      { en: "Updated place nomenclature database", ms: "Pangkalan data tatanama tempat yang dikemas kini" }
    ]
  },
  {
    date: "13/04/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 3,
    description: {
      en: "Continued cross-matching place and village names to maintain strict consistency across all parts of the draft document.",
      ms: "Meneruskan pemadanan silang nama tempat dan kampung bagi memastikan konsistensi ketat di seluruh draf dokumen."
    },
    remarks: {
      en: "Emphasis on uniformity of terms.",
      ms: "Penekanan pada keseragaman istilah."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Unified structural naming conventions across thousands of pages.",
      ms: "Menyatukan konvensyen penamaan berstruktur merentasi beribu-ribu halaman."
    },
    deliverables: [
      { en: "Nomenclature concordance report", ms: "Laporan keselarasan tatanama tempat" }
    ]
  },
  {
    date: "14/04/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 3,
    description: {
      en: "Tasked by the Assistant Officer to compile and design a directory of Selangor State Government departments using Microsoft Word for reference archives.",
      ms: "Ditugaskan oleh Penolong Pegawai untuk menyusun dan mereka bentuk direktori jabatan Kerajaan Negeri Selangor menggunakan Microsoft Word untuk rujukan arkib."
    },
    remarks: {
      en: "Office administration and registry practice.",
      ms: "Amalan pentadbiran pejabat dan pengurusan pendaftaran kertas kerja."
    },
    category: "Administration",
    categoryLabel: { en: "Administration", ms: "Pentadbiran" },
    impact: {
      en: "Built a centralized governmental archive reference sheet to facilitate inter-state inquiries.",
      ms: "Membina helaian rujukan arkib kerajaan pusat bagi memudahkan pertanyaan antara negeri."
    },
    deliverables: [
      { en: "Selangor State Gov Directory layout", ms: "Susun atur Direktori Kerajaan Negeri Selangor" }
    ]
  },
  {
    date: "15/04/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 3,
    description: {
      en: "Performed Work From Home (WFH) duties monitored hourly via the online tracking tool 'Spot Me'. Audited place name spellings in the RSNPP 2040 draft.",
      ms: "Melaksanakan tugas Bekerja Dari Rumah (WFH) yang dipantau setiap jam melalui alat penjejak dalam talian 'Spot Me'. Mengaudit ejaan nama tempat dalam draf RSNPP 2040."
    },
    remarks: {
      en: "Experiencing flexible work arrangements (WFH).",
      ms: "Mengalami pengaturan kerja fleksibel (Bekerja Dari Rumah)."
    },
    category: "Administration",
    categoryLabel: { en: "Administration", ms: "Pentadbiran" },
    impact: {
      en: "Maintained high review velocity remotely with structured remote tooling support.",
      ms: "Mengekalkan kelajuan semakan tinggi dari jauh dengan sokongan alat kawalan jauh berstruktur."
    },
    deliverables: [
      { en: "Remote review journal file", ms: "Fail jurnal semakan kerja jauh" }
    ]
  },
  {
    date: "16/04/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 3,
    description: {
      en: "Concluded the entire audit process for place names in the final RSNPP 2040 draft, reviewing both hardcopy and softcopy files. This step honed attention to detail in regional planning documentation.",
      ms: "Menamatkan keseluruhan proses audit ejaan nama tempat dalam draf RSNPP 2040 dengan menyemak kedua-dua fail salinan cetak (hardcopy) dan salinan digital (softcopy). Langkah ini mengasah ketelitian data."
    },
    remarks: {
      en: "Phased verification of the finalized draft.",
      ms: "Peringkat pengesahan fasa draf yang telah dimuktamadkan."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Verified final publication-ready version of Penang places database with high quality control accuracy.",
      ms: "Mengesahkan versi sedia cetak pembetulan pangkalan data tempat Pulau Pinang dengan ketepatan kawalan kualiti yang tinggi."
    },
    deliverables: [
      { en: "Verification report of RSNPP 2040 places database", ms: "Laporan pengesahan pangkalan data tempat RSNPP 2040" }
    ]
  },
  {
    date: "19/04/2026",
    day: { en: "Sunday", ms: "Ahad" },
    week: 4,
    description: {
      en: "Reviewed the survey reports for Planning Focus Areas 2 to 6, emphasizing factual consistency. Identified and compiled a directory of statutory bodies in Selangor.",
      ms: "Menyemak laporan tinjauan bagi Kawasan Tumpuan Perancangan 2 hingga 6, menekankan konsistensi fakta. Mengenal pasti dan menyusun direktori badan berkanun di Selangor."
    },
    remarks: {
      en: "Focusing on statutory bodies.",
      ms: "Fokus kepada entiti badan berkanun."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Matched physical state objectives to institutional definitions of Selangor public units.",
      ms: "Memadankan objektif fizikal negeri dengan institusi badan awam Selangor."
    },
    deliverables: [
      { en: "Planning Focus Areas review notes", ms: "Nota semakan Kawasan Tumpuan Perancangan" }
    ]
  },
  {
    date: "20/04/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 4,
    description: {
      en: "Carried out a final edit of the survey report prior to Wednesday's Core Team Meeting with MBPP and MBSP. Corrected stylistic errors and overall layout.",
      ms: "Menjalankan suntingan akhir ke atas laporan tinjauan sebelum Mesyuarat Pasukan Teras hari Rabu bersama MBPP dan MBSP. Membetulkan kesilapan kaedah perulangan teks dan susun atur keseluruhan."
    },
    remarks: {
      en: "Preparation for the inter-municipal joint meeting.",
      ms: "Persediaan untuk mesyuarat bersama antara perbandaran tempatan."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Prepared immaculate documentation for presentation to Penang's key localized island and mainland councils.",
      ms: "Menyediakan dokumentasi terbaik untuk perbentangan di hadapan majlis tempatan utama Pulau Pinang (pilihan pulau dan tanah besar)."
    },
    deliverables: [
      { en: "Pre-meeting agenda documents reviewed", ms: "Semakan draf dokumen agenda pra-mesyuarat" }
    ]
  },
  {
    date: "21/04/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 4,
    description: {
      en: "Assisted the Assistant Officer in executing comparative analysis between the final draft and initial survey report to guarantee data alignment and consistency in zoning proposals.",
      ms: "Membantu Penolong Pegawai menjalankan analisis perbandingan antara draf akhir dengan laporan tinjauan awal untuk memastikan penjajaran data dalam cadangan pengezonan."
    },
    remarks: {
      en: "Learning cross-referencing methodologies.",
      ms: "Mempelajari metodologi pemadanan rujukan silang."
    },
    category: "Technical Analysis",
    categoryLabel: { en: "Technical Analysis", ms: "Analisis Teknikal" },
    impact: {
      en: "Discovered planning variances between localized reviews and unified master structure goals.",
      ms: "Mengesan perbezaan perancangan antara ulasan tempatan dengan matlamat pelan struktur induk berpusat."
    },
    deliverables: [
      { en: "Variance checklist compilation", ms: "Kompilasi senarai semak varians data" }
    ]
  },
  {
    date: "22/04/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 4,
    description: {
      en: "Worked from home (WFH) and attended the Core Team Meeting online. Discussed the harmonization of high-level multi-agency input.",
      ms: "Bekerja Dari Rumah (WFH) dan menghadiri Mesyuarat Pasukan Teras atas talian. Membincangkan pengharmonian input pelbagai agensi yang berimpak tinggi."
    },
    remarks: {
      en: "Gained exposure to inter-municipal strategic planning negotiations.",
      ms: "Mendapat pendedahan kepada rundingan perancangan strategik antara perbandaran."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Listened to active negotiations between Penang Island (MBPP) and Mainland (MBSP) planning executives.",
      ms: "Mendengar perundingan aktif antara eksekutif perancang Pulau Pinang (MBPP) dan Seberang Perai (MBSP)."
    },
    deliverables: [
      { en: "Meeting notes on inter-municipal zoning", ms: "Nota mesyuarat perundingan zon bersama" }
    ]
  },
  {
    date: "23/04/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 4,
    description: {
      en: "Assisted the Assistant Officer in drafting and dispatching formal departmental emails to relevant authorities using professional state correspondence syntax.",
      ms: "Membantu Penolong Pegawai merangka dan menghantar e-mel rasmi jabatan kepada pihak berkuasa berkenaan dengan sintaks penghantaran e-mel rasmi kerajaan."
    },
    remarks: {
      en: "Government corporate communication syntax training.",
      ms: "Latihan sintaks komunikasi korporat jabatan awam kerajaan."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Established critical institutional lines of inquiry with positive feedback turnarounds.",
      ms: "Membina hubungan rasmi dengan agensi luar yang membuahkan hasil maklum balas positif cepat."
    },
    deliverables: [
      { en: "Formal outgoing email registers", ms: "Daftar e-mel keluar rasmi" }
    ]
  },
  {
    date: "26/04/2026",
    day: { en: "Sunday", ms: "Ahad" },
    week: 5,
    description: {
      en: "Updated the layout hierarchy of the RSNPP 2040 report, verifying factual accuracy and ensuring formatting complies with official agency templates.",
      ms: "Mengemas kini hierarki susun atur laporan RSNPP 2040, mengesahkan ketepatan fakta dan memastikan format mematuhi templat ejen rasmi."
    },
    remarks: {
      en: "Planning-focused editorial formatting skills.",
      ms: "Kemahiran pemformatan editorial berpusatkan penulisan laporan perancangan."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Formatted reports to official printing standards of the National Town Planning department.",
      ms: "Memformat laporan untuk memenuhi piawaian percetakan rasmi Jabatan Perancangan Bandar Negara."
    },
    deliverables: [
      { en: "Formatted report sections", ms: "Bahagian laporan yang telah diformat" }
    ]
  },
  {
    date: "27/04/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 5,
    description: {
      en: "Worked from home (WFH), continuing the editing and rigorous verification of planning information in the RSNPP 2040 draft.",
      ms: "Bekerja Dari Rumah (WFH), meneruskan kerja-kerja penyuntingan dan pengesahan ketat maklumat perancangan dalam draf RSNPP 2040."
    },
    remarks: {
      en: "Structuring spatial planning databases.",
      ms: "Penyusunan pangkalan data perancangan spatial."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Optimized formatting flow and text layout consistency for remote tasks.",
      ms: "Mengoptimumkan aliran pemformatan dan konsistensi susun atur teks bagi tugasan jarak jauh."
    },
    deliverables: [
      { en: "Remote progress check documents", ms: "Dokumen semakan perkembangan tugasan jarak jauh" }
    ]
  },
  {
    date: "28/04/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 5,
    description: {
      en: "Concluded the final review of the draft report and assembled extensive supplementary dossiers for the upcoming alignment meeting.",
      ms: "Menyelesaikan semakan akhir laporan draf dan menyusun dossier sokongan yang komprehensif bagi mesyuarat penyelarasan akan datang."
    },
    remarks: {
      en: "Preparing dossiers for high-level consultative meets.",
      ms: "Penyediaan dossier komparatif bagi mesyuarat rundingan peringkat tinggi."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Pre-empted layout disputes by assembling rich contextual background data packets.",
      ms: "Mengurangkan kemungkinan pertikaian susun atur dengan mengumpulkan pakej data latar belakang komparatif yang kaya."
    },
    deliverables: [
      { en: "High-level coordination dossiers", ms: "Dossier penyelarasan peringkat tinggi" }
    ]
  },
  {
    date: "29/04/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 5,
    description: {
      en: "Assisted in coordinating logistics and compiling spatial datasets for next week's multi-agency RSNPP 2040 Refinement Session.",
      ms: "Membantu menyelaras logistik dan mengumpul dataset spatial bagi Sesi Pemurnian RSNPP 2040 melibatkan pelbagai agensi pada minggu hadapan."
    },
    remarks: {
      en: "Project management and teamwork coordination.",
      ms: "Pengurusan projek dan penyelarasan kerja berpasukan."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Allowed flawless operational execution of multi-agency refinement sessions.",
      ms: "Membolehkan pelaksanaan operasi yang sempurna bagi sesi pemurnian pelbagai agensi."
    },
    deliverables: [
      { en: "Refinement session master folder setup", ms: "Penyediaan folder induk sesi pemurnian" }
    ]
  },
  {
    date: "30/04/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 5,
    description: {
      en: "Attended the Final Draft Report Harmonization Meeting at PLANMalaysia Penang alongside state technical officers. Acquired insight into inter-departmental synergy.",
      ms: "Menghadiri Mesyuarat Pengharmonian Laporan Draf Akhir di PLANMalaysia Pulau Pinang bersama pegawai teknikal negeri. Mendapat kefahaman tentang sinergi antara jabatan."
    },
    remarks: {
      en: "Firsthand exposure to high-level physical board presentations.",
      ms: "Pendedahan langsung kepada pembentangan papan fizikal peringkat tinggi."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Participated in state-level alignment discussions over regional growth corridors and protected wetlands.",
      ms: "Mengambil bahagian dalam perbincangan penjajaran peringkat negeri mengenai koridor pertumbuhan wilayah dan tanah lembap yang dilindungi."
    },
    deliverables: [
      { en: "Harmonization panel transcript highlights", ms: "Sorotan transkrip perbincangan panel pengharmonian" }
    ]
  },
  {
    date: "04/05/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 6,
    description: {
      en: "Participated in the RSNPP 2040 Final Draft Refinement Session alongside representatives from PMPP, MBPP, MBSP, and NCIA. Discussed Chapter 4 (Penang Towards 2040) and Spatial Development Focus (TP1).",
      ms: "Mengambil bahagian dalam Sesi Pemurnian Draf Akhir RSNPP 2040 bersama wakil PMPP, MBPP, MBSP, dan NCIA. Membincangkan Bab 4 (Pulau Pinang Ke Arah 2040) dan Tumpuan Pembangunan Spatial (TP1)."
    },
    remarks: {
      en: "Focus on Consolidated and Guided Spatial Masterplans.",
      ms: "Fokus kepada Pelan Induk Spatial Terbimbing dan Bersepadu."
    },
    category: "Technical Analysis",
    categoryLabel: { en: "Technical Analysis", ms: "Analisis Teknikal" },
    impact: {
      en: "Contributed critiques on Penang's regional hubs and sustainable micro-zoning frameworks.",
      ms: "Menyumbang pandangan kritikal mengenai hab wilayah Pulau Pinang dan rangka kerja pengezonan mikro lestari."
    },
    deliverables: [
      { en: "TP1 spatial blueprint edits", ms: "Suntingan pelan spatial TP1" }
    ]
  },
  {
    date: "05/05/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 6,
    description: {
      en: "Represented the office in refinement focus groups addressing core sector TP2: Competitive and High-Impact Economy, tourism, and historical physical heritage buffers.",
      ms: "Mewakili pejabat dalam kumpulan fokus pemurnian bagi membincangkan sektor teras TP2: Ekonomi Kompetitif dan Berimpak Tinggi, pelancongan, dan zon penampan warisan sejarah."
    },
    remarks: {
      en: "Refining conservation policy guidelines for UNESCO World Heritage Sites.",
      ms: "Memurnikan garis panduan pemuliharaan dasar bagi Tapak Warisan Dunia UNESCO"
    },
    category: "Technical Analysis",
    categoryLabel: { en: "Technical Analysis", ms: "Analisis Teknikal" },
    impact: {
      en: "Helped align commercial layout proposals to George Town's historic conservation buffers.",
      ms: "Membantu menyelaraskan cadangan susun atur komersial dengan zon penampan pemuliharaan George Town."
    },
    deliverables: [
      { en: "Heritage zone buffer parameters document", ms: "Dokumen rujukan parameter sempadan zon warisan" }
    ]
  },
  {
    date: "06/05/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 6,
    description: {
      en: "Worked from home (WFH) to audit and refine the infrastructure and utilities section agreed upon during the prior refinement sessions.",
      ms: "Bekerja Dari Rumah (WFH) untuk mengaudit dan memperkemas bahagian infrastruktur dan utiliti yang telah dipersetujui dalam sesi pemurnian terdahulu."
    },
    remarks: {
      en: "Focusing on regional digital connectivity guidelines.",
      ms: "Memfokuskan kepada garis panduan sambungan digital wilayah."
    },
    category: "Draft Review",
    categoryLabel: { en: "Draft Review", ms: "Semakan Draf" },
    impact: {
      en: "Ensured critical digital and drainage grids match the revised planning timelines.",
      ms: "Memastikan grid digital dan salir air sepadan dengan linimasa perancangan yang disemak semula."
    },
    deliverables: [
      { en: "Utility corridor data sheet", ms: "Helaian helaian data koridor utiliti" }
    ]
  },
  {
    date: "07/05/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 6,
    description: {
      en: "Engaged in the final day of the Refinement Session, covering land use layout formats, GIS database layers, flagship programs, subject plans, and key diagrams.",
      ms: "Mengambil bahagian dalam hari terakhir Sesi Pemurnian, meliputi format susun atur guna tanah, lapisan pangkalan data GIS, program kebanggaan (flagship), pelan subjek, dan rajah utama."
    },
    remarks: {
      en: "Emphasis on conforming to national GIS metadata standards.",
      ms: "Penekanan kepada kepatuhan standard metadata GIS kebangsaan."
    },
    category: "Technical Analysis",
    categoryLabel: { en: "Technical Analysis", ms: "Analisis Teknikal" },
    impact: {
      en: "Standardized regional maps and unified GIS database outputs based on national metadata rules.",
      ms: "Menyeragamkan peta wilayah dan penyatuan output pangkalan data GIS berasaskan undang-undang metadata kebangsaan."
    },
    deliverables: [
      { en: "GIS layers compliance log", ms: "Log pematuhan lapisan GIS" }
    ]
  },
  {
    date: "10/05/2026",
    day: { en: "Sunday", ms: "Ahad" },
    week: 7,
    description: {
      en: "Assisted in organizing physical action plans, RSN draft maps, and reference guidelines in the departmental archive to facilitate seamless retrieval during regional parliament presentations.",
      ms: "Membantu menyusun pelan tindakan fizikal, peta draf RSN, dan garis panduan rujukan di arkib jabatan bagi memudahkan proses carian semasa pembentangan dewan perbandaran serantau."
    },
    remarks: {
      en: "Practical master registry and map archiving skills.",
      ms: "Kemahiran praktikal pendaftaran induk dokumen dan pengarkiban peta."
    },
    category: "Administration",
    categoryLabel: { en: "Administration", ms: "Pentadbiran" },
    impact: {
      en: "Created a modern structured physical map filing index for prompt lookup.",
      ms: "Mencipta indeks pemfailan peta carta fizikal berstruktur moden untuk carian pantas."
    },
    deliverables: [
      { en: "Filing index mapping document", ms: "Dokumen pemetaan indeks pemfailan" }
    ]
  },
  {
    date: "11/05/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 7,
    description: {
      en: "Worked from home (WFH) compiling and auditing the delegate list from various local governments (PBT) for the upcoming AI Workshop organized by PPZU.",
      ms: "Bekerja Dari Rumah (WFH) menyusun dan mengaudit senarai wakil perwakilan dari pelbagai pihak berkuasa tempatan (PBT) untuk Bengkel AI yang dianjurkan oleh PPZU."
    },
    remarks: {
      en: "Administrative aspects of coordinating national digital seminars.",
      ms: "Aspek pentadbiran penyelarasan seminar digital peringkat wilayah."
    },
    category: "Event & AI",
    categoryLabel: { en: "Event & AI", ms: "Acara & AI" },
    impact: {
      en: "Managed systematic registration data flow for hundreds of digital practitioners in Northern region.",
      ms: "Menguruskan aliran data pendaftaran sistematik bagi ratusan pengamal digital di Wilayah Utara."
    },
    deliverables: [
      { en: "PBT AI seminar registrations database", ms: "Pangkalan data pendaftaran seminar AI PBT" }
    ]
  },
  {
    date: "12/05/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 7,
    description: {
      en: "Conducted follow-up communications by contacting technical agencies and local councils across the Northern Zone to finalize registration slots before the Wednesday 3 PM deadline.",
      ms: "Menjalankan hubungan susulan dengan menghubungi agensi teknikal dan majlis tempatan di seluruh Zon Utara untuk memuktamadkan slot pendaftaran sebelum tarikh akhir Rabu jam 3 petang."
    },
    remarks: {
      en: "Developing professional phone and email diplomatic confidence.",
      ms: "Membina keyakinan komunikasi telefon dan e-mel profesional kerajaan."
    },
    category: "Coordination",
    categoryLabel: { en: "Coordination", ms: "Penyelarasan" },
    impact: {
      en: "Achieved a 100% attendance confirmation target for regional corporate seats.",
      ms: "Mencapai sasaran pengesahan kehadiran 100% bagi kerusi perwakilan korporat wilayah."
    },
    deliverables: [
      { en: "Attendance verification registry", ms: "Daftar pengesahan kehadiran peserta" }
    ]
  },
  {
    date: "13/05/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 7,
    description: {
      en: "Executed a final audit of the updated registration manifest for the AI program to eliminate database redundancies.",
      ms: "Menjalankan audit akhir ke atas manifesto pendaftaran yang dikemas kini untuk program AI bagi menghapuskan pertindihan data."
    },
    remarks: {
      en: "Consolidation of multi-agency participant registration data.",
      ms: "Penggabungan data pendaftaran peserta daripada pelbagai agensi."
    },
    category: "Event & AI",
    categoryLabel: { en: "Event & AI", ms: "Acara & AI" },
    impact: {
      en: "Eliminated registration overlaps and streamlined automated seat mappings.",
      ms: "Menghapuskan pertindihan pendaftaran dan memperkemas pembahagian tempat duduk automatik."
    },
    deliverables: [
      { en: "Cleaned delegates manifest list", ms: "Senarai manifesto wakil yang telah dibersihkan" }
    ]
  },
  {
    date: "14/05/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 7,
    description: {
      en: "Assisted in coordinating workshop handouts, slide decks, and logistics setups for the upcoming AI Training Seminar next week.",
      ms: "Membantu menyelaraskan risalah bengkel, slaid pembentangan, dan penyediaan logistik bagi Seminar Latihan AI minggu hadapan."
    },
    remarks: {
      en: "Preparation of instructional material for digital seminars.",
      ms: "Penyediaan bahan pembelajaran rujukan bagi seminar latihan digital."
    },
    category: "Event & AI",
    categoryLabel: { en: "Event & AI", ms: "Acara & AI" },
    impact: {
      en: "Assembled and audited training presentation materials and guidelines.",
      ms: "Mengumpul dan mengaudit garis panduan dan risalah pembentangan latihan."
    },
    deliverables: [
      { en: "Digital brochure", ms: "Risalah maklumat digital" },
      { en: "AI training layout guides", ms: "Garis panduan pembelajaran AI" }
    ]
  },
  {
    date: "17/05/2026",
    day: { en: "Sunday", ms: "Ahad" },
    week: 8,
    description: {
      en: "Learned and deployed 'Autocrat' automation inside Google Sheets to generate and distribute digital certificates of participation automatically to hundreds of delegates.",
      ms: "Mempelajari dan mengaplikasi automasi 'Autocrat' dalam Google Sheets untuk menjana dan mengedar sijil penyertaan digital secara automatik kepada ratusan peserta."
    },
    remarks: {
      en: "Office automation setups and process optimization.",
      ms: "Penyediaan automasi pentadbiran pejabat dan pengoptimuman proses tugasan."
    },
    category: "Event & AI",
    categoryLabel: { en: "Event & AI", ms: "Acara & AI" },
    impact: {
      en: "Reduced certificate distribution workflows from days down to a mere 10 minutes of automated runs.",
      ms: "Mengurangkan aliran kerja edaran sijil daripada berhari-hari kepada hanya 10 minit pusingan kerja automatik."
    },
    deliverables: [
      { en: "Autocrat certificate pipeline trigger", ms: "Picu sistem penyaluran sijil Autocrat" }
    ]
  },
  {
    date: "18/05/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 8,
    description: {
      en: "Audited physical logistics layouts and final delegate manifests before launching the 'Hands-On AI in Office Administration' seminar at Kedah Digital Library.",
      ms: "Mengaudit susun atur logistik fizikal dan senarai wakil peserta akhir sebelum pelancaran seminar 'Hands-On AI in Office Administration' di Pustaka Digital Kedah."
    },
    remarks: {
      en: "Practical hands-on field troubleshooting at seminar venues.",
      ms: "Penyelesaian masalah fizikal secara praktikal di lokasi seminar."
    },
    category: "Event & AI",
    categoryLabel: { en: "Event & AI", ms: "Acara & AI" },
    impact: {
      en: "Ironed out registration glitches with Kedah Digital Library's internal tech team.",
      ms: "Menyelesaikan masalah teknikal pendaftaran bersama pasukan teknikal dalaman Perpustakaan Digital Kedah."
    },
    deliverables: [
      { en: "Site checklist for Kedah Digital Library run", ms: "Senarai semak tapak Perpustakaan Digital Kedah" }
    ]
  },
  {
    date: "19/05/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 8,
    description: {
      en: "Served actively in registration management and technical operations for the 'Hands-On AI in Office Administration' seminar at Kedah Digital Library. Acquired exposure to AI tools in managing complex spatial text.",
      ms: "Bertugas aktif memimpin meja pendaftaran dan operasi teknikal bagi seminar 'Hands-On AI in Office Administration' di Perpustakaan Digital Kedah. Mendapat pendedahan penggunaan alat AI dalam menguruskan teks perancangan komparatif."
    },
    remarks: {
      en: "Firsthand training on cutting-edge generative AI models.",
      ms: "Latihan langsung mengenai model AI generatif terkini."
    },
    category: "Event & AI",
    categoryLabel: { en: "Event & AI", ms: "Acara & AI" },
    impact: {
      en: "Ensured a flawless event run, successfully ushering and educating 60+ regional planners on AI tools.",
      ms: "Memastikan kelancaran acara, berjaya membantu dan melatih 60+ pegawai perancang wilayah mengenai teknologi AI."
    },
    deliverables: [
      { en: "Delegate feedback report metrics", ms: "Metrik laporan maklum balas peserta" }
    ]
  },
  {
    date: "20/05/2026",
    day: { en: "Wednesday", ms: "Rabu" },
    week: 8,
    description: {
      en: "Worked from home (WFH) practicing the AI workflows learned with TPr Hakimi to refine, translate, and correct the RSNPP 2040 strategic planning draft chapters.",
      ms: "Bekerja Dari Rumah (WFH) mempraktikkan aliran kerja AI yang dipelajari bersama TPr Hakimi untuk memperkemas, menterjemah, dan membetulkan bab draf perancangan strategik RSNPP 2040."
    },
    remarks: {
      en: "Deploying AI models in editing massive urban masterplans.",
      ms: "Menggunakan model keputusan AI dalam menyunting pelan induk bandar berskala besar."
    },
    category: "Event & AI",
    categoryLabel: { en: "Event & AI", ms: "Acara & AI" },
    impact: {
      en: "Dramatically increased copyediting velocity for high-volume sections of the Penang Master plan.",
      ms: "Meningkatkan kelajuan suntingan teks secara dramatik bagi bahagian penulisan berskala besar Pelan Induk Pulau Pinang."
    },
    deliverables: [
      { en: "AI-optimized translation draft sections", ms: "Draf bahagian terjemahan yang dioptimumkan AI" }
    ]
  },
  {
    date: "21/05/2026",
    day: { en: "Thursday", ms: "Khamis" },
    week: 8,
    description: {
      en: "Learned and navigated the 'SMARTPLAN' land information database to inspect public zoning objections. Generated map slide decks and plotted satellite imaging overlays.",
      ms: "Mempelajari dan meneroka pangkalan data maklumat tanah 'SMARTPLAN' untuk memeriksa bantahan pengezonan awam. Menghasilkan slaid peta dan memaparkan tindanan imej satelit."
    },
    remarks: {
      en: "Practical training in addressing and resolving public land complaints.",
      ms: "Latihan praktikal dalam mengurus dan menyelesaikan aduan tanah awam."
    },
    category: "zoning",
    categoryLabel: { en: "Zoning", ms: "Pengezonan" },
    impact: {
      en: "Contextualized public space claims by overlaying interactive SMARTPLAN layers onto actual satellite maps.",
      ms: "Menghubungkan tuntutan ruang awam dengan memaparkan lapisan SMARTPLAN interaktif pada peta satelit sebenar."
    },
    deliverables: [
      { en: "Zoning Objection Slide - Set A", ms: "Slaid Bantahan Pengezonan - Set A" }
    ]
  },
  {
    date: "24/05/2026",
    day: { en: "Sunday", ms: "Ahad" },
    week: 9,
    description: {
      en: "Tasked with detailing SMARTPLAN slides, accurately mapping the boundaries of industrial and residential zones subjected to active public objections in the RSNPP 2040 draft.",
      ms: "Ditugaskan untuk memperincikan slaid SMARTPLAN, memetakan secara tepat sempadan zon perindustrian dan kediaman yang tertakluk kepada bantahan awam aktif dalam draf RSNPP 2040."
    },
    remarks: {
      en: "Generating exact physical zoning boundary maps.",
      ms: "Menghasilkan peta sempadan pengezonan fizikal yang tepat."
    },
    category: "zoning",
    categoryLabel: { en: "Zoning", ms: "Pengezonan" },
    impact: {
      en: "Equipped senior planning officers with visual overlays to negotiate zoning amendments and public concerns.",
      ms: "Menyediakan tindanan peta visual kepada pegawai perancang kanan untuk rundingan pindaan pengezonan dan kebimbangan awam."
    },
    deliverables: [
      { en: "High-resolution Zoning Objections Deck - Set B", ms: "Slaid Bantahan Pengezonan Resolusi Tinggi - Set B" }
    ]
  },
  {
    date: "25/05/2026",
    day: { en: "Monday", ms: "Isnin" },
    week: 9,
    description: {
      en: "WFH Spatial Analysis: Benchmarked municipal zoning maps against live satellite datasets to evaluate physical boundary overlay complaints submitted by private plot owners.",
      ms: "Analisis Spatial WFH: Menanda aras peta pengezonan majlis perbandaran berbanding dataset satelit langsung untuk menilai aduan pertindihan sempadan fizikal yang dihantar oleh pemilik lot swasta."
    },
    remarks: {
      en: "Macro-level land use map critique.",
      ms: "Kritikan pelan guna tanah peringkat makro."
    },
    category: "zoning",
    categoryLabel: { en: "Zoning", ms: "Pengezonan" },
    impact: {
      en: "Identified 3 minor spatial overlaps in residential boundaries that had generated public dispute.",
      ms: "Mengenal pasti 3 pertindihan kecil spatial pada sempadan kediaman yang mencetuskan pertikaian awam."
    },
    deliverables: [
      { en: "Spatial variance overlay coordinates list", ms: "Senarai koordinat tindanan varians spatial" }
    ]
  },
  {
    date: "26/05/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 9,
    description: {
      en: "Concluded and compiled a representative PowerPoint presentation outlining development control zones, satellite imagery matching, and logged planning disputes for executive briefings.",
      ms: "Menyimpulkan dan membina pembentangan PowerPoint representatif yang memaparkan zon kawalan pembangunan, padanan imej satelit, dan pertikaian perancangan berdaftar untuk taklimat eksekutif."
    },
    remarks: {
      en: "Advanced spatial storytelling and visual presentation techniques.",
      ms: "Teknik penyampaian kisah spatial dan perbentangan visual maju."
    },
    category: "zoning",
    categoryLabel: { en: "Zoning", ms: "Pengezonan" },
    impact: {
      en: "Delivered a complete, executive-ready presentation detailing 22 zoning objections with GIS coordinates.",
      ms: "Menyerahkan pembentangan sedia eksekutif yang lengkap memperincikan 22 aduan pengezonan berserta koordinat GIS."
    },
    deliverables: [
      { en: "Zoning Objections Final Executive Presentation Slides", ms: "Slaid Pembentangan Eksekutif Akhir Bantahan Pengezonan" }
    ]
  },
  {
    date: "02/06/2026",
    day: { en: "Tuesday", ms: "Selasa" },
    week: 10,
    description: {
      en: "Following national holidays, resumed designing detailed zoning slides using SMARTPLAN databases, crafting interactive overlays of Penang Land Use Objections for the next round of executive board meetings.",
      ms: "Susulan cuti umum kebangsaan, menyambung semula aktiviti mereka bentuk slaid semakan mengezon menggunakan pangkalan data SMARTPLAN, melakar tindanan interaktif aduan guna tanah Pulau Pinang bagi mesyuarat lembaga eksekutif seterusnya."
    },
    remarks: {
      en: "Synthesizing SMARTPLAN telemetry with draft GIS boundary layers.",
      ms: "Menggabungkan telemetri SMARTPLAN dengan lapisan draf sempadan GIS."
    },
    category: "zoning",
    categoryLabel: { en: "Zoning", ms: "Pengezonan" },
    impact: {
      en: "Consolidated all active public objection cases into a highly-searchable visual map grid ready for direct executive intervention.",
      ms: "Menyatukan semua kes bantahan pengezonan aktif ke dalam grid semakan peta visual sedia rujukan eksekutif langsung."
    },
    deliverables: [
      { en: "Objection database layout mapping V2", ms: "Pemetaan susun atur pangkalan data bantahan V2" }
    ]
  }
];
