import { getServerSession } from "next-auth/next";

export default async function () {
  const session = await getServerSession();
  return (
    <>
      <div>dello</div>
      <div>{JSON.stringify(session)}</div>
      <div>dic</div>
    </>
  );
}
