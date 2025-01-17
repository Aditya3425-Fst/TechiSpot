import React from "react";
import styles from "./NoteBar.module.css";
import { Link } from "react-router-dom";
export default function NoteBar() {
  return (
    <div className={styles.sidenav}>
      <ul className={styles.sidemenu}>
        <li className={styles.memeItem}>
          <i className="fa-solid fa-list"></i>Menu
        </li>
        <li className={styles.courseItem}>
          <Link to="/notes">
            {" "}
            <i class="fa-brands fa-html5"></i>HTML
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes/css">
            {" "}
            <i class="fa-brands fa-css3"></i>CSS
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            <i class="fa-brands fa-js"> </i>Javascript
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-brands fa-react"></i>react
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            <i class="fa-brands fa-reddit-alien"></i>redux
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-brands fa-java"></i>java
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-d"></i>DSA
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-p"></i>Php
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-c"></i>c
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-duotone fa-c"></i>c#
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-regular fa-c"></i>c++
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-code-branch"></i>gitlab
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-ruble-sign"></i>ruby
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-r"></i>rust
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-duotone fa-g"></i>golang
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-g"></i>go
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes">
            {" "}
            <i class="fa-solid fa-f"></i>flutter
          </Link>
        </li>
        <li className={styles.courseItem}>
          {" "}
          <Link to="/notes"></Link>
        </li>
      </ul>
    </div>
  );
}
