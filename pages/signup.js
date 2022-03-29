import Head from "next/head";
import Layout from "../components/navigation/Layout";
import SignUpForm from "../components/pages/signup/Signup";
import Loading from "../components/loading/Loading";
import getProfile from "../services/profile/profile";
import getUsers from "../services/user/user";

export default function SignUp() {
  const profile = getProfile();
  const users = getUsers();
  return !profile.loading && !profile.data && !users.loading && users.user? (
    <Layout>
      <Head>
        <title>SWIC | Sign Up</title>
      </Head>

      <SignUpForm user={users} />
      </Layout>
  ) : 
  (
    <Loading/>
  )
}
