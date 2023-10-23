import React, { useState } from "react";
import { Menu, Layout, Image, ConfigProvider, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { scroller } from "react-scroll";
// import { navMenuItems } from "../utils";
import Logo from "../assets/images/logo.svg";

const { Header } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [activeMenu, setActiveMenu] = useState("home");
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      smooth: "easeInOutQuint",
      offset: 64,
    });
    setActiveMenu(sectionId);
    if (isMobile) {
      setCollapsed(true);
    }
  };

  // set menu items
  // ConfigProvider used to configure/change antd component theme/globals
  const menuItems = (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemBg: "#000",
            darkItemColor: "#fff",
            darkItemHoverBg: "#1677ff75",
            horizontalItemHoverBg: "#1677ff75",
          },
        },
      }}
    >
      <Menu
        mode={isMobile ? "vertical" : "horizontal"}
        className="w-full"
        theme="dark"
        selectedKeys={activeMenu}
      >
        {/* {navMenuItems.map(({ id, name }) => (
          <Menu.Item key={id} onClick={() => scrollToSection(id)}>
            {name}
          </Menu.Item>
        ))} */}
        <Menu.Item key="features" onClick={() => scrollToSection("features")}>
          Features
        </Menu.Item>
        <Menu.Item key="pricing" onClick={() => scrollToSection("pricing")}>
          Pricing
        </Menu.Item>

        <Menu.Item key="about" onClick={() => scrollToSection("about")}>
          About
        </Menu.Item>
        <Menu.Item key="blog" onClick={() => scrollToSection("blog")}>
          Blog
        </Menu.Item>
        <Menu.Item key="events" onClick={() => scrollToSection("events")}>
          Events
        </Menu.Item>
        {isMobile && (
          <Menu.Item key="login" onClick={() => scrollToSection("login")}>
            Login
          </Menu.Item>
        )}
      </Menu>
    </ConfigProvider>
  );

  return (
    <Header className="fixed t-0 w-full z-50 bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Image preview={false} src={Logo} alt="logo" />

          {isMobile ? (
            <div className="text-white">
              <MenuOutlined onClick={toggleCollapsed} />
            </div>
          ) : (
            <>
              <div className="hidden md:block">{menuItems}</div>
              <div className="hidden md:block md:flex md:items-center md:gap-6">
                <Button type="text" shape="round" className="text-white p-0">
                  Support
                </Button>
                <Button type="text" shape="round" className="text-white p-0">
                  Login
                </Button>
                <Button type="primary" shape="round" className="text-white">
                  Demo
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {isMobile && !collapsed && <div className="shadow-md">{menuItems}</div>}
    </Header>
  );
};

export default Navbar;
