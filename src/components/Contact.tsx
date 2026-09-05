import SectionAtmosphere from "./SectionAtmosphere";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
export default function Contact() {
  return (
    <section id="contact" className="contact-section section-wrap">
      <SectionAtmosphere />
      <div className="contact-top">
        <p className="eyebrow">06 / OPEN A CONNECTION</p>
        <span>
          <i className="status-dot" /> OPEN TO OPPORTUNITIES
        </span>
      </div>
      <div className="contact-grid">
        <div>
          <h2>
            Great things start
            <br />
            with a <em>hello.</em>
          </h2>
          <p>
            Have an idea, an opportunity, or a shared curiosity?
            <br />
            Let’s build something worth connecting over.
          </p>
          <a className="button button-primary" href="mailto:falahand@gmail.com">
            SEND A MESSAGE <FiArrowUpRight />
          </a>
        </div>
        <div className="contact-details">
          <a href="mailto:falahand@gmail.com">
            <FiMail />
            <span>
              <small>EMAIL</small>falahand@gmail.com
            </span>
            <FiArrowUpRight />
          </a>
          <a href="tel:+6285219243377">
            <FiPhone />
            <span>
              <small>PHONE</small>+6285219243377
            </span>
            <FiArrowUpRight />
          </a>
          <div>
            <FiMapPin />
            <span>
              <small>BASED IN</small>East Jakarta, Jakarta
            </span>
          </div>
          <div className="contact-socials">
            <a
              href="https://github.com/Haraafu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub /> GitHub <FiArrowUpRight />
            </a>
            <a
              href="https://linkedin.com/in/falahandhesryo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin /> LinkedIn <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
