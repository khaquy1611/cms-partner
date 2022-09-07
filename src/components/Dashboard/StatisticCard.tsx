import React from 'react'
import {
    UserOutlined
  } from "@ant-design/icons";
  import { Card, Col, Row, Statistic } from 'antd'

const StatisticCard = () => {
    return (
        <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={8} >
                <Card bordered={false}>
                <Statistic
                title="Partners"
                value={10000}
                prefix={<UserOutlined />}
            />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={8} >
                <Card bordered={false}>
                <Statistic
                title="Partners"
                value={10000}
                prefix={<UserOutlined />}
            />
                </Card>
            </Col>
            <Col xs={24} sm={24} md={8} >
                <Card bordered={false}>
                <Statistic
                title="Partners"
                value={10000}
                prefix={<UserOutlined />}
            />
                </Card>
            </Col>
        </Row>
    )
}

export default StatisticCard