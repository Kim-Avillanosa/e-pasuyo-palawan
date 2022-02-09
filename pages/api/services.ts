// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Service } from "@shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

const Services: Service[] = [
  {
    title: "Food Delivery",
    description: "We buy from fast food, carenderia, and catering",
    image: "/assets/food.png",
  },
  {
    title: "Groceries",
    description: "We buy your requested commodities",
    image: "/assets/grocery.png",
  },
  {
    title: "Medicine",
    description: "We buy your medical need",
    image: "/assets/medicine.png",
  },
  {
    title: "Bills Payment",
    description: "Paleco, Water District, Etc",
    image: "/assets/bills.png",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Service[]>
) {
  res.status(200).json(Services);
}
