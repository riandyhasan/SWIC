import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/navigation/Layout";
import Dashboard from "../../components/pages/dashboard/Dashboard";
import DashboardRegister from "../../components/pages/dashboard/register/Register";
import Loading from "../../components/loading/Loading";
import getProfile from "../../services/profile/profile";
import getUsers from "../../services/user/user";
import getTeams from "../../services/team/team";

export default function DashboardPage() {
    const profile = getProfile();
    const users = getUsers();
    const teams = getTeams();
    return !profile.loading && profile.data && !users.loading && users.user && !teams.loading && teams.team ? (
        <Layout>
            <Head>
                <title>SWIC | Dashboard</title>
            </Head>
            {profile.profiles.teamID && profile.profiles.teamID != "" ?
            <Dashboard profile={profile} team={teams.team} /> :
            <DashboardRegister user={users.user} team={teams.team} />
        }
        </Layout>
    ) : (
        <Loading/>
    )
}