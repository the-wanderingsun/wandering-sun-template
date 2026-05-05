import type { City } from '@/types'

// ✏️ Edit: Replace these sample cities with your own travel history.
// type: 'current' | 'lived' | 'visited'
// - 'current'  → where you are now (highlighted pin)
// - 'lived'    → places you stayed for weeks / months
// - 'visited'  → short trips & stopovers

export const CITIES: City[] = [
  {
    id: 'city-a',
    name: 'YOUR CITY',            // ✏️ e.g. 'LISBON'
    region: 'YOUR REGION · 地区',  // ✏️ e.g. 'SOUTHERN EUROPE · 葡萄牙'
    lat: 38.72,
    lon: -9.14,
    type: 'current',
    statusText: 'Based here · 2026',   // ✏️ e.g. 'Currently here 2026.05'
    coords: '38.716° N · 9.139° W',   // ✏️ update to match lat/lon above
    desc: 'Write a few sentences about this city from your personal perspective. What surprised you? What made you stay?',
    articles: [
      // ✏️ Link to related blog posts, or leave the array empty: []
      { title: 'Your article title', tag: 'LIVING', href: '/blog/your-slug' },
    ],
  },
  {
    id: 'city-b',
    name: 'SECOND CITY',
    region: 'REGION · 地区',
    lat: 13.76,
    lon: 100.50,
    type: 'lived',
    statusText: 'Lived here 2025.06～08',
    coords: '13.756° N · 100.502° E',
    desc: 'Another city where you spent real time — not just passing through. What was daily life like? What did you learn there?',
    articles: [],
  },
  {
    id: 'city-c',
    name: 'THIRD CITY',
    region: 'REGION · 地区',
    lat: 1.35,
    lon: 103.82,
    type: 'visited',
    statusText: 'Stopover',
    coords: '1.352° N · 103.820° E',
    desc: 'A quick visit or stopover. Even short trips leave impressions worth recording.',
    articles: [],
  },
]
