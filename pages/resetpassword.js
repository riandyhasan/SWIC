import React, {useState, useEffect } from 'react';
import Head from "next/head";
import Layout from "../components/navigation/Layout";
import ResetPasswordForm from "../components/pages/resetpassword/ResetPassword";

export default function ResetPassword() {
    const [isSubmit, setSubmit] = useState(false);
    useEffect(() => {
        setSubmit(isSubmit);
      }, [isSubmit]);
  return (
    <Layout>
      <Head>
        <title>SWIC | Reset Password</title>
      </Head>

      <ResetPasswordForm isSubmit={isSubmit} setSubmit={setSubmit} />
    </Layout>
  );
}