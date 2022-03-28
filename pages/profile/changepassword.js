import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import ChangePass from "../../components/pages/changepassword/ChangePassword";

export default function ChangePassword() {
  return (
    <Layout>
      <Head>
        <title>SWIC | Change Password</title>
      </Head>

      <ChangePass />
    </Layout>
  );
}
