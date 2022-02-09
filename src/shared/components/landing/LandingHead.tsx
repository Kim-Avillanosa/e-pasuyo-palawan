import { useApi } from "@shared/hooks/useApi";
import { Columns, Content, Heading, Image } from "react-bulma-components";

const LandingHead: React.FC = () => {
  const { getServices, getContents } = useApi();

  const { data, error } = getContents();

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Image src="/assets/logo.png" />
      <Heading spaced>{data.endingMessage}</Heading>
      <Heading spaced subtitle>
        {data.headline}
      </Heading>
    </>
  );
};

export default LandingHead;
