import { getServerSession } from "next-auth";

import { authOptions } from "@api/auth/[...nextauth]/route";

import Logout from "@/components/Logout";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      DASHBOARD
      <pre>{JSON.stringify(session, undefined, 2)}</pre>
      <div>
        <Logout />
      </div>
    </main>
  );
}
