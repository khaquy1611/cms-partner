import React from 'react'
import { useForm } from "antd/lib/form/Form";
import { Form, Input } from 'antd';


const AccountInfo = () => {
    const [form] = useForm()
    return (
        <Form form={form} layout="vertical">
            <Form.Item label="Tên DN/CN" name="name">
                <Input readOnly />
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phone">
                <Input readOnly />
            </Form.Item>
            <Form.Item label="Email" name="email">
                <Input readOnly />
            </Form.Item>
        </Form>
    )
}
export default AccountInfo;