
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-green-400 text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/nawrin1"><div className="text-2xl"><FaGithub></FaGithub></div></a>
            <a href="https://www.linkedin.com/in/jannatul-ferdous-nawrin-162058233/"><div className="text-2xl"><FaLinkedin></FaLinkedin></div></a>
            <a href="https://www.facebook.com/jannatulferdous.nawrin.7?mibextid=ZbWKwL"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2023 - All right reserved by Focus Flow</p>
        </aside>
      </footer>
    );
};

export default Footer;