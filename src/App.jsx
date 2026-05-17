import { useEffect, useRef, useState } from "react";
import "./App.css";

const EMAIL = "2457846992@qq.com";

const projects = [
  {
    id: 1,
    no: "01",
    title: "品牌视觉系统重构",
    category: "Brand Identity",
    year: "2025",
    keyword: "IDENTITY",
    desc: "以视觉传达方法建立品牌识别系统，覆盖标志、字体、色彩、版式与应用延展。",
    detail:
      "该项目关注品牌在不同媒介中的一致性表达，通过核心视觉符号、网格系统和字体层级，让品牌拥有可识别、可延展、可传播的视觉语言。",
  },
  {
    id: 2,
    no: "02",
    title: "实验性字体海报",
    category: "Typography",
    year: "2025",
    keyword: "TYPE",
    desc: "通过字形解构、重组与图形秩序，探索中文字体在视觉传达中的表现张力。",
    detail:
      "该系列以中文笔画结构为基础，结合实验排版、负空间和节奏控制，形成具有视觉冲击力和概念表达力的海报系统。",
  },
  {
    id: 3,
    no: "03",
    title: "数字界面视觉体验",
    category: "UI Vision",
    year: "2024",
    keyword: "INTERFACE",
    desc: "面向数字产品界面，建立高对比、强层级、低干扰的视觉体验系统。",
    detail:
      "项目重点在于信息秩序与界面情绪，通过暗色系统、微交互反馈和视觉焦点管理，提升用户对内容的理解效率。",
  },
  {
    id: 4,
    no: "04",
    title: "动态视觉叙事实验",
    category: "Motion Graphic",
    year: "2024",
    keyword: "MOTION",
    desc: "将静态图形语言转化为动态节奏，建立更具记忆点的视觉叙事。",
    detail:
      "通过节奏、速度、图形转场和视觉残影，探索视觉传达从平面到动态媒介的扩展方式。",
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
  "UI 视觉",
  "动态图形",
  "信息层级",
  "视觉系统",
];

const timeline = [
  {
    year: "2025",
    title: "个人作品集系统搭建",
    text: "围绕视觉传达设计方向，建立个人品牌、项目展示和视觉表达体系。",
  },
  {
    year: "2024",
    title: "视觉传达课程项目深化",
    text: "持续进行品牌、字体、海报、界面与动态视觉相关实验。",
  },
  {
    year: "2023",
    title: "设计方法与软件能力积累",
    text: "系统学习 Photoshop、Illustrator、After Effects 与版式基础。",
  },
];

function MagneticButton({ children, href, onClick, variant = "primary" }) {
  const ref = useRef(null);

  const move = (event) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    el.style.setProperty("--btn-x", `${x * 0.18}px`);
    el.style.setProperty("--btn-y", `${y * 0.18}px`);
  };

  const leave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.setProperty("--btn-x", "0px");
    el.style.setProperty("--btn-y", "0px");
  };

  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`magnetic-btn ${variant === "ghost" ? "ghost" : "primary"}`}
      type={href ? undefined : "button"}
    >
      <span>{children}</span>
      <i>↗</i>
    </Tag>
  );
}

function Navbar() {
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
    </header>
  );
}

function Hero() {
  const titleRef = useRef(null);

  const moveTitleLight = (event) => {
    const box = titleRef.current;
    if (!box) return;

    const rect = box.getBoundingClientRect();
    box.style.setProperty("--title-x", `${event.clientX - rect.left}px`);
    box.style.setProperty("--title-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section id="home" className="hero" onMouseMove={moveTitleLight}>
      <div className="hero-badge">
        <span />
        Visual Communication Portfolio
      </div>

      <div className="hero-title-wrap" ref={titleRef}>
        <h1 className="hero-title hero-title-base">
          王奕豪
          <br />
          视觉不是装饰
          <br />
          是秩序与感知的设计
        </h1>

        <h1 className="hero-title hero-title-reveal" aria-hidden="true">
          王奕豪
          <br />
          视觉不是装饰
          <br />
          是秩序与感知的设计
        </h1>
      </div>

      <p className="hero-text">
        我是一名视觉传达设计师，关注品牌识别、字体版式、数字界面与视觉叙事。
        我希望用克制、精准、有记忆点的视觉语言，构建具有专业气质的作品体验。
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
    <section id="about" className="about section">
      <SectionTitle
        eyebrow="About Me"
        title="我关注的不只是画面，而是画面如何建立秩序、情绪和记忆。"
        text="视觉传达对我来说不是装饰，而是把复杂信息重新组织，让它变得清晰、有气质、可被记住。"
      />

      <div className="about-grid">
        <article className="about-card large">
          <p>Designer</p>
          <h3>王奕豪</h3>
          <span>Visual Communication Designer</span>
        </article>

        <article className="about-card">
          <p>Direction</p>
          <h3>品牌 / 字体 / 版式</h3>
        </article>

        <article className="about-card">
          <p>Software</p>
          <h3>PS / AI / AE</h3>
        </article>

        <article className="about-card">
          <p>Attitude</p>
          <h3>克制、精准、有张力</h3>
        </article>
      </div>

      <div className="skill-cloud" aria-label="核心技能">
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
    <section id="projects" className="projects section">
      <SectionTitle
        eyebrow="Selected Projects"
        title="精选作品"
        text="以作品墙的形式呈现视觉系统、字体实验、数字界面和动态叙事方向。"
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
              <strong>{project.keyword}</strong>
              <i>{project.year}</i>
            </div>

            <div className="project-info">
              <p>{project.category}</p>
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
              <strong>{activeProject.keyword}</strong>
            </div>

            <div className="modal-content">
              <p>
                {activeProject.category} · {activeProject.year}
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
    <section id="timeline" className="timeline section">
      <SectionTitle
        eyebrow="Experience"
        title="设计经历"
        text="从软件能力、视觉方法到完整作品集系统，逐步建立个人设计语言。"
      />

      <div className="timeline-list">
        {timeline.map((item, index) => (
          <article className="timeline-item" key={item.year}>
            <div className="timeline-point">
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

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 1800);
  };

  return (
    <section id="contact" className="contact section">
      <SectionTitle
        eyebrow="Contact"
        title="让视觉作品拥有真正的高级感。"
        text="如果你想查看我的完整作品集，或进行设计交流，可以通过邮箱联系我。"
      />

      <div className="contact-layout">
        <form className="contact-form" onSubmit={submit}>
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
            <textarea placeholder="Message" rows="5" />
          </label>

          <button type="submit">
            {sent ? "已记录你的想法" : "发送信息"}
            <span>↗</span>
          </button>
        </form>

        <aside className="contact-card">
          <p>Email</p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>

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
  useEffect(() => {
    const move = (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div className="portfolio">
      <div className="site-bg" />
      <div className="noise" />
      <div className="cursor-light" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}