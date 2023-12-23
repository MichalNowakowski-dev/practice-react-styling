import React from 'react';
import Breadcrumb from "../src/components/Breadcrumb";
import { Row, Col, Breadcrumb as RBBreadcrumb } from "react-bootstrap";

const Task03 = () => {
  return (
    <Row>
      <Col>
        <RBBreadcrumb>
          <RBBreadcrumb.Item href="#">Home</RBBreadcrumb.Item>
          <RBBreadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </RBBreadcrumb.Item>
          <RBBreadcrumb.Item active>Data</RBBreadcrumb.Item>
        </RBBreadcrumb>
      </Col>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Library</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Data
          </Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default Task03;

