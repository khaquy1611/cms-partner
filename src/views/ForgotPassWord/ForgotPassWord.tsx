import React from "react";
import { Button, Form, Col, Input, Typography } from "antd";
import IntlMessages from "@utils/IntlMessages";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { MailOutlined } from '@ant-design/icons';
const { Link, Title } = Typography;

const ForgotPassWord = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  return (
    <>
      <Col
        md={{ span: 20, push: 5 }}
        xs={{ span: 20, push: 2 }}
        xl={{ span: 24, push: 4 }}
        className="forgotPassWord"
      >
        <Title level={5}>
          <IntlMessages id="title.textForgotPassWord" />
        </Title>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: <IntlMessages id="input.emailValid" />,
              },
              {
                required: true,
                message: <IntlMessages id="input.validateEmail" />,
              },
            ]}
            label={<IntlMessages id="input.email" />}
          >
            <Input
              placeholder={intl.formatMessage({ id: "input.emailPlaceHolder" })}
              suffix={<MailOutlined />}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              <IntlMessages id="button.forgotPassWord" />
            </Button>
          </Form.Item>
          <Form.Item>
            <Link onClick={() => navigate("/multiform/signin")}>
              <IntlMessages id="link.textBackToLogin" />
            </Link>
          </Form.Item>
          <Form.Item>
            <Link onClick={() => navigate("/multiform/signup")}>
              <IntlMessages id="link.textRegisterNew" />
            </Link>
          </Form.Item>
        </Form>
      </Col>
    </>
  );
};

export default ForgotPassWord;
