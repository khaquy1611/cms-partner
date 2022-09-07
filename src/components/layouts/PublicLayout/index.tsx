import React, { ReactNode } from "react";
import { Row, Col, Typography } from "antd";
import Footer from './../PrivateLayout/Footer';
interface IProps {
  children: ReactNode;
}

const PublicLayout = ({ children }: IProps) => {
  return (
    <>
      <Row style={{ overflow: "hidden" }} wrap>
        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}
          md={{ span: 0 }}
          lg={12}
          xl={{ span: 12, push: 0 }}
          className="logo"
        >
          <img src="../image/logo.png" alt="" />
        </Col>
        <Col className="content-right" xs={{ span: 24, push: 0 }} sm={24} md={24} lg={{ span: 12, push: 0 }} xl={{ span: 12, push: 0}}>
          {children}
        </Col>
      </Row>
    </>
  );
};

export default PublicLayout;
