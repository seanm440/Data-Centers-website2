import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";

const chartColors = {
  primary: "#34d399",
  secondary: "#10b981",
  muted: "#6b7280",
  background: "#1a1f2e",
  border: "#2d3548",
  text: "#e5e7eb",
  textMuted: "#9ca3af",
};

const tooltipStyle = {
  backgroundColor: "#1a1f2e",
  border: "1px solid #2d3548",
  borderRadius: "6px",
  color: "#e5e7eb",
  fontSize: "12px",
};

// Market Growth Data (Fortune Business Insights, BCC Research)
const marketGrowthData = [
  { year: "2020", value: 142 },
  { year: "2021", value: 165 },
  { year: "2022", value: 193 },
  { year: "2023", value: 220 },
  { year: "2024", value: 248 },
  { year: "2025", value: 270 },
  { year: "2026", value: 301 },
  { year: "2027", value: 365 },
  { year: "2028", value: 440 },
  { year: "2029", value: 545 },
  { year: "2030", value: 692 },
];

// Power capacity growth (JLL, Goldman Sachs)
const capacityGrowthData = [
  { year: "2020", capacity: 28 },
  { year: "2021", capacity: 32 },
  { year: "2022", capacity: 37 },
  { year: "2023", capacity: 43 },
  { year: "2024", capacity: 52 },
  { year: "2025", capacity: 62 },
  { year: "2026", capacity: 75 },
  { year: "2027", capacity: 92 },
  { year: "2028", capacity: 112 },
  { year: "2029", capacity: 135 },
  { year: "2030", capacity: 159 },
];

// PUE improvement over time (Uptime Institute, Google)
const pueData = [
  { year: "2010", industry: 2.0, bestInClass: 1.4 },
  { year: "2012", industry: 1.8, bestInClass: 1.25 },
  { year: "2014", industry: 1.7, bestInClass: 1.2 },
  { year: "2016", industry: 1.6, bestInClass: 1.15 },
  { year: "2018", industry: 1.58, bestInClass: 1.12 },
  { year: "2020", industry: 1.55, bestInClass: 1.1 },
  { year: "2022", industry: 1.52, bestInClass: 1.09 },
  { year: "2024", industry: 1.5, bestInClass: 1.09 },
];

// Downtime cost by company size (Gartner)
const downtimeCostData = [
  { category: "Small Business", cost: 8000 },
  { category: "Mid-Market", cost: 74000 },
  { category: "Enterprise", cost: 300000 },
  { category: "Fortune 500", cost: 1000000 },
];

// Cloud adoption by region (OECD, various)
const cloudAdoptionData = [
  { name: "North America", value: 94 },
  { name: "Europe (EU)", value: 53 },
  { name: "Asia Pacific", value: 45 },
  { name: "Rest of World", value: 32 },
];

// Investment breakdown (McKinsey)
const investmentBreakdownData = [
  { name: "AI Data Centers", value: 5200, color: "#34d399" },
  { name: "Traditional IT", value: 1500, color: "#6b7280" },
];

// GDP contribution (PwC)
const gdpContributionData = [
  { year: "2017", gdp: 355 },
  { year: "2018", gdp: 390 },
  { year: "2019", gdp: 430 },
  { year: "2020", gdp: 470 },
  { year: "2021", gdp: 486 },
  { year: "2022", gdp: 580 },
  { year: "2023", gdp: 727 },
  { year: "2024", gdp: 927 },
];

// Jobs data (PwC, BLS)
const jobsData = [
  { year: "2016", direct: 306, total: 3200 },
  { year: "2018", direct: 350, total: 3600 },
  { year: "2020", direct: 400, total: 4000 },
  { year: "2022", direct: 440, total: 4400 },
  { year: "2023", direct: 501, total: 4700 },
  { year: "2024", direct: 550, total: 5500 },
];

export function MarketGrowthChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Global Data Center Market Size</h4>
      <p className="text-xs text-muted-foreground mb-4">In billions USD. Sources: Fortune Business Insights, BCC Research</p>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={marketGrowthData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
          <XAxis dataKey="year" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} />
          <YAxis tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} tickFormatter={(v) => `$${v}B`} />
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`$${value}B`, "Market Size"]} />
          <Area type="monotone" dataKey="value" stroke={chartColors.primary} fill={chartColors.primary} fillOpacity={0.15} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-[10px] text-muted-foreground mt-2">2027-2030 values are projections</p>
    </div>
  );
}

export function CapacityGrowthChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Global Data Center Power Capacity</h4>
      <p className="text-xs text-muted-foreground mb-4">In gigawatts (GW). Sources: JLL Research, Goldman Sachs</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={capacityGrowthData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
          <XAxis dataKey="year" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} />
          <YAxis tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} tickFormatter={(v) => `${v} GW`} />
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`${value} GW`, "Capacity"]} />
          <Bar dataKey="capacity" fill={chartColors.primary} radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-[10px] text-muted-foreground mt-2">2026-2030 values are projections based on current build pipeline</p>
    </div>
  );
}

export function PUEChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Power Usage Effectiveness (PUE) Trends</h4>
      <p className="text-xs text-muted-foreground mb-4">Lower is better. 1.0 = theoretical perfect efficiency. Sources: Uptime Institute, Google</p>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={pueData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
          <XAxis dataKey="year" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} />
          <YAxis domain={[1.0, 2.1]} tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} />
          <Tooltip contentStyle={tooltipStyle} />
          <Line type="monotone" dataKey="industry" stroke={chartColors.muted} strokeWidth={2} name="Industry Average" dot={{ fill: chartColors.muted, r: 3 }} />
          <Line type="monotone" dataKey="bestInClass" stroke={chartColors.primary} strokeWidth={2} name="Best-in-Class (Google)" dot={{ fill: chartColors.primary, r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-3 h-0.5 rounded bg-[#6b7280]" />
          Industry Average
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-3 h-0.5 rounded bg-[#34d399]" />
          Best-in-Class
        </div>
      </div>
    </div>
  );
}

export function DowntimeCostChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Hourly Cost of IT Downtime by Company Size</h4>
      <p className="text-xs text-muted-foreground mb-4">In USD per hour. Source: Gartner Research</p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={downtimeCostData} layout="vertical" margin={{ top: 5, right: 10, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
          <XAxis type="number" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} tickFormatter={(v) => v >= 1000000 ? `$${v / 1000000}M` : `$${v / 1000}K`} />
          <YAxis type="category" dataKey="category" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} width={75} />
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`$${value.toLocaleString()}/hr`, "Cost"]} />
          <Bar dataKey="cost" fill={chartColors.primary} radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function InvestmentBreakdownChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Required Investment by 2030</h4>
      <p className="text-xs text-muted-foreground mb-4">In billions USD. Source: McKinsey & Company, April 2025</p>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={investmentBreakdownData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            dataKey="value"
            nameKey="name"
            label={({ name, value }) => `${name}: $${(value / 1000).toFixed(1)}T`}
            labelLine={{ stroke: chartColors.textMuted }}
          >
            {investmentBreakdownData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`$${(value / 1000).toFixed(1)} Trillion`, ""]} />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center">
        <p className="text-lg font-heading font-bold text-foreground">$6.7 Trillion Total</p>
        <p className="text-xs text-muted-foreground">Global data center investment required by 2030</p>
      </div>
    </div>
  );
}

export function GDPContributionChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">US Data Center Industry GDP Contribution</h4>
      <p className="text-xs text-muted-foreground mb-4">In billions USD. Source: PwC Economic Impact Report, 2025</p>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={gdpContributionData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
          <XAxis dataKey="year" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} />
          <YAxis tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} tickFormatter={(v) => `$${v}B`} />
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`$${value}B`, "GDP Contribution"]} />
          <Area type="monotone" dataKey="gdp" stroke={chartColors.primary} fill={chartColors.primary} fillOpacity={0.15} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-[10px] text-muted-foreground mt-2">105% increase from 2017 to 2023; $927B in 2024</p>
    </div>
  );
}

export function JobsGrowthChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">US Data Center Employment</h4>
      <p className="text-xs text-muted-foreground mb-4">In thousands. Sources: US Census Bureau, PwC</p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart data={jobsData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
          <XAxis dataKey="year" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} />
          <YAxis tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} tickFormatter={(v) => `${v}K`} />
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`${value}K`, ""]} />
          <Bar dataKey="total" fill={chartColors.border} radius={[3, 3, 0, 0]} name="Total Supported Jobs" />
          <Bar dataKey="direct" fill={chartColors.primary} radius={[3, 3, 0, 0]} name="Direct Employment" />
        </BarChart>
      </ResponsiveContainer>
      <div className="flex gap-4 mt-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-3 h-3 rounded-sm bg-[#2d3548]" />
          Total Supported
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="w-3 h-3 rounded-sm bg-[#34d399]" />
          Direct Employment
        </div>
      </div>
    </div>
  );
}

export function CloudAdoptionChart() {
  return (
    <div className="p-5 rounded-lg bg-card border border-border">
      <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Cloud Computing Adoption by Region</h4>
      <p className="text-xs text-muted-foreground mb-4">Percentage of businesses using cloud services. Sources: OECD, Eurostat, various</p>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={cloudAdoptionData} layout="vertical" margin={{ top: 5, right: 10, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={chartColors.border} />
          <XAxis type="number" domain={[0, 100]} tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} tickFormatter={(v) => `${v}%`} />
          <YAxis type="category" dataKey="name" tick={{ fill: chartColors.textMuted, fontSize: 11 }} axisLine={{ stroke: chartColors.border }} width={80} />
          <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`${value}%`, "Adoption"]} />
          <Bar dataKey="value" fill={chartColors.primary} radius={[0, 3, 3, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
