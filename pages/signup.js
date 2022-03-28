import Head from "next/head";
import Layout from "../components/navigation/Layout";
import SignUpForm from "../components/pages/signup/Signup";
import Loading from "../components/loading/Loading";
import getProfile from "../services/profile/profile";

export default function SignUp() {
  const profile = getProfile();
  return profile.loading && !profile.data ? (
    <Layout>
      <Head>
        <title>SWIC | Sign Up</title>
      </Head>

      <SignUpForm />
      </Layout>
  ) : 
  (
    <Loading/>
  )
}
