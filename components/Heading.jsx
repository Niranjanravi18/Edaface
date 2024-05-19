import React, { useState } from "react";
import "./Heading.css";
import logo from "../assets/logo.png";
import login from "../assets/login.png";
import folder from "../assets/folder.png";
import bannerheade from "../assets/bannerheade.png";
import headbanner from "../assets/headbanner.png";
import websiteLogo from "../assets/websiteLogo.png";
import neon9 from "../assets/neon9.jpg";

const Heading = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <img className="logo" src={websiteLogo} alt="Logo" />
        <h1 className="title">
          E<span style={{ color: "red" }}>da</span>Face
        </h1>
        <ul className="navbar-links">
          <li>
            <a href="art">Art</a>
          </li>
          <li>
            <a href="collectible">Collectible</a>
          </li>
          <li>
            <a href="gaming">Gaming</a>
          </li>
          <li>
            <a href="explore">Explore</a>
          </li>
        </ul>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder=" &#128270;Search items..."
          />
        </div>
        <button className="create">Create</button>
        <img className="login" src={login} alt="Login" />
        <img className="folder" src={folder} alt="Folder" />
      </nav>

      <div className="top">
        <div className="maincontent">
          <div className="firstmain">
            <p
              className="head"
              style={{
                fontSize: "90px",
                position: "relative",
                bottom: "60px",
              }}
            >
              <span className="discover" style={{ width: "50px" }}>
                Discover
              </span>{" "}
              <br /> Digital art& <br />
              Collect NFTs
            </p>
            <div className="about-content">
              <p className="about1">
                Edaface is a user interface that brings all the various
              </p>
              <p className="about2">
                functionalities of the crypto industry onto a single platform!
                Edaface is
              </p>{" "}
              <p className="about3">
                {" "}
                a user interface aggregator that brings all the various
                functionalities of the{" "}
              </p>
              <p className="about4">crypt industry onto a single platform!</p>
            </div>
          </div>
          <div className="secondmain">
            <img
              src={bannerheade}
              className="mainimg"
              style={{ width: "540px", height: "430px" }}
              alt=""
            />
            <img
              src={neon9}
              className="neon9"
              style={{ width: "42px", height: "40px", borderRadius: "20px" }}
              alt=""
            />
            <span className="bluestudios">Blue Studios NFT</span>
            <p className="ipsum">by lorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
