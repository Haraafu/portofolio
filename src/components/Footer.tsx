import { FiArrowUp } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <span className="brand-mark">
        F<span>/</span>A
      </span>
      <p>© {new Date().getFullYear()} Falah Andhesryo</p>
      <span className="footer-note">
        BUILT WITH CURIOSITY. INSPIRED BY OTHER WORLDS.
      </span>
      <a href="#home">
        BACK TO TOP <FiArrowUp />
      </a>
    </footer>
  );
}
