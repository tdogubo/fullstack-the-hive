import { Layout, Menu } from "antd";
import { useState } from "react";
import Link from "next/link";

const { Sider } = Layout;

const { SubMenu } = Menu;

const SideBar = ({ children }) => {
  const [collapse, setCollapse] = useState(false);

  const OnCollapse = (collapse) => {
    console.log(collapse);
    setCollapse(collapse);
  };
  return (
        <Layout style={{ minHeight: "100vh"}}
        className="pt-16 w-screen"
      >
      <Sider collapsible collapse={collapse} onCollapse={OnCollapse}>
        <div className="logo"/>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1" title="Articles">
              <Menu.Item key="1">
                <Link href="/admin/new_article">New Article</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link href="#">All Articles</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title="Poems">
              <Menu.Item key="3">
                <Link href="#">Create Poem</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link href="#">All Poems</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title="My Products">
              <Menu.Item key="5">
                <Link href="#">Add New</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link href="#">All Products</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
      </Sider>
      {children}
      </Layout>
    
  );
};

export default SideBar;
