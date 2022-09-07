import IntlMessages from "@utils/IntlMessages";
import { useIntl } from "react-intl";
import {
  Button,
  Form,
  Input,
  Typography,
  Col,
  Space,
  Row,
  Divider,
  Skeleton,
  message,
} from "antd";
import React from "react";
import {
  HomeOutlined,
  CustomerServiceOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getCaptcha, UserLogin } from "@api/auth";
import { ICaptchaRes } from "../../@types/auth";
import {
  ReloadOutlined
} from '@ant-design/icons';


const { Text, Paragraph, Link } = Typography;

const Login = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const {mutate} = useMutation(UserLogin, {
    onError: (error: any) => {
      message.error(error.response.data.message);
    },
    onSuccess: () => {
      navigate("/");
    },
  })

  const { data: resCaptcha, isLoading, refetch, isRefetching } = useQuery<ICaptchaRes>("svg", getCaptcha, {
    refetchOnWindowFocus: false
  });

  const onFinish = (values: any) => {
    mutate({...values, key: resCaptcha?.data.key })
  };

  return (
    <>
      <Col
        xs={{ span: 20, push: 2 }}
        sm={{ span: 20, push: 5 }}
        md={{ span: 20, push: 6 }}
        lg={{ span: 20, push: 6 }}
        xl={{ span: 24, push: 4 }}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
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
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: <IntlMessages id="input.validatePassWord" />,
              },
            ]}
            label={<IntlMessages id="input.passWord" />}
          >
            <Input.Password
              placeholder={intl.formatMessage({
                id: "input.passWordPlaceHolder",
              })}
            />
          </Form.Item>
          {isLoading ? (
            <Skeleton />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <div
              dangerouslySetInnerHTML={{ __html: resCaptcha?.data.captcha }}
              style={{ background: "#fff", display: "inline-block", marginRight: '8px' }}
            />
              <ReloadOutlined onClick={() => refetch()} style={{fontSize: '24px'}} spin={isRefetching} />
            </div>
          )}
          <Form.Item name="captchaCode" label="Nhập captcha" rules={[
              {
                required: true,
                message: "Vui lòng nhập captcha",
              },
            ]}>
            <Input placeholder="Nhập captcha" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              <IntlMessages id="button.signIn" />
            </Button>
          </Form.Item>
          <Form.Item>
            <Link onClick={() => navigate("/forgotPassWord")}>
              {" "}
              <IntlMessages id="forgotPassWord" />{" "}
            </Link>
          </Form.Item>
        </Form>
      </Col>
      <Col lg={24} xl={24} className="middle-content">
        <Space direction="vertical" size="middle">
          <Text strong>Công ty cổ phần AppotaPay</Text>
          <Paragraph>
            <HomeOutlined /> Tòa nhà Appota, Số 11, Ngõ 71, Phố Láng Hạ, Quận Ba
            Đình, TP. Hà Nội, Việt Nam
          </Paragraph>
          <Paragraph>
            <SendOutlined /> biz@appotapay.com
          </Paragraph>
          <Paragraph>
            <CustomerServiceOutlined /> Điện thoại: (+84) 24 3992 1868
          </Paragraph>
        </Space>
        <Row gutter={[6, 0]}>
          <Col xl={6} lg={6}>
            <Space direction="vertical" size="middle">
              <Text strong>Liên Kết</Text>
              <Paragraph>
                <Link>Appota Card</Link>
              </Paragraph>
              <Paragraph>
                <Link>Ví Appota</Link>
              </Paragraph>
            </Space>
          </Col>
          <Col xl={6} lg={6}>
            <Space size="middle">
              <Text strong>Facebook</Text>
              <Text strong>Linkedln</Text>
            </Space>
            <Row gutter={[6, 6]} wrap>
              <Col xs={8} md={8} xl={8} className="icon-social">
                <img src="../image/certificate-logo-1.png" alt="" />
              </Col>
              <Col xs={8} md={8} xl={8} className="icon-social">
                <img src="../image/certificate-logo-2.png" alt="" />
              </Col>
              <Col xs={8} md={8} xl={8} className="icon-social">
                <img src="../image/certificate-logo-4.png" alt="" />
              </Col>
              <Col xs={8} md={8} xl={8} className="icon-social">
                <img src="../image/certificate-logo-3.png" alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider />
        <Paragraph>
          Giấy phép hoạt động cung ứng dịch vụ trung gian thanh toán số:
          74/GP-NHNN do Ngân hàng nhà nước Việt Nam cấp ngày 08/10/2020.
        </Paragraph>
      </Col>
    </>
  );
};

export default Login;
