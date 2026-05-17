import { useEffect, useRef, useState } from "react";
import "./App.css";

const EMAIL = "2457846992@qq.com";

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
      "这个项目重点不只是让品牌“好看”，而是通过视觉秩序建立统一、稳定、可传播的品牌气质。设计语言强调识别度、延展性和媒介适应能力。",
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
      "项目以中文笔画结构为基础，通过拆解、重组、压缩、错位和留白控制，形成具有强烈视觉记忆点的字体海报系统。",
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
      "该项目关注界面中的视觉焦点管理。通过对比、层级、动效、状态反馈和留白，让复杂信息更容易被理解。",
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
      "项目探索视觉传达从平面到动态媒介的延展。通过图形转场、节奏控制、视觉残影和时间轴设计，建立更完整的叙事体验。",
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

function MagneticButton({ children, href, onClick, variant = "solid" }) {
  const ref = useRef(null);

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

  const Tag = href ? "a" : "button";

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

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="nav">
      <a href="#home" className="nav-logo" aria-label="返回首页">
        <strong>WYH</strong>
        <span>Visual Communication</span>
      </a>

      <nav className="nav-menu" aria-label="主导航">
        <a href="#about">关于</a>
        <a href="#projects">作品</a>
        <a href="#timeline">经历</a>
        <a href="#contact">联系</a>
      </nav>

      <button className="theme-toggle" type="button" onClick={onToggleTheme}>
        <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
        <i />
      </button>
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
      <div className="floating-type type-c">视觉</div>

      <div className="hero-badge">
        <span />
        Visual Communication Portfolio
      </div>

      <div className="hero-title-wrap" ref={titleRef}>
        <h1 className="hero-title">
          王奕豪
          <br />
          视觉不是装饰
          <br />
          是秩序与感知的设计
        </h1>
      </div>

      <p className="hero-text">
        我是一名视觉传达设计师，关注品牌识别、字体版式、数字界面与视觉叙事。
        我希望用更克制、更精准、更有记忆点的视觉语言，构建具有专业气质的作品体验。
      </p>

      <div className="hero-actions">
        <MagneticButton href="#projects">查看精选作品</MagneticButton>
        <MagneticButton href="#contact" variant="ghost">
          联系我
        </MagneticButton>
      </div>

      <div className="hero-meta">
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
    <div className="section-title">
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
        <article className="portrait-card">
          <div className="portrait-mark">WYH</div>
          <div>
            <p>Designer</p>
            <h3>王奕豪</h3>
            <span>Visual Communication Designer</span>
          </div>
        </article>

        <div className="about-cards">
          <article>
            <p>Direction</p>
            <h3>品牌 / 字体 / 版式</h3>
          </article>

          <article>
            <p>Software</p>
            <h3>PS / AI / AE</h3>
          </article>

          <article>
            <p>Style</p>
            <h3>克制、精准、有张力</h3>
          </article>

          <article>
            <p>Focus</p>
            <h3>视觉系统与感知体验</h3>
          </article>
        </div>
      </div>

      <div className="skill-cloud">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

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

      <div className="project-grid">
        {projects.map((project) => (
          <button
            className="project-card"
            key={project.id}
            type="button"
            onClick={() => setActiveProject(project)}
          >
            <div className="project-visual">
              <span>{project.no}</span>
              <strong>{project.tag}</strong>
              <i>{project.year}</i>
            </div>

            <div className="project-info">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <small>{project.desc}</small>
            </div>
          </button>
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
              <span>{activeProject.no}</span>
              <strong>{activeProject.tag}</strong>
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
          <article className="timeline-item" key={item.year}>
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
        <form className="contact-form" onSubmit={handleSubmit}>
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

        <aside className="contact-card">
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

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleMove = (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className={`portfolio ${theme === "light" ? "is-light" : ""}`}>
      <div className="site-bg" />
      <div className="grain" />
      <div className="cursor-glow" />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}