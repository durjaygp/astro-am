// src/data/cities.ts
// One entry per metro page. Add a city here and the [city].astro
// template below generates the whole page automatically.
//
// priceRange is optional on purpose: fill it in as you collect real
// newspaper rate-card data. Pages without it just show the
// "request a quote" CTA more prominently instead of a fake number.

export interface CityData {
  slug: string;            // used in the URL: /perm-ad-cost/[slug]
  city: string;
  state: string;
  stateAbbr: string;
  newspaper: string;       // primary Sunday newspaper of general circulation
  priceRange?: {
    low: number;
    high: number;
  };
}

export const cities: CityData[] = [
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    stateAbbr: "GA",
    newspaper: "The Atlanta Journal-Constitution",
    priceRange: { low: 450, high: 900 },
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    stateAbbr: "IL",
    newspaper: "Chicago Tribune",
    // no priceRange yet - page will show quote CTA instead of a number
  },
  {
    slug: "charlotte-nc",
    city: "Charlotte",
    state: "North Carolina",
    stateAbbr: "NC",
    newspaper: "The Charlotte Observer",
    priceRange: { low: 350, high: 700 },
  },
];
