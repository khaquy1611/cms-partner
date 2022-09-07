import { PATH } from "@utils/constants/path";
import { ConfigProvider, Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { ReactNode, useEffect } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

interface IProps {
  children: ReactNode;
}

const PrivateLayout = ({ children }: IProps) => {
  const { currentTheme } = useThemeSwitcher();

  return (
    <ConfigProvider>
      <Layout
        hasSider
        style={{
          minHeight: "100vh",
        }}
      >
        <SideBar />
        <Layout style={currentTheme === "dark" ? { background: "black" } : {}}>
          <Header />
          <Content>
            <div style={{ padding: 24, minHeight: "81vh", paddingTop: 48 }}>{children}</div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default PrivateLayout;
