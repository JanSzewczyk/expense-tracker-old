"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

type AppProvidersProps = {
  children: React.ReactNode;
  session: Session | null;
};

export default function AppProviders({ children, session }: AppProvidersProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
