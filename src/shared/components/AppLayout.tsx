import { ReactNode } from "react";
import { Container, Hero } from "react-bulma-components";

import styles from "styles/Home.module.css";
import AppNav from "./AppNav";
interface LayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppNav />
      <Hero>
        <Hero.Body>
          <Container>
            <div className={styles.container}>
              <main className={styles.main}>{children}</main>
            </div>
          </Container>
        </Hero.Body>
        <Hero.Footer>
          
        </Hero.Footer>
      </Hero>
    </>
  );
};

export default AppLayout;
