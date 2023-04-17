"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type AppProvidersProps = {
  children: React.ReactNode;
  session: Session | null;
};

export default function AppProviders({ children, session }: AppProvidersProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
