import "./Content.css";
// import cat3 from "../assets/cat3.jpg";
import newcat from "../assets/newcat.png";
import hotcollectionthree from "../assets/hotcollectionthree.png";
import neon1 from "../assets/neon1.jpg";
import neon2 from "../assets/neon2.jpg";
import neon3 from "../assets/neon3.jpg";
import neon4 from "../assets/neon4.jpg";
import neon5 from "../assets/neon5.jpg";
import neon6 from "../assets/neon6.jpg";
import neon7 from "../assets/neon7.jpg";
import neon8 from "../assets/neon8.jpg";
import neon9 from "../assets/neon9.jpg";
import liveauctions from "../assets/liveauctions.png";
import icon from "../assets/icon.png";
import heart from "../assets/heart.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import anime1 from "../assets/animes/anime1.jpeg";
import anime2 from "../assets/animes/anime2.jpeg";
import anime3 from "../assets/animes/anime3.jpeg";
import anime4 from "../assets/animes/anime4.jpeg";
import anime5 from "../assets/animes/anime5.jpeg";
import anime6 from "../assets/animes/anime6.jpeg";
import anime7 from "../assets/animes/anime7.jpeg";
// import anime8 from "../assets/animes/anime8.jpeg";
// import anime9 from "../assets/animes/anime9.jpeg";
// import anime10 from "../assets/animes/anime10.jpeg";
// import anime11 from "../assets/animes/anime11.jpeg";
import threestar from "../assets/threestar.png";
import fourstar from "../assets/fourstar.png";
import fivestar from "../assets/fivestar.png";
import triRight from "../assets/triRight.png";
import triLeft from "../assets/triLeft.png";

function Content() {
  return (
    <div className="main">
      <h1 className="hot">Hot Collections</h1>
      <div className="image-carousel">
        <div id="img1">
          <img
            src={hotcollectionthree}
            style={{
              width: "200px",
              marginLeft: "5%",
              marginTop: "13%",
            }}
            alt=""
          />
          <p className="caption1">Cat NFT</p>
        </div>
        <div id="img2">
          <img
            src={newcat}
            style={{ width: "200px", marginLeft: "5%" }}
            alt=""
          />
          <p className="caption2">Lorem ipsum</p>
        </div>
        <div id="img3">
          <img
            src={hotcollectionthree}
            style={{ width: "200px", marginLeft: "5%", marginTop: "13%" }}
            alt=""
          />
          <p className="caption3">Lorem ipsum</p>
        </div>
        <div id="img4">
          <img
            src={newcat}
            style={{
              width: "200px",
              marginLeft: "5%",
            }}
            alt=""
          />
          <p className="caption4">Lorem ipsum</p>
        </div>
      </div>
      <div id="arrow">
        <img
          src={left}
          style={{ width: "34px", height: "20px" }}
          className="left"
          alt=""
        />
        <img
          src={triRight}
          className="rightTriangle"
          style={{ width: "40px", height: "52px" }}
          alt=""
        />
        <img
          src={right}
          style={{ width: "34px", height: "20px" }}
          className="right"
          alt=""
        />
        <img
          src={triLeft}
          className="leftTriangle"
          style={{ width: "40px", height: "52px" }}
          alt=""
        />
      </div>

      <div className="creators">
        <h1 className="creators-title" style={{ marginTop: "20px" }}>
          Top Creators
        </h1>
        <div className="collections1">
          <div id="neon1">
            <img
              src={neon1}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote1">lenin quies</p>
            <span className="item1">178 items</span>
          </div>
          <div id="neon2">
            <img
              src={neon2}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote">lenin quies</p>
            <span className="items">178 items</span>
          </div>
          <div id="neon3">
            <img
              src={neon3}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote">lenin quies</p>
            <span className="items">178 items</span>
          </div>
          <div id="neon4">
            <img
              src={neon4}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote">lenin quies</p>
            <span className="items">178 items</span>
          </div>
        </div>
        <div className="collections2">
          <div id="neon5">
            <img
              src={neon9}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote5">lenin quies</p>
            <span className="item5">178 items</span>
          </div>
          <div id="neon6">
            <img
              src={neon6}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote">lenin quies</p>
            <span className="items">178 items</span>
          </div>
          <div id="neon7">
            <img
              src={neon7}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote">lenin quies</p>
            <span className="items">178 items</span>
          </div>
          <div id="neon8">
            <img
              src={neon8}
              style={{
                width: "50px",
                height: "50px",
                marginLeft: "5%",
                marginTop: "5%",
                borderRadius: "5px",
              }}
              alt=""
            />
            <p className="quote">lenin quies</p>
            <span className="items">178 items</span>
          </div>
        </div>
      </div>

      <div className="auction">
        <h1
          className="live"
          style={{ marginTop: "60px", alignItems: "center" }}
        >
          Live Auctions
        </h1>
        <div className="women-nft">
          <div id="women1">
            <img
              className="wom-img"
              src={liveauctions}
              style={{
                width: "230px",
              }}
              alt=""
            />

            <div className="time">
              <span className="twelve">12</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="five">05</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="three">38</span>
            </div>

            <div className="captions">
              <p
                style={{
                  marginTop: "5px",
                  marginLeft: "3%",
                  fontSize: "14px",
                }}
                className="nft-wom"
              >
                Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                <span style={{ marginLeft: "1%" }}>#325</span>
              </p>
              <div className="content">
                <p
                  className="bid"
                  style={{ marginLeft: "3%", marginTop: "0", fontSize: "13px" }}
                >
                  Highest Bid
                </p>
                <p
                  className="price"
                  style={{
                    marginLeft: "37%",
                    marginTop: "0",
                    fontSize: "13px",
                  }}
                >
                  15,000 BUSD
                </p>
              </div>
              <img
                src={icon}
                alt=""
                className="icon"
                style={{
                  width: "60px",
                  marginLeft: "3%",
                }}
              />
              <p style={{ marginLeft: "32%" }} className="robert">
                @robert03
              </p>
              <div className="img-cap">
                <p style={{ marginLeft: "32%" }} className="lorem">
                  by lorem ipsum
                </p>
                <div className="heartrate">
                  <img
                    src={heart}
                    className="heart"
                    style={{ marginLeft: "100%", width: "20px", color: "grey" }}
                    alt=""
                  />
                  <p className="number">246</p>
                </div>
              </div>
            </div>
          </div>
          <div id="women2">
            <img
              className="wom-img"
              src={anime1}
              style={{
                width: "230px",
                height: "230px",
              }}
              alt=""
            />

            <div className="time">
              <span className="twelve">12</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="five">05</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="three">38</span>
            </div>

            <div className="captions">
              <p
                style={{
                  marginTop: "5px",
                  marginLeft: "3%",
                  fontSize: "14px",
                }}
                className="nft-wom"
              >
                Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                <span style={{ marginLeft: "1%" }}>#325</span>
              </p>
              <div className="content">
                <p
                  className="bid"
                  style={{ marginLeft: "3%", marginTop: "0", fontSize: "13px" }}
                >
                  Highest Bid
                </p>
                <p
                  className="price"
                  style={{
                    marginLeft: "37%",
                    marginTop: "0",
                    fontSize: "13px",
                  }}
                >
                  15,000 BUSD
                </p>
              </div>
              <img
                src={icon}
                alt=""
                className="icon"
                style={{
                  width: "60px",
                  marginLeft: "3%",
                }}
              />
              <p style={{ marginLeft: "32%" }} className="robert">
                @robert03
              </p>
              <div className="img-cap">
                <p style={{ marginLeft: "32%" }} className="lorem">
                  by lorem ipsum
                </p>
                <div className="heartrate">
                  <img
                    src={heart}
                    className="heart"
                    style={{ marginLeft: "100%", width: "20px", color: "grey" }}
                    alt=""
                  />
                  <p className="number">246</p>
                </div>
              </div>
            </div>
          </div>
          <div id="women3">
            <img
              className="wom-img"
              src={anime2}
              style={{
                width: "230px",
                height: "230px",
              }}
              alt=""
            />

            <div className="time">
              <span className="twelve">12</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="five">05</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="three">38</span>
            </div>

            <div className="captions">
              <p
                style={{
                  marginTop: "5px",
                  marginLeft: "3%",
                  fontSize: "14px",
                }}
                className="nft-wom"
              >
                Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                <span style={{ marginLeft: "1%" }}>#325</span>
              </p>
              <div className="content">
                <p
                  className="bid"
                  style={{ marginLeft: "3%", marginTop: "0", fontSize: "13px" }}
                >
                  Highest Bid
                </p>
                <p
                  className="price"
                  style={{
                    marginLeft: "37%",
                    marginTop: "0",
                    fontSize: "13px",
                  }}
                >
                  15,000 BUSD
                </p>
              </div>
              <img
                src={icon}
                alt=""
                className="icon"
                style={{
                  width: "60px",
                  marginLeft: "3%",
                }}
              />
              <p style={{ marginLeft: "32%" }} className="robert">
                @robert03
              </p>
              <div className="img-cap">
                <p style={{ marginLeft: "32%" }} className="lorem">
                  by lorem ipsum
                </p>
                <div className="heartrate">
                  <img
                    src={heart}
                    className="heart"
                    style={{ marginLeft: "100%", width: "20px", color: "grey" }}
                    alt=""
                  />
                  <p className="number">246</p>
                </div>
              </div>
            </div>
          </div>
          <div id="women4">
            {" "}
            <img
              className="wom-img"
              src={anime3}
              style={{
                width: "230px",
                height: "230px",
              }}
              alt=""
            />
            <div className="time">
              <span className="twelve">12</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="five">05</span>
              <span style={{ marginLeft: "4px", color: "white" }}>:</span>
              <span className="three">38</span>
            </div>
            <div className="captions">
              <p
                style={{
                  marginTop: "5px",
                  marginLeft: "3%",
                  fontSize: "14px",
                }}
                className="nft-wom"
              >
                Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                <span style={{ marginLeft: "1%" }}>#325</span>
              </p>
              <div className="content">
                <p
                  className="bid"
                  style={{ marginLeft: "3%", marginTop: "0", fontSize: "13px" }}
                >
                  Highest Bid
                </p>
                <p
                  className="price"
                  style={{
                    marginLeft: "37%",
                    marginTop: "0",
                    fontSize: "13px",
                  }}
                >
                  15,000 BUSD
                </p>
              </div>
              <img
                src={icon}
                alt=""
                className="icon"
                style={{
                  width: "60px",
                  marginLeft: "3%",
                }}
              />
              <p style={{ marginLeft: "32%" }} className="robert">
                @robert03
              </p>
              <div className="img-cap">
                <p style={{ marginLeft: "32%" }} className="lorem">
                  by lorem ipsum
                </p>
                <div className="heartrate">
                  <img
                    src={heart}
                    className="heart"
                    style={{ marginLeft: "100%", width: "20px", color: "grey" }}
                    alt=""
                  />
                  <p className="number">246</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="auction">
          <h1
            className="live"
            style={{ marginTop: "60px", alignItems: "center" }}
          >
            Recently Added NFTs
          </h1>
          <div className="women-nft">
            <div id="women1">
              <img
                className="wom-img"
                src={anime4}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />

              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={fourstar}
                  style={{ width: "160px" }}
                  className="fourstar"
                  alt=""
                />

                <div className="wrap-content">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="women2">
              <img
                className="wom-img"
                src={anime5}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />

              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={threestar}
                  // style={{ width: "90px" }}
                  className="threestar"
                  alt=""
                />

                <div className="wrap-content2">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="women3">
              <img
                className="wom-img"
                src={anime6}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />

              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={threestar}
                  // style={{ width: "90px" }}
                  className="threestar"
                  alt=""
                />
                <div className="wrap-content3">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="women4">
              {" "}
              <img
                className="wom-img"
                src={anime7}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />
              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={fourstar}
                  // style={{ width: "90px" }}
                  className="fourstar"
                  alt=""
                />
                <div className="wrap-content4">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="auction">
          <div className="women-nft">
            <div id="women1">
              <img
                className="wom-img"
                src={neon7}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />

              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={fourstar}
                  // style={{ width: "90px" }}
                  className="fourstar"
                  alt=""
                />
                <div className="wrap-content">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="women2">
              <img
                className="wom-img"
                src={neon5}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />

              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={fivestar}
                  // style={{ width: "90px" }}
                  className="fivestar"
                  alt=""
                />
                <div className="wrap-content5">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="women3">
              <img
                className="wom-img"
                src={neon6}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />

              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={fourstar}
                  // style={{ width: "90px" }}
                  className="fourstar"
                  alt=""
                />
                <div className="wrap-content">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="women4">
              {" "}
              <img
                className="wom-img"
                src={neon8}
                style={{
                  width: "230px",
                  height: "230px",
                }}
                alt=""
              />
              <div className="recent-captions">
                <p
                  style={{
                    marginTop: "5px",
                    marginLeft: "3%",
                    fontSize: "14px",
                  }}
                  className="nft-wom"
                >
                  Women <span style={{ marginLeft: "1%" }}>NFT</span>{" "}
                  <span style={{ marginLeft: "1%" }}>#325</span>
                </p>
                <img
                  src={fourstar}
                  // style={{ width: "90px" }}
                  className="fourstar"
                  alt=""
                />
                <div className="wrap-content">
                  <div className="content">
                    <p
                      className="bid"
                      style={{
                        marginLeft: "3%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      Highest Bid
                    </p>
                    <p
                      className="price"
                      style={{
                        marginLeft: "37%",
                        marginTop: "0",
                        fontSize: "13px",
                      }}
                    >
                      15,000 BUSD
                    </p>
                  </div>
                  <img
                    src={icon}
                    alt=""
                    className="icon"
                    style={{
                      width: "60px",
                      marginLeft: "3%",
                    }}
                  />
                  <p style={{ marginLeft: "32%" }} className="robert">
                    @robert03
                  </p>
                  <div className="img-cap">
                    <p style={{ marginLeft: "32%" }} className="lorem">
                      by lorem ipsum
                    </p>
                    <div className="heartrate">
                      <img
                        src={heart}
                        className="heart"
                        style={{
                          marginLeft: "100%",
                          width: "20px",
                          color: "grey",
                        }}
                        alt=""
                      />
                      <p className="number">246</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="load">
          <button
            className="load-more"
            style={{ width: "8%", borderRadius: "8px" }}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
