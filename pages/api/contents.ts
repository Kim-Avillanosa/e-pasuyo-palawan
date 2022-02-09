// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Content } from "@shared/types";
import type { NextApiRequest, NextApiResponse } from "next";

const Contents: Content = {
  title: "E-Pasuyo Palawan",
  headline:
    "Learn more about the many different ways we serve your everyday needs.",
  endingMessage: "Para maka iwas sa hassle E-PASUYO mo na",
  operation: "7 am to 6pm",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Content>
) {
  res.status(200).json(Contents);
}
