"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Character } from "@/types/character";

interface SpeciesChartProps {
  characters: Character[];
}

function SpeciesChart({ characters }: SpeciesChartProps) {
  const speciesMap = characters.reduce(
    (acc, character) => {
      const species = character.species;

      acc[species] = (acc[species] || 0) + 1;

      return acc;
    },
    {} as Record<string, number>,
  );

  const chartData = Object.entries(speciesMap)
    .map(([species, count]) => ({
      species,
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div className="mb-10 rounded-4xl bg-slate-900 p-4 sm:p-6 shadow-2xl ring-1 ring-white/5">
      <div className="mb-6">
        <h2>Characters by Species</h2>
        <p className="text-slate-400">Distribution of characters</p>
      </div>

      <div className="min-h-80 h-96 rounded-3xl bg-slate-950 p-4 sm:p-5 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 0, left: -40, bottom: 0 }}>
            <XAxis
              dataKey="species"
              tick={{ fill: '#94a3b8', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              interval={0}
              angle={-30}
              textAnchor="end"
              height={70}
            />
            <YAxis
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip wrapperStyle={{ backgroundColor: '#0f172a', borderRadius: 12, border: '1px solid #334155' }} cursor={{ fill: 'rgba(56,189,248,0.08)' }} />
            <Bar dataKey="count" fill="#22d3ee" radius={[12, 12, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SpeciesChart;
