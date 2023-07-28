import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";

const NavBar = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      //   defaultSelectedKeys={["1"]}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        color: "white",
        backgroundColor: "#404040",
      }}
    >
      <Menu.Item key="1">PC Builder</Menu.Item>
      <Menu.Item key="2">Login</Menu.Item>
    </Menu>
  );
};

function RootLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundColor: "#404040",
        }}
      >
        <h1>PC House</h1>
        <NavBar />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: "0 50px",
        }}
      >
        <div>{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        PC Builder ©2023 Created by Al Mamun Khan.
      </Footer>
    </Layout>
  );
}

export default RootLayout;
