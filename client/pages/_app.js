import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import AdminLayout from "../components/AdminLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {router.pathname.includes("/admin") ? (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
