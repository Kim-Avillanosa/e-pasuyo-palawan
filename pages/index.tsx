import AppLayout from "@shared/components/AppLayout";
import AppPage from "@shared/components/AppPage";
import LandingContacts from "@shared/components/landing/LandingContacts";
import LandingHead from "@shared/components/landing/LandingHead";
import LandingServices from "@shared/components/landing/LandingServices";
import { useApi } from "@shared/hooks/useApi";
import type { NextPage } from "next";
import { Columns, Container } from "react-bulma-components";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <AppPage title="E-Pasuyo Palawan">
      <AppLayout>
        <LandingHead />
        <LandingContacts />
        <LandingServices />
      </AppLayout>
    </AppPage>
  );
};

export default Home;
