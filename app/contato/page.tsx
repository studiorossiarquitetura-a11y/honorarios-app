import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Honorários Hoje",
  description: "Entre em contato conosco para dúvidas, sugestões ou parcerias.",
};

export default function Contato() {
  return (
    <div style={{ background: "white", borderRadius: 16, padding: 32, maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 20, color: "#111827" }}>
        Entre em Contato
      </h1>
      
      <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 32, fontSize: 16 }}>
        Tem alguma dúvida, sugestão ou quer reportar um problema? Entre em contato conosco!
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#374151" }}>
          📧 Email
        </h2>
        <div style={{ background: "#f9fafb", padding: 20, borderRadius: 12, border: "1px solid #e5e7eb" }}>
          <p style={{ color: "#374151", fontSize: 18, marginBottom: 8 }}>
            <strong>Email principal:</strong>
          </p>
          <a 
            href="mailto:studiorossiarquitetura@gmail.com" 
            style={{ 
              color: "#0ea5e9", 
              fontSize: 18, 
              fontWeight: 600,
              textDecoration: "none"
            }}
          >
            alexandre.rosei@gmail.com
          </a>
          <p style={{ color: "#6b7280", fontSize: 14, marginTop: 12 }}>
            Respondemos em até 48 horas úteis.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#374151" }}>
          💬 O que você pode nos enviar
        </h2>
        <ul style={{ color: "#6b7280", lineHeight: 1.8, paddingLeft: 24 }}>
          <li><strong>Dúvidas:</strong> sobre como usar a calculadora ou interpretar os resultados</li>
          <li><strong>Sugestões:</strong> ideias para melhorar a ferramenta</li>
          <li><strong>Reportar problemas:</strong> se encontrar algum erro ou bug</li>
          <li><strong>Parcerias:</strong> propostas de colaboração ou divulgação</li>
          <li><strong>Feedback:</strong> sua opinião é muito importante para nós!</li>
        </ul>
      </section>

      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#374151" }}>
          ⏰ Horário de atendimento
        </h2>
        <p style={{ color: "#6b7280", lineHeight: 1.8 }}>
          <strong>Segunda a Sexta:</strong> 9h às 18h (horário de Brasília)<br />
          <strong>Finais de semana e feriados:</strong> Atendimento por email (resposta em até 48h úteis)
        </p>
      </section>

      <section style={{ background: "#f0fdf4", padding: 20, borderRadius: 12, border: "1px solid #86efac" }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#166534" }}>
          🤝 Quer contribuir?
        </h2>
        <p style={{ color: "#15803d", lineHeight: 1.8, fontSize: 14 }}>
          Se você é profissional da área e tem sugestões de valores ou metodologias, 
          sua contribuição é muito bem-vinda! Juntos podemos tornar esta ferramenta 
          ainda mais útil para toda a comunidade.
        </p>
      </section>

      <section style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16, color: "#374151" }}>
          🌐 Redes Sociais
        </h2>
        <p style={{ color: "#6b7280", lineHeight: 1.8, marginBottom: 16 }}>
          Em breve estaremos presentes nas principais redes sociais. 
          Por enquanto, você pode nos contatar por email.
        </p>
      </section>
    </div>
  );
}