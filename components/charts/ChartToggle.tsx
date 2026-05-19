import { ChartMode } from "@/types/chart-mode";

interface ChartToggleProps {
  mode: ChartMode;
  onChange: (mode: ChartMode) => void;
}

function ChartToggle({ mode, onChange }: ChartToggleProps) {
  return (
    <div className="sm:w-1/4 xl:w-1/6 flex rounded-2xl border border-slate-700 overflow-hidden bg-slate-800">
      <button
        onClick={() => onChange("default")}
        className={`w-full px-2 py-3 text-sm font-semibold transition duration-200 ${
          mode === "default"
            ? "bg-cyan-500 text-black shadow-lg"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
        }`}
      >
        Default
      </button>
      <button
        onClick={() => onChange("species")}
        className={`w-full px-2 py-3 text-sm font-semibold transition duration-200 ${
          mode === "species"
            ? "bg-cyan-500 text-black shadow-lg"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
        }`}
      >
        By Species
      </button>
    </div>
  );
}

export default ChartToggle;
