import "../styles/globals.css";
import AppProviders from "@/components/AppProviders";
import { authOptions } from "@api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Expense Tracker",
  description: "Application to tracking your expenses",
  icons: "/favicon.ico"
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className="dark">
      <body>
        <AppProviders session={session}>{children}</AppProviders>
      </body>
    </html>
  );
}
