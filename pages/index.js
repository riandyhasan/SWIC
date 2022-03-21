import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Layout from "../components/navigation/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>SWIC</title>
      </Head>

      <Flex
        justify="center"
        align="center"
        w="100%"
        minH="100vh"
        fontSize="5em"
        direction="column"
      >
        Toriq Ganteng
      </Flex>
    </Layout>
  );
}