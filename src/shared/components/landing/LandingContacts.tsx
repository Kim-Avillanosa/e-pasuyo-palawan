import { useApi } from "@shared/hooks/useApi";
import {
  Box,
  Button,
  Container,
  Notification,
  Table,
} from "react-bulma-components";

const LandingContacts: React.FC = () => {
  const { getContacts, getContents } = useApi();

  const { data, error } = getContacts();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Container
      mobile={{ display: "hidden" }}
      desktop={{
        only: true,
        display: "flex",
        textAlign: "center",
      }}
      widescreen={{ display: "inline" }}
    >
      <Box color="dark">
        <Notification color="danger">Contact Information</Notification>
        <Table size="fullwidth">
          <tbody>
            {data.map((item, idx) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    <strong>{item.value}</strong>
                  </td>
                  <td>
                    <Button>See more</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default LandingContacts;
