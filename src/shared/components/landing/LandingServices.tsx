import { useApi } from "@shared/hooks/useApi";
import { Box, Card, Columns, Container, Heading } from "react-bulma-components";

const LandingServices: React.FC = () => {
  const { getServices, getContents } = useApi();

  const { data, error } = getServices();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Columns m={5}>
      {data.map((item, idx) => {
        return (
          <Columns.Column size={3} key={idx}>
            <Card>
              <Card.Header.Title>{item.title}</Card.Header.Title>
              <Card.Content>
                <Card.Image size={128} src={item.image} />
              </Card.Content>
            </Card>
          </Columns.Column>
        );
      })}
    </Columns>
  );
};

export default LandingServices;
