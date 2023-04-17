import Logout from "@/components/Logout";
import { authOptions } from "@api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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
