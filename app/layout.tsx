import "./globals.css";
import ConsentProvider from "../components/ConsentProvider";
import CMP from "../components/CMP";

export const metadata = {
  title: "Calculadora de Honorários 2025",
  description: "Calcule honorários profissionais para projetos de arquitetura e construção.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "linear-gradient(135deg,#667eea,#764ba2)", minHeight: "100vh" }}>
        <ConsentProvider>
          <header style={{ maxWidth: 1024, margin: "0 auto", padding: "24px 20px", color: "white" }}>
            <h1 style={{ fontSize: 32, fontWeight: 800 }}>💰 Honorários Hoje</h1>
          </header>
          <main style={{ maxWidth: 1024, margin: "0 auto", padding: "0 20px 40px" }}>{children}</main>
          <CMP />
        </ConsentProvider>
      </body>
    </html>
  );
}
