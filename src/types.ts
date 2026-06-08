/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface BilingualText {
  en: string;
  ms: string;
}

export interface LogbookTask {
  date: string;
  day: string | BilingualText;
  week: number;
  description: string | BilingualText;
  remarks: string | BilingualText;
  category: "Draft Review" | "Coordination" | "Technical Analysis" | "Event & AI" | "zoning" | "Administration";
  categoryLabel?: BilingualText;
  impact: string | BilingualText;
  deliverables?: (string | BilingualText)[];
}

export interface Internship {
  organization: string | BilingualText;
  role: string | BilingualText;
  period: string | BilingualText;
  location: string | BilingualText;
  supervisor: string | BilingualText;
  description: string | BilingualText;
  keyProjects: (string | BilingualText)[];
}

export interface Education {
  institution: string | BilingualText;
  degree: string | BilingualText;
  period: string | BilingualText;
  details: string | BilingualText;
  gpa?: string;
}

export interface Award {
  title: string | BilingualText;
  organization: string | BilingualText;
  year: string;
  achievement: string | BilingualText;
}

export interface CurricularActivity {
  activity: string | BilingualText;
  role?: string | BilingualText;
  organization: string | BilingualText;
  year: string;
}

