// src/main.tsx — React entry point
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// NOTE: Do NOT import Vite's default index.css here — it overrides text colours.
// All styles come from src/styles/global.css (imported inside App.tsx).

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Root element #root not found in index.html");
}

createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);