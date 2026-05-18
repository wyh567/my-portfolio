import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const EMAIL = "2457846992@qq.com";

const palettes = [
  { id: "lime", name: "LIME", color: "#b9ff5d" },
  { id: "cyan", name: "CYAN", color: "#58e6ff" },
  { id: "violet", name: "VIOLET", color: "#b98cff" },
  { id: "amber", name: "AMBER", color: "#ffb657" },
  { id: "rose", name: "ROSE", color: "#ff6f91" },
];

const projects = [
  {
    id: 1,
    no: "01",
    title: "品牌视觉系统重构",
    type: "Brand Identity",
    year: "2025",
    tag: "IDENTITY",
    desc: "从标志、字体、色彩、版式到媒介延展，建立完整而克制的品牌视觉系统。",
    detail:
      "这个项目关注品牌在不同媒介中的一致性表达。通过核心图形、标准字体、色彩系统与版式秩序，让品牌具备识别度、延展性和传播稳定性。",
    image: "",
  },
  {
    id: 2,
    no: "02",
    title: "实验性字体海报",
    type: "Typography",
    year: "2025",
    tag: "TYPE",
    desc: "用字体结构、负空间、网格秩序和图形张力，探索中文排版的视觉表现力。",
    detail:
      "项目以中文笔画结构为基础，通过拆解、重组、压缩、错位和留白控制，形成具有视觉冲击力和概念表达力的字体海报系统。",
    image: "",
  },
  {
    id: 3,
    no: "03",
    title: "数字界面视觉体验",
    type: "Interface Design",
    year: "2024",
    tag: "UI",
    desc: "围绕暗色界面、信息层级和微交互反馈，建立高质感数字产品视觉体验。",
    detail:
      "该项目关注界面中的视觉焦点管理。通过对比、层级、动效、状态反馈和留白，让复杂信息更容易被理解，同时保持高级、克制的视觉体验。",
    image: "",
  },
  {
    id: 4,
    no: "04",
    title: "动态视觉叙事实验",
    type: "Motion Graphic",
    year: "2024",
    tag: "MOTION",
    desc: "将静态视觉语言转化为动态节奏，让作品拥有更强的传播感和记忆点。",
    detail:
      "项目探索视觉传达从平面到动态媒介的延展方式。通过图形转场、速度节奏、视觉残影和时间轴设计，建立完整的动态叙事体验。",
    image: "",
  },
  {
    id: 5,
    no: "05",
    title: "视觉信息层级研究",
    type: "Editorial System",
    year: "2024",
    tag: "GRID",
    desc: "通过网格、留白、字号层级和阅读节奏，研究复杂信息的视觉组织方式。",
    detail:
      "该项目聚焦信息传达效率，通过版面结构和视觉权重控制，让观者在短时间内捕捉重点，同时保持画面的审美张力。",
    image: "",
  },
  {
    id: 6,
    no: "06",
    title: "个人品牌视觉实验",
    type: "Personal Branding",
    year: "2025",
    tag: "WYH",
    desc: "围绕个人作品集建立统一视觉气质，让个人身份、作品和交互体验形成整体系统。",
    detail:
      "项目通过暗色系统、动态光效、字体张力和交互细节，构建具有记忆点的个人作品集视觉体验。",
    image: "",
  },
];

const skills = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "品牌识别",
  "字体设计",
  "版式设计",
  "海报设计",
  "视觉叙事",
  "UI视觉",
  "动态图形",
  "信息层级",
  "视觉系统",
];

const timeline = [
  {
    year: "2025",
    title: "个人作品集视觉系统搭建",
    text: "围绕视觉传达方向，建立个人品牌、作品展示、交互体验和视觉表达系统。",
  },
  {
    year: "2024",
    title: "品牌、字体与界面方向深化",
    text: "持续进行品牌识别、字体实验、海报设计、数字界面和动态视觉项目训练。",
  },
  {
    year: "2023",
    title: "设计软件与视觉基础积累",
    text: "系统学习 Photoshop、Illustrator、After Effects，以及版式、色彩和信息组织方法。",
  },
];

const process = [
  {
    no: "01",
    title: "视觉定位",
    text: "先确定作品的气质、对象、使用场景和视觉记忆点。",
  },
  {
    no: "02",
    title: "系统搭建",
    text: "用字体、色彩、网格、图形和组件建立统一视觉语言。",
  },
  {
    no: "03",
    title: "动态表达",
    text: "通过微交互、节奏、光效和滚动反馈提升体验完成度。",
  },
];

function useLiveReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.22,
        rootMargin: "-8% 0px -12% 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      const center = window.innerHeight * 0.45;

      let current = ids[0];

      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= center && rect.bottom >= center) {
          current = id;
        }
      });

      setActive(current);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max <= 0 ? 0 : window.scrollY / max;
      setProgress(value);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function MagneticButton({ children, href, onClick, variant = "solid" }) {
  const ref = useRef(null);
  const Tag = href ? "a" : "button";

  const handleMove = (event) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.setProperty("--btn-x", `${x * 0.18}px`);
    button.style.setProperty("--btn-y", `${y * 0.18}px`);
  };

  const handleLeave = () => {
    const button = ref.current;
    if (!button) return;

    button.style.setProperty("--btn-x", "0px");
    button.style.setProperty("--btn-y", "0px");
  };

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-btn ${variant}`}
      type={href ? undefined : "button"}
    >
      <span>{children}</span>
      <i>↗</i>
    </Tag>
  );
}

function Navbar({
  active,
  theme,
  palette,
  onToggleTheme,
  onChangePalette,
  onEgg,
}) {
  return (
    <header className="nav">
      <a
        href="#home"
        className="nav-logo"
        onDoubleClick={onEgg}
        title="双击有彩蛋"
      >
        <strong>WYH</strong>
        <span>Visual Communication</span>
      </a>

      <nav className="nav-menu" aria-label="主导航">
        {[
          ["about", "关于"],
          ["process", "方法"],
          ["projects", "作品"],
          ["timeline", "经历"],
          ["contact", "联系"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <div className="palette-switcher" aria-label="色彩系统">
          {palettes.map((item) => (
            <button
              key={item.id}
              type="button"
              className={palette === item.id ? "active" : ""}
              onClick={() => onChangePalette(item.id)}
              style={{ "--dot-color": item.color }}
              title={item.name}
              aria-label={`切换到 ${item.name} 色彩系统`}
            />
          ))}
        </div>

        <button className="theme-toggle" type="button" onClick={onToggleTheme}>
          <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
          <i />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const titleRef = useRef(null);

  const handleTitleMove = (event) => {
    const title = titleRef.current;
    if (!title) return;

    const rect = title.getBoundingClientRect();

    title.style.setProperty("--title-x", `${event.clientX - rect.left}px`);
    title.style.setProperty("--title-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="home" className="hero" onMouseMove={handleTitleMove}>
      <div className="floating-type type-a">秩序</div>
      <div className="floating-type type-b">感知</div>
      <div className="floating-type type-c">系统</div>
      <div className="floating-type type-d">叙事</div>

      <div className="hero-badge" data-reveal>
        <span />
        Visual Communication Portfolio
      </div>

      <div className="hero-title-wrap" ref={titleRef} data-reveal>
        <h1 className="hero-title" aria-label="让视觉成为系统，让感知产生记忆">
          <span className="hero-line">让视觉成为系统</span>
          <span className="hero-line">让感知产生记忆</span>
        </h1>
      </div>

      <p className="hero-text" data-reveal>
        我是一名视觉传达设计师，关注品牌识别、字体版式、数字界面与视觉叙事。
        我希望用更克制、更精准、更有记忆点的视觉语言，构建具有专业气质的作品体验。
      </p>

      <div className="hero-actions" data-reveal>
        <MagneticButton href="#projects">查看精选作品</MagneticButton>
        <MagneticButton href="#contact" variant="ghost">
          联系我
        </MagneticButton>
      </div>

      <div className="hero-meta" data-reveal>
        <div>
          <span>01</span>
          <strong>Brand Identity</strong>
        </div>
        <div>
          <span>02</span>
          <strong>Typography</strong>
        </div>
        <div>
          <span>03</span>
          <strong>Poster Design</strong>
        </div>
        <div>
          <span>04</span>
          <strong>Motion Vision</strong>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = [
    "VISUAL",
    "IDENTITY",
    "TYPOGRAPHY",
    "POSTER",
    "INTERFACE",
    "MOTION",
    "SYSTEM",
    "DESIGN",
  ];

  return (
    <section className="marquee" aria-label="视觉关键词滚动">
      <div>
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`}>{word}</span>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title" data-reveal>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <SectionTitle
        eyebrow="About Me"
        title="我关注的不只是画面，而是画面如何建立秩序、情绪和记忆。"
        text="视觉传达不是装饰，而是重新组织复杂信息，让它变得清晰、有气质、可被记住。"
      />

      <div className="about-layout">
        <article className="portrait-card" data-reveal>
          <div className="portrait-orbit">
            <div className="portrait-mark">WYH</div>
          </div>

          <div>
            <p>Designer</p>
            <h3>王奕豪</h3>
            <span>Visual Communication Designer</span>
          </div>
        </article>

        <div className="about-cards">
          <article data-reveal style={{ "--delay": "0.02s" }}>
            <p>Direction</p>
            <h3>品牌 / 字体 / 版式</h3>
          </article>

          <article data-reveal style={{ "--delay": "0.08s" }}>
            <p>Software</p>
            <h3>PS / AI / AE</h3>
          </article>

          <article data-reveal style={{ "--delay": "0.14s" }}>
            <p>Style</p>
            <h3>克制、精准、有张力</h3>
          </article>

          <article data-reveal style={{ "--delay": "0.2s" }}>
            <p>Focus</p>
            <h3>视觉系统与感知体验</h3>
          </article>
        </div>
      </div>

      <div className="skill-cloud" data-reveal>
        {skills.map((skill, index) => (
          <span key={skill} style={{ "--delay": `${index * 0.025}s` }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section process">
      <SectionTitle
        eyebrow="Design Method"
        title="我把视觉设计看成一个系统，而不是单张好看的图。"
        text="从定位、系统到动态表达，每一步都服务于最终的视觉记忆。"
      />

      <div className="process-grid">
        {process.map((item, index) => (
          <article key={item.no} data-reveal style={{ "--delay": `${index * 0.08}s` }}>
            <span>{item.no}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rx = (y / rect.height - 0.5) * -8;
    const ry = (x / rect.width - 0.5) * 8;

    card.style.setProperty("--card-x", `${x}px`);
    card.style.setProperty("--card-y", `${y}px`);
    card.style.setProperty("--rx", `${rx}deg`);
    card.style.setProperty("--ry", `${ry}deg`);
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <button
      ref={cardRef}
      className="project-card"
      type="button"
      onClick={() => onOpen(project)}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      data-reveal
    >
      <div className="project-media">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-fallback">
            <span>{project.no}</span>
            <strong>{project.tag}</strong>
            <i>{project.year}</i>
          </div>
        )}
      </div>

      <div className="project-info">
        <p>{project.type}</p>
        <h3>{project.title}</h3>
        <small>{project.desc}</small>
      </div>
    </button>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((item) => item.type)))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((item) => item.type === filter);
  }, [filter]);

  useEffect(() => {
    const close = (event) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section id="projects" className="section projects">
      <SectionTitle
        eyebrow="Selected Projects"
        title="精选作品"
        text="这里呈现品牌系统、字体实验、数字界面和动态视觉方向的核心项目。"
      />

      <div className="filter-row" data-reveal>
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setActiveProject}
            style={{ "--delay": `${index * 0.05}s` }}
          />
        ))}
      </div>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <article
            className="project-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={activeProject.title}
          >
            <button
              className="modal-close"
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="关闭弹窗"
            >
              ×
            </button>

            <div className="modal-visual">
              {activeProject.image ? (
                <img src={activeProject.image} alt={activeProject.title} />
              ) : (
                <>
                  <span>{activeProject.no}</span>
                  <strong>{activeProject.tag}</strong>
                </>
              )}
            </div>

            <div className="modal-content">
              <p>
                {activeProject.type} · {activeProject.year}
              </p>
              <h3>{activeProject.title}</h3>
              <span>{activeProject.detail}</span>
            </div>
          </article>
        </div>
      )}
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" className="section timeline">
      <SectionTitle
        eyebrow="Experience"
        title="设计经历"
        text="从软件能力、视觉基础到完整作品集系统，逐步建立个人设计语言。"
      />

      <div className="timeline-list">
        {timeline.map((item, index) => (
          <article className="timeline-item" key={item.year} data-reveal>
            <div className="timeline-dot">
              <span>{index + 1}</span>
            </div>

            <div>
              <p>{item.year}</p>
              <h3>{item.title}</h3>
              <small>{item.text}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Lab() {
  return (
    <section id="lab" className="section lab">
      <SectionTitle
        eyebrow="Visual Playground"
        title="一些隐藏在细节里的交互实验。"
        text="作品集本身也应该是一件作品。"
      />

      <div className="lab-grid">
        <article data-reveal>
          <span>Hover</span>
          <h3>光从边缘扫过</h3>
          <p>卡片和按钮都保留了克制的动态反馈，不喧宾夺主。</p>
        </article>

        <article data-reveal>
          <span>Scroll</span>
          <h3>滑到哪里，哪里出现</h3>
          <p>内容不是一次性出现，而是跟随滚动实时进入和退出视野。</p>
        </article>

        <article data-reveal>
          <span>Easter Egg</span>
          <h3>输入 W Y H</h3>
          <p>键盘输入 WYH，或者双击左上角 WYH，可以打开隐藏视觉层。</p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 1600);
  };

  return (
    <section id="contact" className="section contact">
      <SectionTitle
        eyebrow="Contact"
        title="让视觉作品拥有真正的高级感。"
        text="如果你想查看我的完整作品集，或进行设计交流，可以通过邮箱联系我。"
      />

      <div className="contact-layout">
        <form className="contact-form" onSubmit={handleSubmit} data-reveal>
          <label>
            <span>你的名字</span>
            <input type="text" placeholder="Name" />
          </label>

          <label>
            <span>联系方式</span>
            <input type="email" placeholder="Email" />
          </label>

          <label>
            <span>留言内容</span>
            <textarea rows="5" placeholder="Message" />
          </label>

          <button type="submit">
            {sent ? "已记录你的想法" : "发送信息"}
            <span>↗</span>
          </button>
        </form>

        <aside className="contact-card" data-reveal>
          <div>
            <p>Email</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>

          <div>
            <span>Available for</span>
            <strong>作品集交流 / 视觉设计合作 / 品牌视觉项目</strong>
          </div>

          <ul>
            <li>Behance</li>
            <li>Instagram</li>
            <li>Dribbble</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function SectionDock({ active }) {
  const items = [
    ["home", "HOME"],
    ["about", "ABOUT"],
    ["process", "METHOD"],
    ["projects", "WORKS"],
    ["timeline", "TIME"],
    ["contact", "MAIL"],
  ];

  return (
    <aside className="section-dock" aria-label="页面位置">
      {items.map(([id, label]) => (
        <a key={id} href={`#${id}`} className={active === id ? "active" : ""}>
          <span />
          <em>{label}</em>
        </a>
      ))}
    </aside>
  );
}

function EasterEgg({ onClose }) {
  return (
    <div className="egg-layer" onClick={onClose}>
      <div className="egg-card">
        <span>Hidden Mode Unlocked</span>
        <h2>WYH SYSTEM</h2>
        <p>你发现了隐藏彩蛋。作品集不只是展示作品，也是一场视觉体验。</p>
        <button type="button">点击关闭</button>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState("dark");
  const [palette, setPalette] = useState("lime");
  const [eggOpen, setEggOpen] = useState(false);

  const active = useActiveSection([
    "home",
    "about",
    "process",
    "projects",
    "timeline",
    "lab",
    "contact",
  ]);

  const progress = useScrollProgress();

  useLiveReveal();

  useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useEffect(() => {
    let sequence = "";

    const handleKey = (event) => {
      sequence += event.key.toLowerCase();
      sequence = sequence.slice(-3);

      if (sequence === "wyh") {
        setEggOpen(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className={`portfolio is-${theme} palette-${palette}`}>
      <div className="site-bg" />
      <div className="grain" />
      <div className="cursor-glow" />
      <div className="ambient-ring ring-one" />
      <div className="ambient-ring ring-two" />
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />

      <Navbar
        active={active}
        theme={theme}
        palette={palette}
        onEgg={() => setEggOpen(true)}
        onChangePalette={setPalette}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />

      <SectionDock active={active} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Process />
        <Projects />
        <Timeline />
        <Lab />
        <Contact />
      </main>

      {eggOpen && <EasterEgg onClose={() => setEggOpen(false)} />}
    </div>
  );
}