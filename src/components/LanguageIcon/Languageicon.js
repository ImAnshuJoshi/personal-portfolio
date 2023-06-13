import React from "react";
import { useGlobalContext } from "./context.js";

export default function LanguageIcon({ language, containerRef, cardIcon }) {
  return (
    <div
      className="techstack-language-icon btn-transparent"
      style={{
        color: language.color,
        margin: `${cardIcon && "var(--spacing-smaller)"}`,
      }}
    >
      {language.icon}
    </div>
  );
}
