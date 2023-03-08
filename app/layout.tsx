import "../styles/globals.css";

export const metadata = {
  title: "Expense Tracker",
  description: "Application to tracking your expenses",
  icons: "/favicon.ico"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
