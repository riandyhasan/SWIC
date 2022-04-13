import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../components/navigation/Layout";
import Profiles from "../../components/pages/profile/Profile";
import Loading from "../../components/loading/Loading";
import getProfile from "../../services/profile/profile";

export default function Profile() {
  const router = useRouter();
  const profile = getProfile();

  // useEffect(() => {
  //     if(profile.data){
  //       if(profile.profiles.username == "" || profile.profiles.username == "" || profile.profiles.username == ""){
  //         router.push("/profile/edit")
  //       }
  //     }else{
  //       router.push("/login")
  //   }
  // }, []);

  return !profile.loading && profile ? (
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
