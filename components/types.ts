export type ConsentState = "unknown" | "granted" | "denied";
export type Nivel = "junior" | "pleno" | "senior";
export type TipoServico = "projeto-basico" | "projeto-completo" | "acompanhamento" | "consultoria";
export interface CalculationResult {
  min: number;
  max: number;
  medio: number;
  detalhes: string;
}
