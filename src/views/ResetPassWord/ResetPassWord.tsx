import React from "react";
import { Button, Form, Col, Input } from "antd";
import IntlMessages from "@utils/IntlMessages";
import { useIntl } from "react-intl";

const ResetPassWord = () => {
  const intl = useIntl();
  return (
    <>
      <Form
        autoComplete="off"
        name="basic"
        initialValues={{ remember: true }}
        layout="vertical"
      >
        <Form.Item
          name="oldPassword"
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.validateOldPassWord" />,
            },
          ]}
          label={<IntlMessages id="input.oldPassWord" />}
        >
          <Input.Password
            placeholder={intl.formatMessage({
              id: "input.validateOldPassWord",
            })}
          />
        </Form.Item>
        <Form.Item
          name="newPassword"
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.validateNewPassWord" />,
            },
          ]}
          label={<IntlMessages id="input.newPassWord" />}
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
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.validateconfirmPassWord" />,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
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
          name="otp"
          rules={[
            {
              required: true,
              message: <IntlMessages id="input.validateOTP" />,
            },
          ]}
          label={<IntlMessages id="input.otpPlaceHolder" />}
        >
          <Input
            placeholder={intl.formatMessage({ id: "input.otpPlaceHolder" })}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            <IntlMessages id="button.changePassWord" />
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default ResetPassWord;
