export const metadata = {
  title: "Vertical TV Pipeline",
};

export default function RootLayout({ children: { children: React.ReactNode } }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
