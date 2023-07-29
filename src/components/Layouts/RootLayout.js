import { CaretDownOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout, Menu } from "antd";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  const { data: session } = useSession();
  // console.log(session, "session data");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    "CPU / Processor",
    "Motherboard",
    "RAM",
    "Power Supply Unit",
    "Storage Device",
    "Monitor",
    "Others",
  ];

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
      <SubMenu
        key="3"
        title={
          <span>
            <span>Categories</span>
            <CaretDownOutlined />
          </span>
        }
      >
        {categories.map((category, index) => (
          <Menu.Item
            key={index + 10}
            onClick={() => handleCategorySelect(category)}
          >
            <Link
              href={`/category/${encodeURIComponent(category.toLowerCase())}`}
            >
              {category}
            </Link>
          </Menu.Item>
        ))}
      </SubMenu>
      <Link href="/product" style={{ color: "white" }}>
        <Menu.Item key="1">PC Builder</Menu.Item>
      </Link>

      {session?.user ? (
        <>
          <items>
            <Button onClick={() => signOut()}>Log out</Button>
          </items>
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 38,
              lg: 50,
              xl: 80,
              xxl: 100,
            }}
            src={session?.user?.image}
          />
        </>
      ) : (
        <Link style={{ textDecoration: "none", color: "white" }} href="/login">
          <items>Login</items>
        </Link>
      )}
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
        <Link href="/" style={{ color: "white" }}>
          <h1>PC House</h1>
        </Link>
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
