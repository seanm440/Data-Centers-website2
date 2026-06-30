import { useState, useMemo } from "react";

type GlossaryTerm = {
  term: string;
  category: string;
  definition: string;
};

const glossaryTerms: GlossaryTerm[] = [
  { term: "Bandwidth", category: "Networking", definition: "The maximum rate of data transfer across a network path, typically measured in gigabits per second (Gbps). Higher bandwidth means more data can flow simultaneously." },
  { term: "Blade Server", category: "Hardware", definition: "An ultra-compact server module that slides into a shared chassis, sharing power supplies and cooling fans with other blades to maximize density." },
  { term: "CDN (Content Delivery Network)", category: "Networking", definition: "A distributed network of servers that caches content closer to end users, reducing latency and load on the origin data center." },
  { term: "Colocation", category: "Services", definition: "A service where businesses rent space, power, and cooling in a third-party data center to house their own servers, rather than building their own facility." },
  { term: "Cold Aisle", category: "Cooling", definition: "The aisle in a data center where cool air is delivered to the front (intake side) of server racks. Paired with hot aisles to manage airflow efficiently." },
  { term: "CRAC (Computer Room Air Conditioner)", category: "Cooling", definition: "A precision cooling unit designed specifically for data centers, using a compressor-based refrigeration cycle to remove heat from the air." },
  { term: "CRAH (Computer Room Air Handler)", category: "Cooling", definition: "Similar to a CRAC but uses chilled water from a central plant instead of its own compressor, offering better efficiency at scale." },
  { term: "Cross-Connect", category: "Networking", definition: "A direct physical cable connection between two customers or networks within the same data center facility, enabling low-latency private communication." },
  { term: "DDoS (Distributed Denial of Service)", category: "Security", definition: "A cyberattack that floods a target with traffic from many sources simultaneously, attempting to overwhelm its capacity and cause downtime." },
  { term: "Diesel Generator", category: "Power", definition: "A backup power source that burns diesel fuel to generate electricity when utility power fails. Can sustain a data center for days with adequate fuel supply." },
  { term: "Edge Data Center", category: "Services", definition: "A smaller facility located closer to end users (at the 'edge' of the network) to reduce latency for time-sensitive applications like gaming or autonomous vehicles." },
  { term: "Fiber Optic Cable", category: "Networking", definition: "A cable containing thin glass or plastic fibers that transmit data as pulses of light, enabling extremely high bandwidth over long distances with minimal signal loss." },
  { term: "Hot Aisle", category: "Cooling", definition: "The aisle where hot exhaust air exits from the rear of server racks. Containment systems capture this air and route it back to cooling units." },
  { term: "Hyperscale", category: "Services", definition: "A data center designed for massive scale, typically operated by companies like Google, Amazon, or Microsoft. Usually 100,000+ square feet with 100+ MW of power capacity." },
  { term: "Immersion Cooling", category: "Cooling", definition: "A cooling method where servers are fully submerged in a non-conductive dielectric fluid that absorbs heat directly from components, eliminating the need for fans." },
  { term: "Latency", category: "Networking", definition: "The time delay between sending a request and receiving a response, measured in milliseconds. Lower latency means faster, more responsive applications." },
  { term: "Load Balancer", category: "Networking", definition: "A device or software that distributes incoming network traffic across multiple servers to prevent any single server from becoming overwhelmed." },
  { term: "Mantrap", category: "Security", definition: "A small room with two interlocking doors where only one can be open at a time, preventing unauthorized 'tailgating' into secure areas." },
  { term: "N+1 Redundancy", category: "Power", definition: "A redundancy configuration where one additional unit exists beyond what's needed for normal operation. If one component fails, the spare takes over immediately." },
  { term: "2N Redundancy", category: "Power", definition: "Full duplication of all critical systems — two completely independent power paths, either of which can support the entire load alone." },
  { term: "PDU (Power Distribution Unit)", category: "Power", definition: "A device that distributes electrical power to servers within a rack. Intelligent PDUs can monitor power consumption per outlet and be managed remotely." },
  { term: "PUE (Power Usage Effectiveness)", category: "Power", definition: "The ratio of total facility power to IT equipment power. A PUE of 1.5 means for every watt used by servers, 0.5 watts goes to cooling and overhead. Lower is better." },
  { term: "Rack Unit (U)", category: "Hardware", definition: "A standard unit of measurement for server height. One rack unit (1U) equals 1.75 inches (44.45mm). A standard rack is 42U tall." },
  { term: "SAN (Storage Area Network)", category: "Hardware", definition: "A dedicated high-speed network that provides block-level access to shared storage, allowing multiple servers to access the same storage pools." },
  { term: "SLA (Service Level Agreement)", category: "Services", definition: "A contract specifying guaranteed uptime, performance metrics, and compensation if the provider fails to meet those commitments." },
  { term: "Switch", category: "Networking", definition: "A networking device that connects multiple devices within a network and forwards data packets between them based on their destination addresses." },
  { term: "Top-of-Rack (ToR)", category: "Networking", definition: "A network switch installed at the top of each server rack, connecting all servers in that rack to the broader data center network." },
  { term: "UPS (Uninterruptible Power Supply)", category: "Power", definition: "A battery-based system that provides instant backup power during utility outages, bridging the gap until diesel generators can start and reach full capacity." },
  { term: "Virtualization", category: "Hardware", definition: "Technology that allows a single physical server to run multiple virtual machines, each acting as an independent computer with its own operating system." },
  { term: "VLAN (Virtual Local Area Network)", category: "Networking", definition: "A logical network partition that groups devices together regardless of their physical location, improving security and traffic management." },
];

const categories = ["All Terms", "Networking", "Hardware", "Power", "Cooling", "Security", "Services"];

export default function Glossary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Terms");

  const filtered = useMemo(() => {
    return glossaryTerms
      .filter((t) => {
        const matchesCategory = activeCategory === "All Terms" || t.category === activeCategory;
        const matchesSearch =
          search === "" ||
          t.term.toLowerCase().includes(search.toLowerCase()) ||
          t.definition.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [search, activeCategory]);

  return (
    <div>
      {/* Page Header */}
      <section className="pt-12 pb-8">
        <div className="container">
          <div className="flex items-center mb-4">
            <span className="green-line" />
            <span className="section-label">Interactive Glossary</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Data Center Terms Explained
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            All the technical terms used throughout this site, defined in plain language. Use the search bar or filter by category to find what you're looking for.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="pb-6">
        <div className="container">
          <div className="mb-6">
            <div className="relative max-w-md">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search terms or definitions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-md bg-card border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-heading font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Showing {filtered.length} of {glossaryTerms.length} terms
          </p>
        </div>
      </section>

      {/* Terms List */}
      <section className="pb-16">
        <div className="container">
          <div className="space-y-3">
            {filtered.map((term) => (
              <div
                key={term.term}
                id={term.term.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                className="p-5 rounded-lg bg-card border border-border scroll-mt-20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-heading font-semibold text-foreground">{term.term}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-heading font-semibold uppercase tracking-wider bg-primary/10 text-primary">
                    {term.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{term.definition}</p>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No terms found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
