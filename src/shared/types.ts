export type Service = {
  title: string;
  description?: string;
  image?: string;
};

export type Content = {
  title: string;
  headline: string;
  endingMessage: string;
  operation: string;
};

export type Contact = {
  name: string;
  value: string;
  prefix?: string;
  image: string;
};
