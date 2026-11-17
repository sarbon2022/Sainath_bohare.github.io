import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Building2, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { SocialLinks } from "@/components/site/SocialLinks";
import { TechTag } from "@/components/site/PageHeader";
import { getGroupIcon } from "@/components/site/skill-icons";
import { heroIntro, profile, projects, skillGroups } from "@/data/profile";
import heroImage from "@/assets/hero-workspace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sainath Bohare — Full-Stack .NET & Angular Developer" },
      {
        name: "description",
        content:
          "Full-Stack .NET developer with 2.9+ years building enterprise CRM modules, SQL Server solutions and SOAP/REST supplier integrations.",
      },
      { property: "og:title", content: "Sainath Bohare — Full-Stack .NET & Angular Developer" },
      {
        property: "og:description",
        content: "Enterprise web applications with C#, ASP.NET, Angular, SQL Server and third-party API integrations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const quickFacts = [
  { icon: Briefcase, label: "Experience", value: profile.experience },
  { icon: MapPin, label: "Based in", value: "Thane, India" },
  { icon: Building2, label: "Previously", value: profile.previousCompany },
];

const focusAreas = [
  { id: "backend", title: "Backend on .NET", text: "C#, ASP.NET MVC, Core, Web Forms and Web API services." },
  { id: "frontend", title: "Frontend & Angular", text: "Interactive UIs with Angular, JavaScript, jQuery and AJAX." },
  { id: "database", title: "SQL Server", text: "Stored procedures, functions, views and query optimization." },
  { id: "api", title: "API Integrations", text: "SOAP & REST supplier connectivity with XML/JSON handling." },
];

function Index() {
  return (
    <main>
      {/* Hero */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-secondary/60 px-3.5 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="animate-pulse-ring h-2 w-2 rounded-full bg-primary" />
              Open to .NET & Full-Stack roles
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">Sainath Bohare</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 font-display text-lg font-medium text-foreground/90 sm:text-xl">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{heroIntro}</p>
          </Reveal>
          <Reveal delay={320} className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/projects">
                View My Projects <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="ghost" size="xl" className="text-muted-foreground">
              <a href={profile.resumeUrl} download>
                <Download /> Resume
              </a>
            </Button>
          </Reveal>
          <Reveal delay={400} className="mt-10">
            <SocialLinks />
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-20 blur-3xl" />
          <div className="animate-float relative overflow-hidden rounded-3xl border border-glass-border shadow-glow">
            <img
              src={heroImage}
              alt="Illustration of a developer workstation connected to databases, APIs and servers"
              width={1280}
              height={1152}
              className="h-auto w-full"
            />
          </div>
          <div className="glass absolute -bottom-6 -left-4 rounded-2xl px-4 py-3 sm:-left-8">
            <p className="font-mono text-[11px] text-muted-foreground">stack.current</p>
            <p className="font-display text-sm font-semibold">C# · ASP.NET · Angular · SQL</p>
          </div>
        </Reveal>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="glass grid gap-px overflow-hidden rounded-2xl sm:grid-cols-3">
          {quickFacts.map((f, i) => (
            <Reveal key={f.label} delay={i * 80} className="flex items-center gap-4 p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</p>
                <p className="font-display text-lg font-semibold">{f.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Focus areas */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{"// what I do"}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Full-stack, end to end</h2>
          </div>
          <Link to="/skills" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            All technical skills <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((a, i) => {
            const Icon = getGroupIcon(a.id);
            const count = skillGroups.find((g) => g.id === a.id)?.skills.length ?? 0;
            return (
              <Reveal key={a.id} delay={i * 80} className="glass glass-hover rounded-2xl p-6">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-5 text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                <p className="mt-4 font-mono text-xs text-muted-foreground">{count} skills</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{"// featured work"}</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Enterprise CRM & integrations</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects
            .filter((p) => p.category === "Professional")
            .map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <Link to="/projects" hash={p.id} className="glass glass-hover flex h-full flex-col rounded-2xl p-6">
                  <p className="font-mono text-xs text-primary">{p.domain}</p>
                  <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 4).map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl border border-glass-border p-10 text-center sm:p-14">
          <div className="absolute inset-0 -z-10 bg-gradient-primary opacity-15" />
          <h2 className="text-3xl font-bold sm:text-4xl">Hiring a .NET developer?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I'd be glad to talk about how my CRM, SQL Server and API integration experience can help your team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={profile.resumeUrl} download>
                <Download /> Download Resume
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
