import Head from "next/head";
import Layout from "../components/navigation/Layout";
import Comingsoon from "../components/comingsoon/Comingsoon";

export default function Competition() {
  return (
    <Layout>
      <Head>
        <title>SWIC | Competition</title>
      </Head>
      <Comingsoon imgUrl="/assets/images/background/comingsoon-competition.png" title="Competition" /> 
    </Layout>
  );
}
