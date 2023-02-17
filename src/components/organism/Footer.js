import React from "react";
import styles from "@/styles/components/Footer.module.scss";
import blanja from "public/images/blanja-logo.svg";

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        <div class="container text-center">
          <div class="row align-items-center">
            <div class="col-2">
              <img src={blanja.src} />
            </div>
            <div class="col-8 offset-1">
              <button className={`btn ${styles.text}`}>About</button>
              <button className={`btn ${styles.text}`}>
                Terms & Condition
              </button>
              <button className={`btn ${styles.text}`}>Privacy</button>
              <button className={`btn ${styles.text}`}>Career</button>
              <button className={`btn ${styles.text}`}>Blanja Care</button>
              <button className={`btn ${styles.text}`}>Blog</button>
              <button className={`btn ${styles.text}`}>Official Store</button>
            </div>
          </div>
          <hr />
          <div class="row align-items-center">
            <div class="col">
              <h3>Created By</h3>
            </div>
          </div>
          <div className="row">
            <div class="col-3">
              <h3>M Restu Alviando</h3>
            </div>
            <div class="col-3">
              <h3>Riyadh R Albar</h3>
            </div>
            <div class="col-3">
              <h3>Khaidar Ali</h3>
            </div>
            <div class="col-3">
              <h3>Rahmad Nur H</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
