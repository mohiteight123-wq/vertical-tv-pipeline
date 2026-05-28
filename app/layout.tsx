import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vertical TV Pipeline",
  description: "Micro Drama Script Analysis Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
