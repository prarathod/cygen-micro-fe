import { useState, ReactNode } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import "./mainLayout.css";
import { useNavigate } from "react-router-dom";
import useMainLayoutMenu from "../hooks/useMainLayoutMenu";

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const convertIconsToJSX = useMainLayoutMenu(); 
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const routeHandler = (path: string[]) =>
    path[4] ? navigate(`/${path[4]}`) : navigate("");

  return (
    <Layout style={{ minHeight: "100vh" }} className="dark">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical h-22 flex items-center justify-center text-">
          <img
            src="./icons/Cygeniq-dark-icon.svg"
            alt="logo"
            height={52}
            width={52}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
          className="items"
          onClick={(item) => routeHandler(item.key.trim().split("_"))}
          items={convertIconsToJSX || []}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
