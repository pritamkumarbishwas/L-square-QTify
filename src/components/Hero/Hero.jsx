import React from "react";
import styles from "./Hero.module.css";
function Hero() {
    return (
        <div className={styles.hero}>
            <div>
                <h1>100 Thousand Song, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={require("../../assets/vibrating-headphone.png")} width={112} alt="headphones" />
            </div>
        </div>
    );
}

export default Hero;