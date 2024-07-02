import { NextRequest } from "next/server";
import client from "@/db";
export function GET() {
  return Response.json({
    name: "pratham",
    number: "hello",
  });
}

export async function POST(req: NextRequest) {
  console.log(req);
  const body = await req.json();
  console.log(body);

  const res = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(res);

  return Response.json({
    res,
    name: "there you are",
  });
}
