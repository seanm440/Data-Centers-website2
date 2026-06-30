import { Link } from "wouter";
import { ArrowRight, TrendingUp, Shield, Globe, Zap, Users, Building, Leaf, Clock, Server, BarChart3, Lock, RefreshCw, Cpu, DollarSign, CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-12 pb-8">
        <div className="container">
          <div className="flex items-center mb-4">
            <span className="green-line" />
            <span className="section-label">Benefits & Impact</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Data Centers Matter
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg mb-4">
            Data centers constitute critical national and global infrastructure. They enable economic activity, support public services, drive technological innovation, and increasingly serve as proving grounds for sustainable energy practices.
          </p>
          <p className="text-sm text-muted-foreground">
            For quantitative business analysis including cost data and ROI metrics, see the{" "}
            <Link href="/business" className="text-primary hover:underline">Business page</Link>.
          </p>
        </div>
      </section>

      {/* Business Benefits Overview */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">For Businesses</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Core Operational Advantages
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed">
            Whether an organization operates its own hardware in a colocation facility or consumes cloud services built on shared infrastructure, data centers provide capabilities that are difficult or impossible to replicate through on-premise solutions alone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Elastic Scalability</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Organizations can provision additional computing resources in response to demand fluctuations without capital expenditure on physical hardware. Capacity can be increased by orders of magnitude within minutes and reduced when demand subsides.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This capability is particularly relevant for workloads with variable demand patterns. An e-commerce platform experiencing 10-50x traffic increases during peak sales periods would otherwise need to maintain idle hardware capacity year-round or accept service degradation during critical revenue periods.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Clock size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Guaranteed Uptime</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Professional facilities deliver 99.99% or better uptime, equivalent to less than 53 minutes of unplanned downtime per year. This is achieved through redundant power paths, cooling systems, and network connections that exceed what most organizations can economically justify for internal operations.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gartner research places the average cost of unplanned IT downtime at $5,600 per minute. For large enterprises, this figure exceeds $300,000 per hour. A single extended outage can result in millions of dollars in direct revenue loss, reputational damage, and customer attrition.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Shield size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Enterprise Security</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Data centers implement multi-layered physical and cyber security that would be cost-prohibitive for individual organizations. Physical measures include biometric access controls, continuous security staffing, perimeter defense systems, advanced fire suppression, and comprehensive video surveillance.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Digital security encompasses DDoS mitigation capable of absorbing terabits of attack traffic, network intrusion detection, encryption at rest and in transit, and compliance with regulatory frameworks including SOC 2, ISO 27001, HIPAA, and PCI-DSS. Replicating this security posture internally would require a dedicated team of 10 or more security professionals.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <DollarSign size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Capital Efficiency</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Constructing and operating a private data center requires substantial capital expenditure, typically $10-25 million for a small facility and hundreds of millions for enterprise-scale operations. This excludes ongoing costs for staffing, power, maintenance, and periodic hardware replacement.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Colocation and cloud services convert capital expenditure into predictable operating expenses. Organizations pay for consumed resources, benefiting from the operator's economies of scale in power procurement, hardware purchasing, and staffing efficiency across a shared customer base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Business Advantages */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Competitive Advantage</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            How Data Centers Give Businesses an Edge
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Cpu size={18} className="text-primary" />
                    Access to Cutting-Edge Technology
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Data center providers continuously upgrade their hardware and software. When you use their services, you automatically benefit from the latest processors, fastest storage, and most efficient networking without having to buy it yourself. A startup can access the same computing power as a Fortune 500 company, leveling the playing field.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Globe size={18} className="text-primary" />
                    Global Reach in Minutes
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Want to serve customers in Europe, Asia, and South America? With data center infrastructure, you can deploy your application across multiple continents in hours rather than the months it would take to build physical presence in each region. This means lower latency for users everywhere and the ability to comply with local data residency laws.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <BarChart3 size={18} className="text-primary" />
                    Data Analytics at Scale
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Modern businesses generate enormous amounts of data. Analyzing it requires computing power that would be impractical to maintain in-house. Data centers provide the processing muscle to run complex analytics, machine learning models, and real-time data pipelines that turn raw information into business intelligence.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <RefreshCw size={18} className="text-primary" />
                    Business Continuity
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Data centers enable robust disaster recovery strategies. Your data can be replicated across geographically separated facilities in real-time. If a natural disaster, fire, or other catastrophe hits one location, operations automatically fail over to another site with minimal or zero downtime. This level of resilience is essentially impossible to achieve with a single office server room.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users size={18} className="text-primary" />
                    Focus on Core Business
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managing IT infrastructure is a full-time job — actually, it's many full-time jobs. By offloading that responsibility to data center professionals, businesses can redirect their engineering talent toward building products and serving customers rather than maintaining servers, patching operating systems, and replacing failed hard drives.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Lock size={18} className="text-primary" />
                    Regulatory Compliance
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Industries like healthcare, finance, and government have strict requirements about how data is stored and protected. Professional data centers maintain certifications (HIPAA, PCI-DSS, FedRAMP, SOC 2, ISO 27001) that would cost individual businesses hundreds of thousands of dollars and years of effort to achieve independently.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-primary" />
                    Speed to Market
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Need to launch a new application? With data center infrastructure, you can go from concept to production in days rather than the weeks or months it takes to procure, install, and configure physical hardware. This speed advantage compounds over time — companies that iterate faster win markets.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Server size={18} className="text-primary" />
                    High-Performance Computing
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Some workloads — AI training, scientific simulation, financial modeling, video rendering — require computing power that no single office could provide. Data centers offer access to GPU clusters, high-memory instances, and specialized hardware that enables work that would otherwise be impossible for most organizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Cost Analysis</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            The Real Cost of Going It Alone
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Many businesses consider building their own server infrastructure. Here's what that actually looks like compared to using professional data center services:
          </p>

          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">Cost Category</h4>
                </div>
                <div className="p-4 rounded-lg bg-card border border-border">
                  <h4 className="font-heading font-semibold text-foreground text-sm mb-1">In-House (5 years)</h4>
                </div>
                <div className="p-4 rounded-lg bg-card border border-primary/30 border-2">
                  <h4 className="font-heading font-semibold text-primary text-sm mb-1">Data Center Service</h4>
                </div>
              </div>
              {[
                { category: "Initial Hardware", inHouse: "$500K - $2M+", dc: "$0 (included)" },
                { category: "Facility Build-Out", inHouse: "$1M - $10M+", dc: "$0" },
                { category: "Power & Cooling", inHouse: "$200K - $500K/year", dc: "Included in service" },
                { category: "IT Staff (24/7)", inHouse: "$500K - $1M/year", dc: "Included" },
                { category: "Security Systems", inHouse: "$100K - $500K", dc: "Included" },
                { category: "Hardware Refresh (every 3-5 years)", inHouse: "$300K - $1.5M", dc: "Provider handles" },
                { category: "Redundancy & Backup", inHouse: "$200K - $1M+", dc: "Built-in" },
                { category: "Compliance Certifications", inHouse: "$50K - $200K/year", dc: "Included" },
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
            <p className="text-sm text-primary font-heading font-medium mb-2">Bottom Line</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For most businesses, the total cost of ownership for in-house infrastructure over 5 years is 3-5x higher than equivalent data center services. And that's before accounting for the opportunity cost of having your engineering team manage infrastructure instead of building products.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Industry Applications</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            How Different Industries Benefit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Healthcare</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Hospitals and health systems rely on data centers to store electronic health records, run telemedicine platforms, process medical imaging (a single MRI scan can be 150MB+), and power AI diagnostic tools. HIPAA compliance requirements make professional data center security essential.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>HIPAA compliant storage</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Financial Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Banks, trading firms, and insurance companies need ultra-low latency (microseconds matter in trading), extreme reliability (financial transactions can't be lost), and strict compliance with regulations like PCI-DSS and SOX. Data centers provide the performance and security these workloads demand.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>Sub-millisecond latency</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">E-Commerce</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Online retailers need infrastructure that handles massive traffic spikes (Black Friday, flash sales), processes thousands of transactions per second, serves product images and videos globally, and never goes down during peak shopping hours when every minute of downtime means lost sales.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>Auto-scaling for traffic spikes</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Media & Entertainment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Streaming services, gaming companies, and content creators need massive storage capacity, high-bandwidth delivery networks, and GPU computing for rendering. Netflix alone accounts for about 15% of global internet traffic — that content is served from data centers worldwide.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>Global content delivery</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Manufacturing</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Modern factories use IoT sensors generating terabytes of data daily. Data centers process this information for predictive maintenance, quality control, supply chain optimization, and digital twin simulations. Edge data centers near factories enable real-time processing for time-critical operations.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>IoT data processing</span>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h3 className="font-heading font-semibold text-foreground mb-3">Education</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Universities and school systems use data centers for learning management systems, research computing, student information systems, and virtual labs. The shift to remote and hybrid learning during COVID demonstrated how critical reliable infrastructure is for education continuity.
              </p>
              <div className="flex items-center gap-2 text-xs text-primary">
                <CheckCircle size={12} />
                <span>High-availability learning platforms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Recovery */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Business Continuity</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Disaster Recovery & Data Protection
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                One of the most critical benefits data centers provide to businesses is robust disaster recovery. Without proper backup infrastructure, a single hardware failure, ransomware attack, or natural disaster can destroy years of business data and bring operations to a complete halt.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Professional data centers solve this through geographic redundancy. Your data is continuously replicated to facilities in different regions — often hundreds or thousands of miles apart. If an earthquake destroys one facility, your operations automatically fail over to another location. Most businesses can achieve Recovery Time Objectives (RTO) of minutes rather than days.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The financial impact of data loss is staggering. Studies show that 60% of small businesses that lose their data shut down within 6 months. For larger enterprises, the average cost of a data breach reached $4.45 million in 2023. Data center infrastructure with proper backup and replication is the most effective insurance against these scenarios.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond just backing up data, modern data center services offer point-in-time recovery (restore to any moment), immutable backups (can't be encrypted by ransomware), and automated failover testing to ensure recovery procedures actually work when needed.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-lg bg-card border border-border">
                <h4 className="font-heading font-semibold text-foreground text-sm mb-3">Recovery Capabilities</h4>
                <div className="space-y-3">
                  {[
                    { label: "Recovery Time Objective (RTO)", value: "< 15 minutes", desc: "How fast you're back online" },
                    { label: "Recovery Point Objective (RPO)", value: "< 1 minute", desc: "Maximum data you could lose" },
                    { label: "Geographic Separation", value: "100+ miles", desc: "Distance between backup sites" },
                    { label: "Backup Retention", value: "30-365 days", desc: "How far back you can restore" },
                    { label: "Failover Testing", value: "Automated monthly", desc: "Verified recovery procedures" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-sm text-foreground font-medium">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="text-sm text-primary font-heading font-semibold whitespace-nowrap">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/manus-storage/security-layers_73f05acf.png"
                alt="Data center security layers"
                className="rounded-lg border border-border w-full"
              />
            </div>
            <div>
              <div className="flex items-center mb-3">
                <span className="green-line" />
                <span className="section-label">Security</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
                Multi-Layered Protection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Data center security operates on the principle of defense in depth — multiple independent layers so that if any single measure fails, others still protect the facility. The four main layers are:
              </p>
              <div className="space-y-4">
                {[
                  { num: "1", title: "Perimeter Security", desc: "Fencing, bollards, vehicle barriers, CCTV, and controlled entry points" },
                  { num: "2", title: "Facility Controls", desc: "Biometric access, mantraps, visitor logging, and 24/7 security personnel" },
                  { num: "3", title: "Server Room Controls", desc: "Separate access credentials, motion sensors, and environmental monitoring" },
                  { num: "4", title: "Cabinet-Level Security", desc: "Individual rack locks, tamper detection, and audit trails for every access" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-heading font-bold text-primary">{item.num}</span>
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
      </section>

      {/* Small Business Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Small & Medium Business</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Data Centers Aren't Just for Big Companies
          </h2>
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              There's a common misconception that data center services are only for large enterprises. In reality, cloud services built on data center infrastructure have democratized access to computing power in a way that disproportionately benefits smaller businesses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A five-person startup can now access the same infrastructure that powers Fortune 500 companies. They can run their application on the same hardware, benefit from the same security measures, and scale to millions of users without ever buying a single server. The pay-as-you-go model means they only spend money when they're actually using resources.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For small businesses specifically, data center services eliminate the need for in-house IT expertise. Instead of hiring a system administrator to manage a server closet, they can use managed services where the data center provider handles everything from hardware maintenance to security patching to backup management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-2">Startups</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Launch with minimal capital, scale as you grow. No upfront hardware investment means more budget for product development and customer acquisition.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-2">Growing Businesses</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Add capacity on demand as your customer base expands. No planning months ahead for hardware purchases or worrying about outgrowing your infrastructure.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-2">Remote Teams</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Centralized infrastructure accessible from anywhere. Team members in different cities or countries all access the same systems with the same performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Economic Impact */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Economic Impact</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Impact on Communities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Users size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Job Creation</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A single large data center creates hundreds of construction jobs during building and 30-50+ permanent positions for operations. These are typically well-paying technical roles: electrical engineers, HVAC specialists, network engineers, and security staff. The surrounding area also benefits from indirect employment in support services, restaurants, and housing.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Building size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Tax Revenue</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Data centers represent significant capital investment — often hundreds of millions of dollars — which translates into substantial property tax revenue for local governments. This funds schools, roads, emergency services, and other public infrastructure. Many communities actively compete to attract data center development for this reason.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Globe size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">Infrastructure Development</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Data centers often drive improvements in local power grids, fiber optic connectivity, and road infrastructure. These upgrades benefit the entire community, not just the data center. Areas with strong digital infrastructure also attract other technology companies, creating a positive cycle of investment and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Sustainability</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            The Push Toward Green Data Centers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The data center industry is under significant pressure to reduce its environmental footprint, and it's responding. Major operators are investing heavily in renewable energy, with companies like Google, Microsoft, and Meta all committing to 100% renewable energy for their operations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Beyond just buying renewable energy credits, many operators are directly funding new solar and wind installations. Some are exploring more innovative approaches: using waste heat from servers to warm nearby buildings, locating facilities near hydroelectric dams, or even experimenting with small modular nuclear reactors for carbon-free baseload power.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Water usage is another focus area. Traditional evaporative cooling consumes millions of gallons annually. Newer facilities are adopting air-cooled or closed-loop systems that dramatically reduce water consumption, particularly important in water-stressed regions.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Google</h4>
                </div>
                <p className="text-sm text-muted-foreground">Achieved 1.09 PUE across all facilities. Operating on 24/7 carbon-free energy in multiple regions.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Microsoft</h4>
                </div>
                <p className="text-sm text-muted-foreground">Committed to being carbon negative by 2030. Investing in underwater data centers and hydrogen fuel cells.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Meta</h4>
                </div>
                <p className="text-sm text-muted-foreground">100% renewable energy supported operations. Pioneering waste heat recovery for district heating.</p>
              </div>
              <div className="p-5 rounded-lg bg-card border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf size={18} className="text-primary" />
                  <h4 className="font-heading font-semibold text-foreground text-sm">Industry Average</h4>
                </div>
                <p className="text-sm text-muted-foreground">PUE has improved from 2.0+ in 2010 to approximately 1.5 in 2025. The best operators are pushing below 1.2.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future & AI */}
      <section className="py-16 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="flex items-center mb-3">
            <span className="green-line" />
            <span className="section-label">Looking Ahead</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            The AI-Driven Expansion
          </h2>
          <div className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed mb-4">
              The explosion of artificial intelligence is fundamentally reshaping the data center industry. Training a single large language model can require thousands of GPUs running for months, consuming as much electricity as a small town. This is driving unprecedented demand for new capacity — the industry is projected to nearly double in size between 2025 and 2030, adding 97 gigawatts of new capacity.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This growth is creating new challenges around power availability, cooling density, and supply chain constraints. Many regions simply don't have enough electrical capacity to support the data centers being planned. This is leading to creative solutions: on-site power generation, partnerships with utilities to build new substations, and even relocating facilities to areas with abundant cheap power.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For businesses, this AI boom means that access to data center infrastructure is becoming even more critical. Companies that want to leverage AI need access to GPU computing that only data centers can provide at scale. The organizations that secure this capacity early will have a significant competitive advantage in the AI era.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The market reflects this urgency. Major tech companies plan to invest over $400 billion in data center construction in 2026 alone. Vacancy rates in primary markets hit record lows of 1.9% in 2024, and new construction can't keep pace with demand.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Explore the Glossary <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
