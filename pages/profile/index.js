import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Profiles from "../../components/pages/profile/Profile";
import Loading from "../../components/loading/Loading";
import getProfile from "../../services/profile/profile";

export default function Profile() {
  const profile = getProfile();
  return !profile.loading && profile.data ? (
    <Layout>
      <Head>
        <title>SWIC | Profile</title>
      </Head>

      <Profiles profile={profile} />
    </Layout>
  ) : 
  (
    <Loading/>
  )
}
