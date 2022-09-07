import AccountInfo from "@components/Profile/AccountInfo";
import IntegratedInfo from "@components/Profile/IntegratedInfo";
import ResetPassWord from "@views/ResetPassWord/ResetPassWord";
import { Card, Tabs } from "antd";
import React from "react";

const { TabPane } = Tabs;

const Profile = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <Card>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Thông tin tài khoản" key="1">
          <AccountInfo />
        </TabPane>
        <TabPane tab="Quản lý mật khẩu" key="2">
          <ResetPassWord />
        </TabPane>
        <TabPane tab="Quản lý thông tin tích hợp" key="3">
          <IntegratedInfo />
        </TabPane>
      </Tabs>
      </Card>
    </>
  );
};

export default Profile;
