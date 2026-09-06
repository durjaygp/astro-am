// src/data/wageTransparencyStates.ts
// State pay/wage transparency laws affecting job posting content.
// Verified as of Aug 2026. Review quarterly - this list changes as
// new states enact laws (Virginia and Maine both went live in 2026).
//
// "requiresRangeInPosting: true" = the ad itself must state a range.
// "requiresRangeInPosting: false" = disclosure required only on
// request or before an offer, not in the posting text itself.

export interface WageLawEntry {
  state: string;
  abbr: string;
  effectiveDate: string;
  employerThreshold: string;
  requiresRangeInPosting: boolean;
  sourceUrl: string;
  sourceLabel: string;
}

export const wageTransparencyStates: WageLawEntry[] = [
  {
    state: "California",
    abbr: "CA",
    effectiveDate: "Jan 1, 2023",
    employerThreshold: "15+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://www.dir.ca.gov/dlse/California_Equal_Pay_Act.htm",
    sourceLabel: "California DIR",
  },
  {
    state: "Colorado",
    abbr: "CO",
    effectiveDate: "Jan 1, 2021",
    employerThreshold: "All employers with 1+ CO employee",
    requiresRangeInPosting: true,
    sourceUrl: "https://cdle.colorado.gov/dlss/equal-pay-for-equal-work-act",
    sourceLabel: "Colorado CDLE",
  },
  {
    state: "Connecticut",
    abbr: "CT",
    effectiveDate: "Oct 1, 2021",
    employerThreshold: "All employers (disclosure on request / before offer)",
    requiresRangeInPosting: false,
    sourceUrl: "https://www.cga.ct.gov/",
    sourceLabel: "Connecticut General Assembly",
  },
  {
    state: "Hawaii",
    abbr: "HI",
    effectiveDate: "Jan 1, 2024",
    employerThreshold: "50+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://www.hecouncil.org/",
    sourceLabel: "Hawaii Employer Council",
  },
  {
    state: "Illinois",
    abbr: "IL",
    effectiveDate: "Jan 1, 2025",
    employerThreshold: "15+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://labor.illinois.gov/",
    sourceLabel: "Illinois Dept. of Labor",
  },
  {
    state: "Maine",
    abbr: "ME",
    effectiveDate: "Jul 29, 2026",
    employerThreshold: "Check current threshold before posting",
    requiresRangeInPosting: true,
    sourceUrl: "https://www.maine.gov/labor/",
    sourceLabel: "Maine Dept. of Labor",
  },
  {
    state: "Maryland",
    abbr: "MD",
    effectiveDate: "Oct 1, 2024",
    employerThreshold: "All employers",
    requiresRangeInPosting: true,
    sourceUrl: "https://labor.maryland.gov/labor/wages/esswagerangefaq.shtml",
    sourceLabel: "Maryland Dept. of Labor",
  },
  {
    state: "Massachusetts",
    abbr: "MA",
    effectiveDate: "Oct 29, 2025",
    employerThreshold: "25+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://www.mass.gov/",
    sourceLabel: "Massachusetts.gov",
  },
  {
    state: "Minnesota",
    abbr: "MN",
    effectiveDate: "Jan 1, 2025",
    employerThreshold: "30+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://www.dli.mn.gov/",
    sourceLabel: "Minnesota DLI",
  },
  {
    state: "Nevada",
    abbr: "NV",
    effectiveDate: "Oct 1, 2021",
    employerThreshold: "All employers (disclosure on request)",
    requiresRangeInPosting: false,
    sourceUrl: "https://labor.nv.gov/",
    sourceLabel: "Nevada Labor Commissioner",
  },
  {
    state: "New Jersey",
    abbr: "NJ",
    effectiveDate: "Jun 1, 2025",
    employerThreshold: "10+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://www.nj.gov/labor/",
    sourceLabel: "New Jersey DOL",
  },
  {
    state: "New York",
    abbr: "NY",
    effectiveDate: "Sep 17, 2023",
    employerThreshold: "4+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://dol.ny.gov/pay-transparency",
    sourceLabel: "New York DOL",
  },
  {
    state: "Rhode Island",
    abbr: "RI",
    effectiveDate: "Jan 1, 2023",
    employerThreshold: "All employers (disclosure on request / before offer)",
    requiresRangeInPosting: false,
    sourceUrl: "https://dlt.ri.gov/",
    sourceLabel: "Rhode Island DLT",
  },
  {
    state: "Vermont",
    abbr: "VT",
    effectiveDate: "Jul 1, 2025",
    employerThreshold: "5+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://labor.vermont.gov/",
    sourceLabel: "Vermont Dept. of Labor",
  },
  {
    state: "Virginia",
    abbr: "VA",
    effectiveDate: "Jul 1, 2026",
    employerThreshold: "All employers",
    requiresRangeInPosting: true,
    sourceUrl: "https://lis.virginia.gov/bill-details/20261/HB636",
    sourceLabel: "Virginia LIS (HB636)",
  },
  {
    state: "Washington",
    abbr: "WA",
    effectiveDate: "Jan 1, 2023",
    employerThreshold: "15+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://app.leg.wa.gov/RCW/default.aspx?cite=49.58.110",
    sourceLabel: "Washington RCW",
  },
  {
    state: "Washington, D.C.",
    abbr: "DC",
    effectiveDate: "Jun 30, 2024",
    employerThreshold: "All employers",
    requiresRangeInPosting: true,
    sourceUrl: "https://does.dc.gov/",
    sourceLabel: "DC Dept. of Employment Services",
  },
  {
    state: "Delaware",
    abbr: "DE",
    effectiveDate: "Sep 26, 2027 (not yet in effect)",
    employerThreshold: "25+ employees",
    requiresRangeInPosting: true,
    sourceUrl: "https://labor.delaware.gov/",
    sourceLabel: "Delaware Dept. of Labor",
  },
];
