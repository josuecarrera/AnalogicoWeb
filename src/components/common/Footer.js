import React from "react";
//import { social } from "../data/dummydata";
import ScrollToTopButton from "../ScrollToTopButton";

export const Footer = () => {
  return (
    <>
      <footer>
        <ScrollToTopButton />
        {/* {social.map((item) => (
          <>
            <i data-aos="zoom-in">{item.icon}</i>
          </>
        ))} */}
        <p data-aos="zoom-in">All Right Resceved 2023</p>
      </footer>
    </>
  );
};
