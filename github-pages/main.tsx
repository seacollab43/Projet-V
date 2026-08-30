import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/app/globals.css";
import { Vet24Experience } from "@/components/vet24-experience";

const root = document.getElementById("root");

if (!root) {
  throw new Error("GitHub Pages root element is missing.");
}

createRoot(root).render(
  <StrictMode>
    <Vet24Experience />
  </StrictMode>,
);
