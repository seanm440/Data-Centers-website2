import { ExternalLink } from "lucide-react";

type Source = {
  title: string;
  author: string;
  url: string;
  description: string;
  category: string;
};

const sources: Source[] = [
  {
    title: "What is a Data Center - Types of Data Centers",
    author: "Cisco",
    url: "https://www.cisco.com/site/us/en/learn/topics/computing/what-is-a-data-center.html",
    description: "Comprehensive overview of data center types, components, and architecture from one of the leading networking companies.",
    category: "Infrastructure",
  },
  {
    title: "Tier Classification System",
    author: "Uptime Institute",
    url: "https://uptimeinstitute.com/tiers",
    description: "The official tier classification system defining standards for data center redundancy and uptime guarantees.",
    category: "Standards",
  },
  {
    title: "2026 Market Outlook for Global Data Centers",
    author: "JLL Research",
    url: "https://www.jll.com/en-us/insights/market-outlook/data-center-outlook",
    description: "Market analysis projecting 97 GW of growth between 2025-2030, with detailed regional breakdowns and investment trends.",
    category: "Market Research",
  },
  {
    title: "Data Center Tiers Explained: Tier I, II, III & IV",
    author: "BMC Software",
    url: "https://www.bmc.com/blogs/data-center-tiers-important/",
    description: "Detailed breakdown of each tier level including uptime percentages, redundancy requirements, and use cases.",
    category: "Standards",
  },
  {
    title: "Power Usage Effectiveness (PUE)",
    author: "Google Data Centers",
    url: "https://datacenters.google/efficiency",
    description: "Google's reporting on achieving 1.09 PUE across their global fleet of data centers, with methodology details.",
    category: "Sustainability",
  },
  {
    title: "Operating Sustainably",
    author: "Google Data Centers",
    url: "https://datacenters.google/operating-sustainably",
    description: "Details on Google's approach to sustainable data center operations, including 84% reduction in overhead energy.",
    category: "Sustainability",
  },
  {
    title: "Energy Efficiency in Data Centers",
    author: "U.S. Department of Energy",
    url: "https://www.energy.gov/cmei/femp/energy-efficiency-data-centers",
    description: "Federal guidelines and programs for improving data center energy efficiency, including the 25% reduction commitment.",
    category: "Sustainability",
  },
  {
    title: "Data Center Security: Best Practices, Compliance, and Cybersecurity",
    author: "DataBank",
    url: "https://www.databank.com/resources/blogs/data-center-security-best-practices-compliance-and-cybersecurity/",
    description: "Comprehensive guide to physical and cyber security measures in modern data center facilities.",
    category: "Security",
  },
  {
    title: "Datacenter Physical Access Security",
    author: "Microsoft",
    url: "https://learn.microsoft.com/en-us/compliance/assurance/assurance-datacenter-physical-access-security",
    description: "Microsoft's documentation on their multi-layered physical security approach for Azure data centers.",
    category: "Security",
  },
  {
    title: "Data Center Cooling Systems - Benefits, Differences and Comparisons",
    author: "Park Place Technologies",
    url: "https://www.parkplacetechnologies.com/blog/data-center-cooling-systems-benefits-comparisons/",
    description: "Comparison of cooling technologies from traditional air cooling to advanced liquid and immersion systems.",
    category: "Infrastructure",
  },
  {
    title: "The Future of US Hyperscale Data Centers",
    author: "McKinsey & Company",
    url: "https://www.mckinsey.com/industries/public-sector/our-insights/the-data-center-balance-how-us-states-can-navigate-the-opportunities-and-challenges",
    description: "Analysis of opportunities and challenges facing US states as hyperscale data center development accelerates.",
    category: "Market Research",
  },
  {
    title: "Global Data Centre Market Size, Share & Growth Forecast 2030",
    author: "BCC Research",
    url: "https://www.bccresearch.com/market-research/information-technology/data-centre-market.html",
    description: "Market sizing showing growth from $418.2 billion in 2025 to projected $691.6 billion by 2030.",
    category: "Market Research",
  },
  {
    title: "Q1 2026 US Data Center Market Overview",
    author: "Avison Young",
    url: "https://www.avisonyoung.us/us-data-center-market-overview",
    description: "Quarterly market report showing US colocation inventory growth to 29.0 GW, up 22% year-over-year.",
    category: "Market Research",
  },
  {
    title: "Turning the Data Center Boom into Long-Term, Local Prosperity",
    author: "Brookings Institution",
    url: "https://www.brookings.edu/articles/turning-the-data-center-boom-into-long-term-local-prosperity/",
    description: "Policy analysis on how communities can maximize long-term economic benefits from data center development.",
    category: "Economic Impact",
  },
  {
    title: "How Data Centers Are Tackling Sustainability Challenges",
    author: "Bloom Energy",
    url: "https://www.bloomenergy.com/blog/how-data-centers-are-tackling-sustainability-challenges/",
    description: "Overview of green data center technologies and strategies for reducing environmental impact.",
    category: "Sustainability",
  },
  {
    title: "Sustainable Data Center Solutions",
    author: "Digital Realty",
    url: "https://www.digitalrealty.com/data-centers/design/sustainable-data-centers",
    description: "Digital Realty's approach to sustainable design, including materials efficiency and reduced environmental impact.",
    category: "Sustainability",
  },
];

const categoryColors: Record<string, string> = {
  Infrastructure: "bg-primary/10 text-primary",
  Standards: "bg-blue-500/10 text-blue-400",
  "Market Research": "bg-purple-500/10 text-purple-400",
  Sustainability: "bg-emerald-500/10 text-emerald-400",
  Security: "bg-red-500/10 text-red-400",
  "Economic Impact": "bg-amber-500/10 text-amber-400",
};

export default function Sources() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-12 pb-8">
        <div className="container">
          <div className="flex items-center mb-4">
            <span className="green-line" />
            <span className="section-label">Sources & References</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Where This Information Comes From
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            All the research, reports, and industry documentation used to build this site. These are credible sources from leading technology companies, research institutions, and industry analysts.
          </p>
        </div>
      </section>

      {/* Sources List */}
      <section className="pb-16">
        <div className="container">
          <div className="space-y-4">
            {sources.map((source, i) => (
              <a
                key={i}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                        {source.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wider ${categoryColors[source.category] || "bg-primary/10 text-primary"}`}>
                        {source.category}
                      </span>
                    </div>
                    <p className="text-xs text-primary mb-2">{source.author}</p>
                    <p className="text-sm text-muted-foreground">{source.description}</p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
