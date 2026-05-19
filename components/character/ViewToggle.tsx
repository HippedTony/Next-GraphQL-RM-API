import { ViewMode } from "@/types/view-mode";

interface ViewToggleProps {
  viewMode: ViewMode;
  onChange: (view: ViewMode) => void;
}

function ViewToggle({ viewMode, onChange }: ViewToggleProps) {
  return (
    <div className="flex overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 sm:w-1/4 xl:w-1/6">
      <button
        onClick={() => onChange("grid")}
        className={`w-full flex-1 rounded-l-2xl px-2 py-3 text-sm font-semibold transition duration-200 ${viewMode === "grid" ? "bg-cyan-500 text-black shadow-lg" : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"}`}
      >
        Grid
      </button>

      <button
        onClick={() => onChange("list")}
        className={`w-full flex-1 rounded-r-2xl px-2 py-3 text-sm font-semibold transition duration-200 ${viewMode === "list" ? "bg-cyan-500 text-black shadow-lg" : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"}`}
      >
        List
      </button>
    </div>
  );
}

export default ViewToggle;
