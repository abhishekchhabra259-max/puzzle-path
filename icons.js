// Minimal line-icon set. Reused across conceptually similar skills.
// All icons: 24x24 viewBox, stroke=currentColor, no fill (except tiny accents).
const ICONS = {
  eye: '<circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"/>',
  hand: '<path d="M8 13V5a1.5 1.5 0 0 1 3 0v6"/><path d="M11 11V4a1.5 1.5 0 0 1 3 0v7"/><path d="M14 11V5a1.5 1.5 0 0 1 3 0v8"/><path d="M8 12l-1.5 1.2A2 2 0 0 0 6 15v1c0 3 2 6 6 6s6-3 6-6v-4a1.5 1.5 0 0 0-3 0"/>',
  drop: '<path d="M12 3s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10Z"/>',
  "circle-piece": '<circle cx="12" cy="13" r="6"/><circle cx="12" cy="6" r="2"/>',
  hide: '<path d="M3 10c2-3 5-5 9-5s7 2 9 5"/><path d="M3 10v3c0 4 4 6 9 6s9-2 9-6v-3"/><path d="M9 13a3 3 0 0 0 6 0"/>',
  pair: '<rect x="3" y="6" width="7" height="9" rx="1.5"/><rect x="14" y="6" width="7" height="9" rx="1.5"/><path d="M10 10.5h4"/>',
  palette: '<circle cx="12" cy="12" r="9"/><circle cx="8.5" cy="10" r="1.4" fill="currentColor"/><circle cx="12" cy="8" r="1.4" fill="currentColor"/><circle cx="15.5" cy="10" r="1.4" fill="currentColor"/><circle cx="10" cy="15" r="1.4" fill="currentColor"/>',
  shapes: '<circle cx="7" cy="7" r="4"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><path d="M8 21l4-8 4 8Z"/>',
  "multi-knob": '<circle cx="6" cy="6" r="3"/><rect x="14" y="3" width="6" height="6" rx="1"/><path d="M4 18l3-6 3 6Z"/>',
  link: '<path d="M9 12a4 4 0 0 1 4-4h2a4 4 0 1 1 0 8h-1"/><path d="M15 12a4 4 0 0 1-4 4H9a4 4 0 1 1 0-8h1"/>',
  "puzzle-3": '<path d="M4 4h6v3.2a1.6 1.6 0 0 0 2.4 1.4A2 2 0 1 1 15 12a1.6 1.6 0 0 0 1.4 2.4H20v6h-6v-3.2a1.6 1.6 0 0 0-2.4-1.4A2 2 0 1 1 9 12a1.6 1.6 0 0 0-1.4-2.4H4Z"/>',
  frame: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 12h18"/>',
  picture: '<rect x="3" y="4" width="18" height="14" rx="1.5"/><circle cx="8" cy="10" r="1.5" fill="currentColor"/><path d="M4 16l5-4 4 3 3-3 4 4"/>',
  corner: '<path d="M4 4v6M4 4h6"/><path d="M20 20v-6M20 20h-6"/><rect x="4" y="4" width="16" height="16" rx="1.5" stroke-dasharray="2 3"/>',
  steps: '<path d="M3 18h4v-3H3zM8 18h4v-8H8zM13 18h4v-13h-4z"/>',
  "puzzle-grid": '<path d="M4 4h6v3a1.5 1.5 0 0 0 3 0V4h7v6h-3a1.5 1.5 0 0 0 0 3h3v7h-7v-3a1.5 1.5 0 0 0-3 0v3H4v-7h3a1.5 1.5 0 0 0 0-3H4Z"/>',
  rotate: '<path d="M4 12a8 8 0 1 1 3 6.3"/><path d="M3 20v-5h5"/>',
  "puzzle-whole": '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1" fill="currentColor" fill-opacity="0.15"/>',
  outline: '<path d="M12 3l3 5h6l-4.5 4 2 6-6.5-3.5L5.5 18l2-6L3 8h6Z"/>',
  symmetry: '<path d="M12 3v18"/><path d="M6 6h4M6 12h4M6 18h4"/><path d="M14 6h4M14 12h4M14 18h4"/>',
  "puzzle-large": '<path d="M3 3h7v2.5a1.3 1.3 0 0 0 2.6 0V3H20v7h-2.5a1.3 1.3 0 0 0 0 2.6H20V20h-7.4a1.3 1.3 0 0 0 0-2.6V20H5v-7h2.5a1.3 1.3 0 0 0 0-2.6H5V3Z"/>',
  border: '<rect x="3" y="3" width="18" height="18" rx="1.5"/><rect x="7" y="7" width="10" height="10" rx="1" stroke-dasharray="2 2"/>',
  group: '<circle cx="7" cy="8" r="2.5"/><circle cx="16" cy="8" r="2.5"/><circle cx="11.5" cy="15" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9"/>',
  tangram: '<path d="M3 3h9l-9 9Z"/><path d="M12 3h9v9Z"/><path d="M3 12l9 9H3Z"/><path d="M12 12l9 9h-9Z" fill="currentColor" fill-opacity="0.15"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9Z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
  "rotate-3d": '<path d="M12 3a9 9 0 1 0 9 9"/><path d="M21 3v6h-6"/><ellipse cx="12" cy="12" rx="4" ry="7" stroke-dasharray="2 2"/>',
  plan: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9h10M7 13h10M7 17h6"/>',
  view: '<path d="M3 8l9-5 9 5-9 5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.8 2.8M15.2 15.2 18 18M18 6l-2.8 2.8M8.8 15.2 6 18"/>',
  "grid-logic": '<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><path d="M15 17h6M18 14v6"/>',
  maze: '<path d="M3 3h6v6H6v6h6V9h3v9h6"/>',
  abstract: '<path d="M12 3l5 3v6l-5 3-5-3V6Z"/><path d="M12 21l5-3v-3M7 15v3l5 3"/>',
  trophy: '<path d="M8 4h8v4a4 4 0 0 1-8 0Z"/><path d="M5 6h3M16 6h3"/><path d="M5 6a3 3 0 0 0 3 4M19 6a3 3 0 0 1-3 4"/><path d="M12 12v4M9 20h6M10 16h4v4h-4Z"/>'
};

function iconSvg(key, size) {
  const s = size || 22;
  const path = ICONS[key] || ICONS.check;
  return `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}
