import { Contact, Content, Service } from "@shared/types";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useApi = () => {
  const getServices = () => {
    const request = useSWR<Service[], any>("/api/services", fetcher);
    return request;
  };
  const getContents = () => {
    const request = useSWR<Content, any>("/api/contents", fetcher);
    return request;
  };

  const getContacts = () => {
    const request = useSWR<Contact[], any>("/api/contacts", fetcher);
    return request;
  };

  return { getServices, getContents, getContacts };
};
