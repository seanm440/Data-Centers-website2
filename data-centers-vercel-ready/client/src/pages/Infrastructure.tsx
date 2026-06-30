import { Link } from "wouter";
import { Server, Thermometer, Zap, Network, HardDrive, ArrowRight } from "lucide-react";
import { PUEChart } from "@/components/Charts";

const sections = [
  { id: "servers", label: "Servers & Compute" },
  { id: "storage", label: "Storage Systems" },
  { id: "networking", label: "Networking" },
  { id: "cooling", label: "Cooling Systems" },
  { id: "power", label: "Power Infrastructure" },
  { id: "tiers", label: "Tier Classification" },
  { id: "types", label: "Types of Data Centers" },
];

export default function Infrastructure() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-12 pb-8">
        <div className="container">
          <div className="flex items-center mb-4">
            <span className="green-line" />
            <span className="section-label">Infrastructure</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Inside a Data Center
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A technical overview of the primary systems that constitute a modern data center facility, from compute hardware and storage arrays to the cooling and power infrastructure that maintains continuous operation.
          </p>

          {/* On This Page nav */}
          <div className="mt-8 p-5 rounded-lg bg-card border border-border">
            <h3 className="font-heading font-semibold text-sm text-foreground mb-3">On This Page</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section id="servers" className="py-16 scroll-mt-20">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Part 1</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Servers & Compute
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Servers constitute the computational core of any data center. These are purpose-built machines designed for continuous operation, processing requests from users across global networks. Unlike consumer hardware, data center servers are engineered for reliability and density, manufactured as thin rack-mounted units that stack vertically in standardized 19-inch cabinets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A standard server rack accommodates between 20 and 42 individual units, and a large facility may contain thousands of racks. Hyperscale operations maintained by organizations such as Google, Amazon, and Microsoft house millions of servers operating as coordinated clusters.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Server configurations vary according to workload requirements. Compute-optimized systems serve AI training and scientific simulation; memory-optimized configurations support database operations; storage-dense systems handle file serving and archival. The current industry trajectory favors custom silicon, with major operators designing application-specific processors rather than relying exclusively on commercial off-the-shelf hardware.
              </p>

              <div className="mt-6 p-4 rounded-lg border border-primary/20 bg-primary/5">
                <p className="text-sm text-primary font-heading font-medium mb-1">Key Specification</p>
                <p className="text-sm text-muted-foreground">
                  A standard 42U rack can draw anywhere from 5kW to 30kW+ of power depending on server density, with high-performance computing racks pushing even higher.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Server size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Rack Servers</h4>
                </div>
                <p className="text-sm text-muted-foreground">The most common form factor. Thin, standardized units (1U to 4U) that slide into 19-inch racks. Optimized for density and airflow.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Server size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Blade Servers</h4>
                </div>
                <p className="text-sm text-muted-foreground">Ultra-compact modules that share power and cooling within a chassis. Great for high-density computing where space is at a premium.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Server size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">GPU Servers</h4>
                </div>
                <p className="text-sm text-muted-foreground">Specialized for AI/ML workloads and parallel processing. These draw significantly more power and generate more heat than standard servers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Section */}
      <section id="storage" className="py-16 bg-[oklch(0.13_0.02_180/0.2)] scroll-mt-20">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Part 2</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Storage Systems
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Data centers don't just process information — they store massive amounts of it. The storage infrastructure in a modern facility is designed for both speed and redundancy. Your data is never stored in just one place; it's replicated across multiple drives, often across multiple geographic locations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The storage hierarchy typically includes fast NVMe SSDs for frequently accessed "hot" data, standard SSDs for general-purpose storage, and sometimes still traditional hard drives for archival "cold" data where speed matters less than cost per terabyte.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Storage Area Networks (SANs) and Network-Attached Storage (NAS) systems organize these drives into logical pools that servers can access as needed. Modern software-defined storage abstracts the physical hardware entirely, letting administrators manage petabytes of data as a single flexible resource.
              </p>
            </div>
            <div>
              <div className="p-5 rounded-lg bg-card border border-border mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <HardDrive size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Storage Tiers</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Hot Storage (NVMe SSD)</span>
                    <span className="text-primary font-medium">~7M IOPS</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Warm Storage (SSD)</span>
                    <span className="text-primary font-medium">~500K IOPS</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "60%" }} />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Cold Storage (HDD)</span>
                    <span className="text-primary font-medium">~200 IOPS</span>
                  </div>
                  <div className="w-full h-1.5 bg-secondary rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: "10%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Networking Section */}
      <section id="networking" className="py-16 scroll-mt-20">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Part 3</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Networking
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The networking infrastructure is what connects everything together — both internally between servers and externally to the internet. Data centers use a layered network architecture with core switches at the top, aggregation switches in the middle, and top-of-rack switches connecting individual servers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modern data centers run on fiber optic cabling internally, with speeds of 100Gbps, 400Gbps, and increasingly 800Gbps between switches. The external connections (called "uplinks" or "transit") connect the facility to internet exchange points and other data centers through high-capacity fiber links.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Redundancy is built into every layer. If a switch fails, traffic automatically reroutes through alternate paths. If an external fiber link gets cut, backup connections take over. The goal is zero single points of failure in the network path.
              </p>
            </div>
            <div>
              <img
                src="/manus-storage/network-infrastructure_c9e6c4d1.png"
                alt="Network infrastructure with fiber optic cables"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cooling Section */}
      <section id="cooling" className="py-16 bg-[oklch(0.13_0.02_180/0.2)] scroll-mt-20">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Part 4</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Cooling Systems
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Servers generate substantial thermal output. A single high-density rack can produce thermal loads equivalent to a residential heating system. Without effective heat removal, components reach failure temperatures within minutes. Cooling infrastructure typically accounts for 30-40% of a facility's total energy consumption, making it one of the primary targets for efficiency improvement across the industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The predominant approach remains air cooling with hot aisle/cold aisle containment. Conditioned air is delivered through a raised floor plenum and directed upward through perforated tiles at the front of server racks. Servers intake cold air from the front, exhaust heated air to the rear, where containment systems capture and return it to cooling units for reconditioning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                However, increasing power densities driven by AI workloads are approaching the practical limits of air-based thermal management. This is accelerating adoption of liquid cooling technologies, including direct-to-chip systems where coolant circulates through cold plates mounted on processors, and full immersion cooling where server hardware is submerged in non-conductive dielectric fluid.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Thermometer size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Air Cooling</h4>
                </div>
                <p className="text-sm text-muted-foreground">Traditional CRAC/CRAH units with hot/cold aisle containment. Effective up to ~15kW per rack.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Thermometer size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Direct Liquid Cooling</h4>
                </div>
                <p className="text-sm text-muted-foreground">Cold plates attached directly to CPUs/GPUs with circulating coolant. Handles 30-50kW+ per rack.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Thermometer size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Immersion Cooling</h4>
                </div>
                <p className="text-sm text-muted-foreground">Servers fully submerged in dielectric fluid. The most efficient method, eliminating fans entirely and handling extreme densities.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Thermometer size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Free Cooling</h4>
                </div>
                <p className="text-sm text-muted-foreground">Using outside air or water when ambient temperatures are low enough. Dramatically reduces energy costs in cooler climates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Power Section */}
      <section id="power" className="py-16 scroll-mt-20">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Part 5</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Power Infrastructure
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Electrical power is the fundamental resource upon which all data center operations depend. A large facility may consume 50 to 100+ megawatts, comparable to the electrical demand of a small city. Power infrastructure is engineered with multiple redundancy layers to ensure continuous operation even during complete utility grid failure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The power distribution chain begins with utility feeds entering the facility through multiple independent connections. Power passes through step-down transformers to Uninterruptible Power Supply systems, typically large-scale battery installations capable of sustaining full load for 5-15 minutes. This interval provides sufficient time for backup diesel generators to reach operating speed and assume the electrical load.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Industry efficiency is measured using Power Usage Effectiveness (PUE), defined as the ratio of total facility power to IT equipment power. A theoretical PUE of 1.0 would indicate zero overhead, which is physically impossible given cooling, lighting, and distribution losses. The current industry average is approximately 1.5, indicating 50% overhead. Leading operators such as Google report fleet-wide PUE values near 1.1.
              </p>
            </div>
            <div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <h4 className="font-heading font-semibold text-foreground text-sm mb-4 flex items-center gap-2">
                  <Zap size={18} className="text-primary" />
                  Power Redundancy Chain
                </h4>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Utility Grid", desc: "Multiple independent feeds from the power company" },
                    { step: "2", title: "Automatic Transfer Switch", desc: "Detects outages and switches sources in milliseconds" },
                    { step: "3", title: "UPS Battery Systems", desc: "Instant backup power for 5-15 minutes" },
                    { step: "4", title: "Diesel Generators", desc: "Long-term backup, can run for days with fuel" },
                    { step: "5", title: "Power Distribution Units", desc: "Distribute power to individual racks and servers" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <span className="text-xs font-heading font-bold text-primary">{item.step}</span>
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

      {/* PUE Chart */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <PUEChart />
          </div>
        </div>
      </section>

      {/* Tier Classification Section */}
      <section id="tiers" className="py-16 bg-[oklch(0.13_0.02_180/0.2)] scroll-mt-20">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Part 6</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Tier Classification System
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            The Uptime Institute created a four-tier classification system that rates data centers based on their redundancy and uptime capabilities. Each tier builds on the one below it, with Tier IV being the most resilient (and most expensive) to build and operate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { tier: "I", uptime: "99.671%", downtime: "28.8 hours/year", desc: "Basic infrastructure, single path for power and cooling, no redundancy." },
              { tier: "II", uptime: "99.741%", downtime: "22 hours/year", desc: "Redundant components (N+1) but still single distribution path." },
              { tier: "III", uptime: "99.982%", downtime: "1.6 hours/year", desc: "Multiple distribution paths, concurrently maintainable without downtime." },
              { tier: "IV", uptime: "99.995%", downtime: "26 minutes/year", desc: "Fully fault-tolerant with 2N redundancy. Can withstand any single failure." },
            ].map((t) => (
              <div key={t.tier} className="p-5 rounded-lg bg-card border border-border">
                <div className="text-2xl font-heading font-bold text-primary mb-1">Tier {t.tier}</div>
                <div className="text-sm font-medium text-foreground mb-1">{t.uptime} uptime</div>
                <div className="text-xs text-muted-foreground mb-3">{t.downtime}</div>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Center Types Comparison */}
      <section id="types" className="py-16 scroll-mt-20">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Part 7</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Types of Data Centers
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Not all data centers serve the same purpose or operate at the same scale. The industry broadly categorizes facilities into four types, each designed to address distinct operational requirements, ownership models, and geographic strategies.
          </p>

          {/* Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Enterprise */}
            <div className="p-6 rounded-lg bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Server size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Enterprise</h3>
                  <p className="text-xs text-muted-foreground">Single-tenant, privately owned</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Built and operated by a single organization exclusively for its own use. The company owns the facility, the hardware, and manages all operations internally. Common among large financial institutions, government agencies, and corporations with strict data sovereignty requirements.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Typical Size</p>
                  <p className="text-sm text-foreground font-medium">5,000-50,000 sq ft</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Power</p>
                  <p className="text-sm text-foreground font-medium">1-10 MW</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Ownership</p>
                  <p className="text-sm text-foreground font-medium">Single company</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Use Case</p>
                  <p className="text-sm text-foreground font-medium">Internal IT operations</p>
                </div>
              </div>
            </div>

            {/* Colocation */}
            <div className="p-6 rounded-lg bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-400" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-blue-400/10 flex items-center justify-center">
                  <Server size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Colocation</h3>
                  <p className="text-xs text-muted-foreground">Multi-tenant, shared facility</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A third-party provider owns and operates the building, power, cooling, and physical security. Customers rent rack space and bring their own servers. Multiple tenants share the facility but maintain isolated environments. The $91 billion colocation market is growing at 13.7% annually.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Typical Size</p>
                  <p className="text-sm text-foreground font-medium">20,000-200,000 sq ft</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Power</p>
                  <p className="text-sm text-foreground font-medium">5-50 MW</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Ownership</p>
                  <p className="text-sm text-foreground font-medium">Provider (space rented)</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Use Case</p>
                  <p className="text-sm text-foreground font-medium">Businesses needing control</p>
                </div>
              </div>
            </div>

            {/* Hyperscale */}
            <div className="p-6 rounded-lg bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-400" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-purple-400/10 flex items-center justify-center">
                  <Server size={20} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Hyperscale</h3>
                  <p className="text-xs text-muted-foreground">Massive scale, cloud providers</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The largest facilities in existence, operated by companies like Amazon (AWS), Microsoft (Azure), and Google Cloud. These campuses contain hundreds of thousands of servers and are purpose-built for cloud computing at global scale. They represent the majority of new construction investment.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Typical Size</p>
                  <p className="text-sm text-foreground font-medium">100,000+ sq ft</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Power</p>
                  <p className="text-sm text-foreground font-medium">50-200+ MW</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Ownership</p>
                  <p className="text-sm text-foreground font-medium">Cloud providers</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Use Case</p>
                  <p className="text-sm text-foreground font-medium">Public cloud, AI training</p>
                </div>
              </div>
            </div>

            {/* Edge */}
            <div className="p-6 rounded-lg bg-card border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-400" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-amber-400/10 flex items-center justify-center">
                  <Server size={20} className="text-amber-400" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground">Edge</h3>
                  <p className="text-xs text-muted-foreground">Small, distributed, low-latency</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Small facilities positioned close to end users to minimize latency. Located in urban areas, cell towers, or industrial sites. Critical for applications requiring real-time response: autonomous vehicles, gaming, IoT processing, and content delivery. The fastest-growing segment of the market.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Typical Size</p>
                  <p className="text-sm text-foreground font-medium">100-5,000 sq ft</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Power</p>
                  <p className="text-sm text-foreground font-medium">50 kW - 2 MW</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Ownership</p>
                  <p className="text-sm text-foreground font-medium">Various (telcos, CDNs)</p>
                </div>
                <div className="p-2.5 rounded bg-secondary/50">
                  <p className="text-[10px] text-muted-foreground uppercase font-heading tracking-wider">Use Case</p>
                  <p className="text-sm text-foreground font-medium">Low-latency applications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              <div className="p-5 rounded-lg bg-card border border-border">
                <h3 className="font-heading font-semibold text-foreground text-sm mb-4">Side-by-Side Comparison</h3>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  <div className="p-2 text-xs font-heading font-semibold text-muted-foreground">Attribute</div>
                  <div className="p-2 text-xs font-heading font-semibold text-primary">Enterprise</div>
                  <div className="p-2 text-xs font-heading font-semibold text-blue-400">Colocation</div>
                  <div className="p-2 text-xs font-heading font-semibold text-purple-400">Hyperscale</div>
                  <div className="p-2 text-xs font-heading font-semibold text-amber-400">Edge</div>
                </div>
                {[
                  { attr: "Scale", enterprise: "Small-Medium", colo: "Medium-Large", hyper: "Massive", edge: "Micro" },
                  { attr: "Latency", enterprise: "Variable", colo: "Low", hyper: "Low-Medium", edge: "Ultra-Low (<5ms)" },
                  { attr: "CapEx", enterprise: "Very High", colo: "Low (rent)", hyper: "Extreme", edge: "Moderate" },
                  { attr: "OpEx", enterprise: "High", colo: "Predictable", hyper: "Optimized", edge: "Per-site" },
                  { attr: "Control", enterprise: "Full", colo: "Hardware only", hyper: "Software only", edge: "Limited" },
                  { attr: "Scalability", enterprise: "Limited", colo: "Moderate", hyper: "Near-infinite", edge: "Per-location" },
                  { attr: "Security", enterprise: "Self-managed", colo: "Shared physical", hyper: "Provider-managed", edge: "Varies" },
                  { attr: "Best For", enterprise: "Regulated industries", colo: "Mid-size firms", hyper: "Cloud-native apps", edge: "Real-time apps" },
                ].map((row, i) => (
                  <div key={i} className={`grid grid-cols-5 gap-2 ${i % 2 === 0 ? 'bg-secondary/30' : ''} rounded`}>
                    <div className="p-2 text-xs text-muted-foreground font-medium">{row.attr}</div>
                    <div className="p-2 text-xs text-foreground">{row.enterprise}</div>
                    <div className="p-2 text-xs text-foreground">{row.colo}</div>
                    <div className="p-2 text-xs text-foreground">{row.hyper}</div>
                    <div className="p-2 text-xs text-foreground">{row.edge}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Selection Guidance */}
          <div className="mt-8 p-5 rounded-lg border border-primary/20 bg-primary/5">
            <p className="text-sm text-primary font-heading font-medium mb-2">Selection Criteria</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The appropriate facility type depends on the organization's specific requirements. Regulatory constraints may mandate enterprise facilities. Cost optimization typically favors colocation or cloud (hyperscale). Latency-sensitive workloads require edge deployments. Most large organizations employ a hybrid strategy, distributing workloads across multiple facility types based on the performance, compliance, and cost characteristics of each application.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">Now that you understand the infrastructure, explore why it all matters.</p>
          <Link
            href="/benefits"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all active:scale-[0.97]"
          >
            Explore Benefits & Impact <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
