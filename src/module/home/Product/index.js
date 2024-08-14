import React, { useState } from "react";
import "./ourproductslidesection.scss";
import commodities from "../../../assets/images/img-commoditiesHeader.webp";
import cyrpto from "../../../assets/images/img-cyrptoCurrencyHeader.webp";
import forexheader from "../../../assets/images/img-forexHeader.webp";
import gold from "../../../assets/images/img-goldHeader.webp";
import indices from "../../../assets/images/img-indicesHeader-2.webp";
import shares from "../../../assets/images/img-sharesHeader.webp";

export default function Ourproductslidesection({ id }) {
  const [activeButton, setActiveButton] = useState("Forex");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="product-section-main" id={id}>
      <div className="product-container">
        <div className="product-title-main">
          <div className="product-title-main-alignment">
            <h1>OUR PRODUCTS</h1>
            <h2>Trade our top performing products</h2>
            <p>
              Confidently trade with Forex Voyager Limited cutting-edge trading platforms offering groundbreaking levels of stability and reliability. Subscribe and execute on the tightest pricing and liquidity from top-tier Banks and Prime Brokers.
            </p>
            <div className="product-buttons-changer">
              <button onClick={() => handleButtonClick("Forex")} className={activeButton === "Forex" ? "activebutton" : ""}>
                Forex
              </button>
              <button onClick={() => handleButtonClick("Metals")} className={activeButton === "Metals" ? "activebutton" : ""}>
                Metals
              </button>
              <button onClick={() => handleButtonClick("Shares")} className={activeButton === "Shares" ? "activebutton" : ""}>
                Shares
              </button>
              <button onClick={() => handleButtonClick("Indices")} className={activeButton === "Indices" ? "activebutton" : ""}>
                Indices
              </button>
              <button onClick={() => handleButtonClick("Commodities")} className={activeButton === "Commodities" ? "activebutton" : ""}>
                Commodities
              </button>
              <button onClick={() => handleButtonClick("Digital Assets")} className={activeButton === "Digital Assets" ? "activebutton" : ""}>
                Digital Assets
              </button>
            </div>
          </div>
          <div className="product-content">
            {activeButton === "Forex" && (
              <div className="content-forex">
                <h1>
                  Invest in <span>Forex</span>
                </h1>
                <p>Trade over 55 major, cross, and exotic Forex pairs, and benefit from the tightest spreads in the industry.</p>
                <div className="up-and-down-boxes-changer" id="up-and-down-boxes-changer-web">
                  <div className="up-and-down-box-changer">
                    <h3>Up to 500:1</h3>
                    <span>Highest levels of leverage</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>0.0* Pips</h3>
                    <span>Tightest spreads in the industry</span>
                  </div>
                </div>
              </div>
            )}
            {activeButton === "Forex" && (
              <>
                <div className="productimags">
                  <img src={forexheader} alt="forexheader" />
                </div>
                <div className="up-and-down-boxes-changer" id="up-and-down-boxes-changer-mobile">
                  <div className="up-and-down-box-changer">
                    <h3>Up to 500:1</h3>
                    <span>Highest levels of leverage</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>0.0* Pips</h3>
                    <span>Tightest spreads in the industry</span>
                  </div>
                </div>
              </>
            )}
            {activeButton === "Metals" && (
              <div className="content-metals">
                <h1>
                  Invest in <span>Metals</span>
                </h1>
                <p>
                  Diversify your portfolio by trading metals, such as gold and silver and unmask new trading opportunities. With a worldwide network of the most prominent precious metal dealers, producers, consumers, and speculators in the industry,
                  Forex Voyager Limited brings unrivaled experience for smooth trading.
                </p>
                <div className="up-and-down-boxes-changer-sc" id="up-and-down-boxes-changer-web-metals">
                  <div className="up-and-down-box-changer">
                    <h3>2 Cents</h3>
                    <span>Tightest spreads on Gold</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>1 Cent</h3>
                    <span>Tightest spreads on Silver</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>1 Cent</h3>
                    <span>Tightest spreads on Silver</span>
                  </div>
                </div>
              </div>
            )}
            {activeButton === "Metals" && (
              <div className="productimags">
                <img src={gold} alt="forexheader" />
              </div>
            )}
            {activeButton === "Shares" && (
              <div className="content-shares">
                <h1>
                  Invest in <span>Shares</span>
                </h1>
                <p>Buy and Sell shares on over 20,000 equities of the largest multinational companies listed on the top stock exchanges in the world in market capitalization with margins as low as 5%.</p>
                <div className="up-and-down-boxes-changer-sc">
                  <div className="up-and-down-box-changer">
                    <h3>20,000+</h3>
                    <span>Tightest</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>20:1</h3>
                    <span>Level of Leverage</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>0%</h3>
                    <span>Commission</span>
                  </div>
                </div>
              </div>
            )}
            {activeButton === "Shares" && (
              <div className="productimags">
                <img src={shares} alt="forexheader" />
              </div>
            )}

            {activeButton === "Indices" && (
              <div className="content-indices">
                <h1>
                  Invest in <span>Indices</span>
                </h1>
                <p>Gain instant access and trade major stock exchange indices from across the globe, including NASDAQ 100, German DAX 40, Dow Jones 30, and more.</p>
                <div className="up-and-down-boxes-changer-th">
                  <div className="up-and-down-box-changer">
                    <h3>100:1</h3>
                    <span>Leverage</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>Tightest Spreads</h3>
                    <span>The lowest spreads in the market</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>0%</h3>
                    <span>Commission</span>
                  </div>
                </div>
              </div>
            )}

            {activeButton === "Indices" && (
              <div className="productimags">
                <img src={indices} alt="forexheader" />
              </div>
            )}
            {activeButton === "Commodities" && (
              <div className="content-commodities">
                <h1>
                  Invest in <span>Commodities</span>
                </h1>
                <p>Trade commodities such as energies and grains and diversify your portfolio. Capitalize on supply and demand trends in the global commodity market to generate strong returns on your investment.</p>
                <div className="up-and-down-boxes-changer-th">
                  <div className="up-and-down-box-changer">
                    <h3>0%</h3>
                    <span>Commission</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>Tightest Spreads</h3>
                    <span>At Zero Commission</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>Low Margin</h3>
                    <span>On All Commodities</span>
                  </div>
                </div>
              </div>
            )}

            {activeButton === "Commodities" && (
              <div className="productimags">
                <img src={commodities} alt="forexheader" />
              </div>
            )}
            {activeButton === "Digital Assets" && (
              <div className="content-digital-assets">
                <h1>
                  Invest in <span>Digital Assets</span>
                </h1>
                <p>
                  Invest in the most popular cryptocurrencies like Bitcoin, Ethereum, Ripple, etc. with Forex Voyager Limited and take advantage of this volatile market with significant pricing shifts, suitable for experienced traders who have an
                  aggressive trading approach.
                </p>
                <div className="up-and-down-boxes-changer-frth">
                  <div className="up-and-down-box-changer">
                    <h3>{"<20ms"}</h3>
                    <span>Stable and nanosecond execution</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>0%</h3>
                    <span>Commission</span>
                  </div>
                  <div className="up-and-down-box-changer">
                    <h3>UP TO 20:1</h3>
                    <span>Leverage on cryptocurrencies</span>
                  </div>
                </div>
              </div>
            )}
            {activeButton === "Digital Assets" && (
              <div className="productimags">
                <img src={cyrpto} alt="forexheader" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
