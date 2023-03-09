import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth";

export default async function NewUser() {
  // const session = await getSession();
  const session = await getServerSession();
  console.log(session);
  return <main>NEW USER</main>;
}
