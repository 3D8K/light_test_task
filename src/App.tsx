import React from "react";
import diamond from "./img/diamond.png";
import "./style/App.scss";

function App() {
  return (
    <section className="section__form">
      <div className="container">
        <div className="card__inner-wrapper">
          <div className="card">
            <div className="card__inside-wrapper">
              <h3 className="card__header">
                Mint NFT and get money to <br /> your wallet during 1 hour
              </h3>
              <div className="card__image">
                <img src={diamond} alt="diamond" />
              </div>
              <a href="#" className="card__button">
                {" "}
                MINT TICKET 0.059 ETH{" "}
              </a>
              <div className="card__footer-wrapper">
                <div className="card__num-container">
                  <div>8</div>
                  <div>7</div>
                  <div>7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
