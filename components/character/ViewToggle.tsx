import { ViewMode } from '@/types/view-mode';

interface ViewToggleProps {
  viewMode: ViewMode;
  onChange: (view: ViewMode) => void;
}

function ViewToggle({ viewMode, onChange }: ViewToggleProps) {
  return (
    <div className="sm:w-1/5 xl:w-1/6 flex rounded-2xl border border-slate-700 overflow-hidden bg-slate-800">
      <button
        onClick={() => onChange('grid')}
        className={`flex-1 rounded-l-2xl px-5 py-3 font-semibold text-sm transition duration-200 ${viewMode === 'grid' ? 'bg-cyan-500 text-black shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}`}
      >
        Grid
      </button>

      <button
        onClick={() => onChange('list')}
        className={`flex-1 rounded-r-2xl px-5 py-3 font-semibold text-sm transition duration-200 ${viewMode === 'list' ? 'bg-cyan-500 text-black shadow-lg' : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}`}
      >
        List
      </button>
    </div>
  );
}

export default ViewToggle;
