import Head from "next/head";
import Layout from "../components/navigation/Layout";
import LoginForm from "../components/pages/login/Login";
import Loading from "../components/loading/Loading";
import getProfile from "../services/profile/profile";

export default function Login() {
  const profile = getProfile();
  return !profile.loading && !profile.data ? (
    <Layout>
      <Head>
        <title>SWIC | Login</title>
      </Head>

      <LoginForm />
    </Layout>
  ) : 
  (
    <Loading/>
  )
}
