import { Link } from "wouter";
import { ArrowRight, Server, Shield, Zap, Thermometer, Globe, TrendingUp, DollarSign, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedStat({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) {
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
    <div ref={ref} className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">
        {value}{suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-data-center_9defa60c.png"
            alt="Modern data center server room"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.11_0.015_250)] via-[oklch(0.11_0.015_250/0.85)] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.11_0.015_250)] via-transparent to-[oklch(0.11_0.015_250/0.5)]" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center mb-6">
              <span className="green-line" />
              <span className="section-label">Digital Infrastructure Guide</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Where the Internet{" "}
              <span className="text-primary">Actually Lives</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Behind every search query, financial transaction, and streamed video is a data center. These facilities house the computing infrastructure that supports the global digital economy, yet most people have never seen the inside of one or considered how they operate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This resource covers data center technology from the ground up: physical infrastructure, power and cooling systems, security architecture, business applications, and the economic forces shaping the industry's future.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all active:scale-[0.97]"
              >
                Explore the Infrastructure <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-heading font-semibold text-sm rounded-md hover:bg-secondary transition-all active:scale-[0.97]"
              >
                About This Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <span className="green-line" />
              <span className="section-label">Topics Covered</span>
              <span className="green-line ml-3" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              From Power Distribution to Packet Routing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each section addresses a distinct layer of data center operations, from the physical plant that keeps hardware running to the network architecture connecting facilities to the broader internet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/infrastructure#servers" className="group">
              <div className="p-6 rounded-lg bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Server size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Servers & Storage
                </h3>
                <p className="text-sm text-muted-foreground">
                  Rack-mounted compute hardware, storage area networks, and the server architectures that process global data traffic.
                </p>
              </div>
            </Link>

            <Link href="/infrastructure#cooling" className="group">
              <div className="p-6 rounded-lg bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Thermometer size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Cooling Systems
                </h3>
                <p className="text-sm text-muted-foreground">
                  Thermal management through air handling, direct liquid cooling, and immersion techniques that prevent hardware failure.
                </p>
              </div>
            </Link>

            <Link href="/infrastructure#power" className="group">
              <div className="p-6 rounded-lg bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Zap size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Power & Redundancy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Electrical distribution, UPS battery systems, diesel generators, and the redundancy chains that guarantee continuous operation.
                </p>
              </div>
            </Link>

            <Link href="/benefits" className="group">
              <div className="p-6 rounded-lg bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Shield size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Security & Compliance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Physical access controls, cyber defense systems, and the compliance frameworks that govern data protection.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Benefits Highlight */}
      <section className="py-20 bg-[oklch(0.13_0.02_180/0.3)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="green-line" />
                <span className="section-label">Business Value</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Critical Infrastructure for <span className="text-primary">Modern Enterprise</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Data center services have become foundational to business operations across every sector. Organizations that once maintained their own server rooms now rely on professional facilities that offer superior reliability, security, and cost efficiency at scale.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The economic case is straightforward: professional data centers deliver enterprise-grade infrastructure at a fraction of the cost of building equivalent capabilities in-house, while eliminating the operational burden of maintaining physical IT systems.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign size={14} className="text-primary" />
                    <span className="text-xs font-heading font-semibold text-foreground">3-5x Cost Reduction</span>
                  </div>
                  <p className="text-xs text-muted-foreground">vs. equivalent in-house infrastructure</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock size={14} className="text-primary" />
                    <span className="text-xs font-heading font-semibold text-foreground">Minutes to Deploy</span>
                  </div>
                  <p className="text-xs text-muted-foreground">vs. weeks for physical procurement</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={14} className="text-primary" />
                    <span className="text-xs font-heading font-semibold text-foreground">Enterprise Security</span>
                  </div>
                  <p className="text-xs text-muted-foreground">SOC 2, ISO 27001, HIPAA certified</p>
                </div>
                <div className="p-3 rounded-lg bg-card border border-border">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe size={14} className="text-primary" />
                    <span className="text-xs font-heading font-semibold text-foreground">Global Deployment</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Multi-region presence in hours</p>
                </div>
              </div>

              <Link
                href="/business"
                className="inline-flex items-center gap-2 text-primary font-heading font-medium text-sm hover:gap-3 transition-all"
              >
                View business statistics and data <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="/manus-storage/network-infrastructure_c9e6c4d1.png"
                alt="Network infrastructure powering businesses"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="green-line" />
                <span className="section-label">Energy & Efficiency</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                <span className="text-primary">1-2%</span> of Global Electricity Powers the Digital Economy
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Data centers collectively consume between 1 and 2 percent of global electricity production. That figure supports email systems for billions of users, video streaming platforms, cloud storage, real-time financial markets, social networks, and the training of artificial intelligence models.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Despite a 25-fold increase in global data traffic over the past decade, total energy consumption by data centers has only approximately doubled during the same period. This efficiency gain is attributable to advances in cooling technology, server consolidation through virtualization, and improved power management systems.
              </p>
              <Link
                href="/infrastructure#power"
                className="inline-flex items-center gap-2 text-primary font-heading font-medium text-sm hover:gap-3 transition-all"
              >
                Learn about power infrastructure <ArrowRight size={16} />
              </Link>
            </div>

            <div className="relative">
              <img
                src="/manus-storage/infrastructure-cooling_e5e7aa11.png"
                alt="Data center cooling infrastructure"
                className="rounded-lg border border-border w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-[oklch(0.14_0.02_200)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedStat value="$418B" label="Global market size (2025)" />
            <AnimatedStat value="99.999%" label="Industry uptime standard" />
            <AnimatedStat value="10,000+" label="Data centers worldwide" />
            <AnimatedStat value="97 GW" label="Projected capacity growth by 2030" />
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <span className="green-line" />
              <span className="section-label">Industry Data</span>
              <span className="green-line ml-3" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Figures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="text-2xl font-heading font-bold text-primary mb-1">$5,600/min</p>
              <p className="text-sm text-muted-foreground">Average cost of unplanned IT downtime according to Gartner. For Fortune 500 firms, that figure exceeds $500,000 per hour.</p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="text-2xl font-heading font-bold text-primary mb-1">94%</p>
              <p className="text-sm text-muted-foreground">Of companies experiencing catastrophic data loss do not survive long-term. 43% never reopen; 51% close within two years.</p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="text-2xl font-heading font-bold text-primary mb-1">$6.7T</p>
              <p className="text-sm text-muted-foreground">Total investment required in global data center infrastructure by 2030, according to McKinsey's April 2025 analysis.</p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="text-2xl font-heading font-bold text-primary mb-1">5.5M</p>
              <p className="text-sm text-muted-foreground">Jobs supported by the data center industry in the United States in 2024, contributing $927 billion to GDP.</p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="text-2xl font-heading font-bold text-primary mb-1">26 min/year</p>
              <p className="text-sm text-muted-foreground">Maximum permissible downtime for a Tier IV facility (99.995% uptime), the highest classification in the industry.</p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <p className="text-2xl font-heading font-bold text-primary mb-1">1.09 PUE</p>
              <p className="text-sm text-muted-foreground">Google's fleet-wide Power Usage Effectiveness, meaning only 9% of energy consumption goes to non-computing overhead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keep Exploring Section */}
      <section className="py-20 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Continue Reading
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore specific topics in depth, review technical terminology, or examine the source material behind this content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/business" className="group">
              <div className="p-6 rounded-lg bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Business & Economics
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cited statistics on cost savings, market growth, industry adoption, and economic impact.
                </p>
              </div>
            </Link>

            <Link href="/glossary" className="group">
              <div className="p-6 rounded-lg bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Globe size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Technical Glossary
                </h3>
                <p className="text-sm text-muted-foreground">
                  Definitions for 30 key terms covering networking, hardware, power, cooling, and security.
                </p>
              </div>
            </Link>

            <Link href="/sources" className="group">
              <div className="p-6 rounded-lg bg-card border border-border card-hover h-full">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Server size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  Sources & References
                </h3>
                <p className="text-sm text-muted-foreground">
                  Industry reports, research papers, and documentation from leading technology organizations.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
