// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Contact } from "@shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

const Services: Contact[] = [
  {
    name: "Phone",
    value: "09059415007",
    image: "/assets/food.png",
  },
  {
    name: "Facebook",
    value: "https://web.facebook.com/E-Pasuyo-Palawan-108812421714824",
    image: "/assets/grocery.png",
  },
  {
    name: "Email",
    value: "tanjulius94@gmail.com",
    image: "/assets/medicine.png",
  },
  {
    name: "Location",
    value: "Puerto Princesa City, Palawan",
    image: "/assets/medicine.png",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Contact[]>
) {
  res.status(200).json(Services);
}
