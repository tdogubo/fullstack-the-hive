import AdminNavigation from "./Navigation/AdminNavigation";
import { Layout } from "antd";
import SideBar from "./SideBar";
const { Content } = Layout;

const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminNavigation />
      <div>
        <SideBar >
         <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }} className="m-8">
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}              
            </div>
          </Content>
        </Layout>
        </SideBar>
      </div>
    </div>
  );
};

export default AdminLayout;
