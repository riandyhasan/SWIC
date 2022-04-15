import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/navigation/Layout";
import LoginForm from "../components/pages/login/Login";
import Loading from "../components/loading/Loading";
import getProfile from "../services/profile/profile";
import getUsers from "../services/user/user";

export default function Login() {
  const router = useRouter();
  const profile = getProfile();
  const users = getUsers();

  // useEffect(() => {
  //   if(!profile.loading && profile){
  //     if(profile.data){
  //       if(profile.profiles.username == "" || profile.profiles.username == "" || profile.profiles.username == ""){
  //         router.push("/profile/edit")
  //       }else{
  //         router.push("/profile")
  //       }
  //     }
  //   }
  // }, []);

  return !profile.loading && !profile.data && !users.loading && users.user ? (
    <Layout>
      <Head>
        <title>SWIC | Login</title>
      </Head>

      <LoginForm users={users.user} />
    </Layout>
  ) : 
  (
    <Loading/>
  )
}
