import { Link } from "wouter";
import { ArrowRight, DollarSign, TrendingUp, Shield, Clock, Server, Globe, Users, BarChart3, Zap, CheckCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DowntimeCostChart, MarketGrowthChart, CapacityGrowthChart, InvestmentBreakdownChart, GDPContributionChart, JobsGrowthChart, CloudAdoptionChart } from "@/components/Charts";

function AnimatedStat({ value, label, source }: { value: string; label: string; source: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`p-5 rounded-lg bg-card border border-border transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">{value}</div>
      <p className="text-sm text-foreground font-medium mb-1">{label}</p>
      <p className="text-xs text-muted-foreground">{source}</p>
    </div>
  );
}

export default function Business() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-12 pb-8">
        <div className="container">
          <div className="flex items-center mb-4">
            <span className="green-line" />
            <span className="section-label">Business & Data Centers</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Business Case for Data Centers
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            An evidence-based analysis of how data center infrastructure impacts business operations, supported by published research from Gartner, IBM, McKinsey, and other industry authorities.
          </p>
        </div>
      </section>

      {/* Key Statistics Grid */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">By The Numbers</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            The Financial Cost of Infrastructure Failure
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatedStat
              value="$5,600/min"
              label="Average cost of IT downtime"
              source="Gartner Research"
            />
            <AnimatedStat
              value="$300,000/hr"
              label="Average hourly downtime cost for businesses"
              source="Gartner Research"
            />
            <AnimatedStat
              value="$1M+/hr"
              label="Downtime cost for Fortune 500 companies"
              source="Gartner, 2025"
            />
            <AnimatedStat
              value="$4.88M"
              label="Average cost of a single data breach (2024)"
              source="IBM Cost of a Data Breach Report 2024"
            />
            <AnimatedStat
              value="$10.22M"
              label="Average data breach cost in the United States"
              source="IBM Cost of a Data Breach Report 2025"
            />
            <AnimatedStat
              value="94%"
              label="Of companies with catastrophic data loss that don't survive"
              source="University of Texas Research"
            />
          </div>

          <div className="mt-8 p-5 rounded-lg border border-primary/20 bg-primary/5">
            <p className="text-sm text-primary font-heading font-medium mb-2">Interpretation</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These figures represent documented financial exposure for organizations operating without adequate infrastructure redundancy. Professional data center services mitigate these risks through engineered redundancy, continuous monitoring, and multi-layered security systems. The annual cost of data center services typically represents a small fraction of the potential loss from a single significant outage or breach event.
            </p>
          </div>

          <div className="mt-8">
            <DowntimeCostChart />
          </div>
        </div>
      </section>

      {/* Cloud Adoption Stats */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Adoption Rates</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Enterprise Migration to Professional Infrastructure
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            The transition from in-house IT operations to professional data center infrastructure, whether through cloud services or colocation, represents one of the most significant shifts in enterprise technology strategy over the past decade. Current adoption metrics reflect this trend:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-lg">94%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Of companies worldwide now use cloud computing</p>
                  <p className="text-xs text-muted-foreground">This is up from roughly 30% a decade ago. Nearly every business of meaningful size now relies on data center infrastructure in some form.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-lg">60%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Of all business data is now stored in the cloud</p>
                  <p className="text-xs text-muted-foreground">The majority of corporate data now lives in professional data center facilities rather than on-premise servers.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-lg">32%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Average operational efficiency boost from cloud migration</p>
                  <p className="text-xs text-muted-foreground">Businesses that move to data center infrastructure report nearly a third improvement in operational efficiency.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-lg">75%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Of CFOs plan to increase cloud/technology budgets</p>
                  <p className="text-xs text-muted-foreground">Three quarters of financial leaders are actively increasing investment in data center services, recognizing the ROI.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-primary text-lg">$3T</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Projected cloud computing revenue by 2030</p>
                  <p className="text-xs text-muted-foreground">The cloud services market (built on data centers) is projected to generate over $3 trillion annually by the end of the decade.</p>
                </div>
              </div>
            </div>

            <div>
              <div className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-heading font-semibold text-foreground mb-4">Why Businesses Are Making the Switch</h3>
                <div className="space-y-4">
                  {[
                    { icon: DollarSign, title: "Cost Reduction", desc: "Eliminate capital expenditure on hardware. Pay only for what you use. Reduce IT staffing needs." },
                    { icon: TrendingUp, title: "Scalability", desc: "Scale from 1 to 1 million users without buying a single server. Add capacity in minutes, not months." },
                    { icon: Shield, title: "Security", desc: "Enterprise-grade protection that would cost millions to build in-house. SOC 2, ISO 27001, HIPAA compliance included." },
                    { icon: Clock, title: "Reliability", desc: "99.99%+ uptime guarantees backed by SLAs. Redundant power, cooling, and networking." },
                    { icon: Globe, title: "Global Reach", desc: "Deploy applications worldwide in hours. Serve customers on every continent with low latency." },
                    { icon: Zap, title: "Speed", desc: "Launch new services in days instead of the weeks it takes to procure and configure hardware." },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={14} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts - Adoption Data */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CloudAdoptionChart />
            <MarketGrowthChart />
          </div>
        </div>
      </section>

      {/* Industry-Specific Benefits */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Industry Applications</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Sector-Specific Applications
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            Data center requirements vary significantly across industries. The following examples illustrate how different sectors leverage professional infrastructure to meet their specific operational, regulatory, and performance requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Healthcare</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Hospitals store electronic health records for millions of patients, run telemedicine platforms serving remote areas, and process medical imaging where a single MRI scan can be over 150MB. AI diagnostic tools that detect cancer earlier than human radiologists run on data center GPU clusters.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>HIPAA-compliant infrastructure required by law</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Financial Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                High-frequency trading firms need microsecond latency — the difference between profit and loss. Banks process millions of transactions daily and can't afford a single lost record. The average data breach in financial services costs $6.08 million according to IBM's 2024 report, making security paramount.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>PCI-DSS and SOX compliance built in</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">E-Commerce</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Amazon's infrastructure handles 7,000+ transactions per second during peak periods. Even mid-size retailers see 10-50x traffic spikes during sales events. A one-second delay in page load time reduces conversions by 7% according to Akamai research — data centers provide the speed that directly impacts revenue.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>Auto-scaling prevents lost sales during peaks</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Media & Streaming</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Netflix alone accounts for about 15% of global internet bandwidth. Streaming 4K video requires consistent 25 Mbps per viewer, multiplied by millions of simultaneous streams. Gaming companies need sub-50ms latency worldwide. None of this is possible without distributed data center infrastructure.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>Global CDN delivery from edge locations</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Manufacturing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Modern factories deploy thousands of IoT sensors generating terabytes of data daily. Predictive maintenance powered by data center computing reduces unplanned downtime by up to 50% and maintenance costs by 25-30% according to McKinsey. Digital twins simulate entire production lines before physical changes are made.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>Edge computing for real-time factory operations</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Startups & SMBs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                A five-person startup can access the same computing infrastructure as a Fortune 500 company. The pay-as-you-go model means zero upfront capital expenditure. Small and midsize enterprise cloud adoption is growing at 17.65% annually as businesses realize they can compete on technology without massive budgets.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>Level playing field for small businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Cost Analysis</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Total Cost of Ownership Comparison
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            The following comparison outlines typical cost categories for organizations evaluating in-house infrastructure against professional data center services. Figures represent industry averages for mid-size deployments:
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-heading font-semibold text-foreground text-sm">Cost Category</h4>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-heading font-semibold text-foreground text-sm">Building In-House</h4>
                </div>
                <div className="p-4 rounded-lg bg-card border border-primary/30 border-2">
                  <h4 className="font-heading font-semibold text-primary text-sm">Data Center Service</h4>
                </div>
              </div>
              {[
                { category: "Initial Hardware", inHouse: "$500K – $2M+", dc: "$0 (included in service)" },
                { category: "Facility Construction", inHouse: "$1M – $10M+", dc: "$0" },
                { category: "Power & Cooling (annual)", inHouse: "$200K – $500K/year", dc: "Included" },
                { category: "24/7 IT Staff", inHouse: "$500K – $1M/year", dc: "Included" },
                { category: "Physical Security", inHouse: "$100K – $500K", dc: "Included" },
                { category: "Hardware Refresh (3-5 yr cycle)", inHouse: "$300K – $1.5M", dc: "Provider handles" },
                { category: "Redundancy & Backup Systems", inHouse: "$200K – $1M+", dc: "Built-in" },
                { category: "Compliance Certifications", inHouse: "$50K – $200K/year", dc: "Included" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 mb-2">
                  <div className="p-3 rounded bg-secondary/50 text-sm text-muted-foreground">{row.category}</div>
                  <div className="p-3 rounded bg-secondary/50 text-sm text-foreground font-medium">{row.inHouse}</div>
                  <div className="p-3 rounded bg-primary/5 border border-primary/10 text-sm text-primary font-medium">{row.dc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-5 rounded-lg border border-primary/20 bg-primary/5">
            <p className="text-sm text-primary font-heading font-medium mb-2">Summary</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For a mid-size organization, the 5-year total cost of ownership for in-house infrastructure typically falls between $3 million and $8 million when accounting for hardware, facilities, staffing, power, and ongoing maintenance. Equivalent data center services generally reduce this figure by 40-60% while delivering superior uptime, security, and scalability. The cost advantage derives from economies of scale: operators distribute fixed costs across thousands of tenants.
            </p>
          </div>
        </div>
      </section>

      {/* Economic Impact */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Economic Impact</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Data Centers as Economic Engines
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Beyond helping individual businesses, data centers have become one of the most significant drivers of economic growth in the United States and globally. The numbers from recent studies paint a clear picture:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <BarChart3 size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">$927 Billion GDP Contribution</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                The data center industry contributed $927 billion to US GDP in 2024 alone. That's up from $727 billion in 2023 — a growth rate that outpaces most other sectors of the economy.
              </p>
              <p className="text-xs text-muted-foreground italic">Source: PwC Economic Impact Report, 2025</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Users size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">5.5 Million Jobs Supported</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                The industry supported 5.5 million jobs in the US in 2024, up 17% from 4.7 million in 2023. Each direct data center job supports more than 6 additional jobs in the broader economy through supply chains and local spending.
              </p>
              <p className="text-xs text-muted-foreground italic">Source: PwC Economic Impact Report, 2025</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <DollarSign size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">$6.7 Trillion Investment by 2030</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                McKinsey projects that $6.7 trillion in total investment will be needed worldwide by 2030 to meet data center demand. Of that, $5.2 trillion is specifically for AI-related infrastructure. This represents one of the largest capital deployment cycles in history.
              </p>
              <p className="text-xs text-muted-foreground italic">Source: McKinsey & Company, April 2025</p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">501,000 Direct Workers</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                The direct data center workforce in the US grew from 306,000 to 501,000 between 2016 and 2023 — a 64% increase. These are well-paying technical jobs: electrical engineers, network specialists, HVAC technicians, and security professionals.
              </p>
              <p className="text-xs text-muted-foreground italic">Source: US Census Bureau / Bureau of Labor Statistics, 2025</p>
            </div>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="font-heading font-semibold text-foreground mb-4">Market Growth Trajectory</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-muted-foreground uppercase font-heading tracking-wider mb-1">2025</p>
                <p className="text-xl font-heading font-bold text-foreground">$269.8B</p>
                <p className="text-xs text-muted-foreground">Global data center market size</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-heading tracking-wider mb-1">2030 (Projected)</p>
                <p className="text-xl font-heading font-bold text-primary">$691.6B</p>
                <p className="text-xs text-muted-foreground">Expected market size (157% growth)</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase font-heading tracking-wider mb-1">Colocation Market</p>
                <p className="text-xl font-heading font-bold text-foreground">$91.1B</p>
                <p className="text-xs text-muted-foreground">Growing at 13.7% CAGR through 2031</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground italic mt-4">Sources: Fortune Business Insights, BCC Research, Grand View Research</p>
          </div>
        </div>
      </section>

      {/* Economic Charts */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GDPContributionChart />
            <JobsGrowthChart />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <CapacityGrowthChart />
            <InvestmentBreakdownChart />
          </div>
        </div>
      </section>

      {/* Disaster Recovery Section */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Data Protection</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Data Loss and Business Continuity
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The statistics on data loss are sobering. According to research from the University of Texas, 94% of companies that experience catastrophic data loss do not survive — 43% never reopen at all, and another 51% close within two years. A separate study by Infrascale found that 67.7% of businesses have experienced significant data loss at some point.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nearly 40% of companies lose critical data specifically through cyberattacks, and with the average data breach costing $4.88 million in 2024 (according to IBM), the financial impact is devastating even for companies that survive. In the United States specifically, the average breach cost is $10.22 million.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional data center infrastructure addresses this through geographic redundancy — your data is continuously replicated to facilities hundreds of miles apart. If one location is destroyed by a natural disaster, fire, or attack, operations automatically fail over to the backup site. Most businesses using data center services achieve Recovery Time Objectives of under 15 minutes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For comparison, businesses relying on in-house backup systems typically face recovery times measured in hours or days, and many discover during an actual disaster that their backups were incomplete or corrupted.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-lg bg-card border border-border">
                <p className="text-2xl font-heading font-bold text-primary mb-1">94%</p>
                <p className="text-sm text-foreground font-medium">Of companies with catastrophic data loss don't survive</p>
                <p className="text-xs text-muted-foreground mt-1">University of Texas Research</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <p className="text-2xl font-heading font-bold text-primary mb-1">67.7%</p>
                <p className="text-sm text-foreground font-medium">Of businesses have experienced significant data loss</p>
                <p className="text-xs text-muted-foreground mt-1">Infrascale, 2025</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <p className="text-2xl font-heading font-bold text-primary mb-1">40%</p>
                <p className="text-sm text-foreground font-medium">Of companies lose critical data in cyberattacks</p>
                <p className="text-xs text-muted-foreground mt-1">Invenio IT, 2025</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <p className="text-2xl font-heading font-bold text-primary mb-1">&lt; 15 min</p>
                <p className="text-sm text-foreground font-medium">Recovery time with professional data center DR</p>
                <p className="text-xs text-muted-foreground mt-1">vs. hours/days with in-house backups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI & Future Investment */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">The AI Factor</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Artificial Intelligence and Infrastructure Demand
          </h2>
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The explosion of artificial intelligence is creating unprecedented demand for data center capacity. According to McKinsey's April 2025 analysis, global demand for data center capacity could nearly triple by 2030, with approximately 70% of that demand coming from AI workloads.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For businesses, this means that access to data center infrastructure is becoming a competitive necessity. Companies that want to leverage AI for product development, customer service, analytics, or operations need access to GPU computing that only professional data centers can provide at scale. Training a single large AI model can require thousands of GPUs running for months.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The International Energy Agency reports that global investment in data centers nearly doubled since 2022, reaching half a trillion dollars in 2024. Goldman Sachs expects data center demand to grow by about 50% to 92 GW by 2027, with yearly growth rates of 17% between 2025 and 2028.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Organizations that secure access to this infrastructure early — whether through cloud services, colocation, or long-term contracts — will have a significant advantage as AI becomes embedded in every industry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Want to understand the technology behind all this?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Check out the Infrastructure page for a deep dive into servers, cooling, power systems, and networking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Explore Infrastructure <ArrowRight size={16} />
            </Link>
            <Link
              href="/benefits"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-heading font-semibold text-sm rounded-md hover:bg-secondary transition-all active:scale-[0.97]"
            >
              General Benefits & Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
