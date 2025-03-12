import { useState, ReactNode } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import "./mainLayout.css";
import { useNavigate } from "react-router-dom";
import useMainLayoutMenu from "../hooks/useMainLayoutMenu";

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const convertIconsToJSX = useMainLayoutMenu();
  const [collapsed, setCollapsed] = useState(true);

  const routeHandler = (path: string[]) =>
    path[4] ? navigate(`/${path[4]}`) : navigate("");
  //TODO: Need to create theme
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
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
        <Header
          style={{
            padding: 0,
            background: "linear-gradient(to Top, #171826, #0e1119)",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <Content
          style={{
            padding: "16px 68px",
            minHeight: 280,
            background: "linear-gradient(to bottom, #171826, #0e1119)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
