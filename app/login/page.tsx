"use client";

import { signIn, useSession } from "next-auth/react";

type LoginPageProps = {
  searchParams: {
    callbackUrl?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const sesstion = useSession();
  console.log(sesstion);
  return (
    <main className="h-screen flex items-center justify-center">
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: searchParams?.callbackUrl || "/"
          })
        }
      >
        login using Gmail
      </button>
    </main>
  );
}
