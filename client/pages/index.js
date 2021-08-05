import Head from "next/head";

import React from "react";
import Articles from "../components/Articles";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";
import { Row, Col } from "antd";

export default function Article() {
  const [scrolled, setScrolled] = useState(false);

  const handleHomeScroll = () => {
    const offset = window.scrollY;
    if (offset) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleHomeScroll);
    return () => {
      window.removeEventListener("scroll", handleHomeScroll);
    };
  }, []);
  return (
    <div className="bg-white dark:bg-gray-800" id="container">
      <div
        className={`welcome relative w-full ${
          scrolled ? "filter" + " " + "blur" : ""
        }`}
      >
        <section>
          <h1 className="flex header justify-center text-center content-center text-6xl text-gray-300 pt-64">
            WELCOME
          </h1>
        </section>
      </div>
      <div className="p-4">
        <section className="p-4">
          <div className="flex justify-start pt-4">
            <header className="header">
              <a href="#poems">Poems</a>
            </header>
          </div>
          <div
            className="flex justify-start p-16 h-auto max-w-full w-screen"
            id="poems"
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col>
                <Cards />
              </Col>
              <Col>
                <Cards />
              </Col>
              <Col>
                <Cards />
              </Col>
            </Row>
          </div>
        </section>
        <section className="p-4 w-auto">
          <div className="w-full">
            <header>Articles</header>
            <Row gutter={16} wrap={false} md={2}>
              <Col>
                <Articles />
              </Col>
              <Col>
                <Articles />
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </div>
  );
}
