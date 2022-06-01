import { Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Dashboard from "../../components/pages/admin/Dashboard";
import Loading from "../../components/loading/Loading";
import getProfile from "../../services/profile/profile";
import getUsers from "../../services/user/user";
import getTeams from "../../services/team/team";

export default function Admin() {
    const profile = getProfile();
    const users = getUsers();
    const teams = getTeams();
    return !profile.loading && profile.data && !users.loading && users.user && !teams.loading && teams.team  ? (
       <Layout>
            <Head>
                <title>SWIC | Admin Page</title>
            </Head>
            {profile && profile.profiles && profile.profiles.admin == true ?
            <Dashboard  users={users.user}  teams={teams.team}/>
                :
                <Flex w="100%" minH="95vh" justifyContent="center" alignItems="center">
                    <Heading size="4xl" color="primary.blue">No Access</Heading>
                </Flex>
            }
       </Layout> 
    ) : (
        <Loading/>
    )
}