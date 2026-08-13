import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Mail, Phone, Scale, Sparkles } from 'lucide-react'
import ParticleText from './ParticleText'
import FoldText from './FoldText'
import './style.css'

const projects = [
  {
    number: '01',
    label: '本科毕业论文',
    title: '平台用工自我治理的\n法律激励机制构建',
    description: '从劳动关系认定、制度比较到法律激励机制，探讨平台经济中的劳动者权益保障与治理创新。',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1400&q=85',
    color: 'warm',
  },
  {
    number: '02',
    label: '法律实务',
    title: '民商事法律服务\n实习实践',
    description: '参与卷宗整理、文书送达、庭审旁听与当事人沟通，在具体事实中训练法律问题识别能力。',
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1400&q=85',
    color: 'blue',
  },
]

const strengths = [
  ['01', '法律研究', '以问题为起点，完成资料梳理、比较分析与规范论证。'],
  ['02', '事实分析', '善于从复杂叙事中抽丝剥茧，提炼清晰的法律关系。'],
  ['03', '严谨执行', '将复杂任务拆分为可落地的步骤，关注每一个细节。'],
  ['04', '协作沟通', '在团队协作与当事人沟通中保持耐心、清晰与边界感。'],
]

function App() {
  return <main>
    <section className="hero" id="home">
      <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=1800&q=85">
        <source src="https://videos.pexels.com/video-files/856401/856401-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <ParticleText />
      <div className="hero-shade" />
      <nav><a className="brand" href="#home">CY<span>·</span>LAW</a><div className="nav-links"><a href="#about">关于我</a><a href="#work">研究与实践</a><a href="#strength">个人优势</a></div><a className="nav-contact" href="#contact">联系我 <ArrowUpRight size={15} /></a></nav>
      <div className="hero-content"><p className="eyebrow light">CHEN YAN / LAW &amp; RESEARCH</p><h1>让法律思考<br /><FoldText text="回应真实世界" /></h1><p className="hero-intro">法学研究生 · 中国计量大学<br />以审慎的分析与真诚的行动，理解秩序的意义。</p></div>
      <a className="scroll-mark" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={20} /></a>
      <p className="hero-side">PORTFOLIO / 2026</p>
    </section>

    <section className="about section" id="about"><div className="section-kicker"><span>01</span> ABOUT ME</div><div className="about-grid"><div className="portrait-wrap"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85" alt="阅读中的法律研究者" /><div className="portrait-note">法理之外<br />亦见人心</div></div><div className="about-copy"><p className="statement">我相信，好的法律工作不仅关乎规则，更关乎理解规则背后的<span>人</span>与现实。</p><p>你好，我是陈延，一名正在中国计量大学攻读法学硕士的研究生。本科阶段主修企业法律实务，并已通过国家法律职业资格考试。</p><p>我关注平台经济、劳动权益与民商事实务；也享受将纷繁事实还原为清晰法律关系的过程。</p><div className="contact-line"><a href="mailto:1976363560@qq.com"><Mail size={17} /> 1976363560@qq.com</a><a href="tel:19730062833"><Phone size={17} /> 197 3006 2833</a></div></div><div className="stats"><div><strong>02</strong><span>段科研助理<br />与助管经历</span></div><div><strong>120<small>+</small></strong><span>小时研究生<br />招生助管服务</span></div><div><strong>06</strong><span>项专业证书<br />与荣誉</span></div></div></div></section>

    <section className="work section" id="work"><div className="work-head"><div className="section-kicker"><span>02</span> SELECTED WORK</div><h2>研究不止于纸面，<br />实践赋予它<span>温度。</span></h2></div><div className="project-list">{projects.map((project) => <article className={`project ${project.color}`} key={project.number}><div className="project-image"><img src={project.image} alt="" /></div><div className="project-content"><div className="project-top"><span>{project.number}</span><span>{project.label}</span></div><h3>{project.title.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{project.description}</p><button aria-label={`查看${project.label}`}><ArrowUpRight size={21} /></button></div></article>)}</div></section>

    <section className="strength section" id="strength"><div className="strength-title"><div className="section-kicker"><span>03</span> WHAT I BRING</div><h2>沉稳、细致，<br />也始终<span>向前。</span></h2><p>在理论与实务之间，培养解决问题的能力。</p></div><div className="strength-grid">{strengths.map(([number, title, text]) => <article key={number}><div><span>{number}</span><Sparkles size={18} /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <footer id="contact"><div className="footer-top"><a className="brand" href="#home">CY<span>·</span>LAW</a><p>愿以专业与热忱，<br />成为值得信赖的同行者。</p></div><div className="footer-main"><p className="eyebrow light">LET'S START A CONVERSATION</p><a className="email-big" href="mailto:1976363560@qq.com">1976363560@qq.com <ArrowUpRight /></a></div><div className="footer-bottom"><span>© 2026 CHEN YAN</span><span>HANGZHOU · CHINA</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </main>
}
createRoot(document.getElementById('root')).render(<App />)
