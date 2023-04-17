import { getServerSession } from "next-auth";

import { authOptions } from "@api/auth/[...nextauth]/route";

import AppProviders from "@/components/AppProviders";

import "../styles/globals.css";

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
