import React, { useEffect, useState } from "react";
import { Menu, Layout, Image, Affix } from "antd";
import {
  DollarCircleOutlined,
  UnorderedListOutlined,
  AppstoreOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useLocalStorage } from './../../../hooks/useLocalStorage';
import { useThemeSwitcher } from 'react-css-theme-switcher';

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { currentTheme } = useThemeSwitcher();
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const pathName = useLocation().pathname;

  useEffect(() => {
    setTheme(currentTheme)
  }, [currentTheme, setTheme])


  return (
    <Affix offsetTop={0}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme={theme}
        breakpoint="lg"
        collapsedWidth={0}
        style={{ height: "100vh" }}
      >
        <div className="text-center" style={{ padding: 24 }}>
          <Image
            width={22}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            preview={false}
            alt="img"
          />
        </div>
        <Menu mode="inline" theme={theme} selectedKeys={[pathName]} defaultOpenKeys={[pathName?.split('/')[1]]}>
          <Menu.Item key="/" icon={<AppstoreOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/transaction" icon={<DollarCircleOutlined />}>
            <Link to="/transaction">Transaction</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Affix>
  );
};

export default SideBar;
