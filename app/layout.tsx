import type { Metadata } from "next";
import "./globals.css";
import ConsentProvider from "../components/ConsentProvider";
import CMP from "../components/CMP";

export const metadata: Metadata = {
  title: "Calculadora de Honorários 2025 | Arquitetura e Construção",
  description: "Calcule honorários profissionais para projetos de arquitetura e construção civil. Valores atualizados 2025 baseados em CAU/CREA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "linear-gradient(135deg,#667eea,#764ba2)", minHeight: "100vh", margin: 0, padding: 0 }}>
        <ConsentProvider>
          <header style={{ maxWidth: 1024, margin: "0 auto", padding: "24px 20px", color: "white" }}>
            <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>💰 Honorários Hoje</h1>
            <nav aria-label="Navegação principal" style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 15 }}>
              <a href="/" style={{ color: "white", fontWeight: 500, textDecoration: "none", transition: "opacity 0.2s" }}>Home</a>
              <a href="/sobre" style={{ color: "white", fontWeight: 500, textDecoration: "none", transition: "opacity 0.2s" }}>Sobre</a>
              <a href="/contato" style={{ color: "white", fontWeight: 500, textDecoration: "none", transition: "opacity 0.2s" }}>Contato</a>
            </nav>
          </header>
          
          <main style={{ maxWidth: 1024, margin: "0 auto", padding: "0 20px 40px" }}>
            {children}
          </main>
          
          <CMP />
          
          <footer style={{ maxWidth: 1024, margin: "0 auto", padding: "24px 20px", color: "white", opacity: 0.9, borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 40 }}>
            <p style={{ fontSize: 14, margin: 0 }}>
              © {new Date().getFullYear()} Honorários Hoje. Todos os direitos reservados.
            </p>
            <p style={{ fontSize: 13, margin: "8px 0 0 0", opacity: 0.8 }}>
              Valores de referência. Consulte sempre um profissional habilitado.
            </p>
          </footer>
        </ConsentProvider>
      </body>
    </html>
  );
}