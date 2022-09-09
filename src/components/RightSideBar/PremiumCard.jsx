import React from "react";
import "./premiumcard.css";

function PremiumCard() {
  return (
    <div className="premium-card">
      <div className="p-card">
        <img src="Assets/reddit-premium.webp" alt="" />
        <div style={{ marginLeft: "0.7rem" }}>
          <h1>Reddit Premium</h1>
          <p>The best Reddit Experience, with monthly coins</p>
        </div>
      </div>
      <button className="premium">Try Now</button>
    </div>
  );
}

export default PremiumCard;
