import Head from "next/head";
import Layout from "../components/navigation/Layout";
import LoginForm from "../components/pages/login/Login";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>SWIC | Login</title>
      </Head>

      <LoginForm />
    </Layout>
  );
}