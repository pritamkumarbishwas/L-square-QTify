import React, { useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Section({ title, data, type }) {
    const [carouselToggle, setCarouselToggle] = useState(true);

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }

    return (
        <div>
            <div className={styles.header}>
                <h2>{title}</h2>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse All" : "Show All"}
                </h4>
            </div>
            {data.length === 0 ? (
                <CircularProgress />
            ) : (
                <div className={styles.cardWrapper}>
                    {!carouselToggle ? (
                        <div className={styles.wrapper}>
                            {data.map((ele) => (
                                <Card key={ele.id} data={ele} type={type} />
                            ))}
                        </div>
                    ) : (
                        <Carousel data={data} renderComponents={(data) => <Card data={data} type={type} />} />
                    )}
                </div>
            )}
        </div>
    );
}
