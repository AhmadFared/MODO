import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "./footerStyle.css";
const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row social">
          <div className="col github">
            <FaGithub />
            <a href="https://github.com/AhmadFared" target="_blank">
              <h6 className="social-media-platform-name">github</h6>
            </a>
          </div>
          <div className="col twitter">
            <FaTwitter className="twitter-icon" />
            <a href="https://twitter.com/ahmadfaredd8" target="_blank">
              <h6 className="social-media-platform-name">twitter</h6>
            </a>
          </div>
          <div className="col linkedin">
            <FaLinkedin className="linkedin-icon" />
            <a
              href="https://www.linkedin.com/in/ahmad-fared-b254741a4/"
              target="_blank"
            >
              <h6 className="social-media-platform-name text-decoration-none">
                linkedin
              </h6>
            </a>
          </div>
        </div>
        <div className="gmail">ahmadfaredd27@gmail.com</div>
      </div>
    </>
  );
};

export default Footer;
