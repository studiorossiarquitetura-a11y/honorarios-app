"use client";
import React, { useEffect, useRef } from "react";
import { useConsent } from "./ConsentProvider";

export default function AdSlot() {
  const { consent } = useConsent();
  
  return (
    <div style={{ margin: "20px 0", minHeight: 100, background: "#f3f4f6", color: "#9ca3af", padding: 20, textAlign: "center", borderRadius: 12, border: "2px dashed #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
      📢 Espaço Publicitário
    </div>
  );
}
