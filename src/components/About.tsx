import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
export default function About() {
  return <section id="about" className="content-section section-wrap">
    <SectionHeading number="01" label="PLAYER PROFILE" title="Curiosity is my starting point." />
    <div className="about-grid"><div className="about-copy"><p>I’m a Computer Engineering student at Universitas Indonesia with hands-on experience in artificial intelligence, frontend development, software engineering, and IoT. Currently an AI Intern at Avanade, developing proof-of-concept solutions using Microsoft AI technologies, with previous frontend development experience at YARSI Hospital.</p><p>Strong problem-solving, collaboration, and communication skills developed through leadership, teaching assistance, international programs, and public speaking. I am detail-oriented, proactive, and motivated to build practical technology solutions with real-world impact.</p><p>I was selected as the only representative from Indonesia for a scholarship to study AI at Peter the Great St. Petersburg Polytechnic University, joining participants from 10+ countries.</p><a className="text-link" href="#education">Explore my journey <FiArrowUpRight /></a></div>
    <div className="profile-panel"><div className="panel-caption"><span>PERSONAL RECORD</span><span>01</span></div><h3>Falah Andhesryo</h3><p className="muted location"><FiMapPin /> East Jakarta, Jakarta</p><dl className="profile-details"><div><dt>EMAIL</dt><dd><a href="mailto:falahand@gmail.com">falahand@gmail.com</a></dd></div><div><dt>PHONE</dt><dd><a href="tel:+6285219243377">+6285219243377</a></dd></div><div><dt>FOCUS</dt><dd>AI · Software · IoT</dd></div></dl><div className="profile-stats"><div><strong>3.71<span>/ 4.00</span></strong><span>ACADEMIC GPA</span></div><div><strong>15<span>+</span></strong><span>EVENTS SPOKEN</span></div></div></div></div>
  </section>;
}

