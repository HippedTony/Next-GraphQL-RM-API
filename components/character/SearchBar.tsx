interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search Rick, Morty..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-5 py-4 text-white outline-none transition focus:ring-2 focus:ring-cyan-400"
      />
    </div>
  );
}

export default SearchBar;
