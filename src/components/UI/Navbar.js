import { AlignRightOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Avatar, Button, Menu, Drawer } from "antd";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
const { SubMenu } = Menu;

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { data: session } = useSession();
  // console.log(session, "session data");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    "CPU",
    "Motherboard",
    "RAM",
    "PowerSupply",
    "StorageDevice",
    "Monitor",
    "Others",
  ];

  return (
    <>
      <Button className="mobileMenuIcon" onClick={showDrawer}>
        <AlignRightOutlined />
      </Button>
      <Link href="/" style={{ color: "white" }}>
        <h1>PC House</h1>
      </Link>
      <Menu
        className="pcMenu"
        theme="dark"
        mode="horizontal"
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
          style={{ backgroundColor: "transparent" }}
          title={
            <span>
              <span>Categories</span>
              <CaretDownOutlined />
            </span>
          }
        >
          {categories.map((category, index) => (
            <Menu.Item
              style={{ backgroundColor: "transparent" }}
              key={index + 10}
              onClick={() => handleCategorySelect(category)}
            >
              <Link
                href={`/categories/${encodeURIComponent(
                  category.toLowerCase()
                )}`}
              >
                {category}
              </Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <Link href="/pc-builder" style={{ color: "white" }}>
          <Menu.Item style={{ backgroundColor: "transparent" }} key="1">
            PC Builder
          </Menu.Item>
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
          <Link
            style={{ textDecoration: "none", color: "white" }}
            href="/login"
          >
            <items>Login</items>
          </Link>
        )}
      </Menu>

      <Drawer title="PC House" placement="right" onClose={onClose} open={open}>
        <Menu
          theme="dark"
          mode="vertical"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#404040",
            height: "400px",
          }}
        >
          <SubMenu
            key="3"
            style={{ backgroundColor: "transparent" }}
            title={
              <span>
                <span>Categories</span>
                <CaretDownOutlined />
              </span>
            }
          >
            {categories.map((category, index) => (
              <Menu.Item
                style={{ backgroundColor: "transparent" }}
                key={index + 10}
                onClick={() => handleCategorySelect(category)}
              >
                <Link
                  href={`/categories/${encodeURIComponent(
                    category.toLowerCase()
                  )}`}
                >
                  {category}
                </Link>
              </Menu.Item>
            ))}
          </SubMenu>
          <Link href="/pc-builder" style={{ color: "white" }}>
            <Menu.Item style={{ backgroundColor: "transparent" }} key="1">
              PC Builder
            </Menu.Item>
          </Link>

          {session?.user ? (
            <>
              <Menu.Item>
                <Button onClick={() => signOut()}>Log out</Button>
              </Menu.Item>
              <Avatar
                size={{
                  xs: 24,
                  sm: 32,
                }}
                src={session?.user?.image}
              />
            </>
          ) : (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href="/login"
            >
              <Menu.Item>Login</Menu.Item>
            </Link>
          )}
        </Menu>
      </Drawer>
    </>
  );
};

export default NavBar;
