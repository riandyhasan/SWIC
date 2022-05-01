import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Dashboard from "../../components/pages/admin/Dashboard";
import Loading from "../../components/loading/Loading";
import getProfile from "../../services/profile/profile";
import getUsers from "../../services/user/user";
import getTeams from "../../services/team/team";
import { Flex, Heading } from "@chakra-ui/react";

export default function Admin() {
    const profile = getProfile();
    const users = getUsers();
    const teams = getTeams();
    return !profile.loading  && !users.loading  && !teams.loading  ? (
       <Layout>
            <Head>
                <title>SWIC | Admin Page</title>
            </Head>
            {profile.profiles.admin == true ?
            <Dashboard profile={profile} users={users.user}  teams={teams.team}/>
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