import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";
import Jumbotron from "../components/pages/home/Jumbotron";
import Benefits from "../components/pages/home/Benefits";
import getProfile from "../services/profile/profile";
import Loading from "../components/loading/Loading";
import Sponsor from "../components/pages/home/Sponsor";
import Poster from "../components/pages/home/Poster";

export default function Home() {
  const profile = getProfile();
  return !profile.loading ? (
    <Layout>
      <Head>
        <title>SWIC</title>
      </Head>
      <Box
        w="100%"
        bg="linear-gradient(238.15deg, #EB222A 10.14%, #1C1D60 57.05%)"
        // bgImg="url('/assets/images/background/home.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        pb="3rem"
      >
        <Jumbotron profile={profile} />
        <Benefits />
        <Poster />
        {/* <Sponsor /> */}
      </Box>
    </Layout>
  ) : (
    <Loading/>
  )
}
