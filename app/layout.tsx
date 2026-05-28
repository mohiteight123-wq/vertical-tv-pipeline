// FILE 1: app/layout.tsx
export const metadata = {
  title: "Vertical TV Pipeline",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
