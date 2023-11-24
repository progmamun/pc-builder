import { Layout } from "antd";
import NavBar from "../UI/Navbar";
const { Header, Content, Footer } = Layout;

const navContainer = {
  width: "100%",
  color: "white",
  backgroundColor: "#404040",
};

function RootLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div style={navContainer}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            color: "white",
            backgroundColor: "#404040",
          }}
        >
          <NavBar />
        </Header>
      </div>
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
