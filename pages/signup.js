import Head from "next/head";
import Layout from "../components/navigation/Layout";
import SignUpForm from "../components/pages/signup/Signup";

export default function SignUp() {
  return (
    <Layout>
      <Head>
        <title>SWIC | Sign Up</title>
      </Head>

      <SignUpForm />
    </Layout>
  );
}
