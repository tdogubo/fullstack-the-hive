import React from "react";
import Articles from "../../components/Articles"
import Cards from "../../components/Cards";
import { Row, Col } from "antd";
''
const Admin = () => {
  return (<div className="w-auto h-auto">
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
        <section>
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
  </div>);
};

export default Admin;