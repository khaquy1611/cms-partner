import React, { useState, useEffect } from "react";
import { Tabs, Col } from "antd";
import Register from "@views/Register/Register";
import Login from "@views/Login/Login";
import IntlMessages from "@utils/IntlMessages";
import { useParams, useNavigate } from 'react-router-dom';

const MultiStepForm = () => { 
  const navigate = useNavigate();
  const [tabs, setTabs] = useState<string | undefined>("signup");
  const { page } = useParams();
  const onChangeTab = (key: string) => {
       setTabs(key);
       navigate(`/${key}`);
  }
  useEffect(() => {
    if (page && (page === "signin" || page === "signup")) {
      setTabs(page);
    }
  },[navigate, page])
  return (
    <>
      {/* <Row align="middle">
        <Col
          xs={{ span: 6, push: 2 }}
          sm={6}
          md={3}
          lg={{ span: 4, push: 2 }}
          xl={{ span: 2, push: 2 }}
        >
          <Text strong><IntlMessages id="language" />:</Text>
        </Col>
        <Col
          xs={{ span: 4, push: 2 }}
          sm={6}
          md={2}
          lg={{ span: 4, push: 2 }}
          xl={{ span: 4, push: 2 }}
        >
          <Space size="small">
            <Link>
              <img src="../image/vi-lang.png" alt="" />
            </Link>
            <Link>
              <img src="../image/en-lang.png" alt="" />
            </Link>
          </Space>
        </Col>
      </Row> */}
      <Col xs={{ push: 2 }} sm={{ push: 5 }} md={{ push: 6 }} lg={{ push: 6 }} xl={{ push: 4 }}>
      <Tabs defaultActiveKey={page} activeKey={tabs} onChange={onChangeTab}>
        <Tabs.TabPane tab={<IntlMessages id="button.signIn" />} key="signin" />
        <Tabs.TabPane tab={<IntlMessages id="button.signUp" />} key="signup" />
      </Tabs>
      </Col>
      {tabs === "signup" ? <Register /> : <Login />   }
    </>
  );
};

export default MultiStepForm;
