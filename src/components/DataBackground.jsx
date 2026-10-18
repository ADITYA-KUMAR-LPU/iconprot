// DataBackground.jsx
// Simple wrapper around the InteractiveBackground component.
// Allows each section to specify a "mode" prop to customise visuals.
// The default "hero" mode renders the full neural‑network overlay and particles.

import React from "react";
import InteractiveBackground from "./InteractiveBackground";

/**
 * DataBackground – renders the interactive, data‑science canvas.
 * @param {object} props
 * @param {string} props.mode – Visual style identifier (e.g., "hero", "about", "pipeline", …).
 */
export default function DataBackground({ mode = "hero" }) {
  return <InteractiveBackground mode={mode} />;
}
