import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Honorários Hoje",
  description: "Conheça o projeto Honorários Hoje - calculadora gratuita de honorários para profissionais de arquitetura e construção civil.",
};

export default function Sobre() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 32, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, color: "#111827" }}>
        Sobre o Honorários Hoje
      </h1>
      
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#374151" }}>
          O que é?
        </h2>
        <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 16 }}>
          O <strong>Honorários Hoje</strong> é uma ferramenta gratuita criada para ajudar profissionais 
          de arquitetura, engenharia e construção civil a calcular honorários de forma rápida, 
          prática e baseada em referências de mercado atualizadas.
        </p>
        <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
          Nossa calculadora utiliza valores de referência das tabelas do CAU/BR (Conselho de Arquitetura 
          e Urbanismo) e CREA (Conselho Regional de Engenharia e Agronomia) para o ano de 2025.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#374151" }}>
          Por que criamos?
        </h2>
        <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 16 }}>
          Muitos profissionais têm dificuldade em precificar seus serviços de forma justa e competitiva. 
          Criamos esta ferramenta para democratizar o acesso a informações de mercado e ajudar profissionais 
          a valorizarem adequadamente seu trabalho.
        </p>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#374151" }}>
          Como funciona?
        </h2>
        <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 16 }}>
          Nossa calculadora oferece três métodos de cálculo:
        </p>
        <ul style={{ color: "#6b7280", lineHeight: 1.8, paddingLeft: 24 }}>
          <li><strong>Por metro quadrado (m²):</strong> ideal para projetos arquitetônicos básicos e completos</li>
          <li><strong>Percentual sobre o custo da obra:</strong> recomendado para acompanhamento de obra (3% a 8%)</li>
          <li><strong>Por hora trabalhada:</strong> indicado para consultorias e serviços específicos</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#374151" }}>
          Valores de referência
        </h2>
        <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
          Todos os valores apresentados são baseados em pesquisas de mercado e tabelas oficiais dos 
          conselhos profissionais. Os valores podem variar conforme a região, complexidade do projeto 
          e experiência do profissional.
        </p>
      </section>

      <section style={{ background: "#f0f9ff", padding: 20, borderRadius: 12, borderLeft: "4px solid #0ea5e9" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#0c4a6e" }}>
          ⚠️ Aviso Legal
        </h2>
        <p style={{ color: "#075985", lineHeight: 1.8, fontSize: 14 }}>
          Os valores calculados são <strong>estimativas de referência</strong> e não constituem parecer 
          técnico, consultoria profissional ou proposta comercial vinculante. Recomendamos sempre consultar 
          um profissional habilitado e ajustar os valores conforme as especificidades de cada projeto e região.
        </p>
      </section>

      <section style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: "#374151" }}>
          Quem somos
        </h2>
        <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
          Somos uma equipe dedicada a criar ferramentas úteis para profissionais da construção civil. 
          Este projeto nasceu da necessidade real de facilitar o processo de precificação de serviços 
          profissionais no setor.
        </p>
      </section>
    </div>
  );
}