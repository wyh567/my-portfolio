export default function App() {
  const pageStyle = {
    minHeight: "100vh",
    background: "#0f1115",
    color: "#f5f7fa",
    fontFamily: "Arial, sans-serif",
  };

  const containerStyle = {
    width: "90%",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const heroStyle = {
    padding: "80px 0 60px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  };

  const titleStyle = {
    fontSize: "56px",
    fontWeight: "700",
    lineHeight: "1.1",
    marginBottom: "20px",
  };

  const subTitleStyle = {
    fontSize: "20px",
    color: "rgba(255,255,255,0.7)",
    lineHeight: "1.8",
    maxWidth: "720px",
  };

  const buttonWrapStyle = {
    marginTop: "30px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  };

  const primaryBtn = {
    background: "#ffffff",
    color: "#111111",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "600",
    display: "inline-block",
  };

  const secondaryBtn = {
    border: "1px solid rgba(255,255,255,0.18)",
    color: "#ffffff",
    padding: "14px 22px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "600",
    display: "inline-block",
  };

  const sectionStyle = {
    padding: "60px 0",
  };

  const sectionTitle = {
    fontSize: "32px",
    marginBottom: "24px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    background: "#171a21",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "22px",
  };

  const coverStyle = {
    height: "220px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #2b2f3a, #14161c)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,255,255,0.45)",
    fontSize: "14px",
    marginBottom: "18px",
  };

  const tagWrap = {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "14px",
  };

  const tagStyle = {
    fontSize: "12px",
    color: "rgba(255,255,255,0.75)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    padding: "6px 10px",
  };

  const textMuted = {
    color: "rgba(255,255,255,0.68)",
    lineHeight: "1.8",
  };

  const footerStyle = {
    padding: "40px 0 80px",
    color: "rgba(255,255,255,0.55)",
    fontSize: "14px",
  };

  const projects = [
    {
      title: "小王子宇宙儿童绘本",
      type: "绘本设计 / AI辅助创作",
      desc: "以《小王子》为灵感，做儿童向宇宙科普绘本，展示故事叙事、角色设定与页面节奏。",
      tags: ["绘本", "视觉叙事", "AI绘图"],
    },
    {
      title: "品牌视觉重构",
      type: "品牌设计 / 视觉系统",
      desc: "围绕年轻化品牌定位，重做标志、色彩、海报和社交媒体视觉，提升统一性与识别度。",
      tags: ["品牌", "版式", "视觉系统"],
    },
    {
      title: "未来感海报实验",
      type: "海报设计 / 概念视觉",
      desc: "结合排版、3D和高对比视觉语言，做一组未来感概念海报，强调速度与秩序感。",
      tags: ["海报", "C4D", "实验视觉"],
    },
  ];

  return (
    <div style={pageStyle}>
      <section style={heroStyle}>
        <div style={containerStyle}>
          <p style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "2px", marginBottom: "16px" }}>
            PORTFOLIO / VISUAL COMMUNICATION
          </p>
          <h1 style={titleStyle}>
            王奕豪
            <br />
            视觉传达设计作品集
          </h1>
          <p style={subTitleStyle}>
            我关注品牌、叙事和数字视觉的结合，尝试把 AI、设计和个人表达放进同一套创作语言里。
          </p>

          <div style={buttonWrapStyle}>
            <a href="#projects" style={primaryBtn}>查看作品</a>
            <a href="#about" style={secondaryBtn}>关于我</a>
          </div>
        </div>
      </section>

      <section id="projects" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>精选作品</h2>
          <div style={gridStyle}>
            {projects.map((item, index) => (
              <div key={index} style={cardStyle}>
                <div style={coverStyle}>项目封面图展示区域</div>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", marginBottom: "10px" }}>
                  {item.type}
                </p>
                <h3 style={{ fontSize: "24px", marginBottom: "12px" }}>{item.title}</h3>
                <p style={textMuted}>{item.desc}</p>
                <div style={tagWrap}>
                  {item.tags.map((tag, i) => (
                    <span key={i} style={tagStyle}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>关于我</h2>
          <div style={cardStyle}>
            <p style={textMuted}>
              我是视觉传达设计大三学生，关注品牌设计、海报设计、AI辅助创作和C4D视觉表达。
              我喜欢把文字、图像、排版和技术放在一起，做成既有情绪又有结构的作品。
            </p>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitle}>联系我</h2>
          <div style={cardStyle}>
            <p style={textMuted}>邮箱：2457846992@qq.com</p>
            <p style={textMuted}>Behance：你的作品链接</p>
          </div>
        </div>
      </section>

      <footer style={footerStyle}>
        <div style={containerStyle}>
          © 2026 王奕豪 Portfolio
        </div>
      </footer>
    </div>
  );
}