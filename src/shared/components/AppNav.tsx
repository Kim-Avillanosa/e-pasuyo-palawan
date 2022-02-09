import Link from "next/link";
import { Heading, Navbar } from "react-bulma-components";

const AppNav = () => {
  return (
    <Navbar color="primary" fixed="top" size="large">
      <Navbar.Container>
        <Navbar.Brand>
          {/* <img
            alt="Bulma: a modern CSS framework based on Flexbox"
            height="28"
            src="/assets/logo.png"
            width="200"
          /> */}
          <Link href="/">
            <Navbar.Item>
              <Heading>E-Pasuyo Palawan</Heading>
            </Navbar.Item>
          </Link>
          <Link href="/contact">
            <Navbar.Item
              desktop={{
                only: true,
                textAlign: "center",
                display: "hidden",
              }}
              widescreen={{ display: "hidden" }}
            >
              Contact us
            </Navbar.Item>
          </Link>
        </Navbar.Brand>
      </Navbar.Container>
    </Navbar>
  );
};

export default AppNav;
