import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Dashboard from "../../components/pages/admin/Dashboard";

export default function Admin() {
    return (
       <Layout>
            <Head>
                <title>SWIC | Admin Page</title>
            </Head>
            <Dashboard />
       </Layout> 
    )
}