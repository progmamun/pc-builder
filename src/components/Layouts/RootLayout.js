import { Layout } from "antd";
import NavBar from "../UI/Navbar";
const { Header, Content, Footer } = Layout;

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
        PC Builder ©{new Date().getFullYear()} Created by Al Mamun Khan.
      </Footer>
    </Layout>
  );
}

export default RootLayout;
