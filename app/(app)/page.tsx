import Link from "next/link";
import { Avatar, Button } from "@szum-tech/design-system/components";

export default function Home() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="px-8 text-center">
        <h1 className="typography-heading-2">Expense Tracker</h1>
        <p className="mt-8 typography-heading-5 text-typography-secondary">Let&apos;s</p>
        <p className="typography-heading-4">Track &apos;Em ALL</p>
        <p className="mt-10 typography-subtitle-1 text-typography-disabled ">App IN PROGRESS ...</p>

        <Button variant="outlined">click</Button>

        <Avatar>JA</Avatar>

        <Link href="/dashboard">dashboard</Link>
      </div>
    </main>
  );
}
