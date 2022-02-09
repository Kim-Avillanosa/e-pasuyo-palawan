import AppLayout from "@shared/components/AppLayout";
import AppPage from "@shared/components/AppPage";
import LandingContacts from "@shared/components/landing/LandingContacts";
import LandingHead from "@shared/components/landing/LandingHead";
import LandingServices from "@shared/components/landing/LandingServices";
import { useApi } from "@shared/hooks/useApi";
import type { NextPage } from "next";
import { Section, Heading, Container } from "react-bulma-components";

import styles from "../styles/Home.module.css";

const Contact: NextPage = () => {
  const { getContacts, getContents } = useApi();

  const { data, error } = getContacts();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <AppPage title="E-Pasuyo Palawan">
      <AppLayout>
        {data.map((item, idx) => {
          return (
            <Section>
              <Container>
                <Heading>{item.name}</Heading>
                <Heading subtitle>{item.value}</Heading>
              </Container>
            </Section>
          );
        })}
      </AppLayout>
    </AppPage>
  );
};

export default Contact;
