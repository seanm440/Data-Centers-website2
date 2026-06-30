import { Link } from "wouter";
import { ArrowRight, BookOpen, Users, Target } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="pt-12 pb-8">
        <div className="container">
          <div className="flex items-center mb-4">
            <span className="green-line" />
            <span className="section-label">About This Project</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Purpose and Scope
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Background on this project, its intended audience, and the approach taken in presenting this material.
          </p>
        </div>
      </section>

      {/* What This Is About */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Target size={20} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Project Overview</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            This site serves as a comprehensive reference on data center technology and its role in the global digital economy. The content spans physical infrastructure, operational systems, business applications, and economic impact, with each section designed to build upon the preceding material.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The motivation for creating this resource stems from a straightforward observation: data centers underpin virtually every digital service in operation today, yet public understanding of how they function remains limited. When someone stores a file in the cloud, initiates a video call, or processes a payment online, that activity depends on physical infrastructure housed in purpose-built facilities. Understanding these systems provides valuable context for decisions ranging from personal technology choices to enterprise IT strategy.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The scope intentionally covers both technical and economic dimensions. Data centers are not merely an engineering topic. They intersect with energy policy, real estate development, workforce economics, environmental sustainability, and national security. Presenting these connections in a single resource allows readers to develop a more complete picture of the industry's significance.
          </p>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-12 bg-[oklch(0.13_0.02_180/0.2)]">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Users size={20} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Intended Audience</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            This material is written for several audiences, and the content has been structured to serve each effectively:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-lg bg-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-2">Students and Researchers</h4>
              <p className="text-sm text-muted-foreground">
                Those studying computer science, information technology, engineering, or related fields will find a structured introduction to data center systems. Technical terminology is defined in the glossary, and concepts are presented in a logical progression from fundamental to advanced.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-2">Business and IT Professionals</h4>
              <p className="text-sm text-muted-foreground">
                Decision-makers evaluating cloud services, colocation options, or infrastructure investments will find relevant technical context and economic data. The Business section provides cited statistics on costs, adoption rates, and return on investment.
              </p>
            </div>
            <div className="p-5 rounded-lg bg-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-2">General Readers</h4>
              <p className="text-sm text-muted-foreground">
                Anyone seeking to understand the physical infrastructure behind digital services will find this material accessible. No prior technical knowledge is assumed, and all specialized terms are explained upon first use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Structure */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <BookOpen size={20} className="text-primary" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Content and Methodology</h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-4">
            The information presented across this site draws from published research by organizations including McKinsey & Company, IBM, Gartner, the US Department of Energy, the Uptime Institute, and major technology companies. All statistical claims are attributed to their original sources, which are listed on the Sources page.
          </p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            The site is organized into the following sections, each addressing a distinct aspect of data center technology and its implications:
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Infrastructure — Physical components including servers, storage, networking, cooling, and power systems",
              "Benefits — General advantages of data center infrastructure for reliability, security, and sustainability",
              "Business — Cited statistics on economic impact, cost analysis, industry applications, and market data",
              "Glossary — Searchable definitions for 30 technical terms organized by category",
              "Sources — Complete list of references with links to original publications",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-lg border border-primary/20 bg-primary/5">
            <p className="text-sm text-primary font-heading font-medium mb-2">Editorial Approach</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Content is written to be technically accurate without being unnecessarily dense. Where industry jargon is unavoidable, terms are defined in context and cross-referenced to the glossary. Statistical claims include source attribution. The goal is clarity and precision rather than oversimplification.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container text-center">
          <p className="text-muted-foreground mb-4">Begin with the technical foundations or explore the economic data.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/infrastructure"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-md hover:brightness-110 transition-all active:scale-[0.97]"
            >
              Infrastructure Overview <ArrowRight size={16} />
            </Link>
            <Link
              href="/business"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-heading font-semibold text-sm rounded-md hover:bg-secondary transition-all active:scale-[0.97]"
            >
              Business Statistics
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
