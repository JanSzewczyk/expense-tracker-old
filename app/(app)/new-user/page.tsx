import Link from "next/link";

export default function NewUser() {
  return (
    <main>
      NEW USER
      <p className="typography-heading-5">WELCOME</p>
      <div>
        <Link href="/">Yes, I'm new user</Link>
      </div>
    </main>
  );
}
