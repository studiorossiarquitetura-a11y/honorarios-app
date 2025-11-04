"use client";
import React, { useState, useCallback } from "react";
import data from "../data/tabelas-2025.json";
import type { Nivel, TipoServico, CalculationResult } from "./types";

export default function Calculator() {
  const [tipo, setTipo] = useState<TipoServico | "">("");
  const [area, setArea] = useState("");
  const [custoObra, setCustoObra] = useState("");
  const [horas, setHoras] = useState("");
  const [nivel, setNivel] = useState<Nivel | "">("");
  const [mult, setMult] = useState("");
  const [resultado, setResultado] = useState<CalculationResult | null>(null);

  const calcular = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!tipo) return;

    const v = data.valores;
    let min = 0, max = 0, medio = 0, detalhes = "";

    if (tipo === "consultoria" && nivel && horas) {
      const t = v.consultoria[nivel];
      const h = parseFloat(horas);
      min = h * t.min;
      max = h * t.max;
      medio = (min + max) / 2;
      detalhes = `Consultoria (${nivel}) • ${h}h • R$ ${t.min}-${t.max}/h`;
    } else if (tipo === "acompanhamento" && custoObra) {
      const custo = parseFloat(custoObra);
      min = custo * (v.acompanhamento.min / 100);
      max = custo * (v.acompanhamento.max / 100);
      medio = (min + max) / 2;
      detalhes = `${v.acompanhamento.min}%-${v.acompanhamento.max}% sobre R$ ${custo.toLocaleString("pt-BR")}`;
    } else if (area && mult) {
      const a = parseFloat(area);
      const m = parseFloat(mult);
      min = a * v[tipo].min * m;
      max = a * v[tipo].max * m;
      medio = (min + max) / 2;
      detalhes = `${a}m² • R$ ${(v[tipo].min * m).toFixed(2)}-${(v[tipo].max * m).toFixed(2)}/m²`;
    }

    setResultado({ min, max, medio, detalhes });
  }, [tipo, area, custoObra, horas, nivel, mult]);

  return (
    <div style={{ background: "white", borderRadius: 16, padding: 24, boxShadow: "0 10px 40px rgba(0,0,0,.1)" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>💰 Calculadora de Honorários (2025)</h2>
      <form onSubmit={calcular} style={{ display: "grid", gap: 16 }}>
        <div>
          <label>Tipo de Serviço *</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value as any)} required>
            <option value="">Selecione...</option>
            <option value="projeto-basico">Projeto Básico</option>
            <option value="projeto-completo">Projeto Completo</option>
            <option value="acompanhamento">Acompanhamento de Obra</option>
            <option value="consultoria">Consultoria por Hora</option>
          </select>
        </div>

        {tipo && tipo !== "consultoria" && tipo !== "acompanhamento" && (
          <div>
            <label>Área (m²) *</label>
            <input type="number" min={1} step="0.01" value={area} onChange={(e) => setArea(e.target.value)} placeholder="150" required />
          </div>
        )}

        {tipo === "acompanhamento" && (
          <div>
            <label>Custo da Obra (R$) *</label>
            <input type="number" min={1} value={custoObra} onChange={(e) => setCustoObra(e.target.value)} placeholder="500000" required />
          </div>
        )}

        {tipo === "consultoria" && (
          <>
            <div>
              <label>Horas *</label>
              <input type="number" min={1} value={horas} onChange={(e) => setHoras(e.target.value)} placeholder="40" required />
            </div>
            <div>
              <label>Nível *</label>
              <select value={nivel} onChange={(e) => setNivel(e.target.value as any)} required>
                <option value="">Selecione...</option>
                <option value="junior">Júnior</option>
                <option value="pleno">Pleno</option>
                <option value="senior">Sênior</option>
              </select>
            </div>
          </>
        )}

        {tipo && tipo !== "consultoria" && (
          <div>
            <label>Tipo de Edificação *</label>
            <select value={mult} onChange={(e) => setMult(e.target.value)} required>
              <option value="">Selecione...</option>
              {Object.entries(data.multiplicadores).map(([k, v]) => (
                <option key={k} value={v.valor}>{v.descricao}</option>
              ))}
            </select>
          </div>
        )}

        <button type="submit" style={{ padding: "14px", borderRadius: 10, border: 0, background: "linear-gradient(135deg, #667eea, #764ba2)", color: "white", fontWeight: 700, cursor: "pointer" }}>
          Calcular
        </button>
      </form>

      {resultado && (
        <div style={{ marginTop: 24, background: "#f0f9ff", borderRadius: 12, padding: 24, border: "2px solid #0ea5e9" }}>
          <div style={{ fontSize: 14, color: "#0369a1", fontWeight: 600 }}>VALOR ESTIMADO</div>
          <div style={{ fontSize: 36, fontWeight: 800, color: "#0c4a6e", margin: "8px 0" }}>
            R$ {resultado.medio.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </div>
          <div style={{ color: "#075985", marginBottom: 16 }}>
            Faixa: R$ {resultado.min.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} - R$ {resultado.max.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </div>
          <div style={{ fontSize: 14, color: "#374151" }}>{resultado.detalhes}</div>
        </div>
      )}
    </div>
  );
}
