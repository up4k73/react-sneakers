import React from "react";
import styles from "./Overlay.module.scss";

export default function Overlay(props) {
  return <div className={styles.overlay} onClick={props.onOverlay}></div>;
}
