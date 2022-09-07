import React, { useState } from "react";
import { Button, Form, Input, Select, Checkbox, Typography, Col, message, Skeleton } from "antd";
import IntlMessages from "@utils/IntlMessages";
import { useIntl } from "react-intl";
import ModalTerm from "@components/ModalTerm/ModalTerm";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getCaptcha, UserRegister } from "@api/auth";
import { ICaptchaRes } from "../../@types/auth";
import {
  ReloadOutlined
} from '@ant-design/icons';

const { Option } = Select;
const { Link } = Typography;

const Register = () => {
  const [isModalVisibleTerm, setIsModalVisibleTerm] = useState<boolean>(false);
  const intl = useIntl();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {mutate} = useMutation(UserRegister, {
    onError: (error: any) => {
      message.error(error.response.data.message);
    },
    onSuccess: () => {
      navigate("/signin");
    },
  })

  const { data: resCaptcha, isLoading, refetch, isRefetching } = useQuery<ICaptchaRes>("svg", getCaptcha, {
    refetchOnWindowFocus: false
  });
  
  const onFinish = (values: any) => {
    delete values.confirm;
    delete values.remember;
    mutate({...values, key: resCaptcha?.data.key })
    message.success("Đăng Ký Tài Khoản Thành Công");
    form.resetFields();
  };
  const showModal = () => {
    setIsModalVisibleTerm(true);
  };

  const handleCancel = () => {
    setIsModalVisibleTerm(false);
  };
  return (
    <Col
      xs={{ span: 20, push: 2 }}
      sm={{ span: 20, push: 5 }}
      md={{ span: 20, push: 6 }}
      lg={{ span: 20, push: 6 }}
      xl={{ span: 24, push: 4 }}
    >
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        form={form}
        autoComplete="off"
        size="large"
        onFinish={onFinish}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          name="email"
          label={<IntlMessages id="input.email" />}
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
        >
          <Input
            placeholder={intl.formatMessage({ id: "input.emailPlaceHolder" })}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<IntlMessages id="input.passWord" />}
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.validatePassWord" />,
            },
          ]}
        >
          <Input.Password
            placeholder={intl.formatMessage({
              id: "input.passWordPlaceHolder",
            })}
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label={<IntlMessages id="input.confirmPassWord" />}
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.validateconfirmPassWord" />,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    intl.formatMessage({ id: "input.errorconfirmPassWord" })
                  )
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder={intl.formatMessage({
              id: "input.confirmPassWordPlaceHolder",
            })}
          />
        </Form.Item>
        <Form.Item
          name="business"
          label={<IntlMessages id="input.companyName" />}
        >
          <Input.Group compact>
            <Form.Item
              name="partner_type"
              noStyle
              rules={[
                {
                  required: true,
                  message: <IntlMessages id="input.selectTypeValidate" />,
                },
              ]}
            >
              <Select
                placeholder="Chọn Loại Hình"
                style={{
                  width: "40%",
                }}
                defaultValue="INDIVIDUAL"
                allowClear
              >
                <Option value="INDIVIDUAL">{<IntlMessages id="company" />}</Option>
                <Option value="ENTERPRISE">
                  {<IntlMessages id="personal" />}
                </Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="partner_name"
              noStyle
              rules={[
                {
                  required: true,
                  message: <IntlMessages id="input.validateCompany" />,
                },
              ]}
            >
              <Input
                style={{
                  width: "60%",
                }}
                placeholder={intl.formatMessage({
                  id: "input.companyNamePlaceHoder",
                })}
              />
            </Form.Item>
          </Input.Group>
        </Form.Item>
        <Form.Item
          name="phone"
          label={<IntlMessages id="input.phone" />}
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.validatePhone" />,
            },
          ]}
        >
          <Input
            placeholder={intl.formatMessage({ id: "input.phonePlaceHolder" })}
          />
        </Form.Item>
        <Form.Item name="imageCaptcha">
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
        </Form.Item>
        <Form.Item
          name="captchaCode"
          label={<IntlMessages id="input.captcha" />}
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.captchaValidate" />,
            },
          ]}
        >
          <Input
            placeholder={intl.formatMessage({ id: "input.captchaPlaceHoder" })}
          />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <IntlMessages id="checkbox.term" />
            <Link onClick={showModal}> điều khoản của appota pay. </Link>
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" block size="large" htmlType="submit">
            <IntlMessages id="button.signUp" />
          </Button>
        </Form.Item>
        <ModalTerm
          isModalVisibleTerm={isModalVisibleTerm}
          handleCancel={handleCancel}
        />
      </Form>
    </Col>
  );
};

export default Register;
