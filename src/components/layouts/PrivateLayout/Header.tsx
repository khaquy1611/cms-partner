import React from "react";
import {
  Layout,
  Avatar,
  Menu,
  Space,
  Dropdown,
  Modal,
  Affix,
  message,
  Row,
  Switch,
} from "antd";
import {
  SettingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useThemeSwitcher } from "react-css-theme-switcher";
import { useLocalStorage } from "@hooks/useLocalStorage";

const { Header } = Layout;

const HeaderAdmin = () => {
  const { switcher, themes } = useThemeSwitcher();
  const [theme, setTheme] = useLocalStorage("theme");
  const handleLogoutAccount = async () => {
    try {
      message.loading("Đang xuất thành công, đang chuyển trang", 10);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const onLogoutAccount = () => {
    Modal.confirm({
      onOk: handleLogoutAccount,
      okText: "Đồng ý",
      okType: "danger",
      title: "Đăng xuất khỏi phiên làm việc",
      content: "Quý khách muốn đăng xuất khỏi phiên làm việc hiện tại?",
      centered: true,
    });
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/">
          <a>
            <SettingOutlined />
            Cá nhân
          </a>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={onLogoutAccount}>
        <LogoutOutlined />
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  const onChange = (checked: boolean) => {
    setTheme(checked ? themes.dark : themes.light);
    switcher({ theme: checked ? themes.dark : themes.light });
  };

  return (
    <Affix offsetTop={0}>
      <Header className={theme === "light" ? "light-header" : ""}>
        <Row justify="end">
          <Space size="large" style={{ marginRight: "8px" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Space>
                <Avatar
                  style={{ backgroundColor: "#87d068", marginRight: 6 }}
                  icon={<UserOutlined />}
                />
              </Space>
            </Dropdown>
          </Space>
          <Space size="large">
            <Switch
              checkedChildren="Dark"
              unCheckedChildren="Light"
              defaultChecked={theme === themes.dark}
              onChange={onChange}
            />
          </Space>
        </Row>
      </Header>
    </Affix>
  );
};

export default HeaderAdmin;
