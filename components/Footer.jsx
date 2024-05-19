import "./Footer.css";
import websiteLogo from "../assets/websiteLogo.png";
import greyLine from "../assets/greyLine.png";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <div className="set1">
          <h4 className="company">Company</h4>
          <ul className="company-lists">
            <li>
              <a href="">Vision</a>
            </li>
            <li>
              <a href="">Mission</a>
            </li>
            <li>
              <a href="">Core Values</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <li>
              <a href="">Branding</a>
            </li>
            <li>
              <a href="">Team</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="set2">
          <h4 className="products">Products</h4>
          <ul className="product-lists">
            <li>
              <a href="">Eda Token</a>
            </li>
            <li>
              <a href="">Digital Clinic</a>
            </li>
            <li>
              <a href="">School of Cryptos</a>
            </li>
            <li>
              <a href="">Litepaper</a>
            </li>
            <li>
              <a href="">Whitepaper</a>
            </li>
            <li>
              <a href="">Welfare Donations</a>
            </li>
            <li>
              <a href="">How to Use Edaface</a>
            </li>
          </ul>
        </div>
        <div className="set3">
          <div className="company-logo">
            <div className="email">
              <img
                src={websiteLogo}
                className="logo-com"
                style={{ width: "70px", marginTop: "50px" }}
                alt=""
              />
              <h1 className="companyTitle" style={{ marginLeft: "14" }}>
                E<span style={{ color: "red" }}>da</span>Face
              </h1>
              <p className="subs" style={{ marginLeft: "22px" }}>
                Subscribe Our Newsletter
              </p>
              <div className="inputButton" style={{ marginLeft: "20px" }}>
                <input
                  type="text"
                  placeholder="Enter email id"
                  className="input-text"
                />
                <button className="subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="set4">
          <h4 className="legal">Legal</h4>
          <ul className="legal-lists">
            <li>
              <a href="">Terms of Use</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Disclaimers</a>
            </li>
            <li>
              <a href="">Listing T&C</a>
            </li>
          </ul>
        </div>
        <div className="set5">
          <h4 className="communities">Communities</h4>
          <ul className="community-lists">
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="">Instagram</a>
            </li>
            <li>
              <a href="">Telegram</a>
            </li>
            <li>
              <a href="">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <img
          src={greyLine}
          className="greyLine"
          style={{
            width: "86rem",
            height: "70px",
            marginLeft: "12%",
          }}
          alt=""
        />
        <p className="end">
          Copyright &copy; 2022. Edaface of EDA Holdings. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
