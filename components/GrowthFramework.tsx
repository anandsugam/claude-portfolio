"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ACCENT = "#4F93E8";
const ACCENT_SOFT = "rgba(79,147,232,0.12)";

// ── Levels ────────────────────────────────────────────────────────────────────
const LEVELS = [
  { code: "L3", title: "Product Designer 1", short: "PD 1" },
  { code: "L4", title: "Product Designer 2", short: "PD 2" },
  { code: "L5", title: "Senior Product Designer", short: "Sr. PD" },
  { code: "L6", title: "Product Design Lead", short: "Lead" },
  { code: "L7", title: "Staff Designer", short: "Staff" },
  { code: "L8", title: "Senior Staff Designer", short: "Sr. Staff" },
  { code: "L9", title: "Principal Designer", short: "Principal" },
] as const;

type LevelCode = (typeof LEVELS)[number]["code"];

type Cell = { tag?: string; points: string[] };

type Capability = {
  icon: string;
  area: string;
  subs: string;
  levels: Record<LevelCode, Cell>;
};

// ── Framework content (extracted from the growth-framework matrix) ──────────────
const CAPABILITIES: Capability[] = [
  {
    icon: "🎯",
    area: "Role Complexity",
    subs: "Scope & expectation · Influence & collaboration · Ownership & accountability",
    levels: {
      L3: { tag: "Direct supervision", points: [
        "Executes well-defined design tasks within a larger or single project.",
        "Primarily receives direction from senior designers and managers.",
        "Executes assigned tasks; learning to take ownership.",
      ]},
      L4: { tag: "Occasional supervision", points: [
        "Designs solutions for defined problems or small features within a larger project.",
        "Collaborates with other designers, product managers, and engineers.",
        "Takes ownership of assigned projects and features.",
      ]},
      L5: { tag: "Independent execution", points: [
        "Leads design projects for significant features or areas; owns project-level to small programs.",
        "Collaborates across teams and disciplines; mentors junior designers.",
        "Proactively identifies and solves problems; high accountability.",
      ]},
      L6: { tag: "Navigating ambiguity", points: [
        "Leads a design team on a project or area; oversees multiple projects within a specific area.",
        "Leads collaboration across teams & functions; primary design point of contact.",
        "Drives initiatives and holds the team accountable.",
      ]},
      L7: { tag: "Subject-matter expert", points: [
        "Solves highly complex & ambiguous design problems across a broad product area or multiple projects.",
        "Collaborates across the org & functional leads; acts as a subject-matter expert.",
        "Proactively identifies and solves critical problems; highly independent.",
      ]},
      L8: { tag: "Subject-matter expert", points: [
        "Solves highly complex & ambiguous design problems across a broad product area or multiple projects.",
        "Collaborates across the org & functional leads; acts as a subject-matter expert.",
        "Proactively identifies and solves critical problems; highly independent.",
      ]},
      L9: { tag: "Thought leader", points: [
        "Defines design vision and strategy for a significant area; works on the most critical, strategic challenges.",
        "Collaborates with executive leadership; sets design standards.",
        "Drives long-term vision; anticipates future needs and challenges.",
      ]},
    },
  },
  {
    icon: "🧭",
    area: "Product Design Acumen",
    subs: "Problem ID · UX research · Prioritization · Strategy · Systems thinking · Delivery",
    levels: {
      L3: { points: [
        "Converts clear briefs to design deliverables under direct supervision.",
        "Follows defined problem statements; focuses on learning the “how”.",
        "Follows established design process and given priorities.",
        "Identifies obvious design risks; delivers assets on time.",
      ]},
      L4: { points: [
        "Converts open-ended briefs to deliverables with minimal supervision.",
        "Understands and defines problems within a given scope; proposes solutions.",
        "Applies the design process; prioritizes tasks with guidance.",
        "Mitigates known design risks; delivers high-quality work.",
      ]},
      L5: { points: [
        "Converts open-ended or ambiguous briefs into deliverables without supervision.",
        "Identifies and defines complex problems; develops solution strategies.",
        "Adapts the design process to project needs; prioritizes features effectively.",
        "Anticipates and plans for risks; owns the design of a feature.",
      ]},
      L6: { points: [
        "Converts ambiguous briefs into clear action plans for the team.",
        "Proactively identifies and defines strategic design opportunities.",
        "Defines and optimizes the design process; aligns design with product strategy.",
        "Develops contingency plans; oversees design quality across multiple projects.",
      ]},
      L7: { points: [
        "Contributes to turning briefs into clear action plans at the product level.",
        "Defines and solves highly ambiguous, complex problems spanning multiple areas.",
        "Strategically applies the design process; influences the product roadmap.",
      ]},
      L8: { points: [
        "Contributes to turning briefs into clear action plans at the product level.",
        "Defines and solves highly ambiguous, complex problems spanning multiple areas.",
        "Strategically applies the design process; influences the product roadmap.",
      ]},
      L9: { points: [
        "Turns briefs into clear action plans at the function / org level.",
        "Defines the design vision and strategy for entire product areas or the company.",
        "Innovates and champions the design process; sets design strategy and vision.",
        "Owns design risk mitigation; champions design excellence.",
      ]},
    },
  },
  {
    icon: "✏️",
    area: "Design Craft",
    subs: "Visual & UI · Interaction · Brand · Design systems · Prototyping & tools",
    levels: {
      L3: { points: [
        "Basic understanding of the Design System, its fundamentals and principles.",
        "Implements designs from provided direction with attention to detail; learns typography and color theory.",
        "Understands common interaction patterns and applies them under guidance.",
        "Uses existing components correctly (e.g., selects the right button from a Figma library).",
      ]},
      L4: { points: [
        "Gaining proficiency in product and interaction design; explores multiple solutions.",
        "Explores different visual styles with a strong understanding of visual hierarchy.",
        "Applies interaction-design principles to create intuitive, user-friendly interfaces.",
        "Contributes to the design system (e.g., a new card component, documented with usage and variations).",
      ]},
      L5: { points: [
        "Expands craftsmanship in product and interaction design; develops innovative solutions.",
        "Visual leadership: sets visual direction with strong grasp of the system, branding, and accessibility.",
        "Designs complex interaction patterns and flows, handling edge cases and errors.",
        "Owns specific areas of the design system (e.g., leads a component library for iOS).",
      ]},
      L6: { points: [
        "Facilitates ideation workshops; provides high-level design direction and critiques others’ work.",
        "Sets visual direction with deep understanding of the system, branding, and accessibility.",
        "Leads interaction-design efforts for large-scale projects, advocating user-centered design.",
        "System governance: oversees scalability and adoption; defines contribution guidelines.",
      ]},
      L7: { points: [
        "Pushes the boundaries of design; influences decisions at a high level and advocates for excellence.",
        "Drives innovation in interaction design, exploring new models and technologies.",
        "Researches emerging interaction trends and applies them to product development.",
        "Defines the long-term vision and roadmap for the design system, aligned to business goals.",
      ]},
      L8: { points: [
        "Pushes the boundaries of design; influences decisions at a high level and advocates for excellence.",
        "Drives innovation in interaction design, exploring new models and technologies.",
        "Researches emerging interaction trends and applies them to product development.",
        "Defines the long-term vision and roadmap for the design system, aligned to business goals.",
      ]},
      L9: { points: [
        "Sets the standard for design excellence; a recognized thought leader internally and externally.",
        "Presents at industry conferences and publishes on design best practices.",
        "Shapes the future of interaction design (e.g., voice, gesture), influencing industry standards.",
        "Evangelizes the adoption and value of the design system across the org.",
      ]},
    },
  },
  {
    icon: "📊",
    area: "Product & Business Literacy",
    subs: "Impact & metrics · Data synthesis · Roadmap · Product lifecycle",
    levels: {
      L3: { tag: "Learn metrics", points: [
        "Understands basic metrics tracked for features.",
        "Understands the product development lifecycle in the org.",
        "Aware of the immediate team’s roadmap and feature goals.",
      ]},
      L4: { tag: "Learn metrics", points: [
        "Aware of data and learning how to leverage it (e.g., why a specific metric is a priority).",
        "Understands product goals and how design contributes to them.",
        "Considers business goals when making design decisions.",
      ]},
      L5: { tag: "Understand metrics", points: [
        "Familiar with data and analytics tools (e.g., Mixpanel for funnel analysis).",
        "Understands business strategy, market, and competition.",
        "Aligns design decisions with business strategy; contributes to product strategy.",
      ]},
      L6: { tag: "Utilize metrics", points: [
        "Applies metrics to answer questions, validate assumptions, and quantify outcomes.",
        "Analyzes funnel drop-offs independently, without help from PM or DA.",
        "Strongly understands business goals; sets design goals aligned to product objectives.",
      ]},
      L7: { tag: "Utilize & develop metrics", points: [
        "Develops experience / ROI metrics and evaluates data across multiple streams.",
        "Deep understanding of the business and its strategic goals; anticipates future trends.",
        "Contributes to long-term product strategy and identifies new opportunities.",
      ]},
      L8: { tag: "Utilize & develop metrics", points: [
        "Develops experience / ROI metrics and evaluates data across multiple streams.",
        "Deep understanding of the business and its strategic goals; anticipates future trends.",
        "Contributes to long-term product strategy and identifies new opportunities.",
      ]},
      L9: { tag: "Develop metrics", points: [
        "Develops experience / ROI metrics and evaluates data across multiple streams.",
        "Deeply understands the business, market, and competitive landscape; shapes company strategy.",
        "A strategic partner to executive leadership.",
      ]},
    },
  },
  {
    icon: "💬",
    area: "Communication & Presentation",
    subs: "Articulation · Presenting · Critique · Stakeholder buy-in",
    levels: {
      L3: { points: [
        "Clearly articulates design rationale within the immediate team.",
        "Presents wireframes/mockups in critiques with guidance, explaining choices from requirements and heuristics.",
        "Clearly answers clarifying questions from the immediate team (PM, Eng).",
      ]},
      L4: { points: [
        "Communicates effectively with the immediate team and direct stakeholders.",
        "Presents user flows and prototypes to cross-functional partners (QA, Docs), tying rationale to user needs and basic data.",
        "Incorporates feedback constructively.",
      ]},
      L5: { points: [
        "Presents complex ideas clearly to cross-functional teams and stakeholders.",
        "Presents end-to-end solutions and research findings to teams and some stakeholders (Marketing, Support).",
        "Facilitates effective critiques, guiding discussion towards actionable feedback.",
      ]},
      L6: { points: [
        "Presents design strategy and vision for their area to stakeholders and leadership.",
        "Uses storytelling to gain buy-in, linking design strategy to business goals.",
        "Facilitates cross-functional workshops (e.g., journey mapping).",
      ]},
      L7: { points: [
        "Presents complex strategies and visions convincingly to senior leadership and across orgs.",
        "Strong storytelling; presents multi-platform strategies (e.g., a new design-system component library).",
        "Represents the design POV effectively in high-stakes planning or review forums.",
      ]},
      L8: { points: [
        "Presents highly complex, multi-faceted strategies across the org; influences senior leadership consistently.",
        "Presents nuanced, long-term strategies (e.g., an AI integration approach) across multiple BUs.",
        "Known for bringing clarity to complex, ambiguous technical/business problems.",
      ]},
      L9: { points: [
        "Expertly communicates and influences at the highest org levels (Execs, C-suite).",
        "Tailors complex, visionary concepts (e.g., a 5-year product vision) for executive audiences.",
        "Represents the company’s design strategy externally at major conferences or in publications.",
      ]},
    },
  },
  {
    icon: "🧩",
    area: "Leadership & Mentorship",
    subs: "Mentoring · Direction-setting · Shaping culture & practices",
    levels: {
      L3: { points: [
        "Focuses on self-leadership and delivering assigned tasks; manages own work effectively.",
        "Seeks guidance when blocked.",
        "May help onboard an intern by explaining team tools and processes.",
      ]},
      L4: { points: [
        "Begins to demonstrate task ownership of well-defined features.",
        "Offers specific, task-level guidance to interns or PD1s (e.g., using a prototyping tool for an interaction).",
      ]},
      L5: { points: [
        "Informally mentors PD1/PD2s, giving feedback on craft and process.",
        "Leads design execution for features or small projects, ensuring quality and timely delivery.",
        "Provides constructive peer feedback.",
      ]},
      L6: { points: [
        "Formally or informally mentors team members (PD1–Sr) on career growth and craft.",
        "Leads design direction and execution for a significant product area (e.g., Search & Discovery), holding the team accountable.",
        "May guide project planning.",
      ]},
      L7: { points: [
        "Provides technical and strategic leadership on complex projects spanning multiple teams (e.g., a platform migration).",
        "Mentors Sr PDs/Leads on tackling ambiguity and strategic thinking.",
        "A recognized expert in a specific domain (e.g., interaction design, research).",
      ]},
      L8: { points: [
        "Sets technical/strategic direction for large, critical product areas or platforms.",
        "Mentors Staff/Leads on systems thinking and influencing strategy.",
        "Actively shapes design culture and practices; influences hiring criteria for senior roles.",
      ]},
      L9: { points: [
        "Leads the most complex, strategic, mission-critical, company-wide initiatives (e.g., defining a new product category).",
        "Mentors Sr Staff/Leads, influencing their strategic impact.",
        "Profoundly shapes org-wide design culture and influences exec hiring decisions.",
      ]},
    },
  },
  {
    icon: "🤝",
    area: "Citizenship",
    subs: "Collaboration · Process improvement · Team health",
    levels: {
      L3: { points: [
        "Active participant in team meetings; a respectful collaborator who shares work openly.",
        "Follows established file-naming conventions and design-system usage.",
      ]},
      L4: { points: [
        "Reliable collaborator with core partners (PM, Eng Lead); proactively asks clarifying questions.",
        "Suggests small improvements to critique format or file organization.",
      ]},
      L5: { points: [
        "Proactively identifies and resolves collaboration friction within the feature team.",
        "Actively contributes to the design system.",
        "Models inclusive behavior and advocates for team health and well-being.",
      ]},
      L6: { points: [
        "Fosters strong, trusting relationships within their product-area team.",
        "Identifies and drives process improvements (e.g., refining the research handoff to design).",
        "Models inclusive behavior and advocates for team health.",
      ]},
      L7: { points: [
        "Improves design practices across multiple teams (e.g., new research methods, standardized critiques).",
        "Builds bridges between Design and other functions (Eng, Data Science).",
        "Mediates cross-team disagreements constructively.",
      ]},
      L8: { points: [
        "Drives initiatives improving design-org health, tools, or systems across multiple domains.",
        "Fosters high-quality collaboration norms across their broader org.",
      ]},
      L9: { points: [
        "Drives company-wide initiatives (e.g., ethical design principles, a unified cross-product style guide).",
        "Fosters a culture of collaboration and shared ownership across Design, Product, Eng, and Marketing.",
      ]},
    },
  },
  {
    icon: "⚡",
    area: "Initiative",
    subs: "Identifying opportunities · Proposing & driving solutions",
    levels: {
      L3: { points: [
        "Completes assigned tasks thoroughly; asks for help when stuck.",
        "Flags obvious usability issues encountered during design work.",
      ]},
      L4: { points: [
        "Identifies small, contained opportunities within scope (e.g., improving an error message, a UI tweak).",
        "Takes initiative to explore minor variations or improvements.",
      ]},
      L5: { points: [
        "Identifies unmet user needs or usability problems beyond scope through observation or data.",
        "Proactively proposes solutions or small research efforts.",
        "Drives assigned features with less need for oversight.",
      ]},
      L6: { points: [
        "Proactively identifies strategic opportunities or risks in their area (competitive threats, new tech).",
        "Defines and drives initiatives to address them, securing stakeholder buy-in.",
        "Anticipates dependencies.",
      ]},
      L7: { points: [
        "Identifies, scopes, and drives major strategic initiatives involving ambiguity and cross-functional complexity.",
        "Proposes and leads exploration of new platform feature sets.",
        "Defines new problem spaces based on user/market insights.",
      ]},
      L8: { points: [
        "Drives complex, multi-faceted strategic initiatives spanning multiple product lines or platforms.",
        "Develops strategies for unifying disparate user experiences.",
        "Operates with high autonomy in highly ambiguous areas.",
      ]},
      L9: { points: [
        "Foresees long-term (1–3+ year) strategic opportunities and threats (regulation, emerging tech).",
        "Defines and champions visionary, company-level initiatives from deep ambiguity.",
        "Often creates entirely new value streams.",
      ]},
    },
  },
  {
    icon: "📣",
    area: "Evangelism",
    subs: "Advocating for design & users · Internal & external comms",
    levels: {
      L3: { points: [
        "Explains user needs from personas/research during team discussions.",
        "Shares interesting design articles and examples with the team.",
      ]},
      L4: { points: [
        "Articulates the “why” behind design choices to PM/Eng, tying them to user goals and usability principles.",
        "Shares brief summaries of critique feedback or user-testing insights.",
      ]},
      L5: { points: [
        "Advocates for user-centric solutions to cross-functional partners using data and research.",
        "Presents the team’s work at internal design sharing sessions.",
        "Contributes case studies to the internal knowledge base.",
      ]},
      L6: { points: [
        "Champions design-thinking methods (workshops, user interviews) within their product area.",
        "Represents the user and design perspective in roadmap and prioritization discussions.",
        "Shares team successes broadly.",
      ]},
      L7: { points: [
        "Evangelizes design strategy, system usage, and impact stories to leadership and adjacent orgs.",
        "Creates compelling narratives around design’s value.",
        "Writes internal blog posts or presents at company all-hands about design initiatives.",
      ]},
      L8: { points: [
        "A key spokesperson and advocate for design’s strategic contribution across large parts of the org.",
        "Influences cross-functional roadmaps through design insights.",
        "May speak at external conferences or write thought-leadership pieces.",
      ]},
      L9: { points: [
        "A top-tier internal and external spokesperson for the company’s design philosophy and innovation.",
        "Influences industry thinking through keynotes, widely read articles, or new methodologies.",
        "Significantly builds the company’s external design brand and reputation.",
      ]},
    },
  },
  {
    icon: "🌱",
    area: "Growth & Learning Mindset",
    subs: "New tools & methods · Learning across functions · Teaching others",
    levels: {
      L3: { points: [
        "Eagerly learns core tools (Figma) and processes (critique, handoff).",
        "Actively seeks specific feedback on mockups/flows and applies it.",
        "Follows team best practices diligently.",
      ]},
      L4: { points: [
        "Continuously improves proficiency in core skills (interaction, visual).",
        "Seeks out tutorials, articles, or workshops on relevant topics.",
        "Adapts readily to changing requirements; asks “why” to understand context.",
      ]},
      L5: { points: [
        "Masters core skills and begins exploring adjacent areas (user research, content strategy, front-end code).",
        "Learns autonomously through practice and study.",
        "Proactively shares findings and techniques with junior designers.",
      ]},
      L6: { points: [
        "Identifies skill gaps within their team/area and sources training or mentorship.",
        "Fosters a culture of learning and constructive feedback within their team.",
        "Stays current on design trends and tech relevant to their domain.",
      ]},
      L7: { points: [
        "Explores and experiments with cutting-edge methods, tools, and interaction paradigms.",
        "Pushes the boundaries of craft; treats failures as learning opportunities.",
        "Teaches and inspires others across the org through workshops or talks.",
      ]},
      L8: { points: [
        "Continuous deep learning in their core domain; broadens into adjacent strategic areas (business strategy, platform architecture).",
        "Pushes methodological boundaries and shares expertise widely (brown bags, external articles).",
        "Shapes domain-specific learning goals.",
      ]},
      L9: { points: [
        "Deep, continuous learning across multiple domains (technology shifts, market dynamics, org behavior).",
        "Pioneers new design methodologies or frameworks; shares expertise globally (keynotes, books).",
        "Shapes the org’s overall approach to learning and innovation in design.",
      ]},
    },
  },
];

export default function GrowthFramework() {
  const [selected, setSelected] = useState<LevelCode>("L5");
  const activeLevel = LEVELS.find((l) => l.code === selected)!;

  return (
    <div className="rounded-2xl border border-border overflow-clip" style={{ background: "var(--color-bg)" }}>
      {/* Sticky header — tabs + active level title together */}
      <div className="sticky top-0 z-10" style={{ background: "var(--color-bg)" }}>
        {/* Level selector */}
        <div className="border-b border-border px-4 py-3" role="tablist" aria-label="Designer level">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5">
            {LEVELS.map((lvl) => {
              const isActive = lvl.code === selected;
              return (
                <button
                  key={lvl.code}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelected(lvl.code)}
                  className="flex flex-col items-center justify-center rounded-xl px-3 py-2.5 transition-colors text-center"
                  style={{
                    background: isActive ? ACCENT : "transparent",
                    color: isActive ? "white" : "var(--color-fg)",
                  }}
                >
                  <span className="font-display font-bold" style={{ fontSize: "0.8125rem", color: isActive ? "rgba(255,255,255,0.7)" : ACCENT }}>
                    {lvl.code}
                  </span>
                  <span className="font-body mt-0.5 leading-tight" style={{ fontSize: "0.75rem", opacity: isActive ? 1 : 0.7 }}>
                    {lvl.short}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active-level title row */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`header-${selected}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-baseline gap-3 px-7 py-4 border-b border-border"
          >
            <span className="font-display font-bold text-fg" style={{ fontSize: "1.0625rem" }}>{activeLevel.title}</span>
            <span className="font-body text-xs uppercase tracking-widest" style={{ color: ACCENT }}>{activeLevel.code}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Capability rows */}
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
          >
            {CAPABILITIES.map((cap, idx) => {
              const cell = cap.levels[selected];
              return (
                <div
                  key={cap.area}
                  className={`flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 px-7 py-6${idx < CAPABILITIES.length - 1 ? " border-b border-border" : ""}`}
                >
                  {/* Left: capability identity */}
                  <div className="sm:w-52 shrink-0 flex flex-col gap-1 pt-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base leading-none">{cap.icon}</span>
                      <span className="font-display font-semibold text-fg" style={{ fontSize: "0.9rem" }}>{cap.area}</span>
                    </div>
                    <p className="font-body text-muted leading-snug pl-6" style={{ fontSize: "0.7rem" }}>{cap.subs}</p>
                  </div>

                  {/* Right: level-specific meaning */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    {cell.tag && (
                      <span
                        className="font-body text-xs font-medium px-2.5 py-0.5 rounded-full self-start"
                        style={{ background: ACCENT_SOFT, color: ACCENT }}
                      >
                        {cell.tag}
                      </span>
                    )}
                    <ul className="flex flex-col gap-1.5">
                      {cell.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full shrink-0 mt-[0.45rem]" style={{ background: ACCENT }} />
                          <span className="font-body text-muted leading-relaxed" style={{ fontSize: "0.8125rem" }}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

