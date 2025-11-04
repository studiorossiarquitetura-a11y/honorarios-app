import Calculator from "../components/Calculator";
import AdSlot from "../components/AdSlot";

export default function Page() {
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <AdSlot />
      <Calculator />
      <AdSlot />
    </div>
  );
}
