import { PrismaClient } from "@prisma/client";
import { promises } from "dns";
const prisma = new PrismaClient();

async function createUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

interface updateParams {
  firstName: string;
  lastName: string;
}

async function update(
  username: string,
  { firstName, lastName }: updateParams
): Promise<void> {
  const res = await prisma.user.update({
    where: {
      username,
    },
    data: {
      firstName,
      lastName,
    },
    select: {
      firstName: true,
      password: true,
    },
  });

  console.log(res);
}

update("hello", { firstName: "firstName", lastName: "lastName" });
