import { Form, Input } from "antd";
import { useForm } from 'antd/lib/form/Form';


const IntegratedInfo = () => {
    const [form] = useForm()

    return (
        <Form form={form} layout="vertical">
            <Form.Item name="api_key" label="API Key">
                <Input.Password readOnly />
            </Form.Item>
            <Form.Item name="secret_key" label="Secret Key">
                <Input.Password readOnly />
            </Form.Item>
        </Form>
    )
}

export default IntegratedInfo;