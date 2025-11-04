"use client";
import { useConsent } from "./ConsentProvider";

export default function CMP() {
  const { consent, setConsent } = useConsent();
  if (consent !== "unknown") return null;
  
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999, background: "#111827", color: "white", padding: "16px 20px", display: "flex", gap: 16, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
      <div style={{ flex: "1 1 300px" }}>
        🍪 Usamos cookies essenciais e, com seu consentimento, cookies de marketing (Google AdSense).
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <button onClick={() => setConsent("denied")} style={{ padding: "10px 16px", background: "#374151", color: "#fff", borderRadius: 8, border: 0, cursor: "pointer" }}>Recusar</button>
        <button onClick={() => setConsent("granted")} style={{ padding: "10px 16px", background: "#10b981", color: "#fff", fontWeight: 700, borderRadius: 8, border: 0, cursor: "pointer" }}>Aceitar</button>
      </div>
    </div>
  );
}
