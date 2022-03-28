import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import EditProfiles from "../../components/pages/editprofile/EditProfile";
import Loading from "../../components/loading/Loading";
import getProfile from "../../services/profile/profile";

export default function EditProfile() {
  const profile = getProfile();
  return !profile.loading && profile.data ? (
    <Layout>
      <Head>
        <title>SWIC | Edit Profile</title>
      </Head>

      <EditProfiles profile={profile} />
    </Layout>
  ) : 
  (
    <Loading/>
  )
}
